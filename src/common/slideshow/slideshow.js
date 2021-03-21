import "./slideshow.css";

import React, { useState } from "react";
import classNames from "classnames";

export default function Slideshow(props) {
  const count = React.Children.count(props.children);
  console.log(
    `Slideshow children count: ${count}\nChildren: ${props.children}\nChild at 0: ${props.children[0]}`
  );
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
    function addClass(child, className){
      
    }
  return (
    <section className="slideshow">
      {props.children}
      <div className="slideshow-dots-container">{dots}</div>
    </section>
  );
}
