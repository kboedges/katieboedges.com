import React, { Component } from "react";
import CodeCard from "./CodeCard";

class Work extends Component {
  render() {
    return (
      <div className="work p-5 pb-0">
        <h1 className="opening mb-4">Work.</h1>
        <p>Development projects that I've worked on</p>
        <div className="d-flex flex-row flex-wrap">
          <CodeCard
            title={"Cyber Security Countdown"}
            text={"Stop a ransomware attack by entering in 6 correct passwords within 5 hours"}
            codeLink={"https://github.com/kboedges/cybersec-timer"}
            liveLink={"https://cyber-sec.herokuapp.com/"}
            tech={"JavaScript, React, Redux, Fetch API"}
          />
          <CodeCard
            title={"Bookshelf"}
            text={"Add books to your bookshelf to track your reading progress"}
            codeLink={"https://github.com/kboedges/bookshelf"}
            liveLink={"https://katie-bookshelf.herokuapp.com/"}
            tech={"JavaScript, React"}
          />
          <CodeCard
            title={"Better Readable"}
            text={"Post, Comment, Edit, Delete...a Reddit clone app"}
            codeLink={"https://github.com/kboedges/better-readable"}
            tech={"JavaScript, React, Redux, Fetch API"}
          />
          <CodeCard
            title={"Mobile Flashcards"}
            text={
              "Quiz yourself with flashcards on iOS and Android, create your own decks, and add new cards to your decks"
            }
            codeLink={"https://github.com/kboedges/better-readable"}
            tech={"JavaScript, React Native, Redux"}
          />
          <CodeCard
            title={"CSS Retro Electronics"}
            text={"Drawing a variety of electronics from the 2000s and earlier using CSS, some projects incorporate JS"}
            codeLink={"https://codepen.io/collection/XRVbGo/"}
            tech={"CSS, JS, Fetch API"}
          />
        </div>
      </div>
    );
  }
}

export default Work;
