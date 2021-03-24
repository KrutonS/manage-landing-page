import "./slideshow.css";

import React, { useState } from "react";
import classNames from "classnames";

export default function Slideshow(props) {
  function addClass(node, className) {
    const props = { className: classNames(node.props.className, className) };
    return React.cloneElement(node, props);
  }

  const count = React.Children.count(props.children);
  const [current, setCurrent] = useState(0);
  let dots = [];
  for (let i = 0; i < count; i++)
    dots.push(
      <span
        className={classNames("slideshow-dot", { active: current === i })}
        key={i}
        onClick={() => setCurrent(i)}
      ></span>
    );
  return (
    <section className="slideshow">
      <div className="slideshow-container">
        {React.Children.map(props.children, (child, i) => addClass(child, classNames('slideshow-item', { active: i === current })))}
      </div>
      <div className="slideshow-dots-container">{dots}</div>
    </section>
  );
}
