import "./opinions.css";

import Slideshow from '../../common/slideshow/slideshow';
import {OPINIONS, AVATARS} from '../../data';

function Opinion(props) {
  return (
    <article className="opinions-item">
      <img className="avatar" src={props.avatar} alt="avatar" />
      <h3>{props.fullName}</h3>
      <blockquote>{props.children}</blockquote>
    </article>
  );
}
export default function Opinions(props) {
  return (
    <section className="opinions">
      <h2>What they’ve said</h2>
      <Slideshow>
        {OPINIONS.map((op) => {
          const fullName = op.firstName + op.secondName;
          return (
            <Opinion
              fullName={fullName}
              key={fullName}
              avatar={AVATARS[op.firstName.toLowerCase()]}
            >
              {op.text}
            </Opinion>
          );
        })}
      </Slideshow>
    </section>
  );
}