import './header.css';

import { useState, useContext } from 'react';
import classNames from 'classnames';

import logoSVG from '../images/logo.svg';
import hamburgerSVG from '../images/icon-hamburger.svg';
import closeSVG from '../images/icon-close.svg';
import { GetStartedBtn } from '../common/buttons/buttons';
import { homepage, MobileScreenContext } from '../globals';
import { Link } from 'react-router-dom';

function Nav(props) {
	const { isMobile, show } = props;
	return (
		<>
			{isMobile && <div className={classNames('nav-blackout', { show })} />}
			<nav className={classNames('dialog', { show })}>
				<Link to={`${homepage}/pricing`} className="nav-item">
					Pricing
				</Link>
				<Link to={`${homepage}/product`} className="nav-item">
					Product
				</Link>
				<Link to={`${homepage}/about`} className="nav-item">
					About Us
				</Link>
				<Link to={`${homepage}/careers`} className="nav-item">
					Careers
				</Link>
				<Link to={`${homepage}/community`} className="nav-item">
					Community
				</Link>
			</nav>
		</>
	);
}

export default function AppHeader() {
	// const [isMobile, setIsMobile] = useState(checkIfMobile());
	const isMobile = useContext(MobileScreenContext);

	const [show, setShow] = useState(false);

	return (
		<header className="app-header">
			<Link to={homepage}>
				<img className="logo" src={logoSVG} alt="manage logo" />
			</Link>
			<button className={classNames('hamburger', { show })} onClick={() => setShow(!show)}>
				<img src={show ? closeSVG : hamburgerSVG} alt="menu" />
			</button>
			<Nav isMobile={isMobile} show={show} />
			<GetStartedBtn />
		</header>
	);
}
