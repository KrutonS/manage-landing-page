import "./opinions.css";

import Slideshow from '../../common/slideshow/slideshow';
import {OPINIONS, AVATARS} from '../../globals';

function Opinion(props) {
  return (
    <div className={props.className}>
      <img className="avatar" src={props.avatar} alt="avatar" />
      <h3>{props.fullName}</h3>
      <blockquote>{props.children}</blockquote>
    </div>
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
              className={"opinions-item dialog"}
            >
              {op.text}
            </Opinion>
          );
        })}
      </Slideshow>
    </section>
  );
}