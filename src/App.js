import "./reset.css";
import "./App.css";

import React, { useState } from "react";
import classNames from "classnames";

import logoSVG from "./images/logo.svg";
import statisticsSVG from "./images/illustration-intro.svg";
import anisha from "./images/avatar-anisha.png";
import ali from "./images/avatar-ali.png";
import richard from "./images/avatar-richard.png";
import shanai from "./images/avatar-shanai.png";
const AVATARS = { anisha, ali, richard, shanai };
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
function AppHeader(props) {
  return (
    <header className="dialog">
      <img className="logo" src={logoSVG} alt="manage logo" />
      <Nav />
    </header>
  );
}
function ArticleHeader(props) {
  return (
    <header className="article-header">
      <h3>{props.children}</h3>
    </header>
  );
}
function ArticleText(props) {
  return <article className="article-text">{props.children}</article>;
}
function Article(props) {
  return (
    <section className="article-section">
      <ArticleHeader>{props.title}</ArticleHeader>
      <ArticleText>{props.children}</ArticleText>
    </section>
  );
}
function Statistics(props) {
  return <img src={statisticsSVG} alt="statistics" />;
}
function GetStartedBtn(props) {
  const { inverted = false } = props;
  return (
    <a
      href="#details"
      className={`btn shadow ${inverted ? "inverted" : "orange"}`}
    >
      Get Started
    </a>
  );
}
function Articles() {
  const ARTICLES = [
    {
      title: "Track company-wide progress",
      text:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      title: "Advanced built-in reports",
      text:
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      title: "Everything you need in one place",
      text:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];
  return (
    <>
      {ARTICLES.map((article) => (
        <Article key={article.title} title={article.title}>
          {article.text}
        </Article>
      ))}
    </>
  );
}
function Slideshow(props) {
  function getNotNegative(value, n) {
    while (value < 0) value += n;
    return value;
  }
  const count = React.Children.count(props.children);
  const [current, setCurrent] = useState(0);
  const disabled = count < 2;
  return (
    <section className="slideshow">
      {props.children}
      <button
        disabled={disabled}
        className="slideshow-button"
        onClick={() => setCurrent(getNotNegative((current - 1) % count))}
      >
        {"&#10094"}
      </button>{" "}
      {/*left*/}
      <button
        disabled={disabled}
        className="slideshow-button"
        onClick={() => setCurrent((current + 1) % count)}
      >
        {"&#10095"}
      </button>{" "}
      {/*right*/}
    </section>
  );
}
function Opinions(props) {
  class opinion {
    constructor(firstName, secondName, text) {
      this.firstName = firstName;
      this.secondName = secondName;
      this.text = text;
      // this.avatar=avatar;
    }
  }
  function Opinion(props) {
    return (
      <article className="opinions-item">
        <img className="avatar" src={props.avatar} alt="avatar" />
        <h3>{props.fullName}</h3>
        <blockquote>{props.children}</blockquote>
      </article>
    );
  }

  const OPINIONS = [
    new opinion(
      "Anisha",
      "Li",
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
    ),
    new opinion(
      "Ali",
      "Bravo",
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
    ),
    new opinion(
      "Richard",
      "Watts",
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
    ),
    new opinion(
      "Shanai",
      "Goug",
      "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
    ),
  ];

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
function TextForm(props) {
  function handleSubmit(event) {
    alert("wysłano: " + text);
    event.preventDefault();
  }
  const [text, setText] = useState("");
  return (
    <form className="text-form" method="get" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={props.placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="submit"
        className="btn round orange"
        value={props.btnValue}
      />
    </form>
  );
}
function App() {
  return (
    <div className="App">
      <AppHeader />
      <Statistics />

      <GetStartedBtn />

      <h1>Bring everyone together to build better products.</h1>
      <ArticleText>
        Manage makes it simple for software teams to plan day-to-day tasks while
        keeping the larger team goals in view.
      </ArticleText>

      <GetStartedBtn />

      <h2>What’s different about Manage?</h2>
      <ArticleText>
        Manage provides all the functionality your team needs, without the
        complexity. Our software is tailor-made for modern digital product
        teams.
      </ArticleText>

      <Articles />

      <Opinions />

      <GetStartedBtn />
      <div className="fancy-container">
        Simplify how your team works today.
        <GetStartedBtn inverted={true} />
      </div>
      <footer>
        <TextForm placeholder="Updates in your inbox…" btnValue="Go" />
        <div className="two-column">
          <p>Home</p>
          <p>Pricing</p>
          <p>Products</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Community</p>
          <p>Privacy Policy</p>
        </div>
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
        </div>
      </footer>
    </div>
  );
}

export default App;
