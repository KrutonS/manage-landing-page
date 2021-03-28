
import anisha from "./images/avatar-anisha.png";
import ali from "./images/avatar-ali.png";
import richard from "./images/avatar-richard.png";
import shanai from "./images/avatar-shanai.png";
import { createContext } from "react";

class opinion {
  constructor(firstName, secondName, text) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.text = text;
    // this.avatar=avatar;
  }
}
export const AVATARS = { anisha, ali, richard, shanai };
export const ARTICLES = [
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

export const OPINIONS = [
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
const desktopWidth = 1440; //if you change this change also css variable
const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;
  
export function checkIfMobile() { return getWidth() < desktopWidth; }

const MobileScreenContext = createContext();
MobileScreenContext.displayName='mobileScreenContext';
export {MobileScreenContext};