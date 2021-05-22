import './slideshow.css';

import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { addProps } from '../../globals';

export default function Slideshow(props) {
	// use this handler instead of setIndex
	function handleSetIndex(target) {
		if (target < index || target >= childrenCount) {
			setOverflow(true);
			if (target >= childrenCount) target -= childrenCount;
		}
		setIndex(target);
	}
	// get repeated children and count
	function generateChildren() {
		if (props.children === undefined) {
			console.warn('no slideshow children');
			return [];
		}
		const children = React.Children.map(props.children, (child, i) =>
			addProps(child, {
				className: classNames('slideshow-item', { active: i === index })
			})
		);
		const childrenCount = React.Children.count(children);
		const items = React.Children.map(
			[children[childrenCount - 1], ...children, ...children, children[0]],
			(child, i) => addProps(child, { key: i })
		);
		return { children: items, childrenCount };
	}
	// use function less often
	function debounce(fn, ms) {
		let timeout;
		return () => {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				timeout = null;
				fn();
			}, ms);
		};
	}
	// it says what screen are you using (mobile, desktop)
	// const isMobile = useContext(MobileScreenContext);

	//* **  STATES ****//
	const [index, setIndex] = useState(0);
	const [overflow, setOverflow] = useState(false);

	//* ** nodes ***//
	const { children, childrenCount } = generateChildren();
	const dots = new Array(childrenCount)
		.fill()
		.map((_, dotI) => (
			<button
				className={classNames('slideshow-dot', { active: dotI === index })}
				key={dotI}
				onClick={() => handleSetIndex(dotI)}
			/>
		)); //I do not plan to reorder these things or so, so using index as key is fine to me

	const containerRef = useRef();
	//* **  EFFECTS ***//

	// disable and reset transition for overflow
	useEffect(() => {
		const container = containerRef.current;
		container.style.transition = null;

		function handleTransitionEnd() {
			if (overflow) {
				container.style.transition = 'none';
				setOverflow(false);
			}
		}
		container.addEventListener('transitionend', handleTransitionEnd);
		return () => container.removeEventListener('transitionend', handleTransitionEnd);
	}, [overflow]);

	// get and update width and gap
	function useSlide() {
		const [slideData, setSlideData] = useState({ width: 0, gap: 0 });
		useEffect(() => {
			const update = debounce(() => {
				setSlideData({
					width: props.slideRef.current?.clientWidth || 0,
					gap: parseInt(
						window.getComputedStyle(containerRef.current).getPropertyValue('column-gap')
					)
				});
			}, 200);
			window.addEventListener('resize', update);
			update();
			return () => window.removeEventListener('resize', update);
		}, [props.slideRef.current]);
		return slideData;
	}

	// autoplay
	useEffect(() => {
		function autoPlay() {
			handleSetIndex(index + 1);
		}
		const autoPlayTimer = setTimeout(autoPlay, 5000);
		return () => clearTimeout(autoPlayTimer);
	}, [index]);

	const { width, gap } = useSlide();
	const offset = overflow ? 0 : -childrenCount;
	const translate = -(width + gap) / 2 - (width + gap) * (index + offset);
	const style = { transform: `translateX(${translate}px)` };
	return (
		<section className="slideshow">
			<div className="slideshow-mask">
				<div className="slideshow-container" style={style} ref={containerRef}>
					{children}
				</div>
			</div>
			<div className="slideshow-dots-container">{dots}</div>
		</section>
	);
}
