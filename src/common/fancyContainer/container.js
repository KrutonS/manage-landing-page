export default function FancyContainer(props){
  return (
    <div className="fancy-container">
      {props.children}
    </div>
  );
}