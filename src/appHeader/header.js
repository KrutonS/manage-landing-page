import "./header.css";

import { useState, useEffect, Fragment } from "react";
import classNames from "classnames";

import logoSVG from "../images/logo.svg";
import hamburgerSVG from "../images/icon-hamburger.svg";
import closeSVG from "../images/icon-close.svg";
import { GetStartedBtn } from "../common/buttons/buttons";

const desktopWidth = 1440; //if you change this change also css variable
function Nav(props) {
  const {isMobile, show} = props;
  return (
    <Fragment>
      {isMobile && <div className={classNames("nav-blackout", {show})}></div>}
      <nav className={classNames("dialog", {show})}>
        <a href="#pricing" className="nav-item">
          Pricing
        </a>
        <a href="#product" className="nav-item">
          Product
        </a>
        <a href="#about-us" className="nav-item">
          About Us
        </a>
        <a href="#careers" className="nav-item">
          Careers
        </a>
        <a href="#community" className="nav-item">
          Community
        </a>
      </nav>
    </Fragment>
  );
}

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

export default function AppHeader(props) {
  const width = getWidth();
  const [isMobile, setIsMobile] = useState(width < desktopWidth);
  const [show, setShow] = useState(!isMobile);
  useEffect(() => {
    let timeoutId = null;
    function resizeListener() {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsMobile(getWidth() < desktopWidth), 200);
      setIsMobile(getWidth() < desktopWidth);
    }

    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  });

  // disable scrolling
  document.body.style.overflow = show && isMobile ? "hidden" : "initial";
  return (
    <header className="app-header dialog">
      <img className="logo" src={logoSVG} alt="manage logo" />
      <img
        src={show ? closeSVG : hamburgerSVG}
        alt="menu"
        className={classNames("hamburger", { show })}
        onClick={() => setShow(!show)}
      />
      <Nav isMobile={isMobile} show={show}/>
      <GetStartedBtn />
    </header>
  );
}
