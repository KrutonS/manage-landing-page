import "./header.css";

import { useState, useContext } from "react";
import classNames from "classnames";

import logoSVG from "../images/logo.svg";
import hamburgerSVG from "../images/icon-hamburger.svg";
import closeSVG from "../images/icon-close.svg";
import { GetStartedBtn } from "../common/buttons/buttons";
import { MobileScreenContext } from "../globals";

function Nav(props) {
	const { isMobile, show } = props;
	return (
		<>
			{isMobile && <div className={classNames("nav-blackout", { show })} />}
			<nav className={classNames("dialog", { show })}>
				<a href='#pricing' className='nav-item'>
					Pricing
				</a>
				<a href='#product' className='nav-item'>
					Product
				</a>
				<a href='#about-us' className='nav-item'>
					About Us
				</a>
				<a href='#careers' className='nav-item'>
					Careers
				</a>
				<a href='#community' className='nav-item'>
					Community
				</a>
			</nav>
		</>
	);
}

export default function AppHeader() {
	// const [isMobile, setIsMobile] = useState(checkIfMobile());
	const isMobile = useContext(MobileScreenContext);

	const [show, setShow] = useState(false);

	return (
		<header className='app-header'>
			<a href='/'>
				<img className='logo' src={logoSVG} alt='manage logo' />
			</a>
			<img
				src={show ? closeSVG : hamburgerSVG}
				alt='menu'
				className={classNames("hamburger", { show })}
				onClick={() => setShow(!show)}
			/>
			<Nav isMobile={isMobile} show={show} />
			<GetStartedBtn />
		</header>
	);
}
