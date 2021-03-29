import "./slideshow.css";

import React, { useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { MobileScreenContext } from "../../globals";
import {addProps} from '../../globals';
export default function Slideshow(props) {
  // well this concatenates props of a node
  
  // use this handler instead of setIndex
  function handleSetIndex(target) {
    if (target < index || target >= childrenCount) {
      setOverflow(true);
      if (target >= childrenCount) target -= childrenCount;
    }
    setIndex(target);
  }
  // get repeated children and count
  function generateChildren() {
    const children = React.Children.map(props.children, (child, i) =>
      addProps(child, {
        className: classNames("slideshow-item", { active: i === index })
      })
    );
    const childrenCount = React.Children.count(children);
    const items = React.Children.map(
      [children[childrenCount - 1], ...children, ...children, children[0]],
      (child, i) => addProps(child, { key: i })
    );
    return {children:items, childrenCount};
  }
  // it says what screen are you using (mobile, desktop)
  const isMobile = useContext(MobileScreenContext);
  
  //***  STATE ****//
  const [index, setIndex] = useState(0);
  const [overflow, setOverflow] = useState(false);
  const [slideData, setSlideData] = useState({ width: 0, gap: 0 });
  
  //*** nodes ***//
  const {children, childrenCount} = generateChildren();
  const dots = new Array(childrenCount)
    .fill().map((_, i) => (
      <span
        className={classNames("slideshow-dot", { active: i === index })}
        key={i}
        onClick={() => handleSetIndex(i)}
      ></span>
    ));
  const containerRef = useRef();
  //***  EFFECTS ***//
  
  // disable and reset transition for overflow
  useEffect(() => {
    const container = containerRef.current;
    container.style.transition = null;

    function handleTransitionEnd() {
      if (overflow) {
        container.style.transition = "none";
        setOverflow(false);
      }
    }

    container.addEventListener("transitionend", handleTransitionEnd);
    return () =>
      container.removeEventListener("transitionend", handleTransitionEnd);
  }, [overflow]);

  // get and update width and gap
  useEffect(() => {
    setSlideData({
      width: props.slideRef.current.clientWidth,
      gap: parseInt(
        window
          .getComputedStyle(containerRef.current)
          .getPropertyValue("column-gap")
      ),
    });
  }, [props.slideRef, isMobile]);
  
  // autoplay
  useEffect(() => {
    function autoPlay() {
      handleSetIndex(index + 1);
      console.log("next");
    }
    const autoPlayTimer = setTimeout(autoPlay, 5000);
    return () => clearTimeout(autoPlayTimer);
    // I dont plan on changing the function so
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const { width, gap } = slideData;
  const offset = overflow ? childrenCount : 0;
  const translate = isMobile
    ? -width -gap/4  - (width + gap) * (index + offset)
    : -width / 2 - (width + gap) * (index + offset);
  const style = { transform: `translateX(${translate}px)` };

  return (
    <section className='slideshow'>
      <div className='slideshow-mask'>
        <div className='slideshow-container' style={style} ref={containerRef}>
          {children}
        </div>
      </div>
      {isMobile && <div className='slideshow-dots-container'>{dots}</div>}
    </section>
  );
}
