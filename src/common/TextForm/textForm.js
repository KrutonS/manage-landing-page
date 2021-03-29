import "./textForm.css";
import "../buttons/buttons.css"
import { useState } from "react";

export default function TextForm(props) {
  function handleSubmit(event) {
    alert("wysłano: " + text);
    event.preventDefault();
  }
  const [text, setText] = useState("");
  return (
    <form className='text-form' method='get' onSubmit={handleSubmit}>
      <input
        className='round input'
        required
        type='email'
        title={props.placeholder}
        placeholder={props.placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        className='btn round orange'
        type='submit'
        title={props.btnValue}
        value={props.btnValue}
      />
    </form>
  );
}
