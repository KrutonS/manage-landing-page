import classNames from 'classnames';
export function Button(props) {
  const { inverted = false, shadow = false } = props;
  return (
    <a
      href={props.href}
      className={classNames('btn',{shadow, inverted})}
    >
      {props.children}
    </a>
  );
}
export function GetStartedBtn(props){
  const { inverted = false } = props;
  return <Button href="#details" inverted={inverted} shadow={true}>Get Started</Button>
}