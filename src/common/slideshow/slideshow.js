import React, {useState} from 'react';
import classNames from 'classnames';
export default 
function Slideshow(props) {
  const count = React.Children.count(props.children);
  console.log(`Slideshow children count: ${count}\nChildren: ${props.children}\nChild at 0: ${props.children[0]}`);
  const [current, setCurrent] = useState(0);
  let dots = [];
  for(let i=0;i<count;i++)
  dots.push(<span className={classNames('slideshow-dot', {'active':current===i})} key={i} onClick={()=>setCurrent(i)}></span>);
  // function getNotNegative(value, n) {
  //   while (value < 0) value += n;
  //   return value;
  // }
  // const disabled = count < 2;
  // <button
  //       disabled={disabled}
  //       className="slideshow-button"
  //       onClick={() => setCurrent(getNotNegative((current - 1) % count))}
  //     >
  //       {'\u276e'}
  //     </button>{" "}
  //     {/*left*/}
  //     <button
  //       disabled={disabled}
  //       className="slideshow-button"
  //       onClick={() => setCurrent((current + 1) % count)}
  //     >
  //       {'\u276f'}
  //     </button>
  //     {/*right*/}
  return (
    <section className="slideshow">
      {props.children}
      <div className='slideshow-dots-container'>
        {dots}
      </div>
    </section>
  );
}