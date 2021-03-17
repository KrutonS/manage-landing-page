import logoSVG from "../images/logo.svg";

function Nav(props) {
  return (
    <nav>
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
  );
}
export default function AppHeader(props) {
  return (
    <header className="dialog">
      <img className="logo" src={logoSVG} alt="manage logo" />
      <Nav />
    </header>
  );
}