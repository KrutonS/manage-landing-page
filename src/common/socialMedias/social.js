/* eslint-disable react/jsx-key */
import "./social.css";

import { ReactComponent as Fb } from "../../images/icon-facebook.svg";
import { ReactComponent as Yt } from "../../images/icon-youtube.svg";
import { ReactComponent as Tw } from "../../images/icon-twitter.svg";
import { ReactComponent as Pin } from "../../images/icon-pinterest.svg";
import { ReactComponent as Insta } from "../../images/icon-instagram.svg";

import { addProps } from "../../globals";

const ICONS = [
	[<Fb />, "https://www.facebook.com/", "facebook"],
	[<Yt />, "https://www.youtube.com/watch?v=dQw4w9WgXcQ", "youtube"],
	[<Tw />, "https://twitter.com/", "twitter"],
	[<Pin />, "https://pinterest.com", "pin"],
	[<Insta />, "https://instagram.com", "instagram"],
];

export default function SocialMedias() {
	return (
		<div className='social-medias'>
			{ICONS.map(([icon, hrefLink, alt]) => (
				<a href={hrefLink} key={alt} className='social-medias__item'>
					{addProps(icon, {
						title: alt,
						viewBox: "0 0 22 22",
					})}
				</a>
			))}
		</div>
	);
}
