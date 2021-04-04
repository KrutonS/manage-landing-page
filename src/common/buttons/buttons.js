import "./buttons.css";
import classNames from "classnames";

export function ButtonLink(props) {
	const { inverted = false, shadow = true } = props;
	return (
		<a href={props.href} className={classNames("btn", { shadow, inverted }, "round")}>
			{props.children}
		</a>
	);
}
export function GetStartedBtn(props) {
	const { inverted = false } = props;
	return (
		<ButtonLink href='#details' inverted={inverted} shadow>
			Get Started
		</ButtonLink>
	);
}
