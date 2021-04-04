import "./opinions.css";

import Slideshow from "../../common/slideshow/slideshow";
import { OPINIONS, AVATARS } from "../../globals";
import { forwardRef, useRef } from "react";

const Opinion = forwardRef((props, ref) => {
	return (
		<div className={props.className} id={props.id} ref={ref}>
			<img className='avatar' src={props.avatar} alt='avatar' />
			<h3>{props.fullName}</h3>
			<blockquote>{props.children}</blockquote>
		</div>
	);
});
export default function Opinions(props) {
	const opinionRef = useRef();
	return (
		<section className='opinions'>
			<h2>What they’ve said</h2>
			<Slideshow slideRef={opinionRef}>
				{OPINIONS &&
					OPINIONS.map(op => {
						const fullName = op.firstName + " " + op.secondName;
						return (
							<Opinion
								fullName={fullName}
								key={fullName}
								avatar={AVATARS[op.firstName.toLowerCase()]}
								className='opinions-item dialog'
								ref={opinionRef}
							>
								{op.text}
							</Opinion>
						);
					})}
			</Slideshow>
		</section>
	);
}
