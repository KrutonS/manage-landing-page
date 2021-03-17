import {useState} from 'react';
export default function TextForm(props) {
  function handleSubmit(event) {
    alert("wysłano: " + text);
    event.preventDefault();
  }
  const [text, setText] = useState("");
  return (
    <form className="text-form" method="get" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={props.placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="submit"
        className="btn round orange"
        value={props.btnValue}
      />
    </form>
  );
}