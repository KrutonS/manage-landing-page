import React, {useState} from 'react';
export default 
function Slideshow(props) {
  function getNotNegative(value, n) {
    while (value < 0) value += n;
    return value;
  }
  const count = React.Children.count(props.children);
  const [current, setCurrent] = useState(0);
  const disabled = count < 2;
  return (
    <section className="slideshow">
      {props.children}
      <button
        disabled={disabled}
        className="slideshow-button"
        onClick={() => setCurrent(getNotNegative((current - 1) % count))}
      >
        {'\u276e'}
      </button>{" "}
      {/*left*/}
      <button
        disabled={disabled}
        className="slideshow-button"
        onClick={() => setCurrent((current + 1) % count)}
      >
        {'\u276f'}
      </button>{" "}
      {/*right*/}
    </section>
  );
}