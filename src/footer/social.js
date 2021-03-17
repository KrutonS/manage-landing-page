import fb from '../images/icon-facebook.svg';
import yt from '../images/icon-youtube.svg';
import tw from '../images/icon-twitter.svg';
import pin from '../images/icon-pinterest.svg';
import insta from '../images/icon-instagram.svg';
const ICONS = [
  [fb, 'https://www.facebook.com/', "facebook"],
  [yt, 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', "youtube"],
  [tw, 'https://twitter.com/', "twitter"],
  [pin, 'https://pinterest.com', "pin"],
  [insta, 'https://instagram.com', "insta"]
];
export default function SocialMedias(props){
  return (
    <div class="social-medias">
      {ICONS.map(([iconUrl, hrefLink, alt])=><a href={hrefLink} key={alt}><img src={iconUrl} alt={alt}/></a>)}
    </div>
  );
}