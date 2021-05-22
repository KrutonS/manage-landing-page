import './footer.css';

import { ReactComponent as Logo } from '../images/logo.svg';
import TextForm from '../common/TextForm/textForm';
import { ArticleText } from '../common/articles/articles';
import MultiColumn from '../common/multiColumn/multiColumn';
import SocialMedias from '../common/socialMedias/social';
import { Link } from 'react-router-dom';
import { homepage } from '../globals';
function Grid() {
	return (
		<div className="footer-grid">
			<TextForm placeholder="Updates in your inbox…" btnValue="Go" />
			<MultiColumn columns={2}>
				<p>
					<Link className="link" to="/Home">
						Home
					</Link>
				</p>
				<p>
					<Link className="link" to="/Pricing">
						Pricing
					</Link>
				</p>
				<p>
					<Link className="link" to="/Products">
						Products
					</Link>
				</p>
				<p>
					<Link className="link" to="/About">
						About Us
					</Link>
				</p>
				<p>
					<Link className="link" to="/Careers">
						Careers
					</Link>
				</p>
				<p>
					<Link className="link" to="/Community">
						Community
					</Link>
				</p>
				<p>
					<Link className="link" to="/Privacy">
						Privacy Policy
					</Link>
				</p>
			</MultiColumn>
			<SocialMedias />
			{/* <img className='logo' src={logoSVG} alt='manage logo' /> */}
			<Link to={homepage}>
				<Logo className="logo" title="manage logo" />
			</Link>
			<ArticleText>Copyright 2020. All Rights Reserved</ArticleText>
		</div>
	);
}
export default function Footer() {
	return (
		<footer>
			<Grid />
			<div className="attribution">
				Challenge by{' '}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					rel="noreferrer">
					Frontend Mentor
				</a>
				. Coded by{' '}
				<a href="https://github.com/KrutonS" target="_blank" rel="noreferrer">
					KrutonS.
				</a>
			</div>
		</footer>
	);
}
