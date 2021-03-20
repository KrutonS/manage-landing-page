import './footer.css';

import logoSVG from "../images/logo.svg";
import TextForm from '../common/TextForm/textForm';
import {ArticleText} from '../common/articles/articles';
import MultiColumn from '../common/multiColumn/multiColumn';
import SocialMedias from '../common/socialMedias/social';

export default function Footer(props) {
  return (
    <footer>
      <TextForm placeholder="Updates in your inbox…" btnValue="Go" />
      <MultiColumn columns={2}>
        <p>Home</p>
        <p>Pricing</p>
        <p>Products</p>
        <p>About Us</p>
        <p>Careers</p>
        <p>Community</p>
        <p>Privacy Policy</p>
      </MultiColumn>
      <SocialMedias/>
      <ArticleText>Copyright 2020. All Rights Reserved</ArticleText>

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/KrutonS" target="_blank" rel="noreferrer">
          KrutonS
        </a>
        .
        <img src={logoSVG} alt="manage logo"/>
      </div>
    </footer>
  );
}
