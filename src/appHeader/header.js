import './header.css';

import { useState } from 'react';
import classNames from 'classnames';

import logoSVG from '../images/logo.svg';
import hamburgerSVG from '../images/icon-hamburger.svg';
import closeSVG from '../images/icon-close.svg';
import { GetStartedBtn } from '../common/buttons/buttons';
import { Link } from 'react-router-dom';

function Nav(props) {
	const { show } = props;
	return (
		<>
			<div className={classNames('nav-blackout', { show })} />
			<nav className={classNames('dialog', { show })}>
				<Link to="/pricing" className="nav-item">
					Pricing
				</Link>
				<Link to="/product" className="nav-item">
					Product
				</Link>
				<Link to="/about" className="nav-item">
					About Us
				</Link>
				<Link to="/careers" className="nav-item">
					Careers
				</Link>
				<Link to="/community" className="nav-item">
					Community
				</Link>
			</nav>
		</>
	);
}

export default function AppHeader() {

	const [show, setShow] = useState(false);

	return (
		<header className="app-header">
			<Link to="/">
				<img className="logo" src={logoSVG} alt="manage logo" />
			</Link>
			<button className={classNames('hamburger', { show })} onClick={() => setShow(!show)}>
				<img src={show ? closeSVG : hamburgerSVG} alt="menu" />
			</button>
			<Nav show={show} />
			<GetStartedBtn />
		</header>
	);
}
