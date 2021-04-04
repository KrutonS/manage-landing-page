import "./footer.css";

import { ReactComponent as Logo } from "../images/logo.svg";
import TextForm from "../common/TextForm/textForm";
import { ArticleText } from "../common/articles/articles";
import MultiColumn from "../common/multiColumn/multiColumn";
import SocialMedias from "../common/socialMedias/social";
function Grid() {
	return (
		<div className='footer-grid'>
			<TextForm placeholder='Updates in your inbox…' btnValue='Go' />
			<MultiColumn columns={2}>
				<p>
					<a className='link' href='Home'>
						Home
					</a>
				</p>
				<p>
					<a className='link' href='Pricing'>
						Pricing
					</a>
				</p>
				<p>
					<a className='link' href='Products'>
						Products
					</a>
				</p>
				<p>
					<a className='link' href='About'>
						About Us
					</a>
				</p>
				<p>
					<a className='link' href='Careers'>
						Careers
					</a>
				</p>
				<p>
					<a className='link' href='Community'>
						Community
					</a>
				</p>
				<p>
					<a className='link' href='Privacy'>
						Privacy Policy
					</a>
				</p>
			</MultiColumn>
			<SocialMedias />
			{/* <img className='logo' src={logoSVG} alt='manage logo' /> */}
			<a href='/'>
				<Logo className='logo' title='manage logo' />
			</a>
			<ArticleText>Copyright 2020. All Rights Reserved</ArticleText>
		</div>
	);
}
export default function Footer() {
	return (
		<footer>
			<Grid />
			<div className='attribution'>
				Challenge by{" "}
				<a
					href='https://www.frontendmentor.io?ref=challenge'
					target='_blank'
					rel='noreferrer'
				>
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a href='https://github.com/KrutonS' target='_blank' rel='noreferrer'>
					KrutonS.
				</a>
			</div>
		</footer>
	);
}
