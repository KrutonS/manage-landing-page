import "./slideshow.css";

import React, { useContext, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { MobileScreenContext } from "../../globals";
// console.log(MobileScreenContext);
export default function Slideshow(props) {
  function addProps(node, addProps) {
    let props = { ...node.props };
    for (let key of Object.keys(addProps)) {
      if (props.hasOwnProperty(key))
        props[key] = `${props[key]} ${addProps[key]}`;
      else props[key] = addProps[key];
    }
    return React.cloneElement(node, props);
  }

  function handleSetIndex(target) {
    if (target < index) setOverflow(true);
    if (target >= childrenCount) target-=childrenCount;
    // else if (target > index) setIndex(target);
    setIndex(target);
  }
  const [index, setIndex] = useState(0);
  const [overflow, setOverflow] = useState(false);
  const children = React.Children.map(props.children, (child, i) =>
    addProps(child, {
      className: classNames("slideshow-item", { active: i === index }),
    })
  );
  const childrenCount = React.Children.count(children);
  const items = React.Children.map(
    [children[childrenCount - 1], ...children, ...children, children[0]],
    (child, i) => addProps(child, { key: i })
  );
  const dots = new Array(childrenCount)
    .fill().map((_, i) => (
      <span
        className={classNames("slideshow-dot", { active: i === index })}
        key={i}
        onClick={() => handleSetIndex(i)}
      ></span>
    ));
  const isMobile = useContext(MobileScreenContext);
  console.log({isMobile});
  const containerRef = useRef();
  const [slideData, setSlideData] = useState({ width: 0, gap: 0 });
  if (index >= childrenCount) setOverflow(true);

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

  useEffect(() => {
    setSlideData({
      width: (props.slideRef.current.clientWidth),
      gap: parseInt(window.getComputedStyle(containerRef.current).getPropertyValue("column-gap"))
    });
  }, [props.slideRef, isMobile]);
  
  const {width, gap} = slideData;
  const offset = overflow ? childrenCount : 0;
  const translate = isMobile
    ?  -width - (width + gap) * (index + offset)
    : -width / 2 - (width + gap) * (index + offset);
    console.log(slideData);
  const style = { transform: `translateX(${translate}px)` };
  return (
    <section className='slideshow'>
      <div className='slideshow-mask'>
        <div className='slideshow-container' style={style} ref={containerRef}>
          {items}
        </div>
      </div>
      <div className='slideshow-dots-container'>{dots}</div>
    </section>
  );
}
