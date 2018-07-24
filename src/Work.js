import React, { Component } from "react";
import Card from "./Card";

class Work extends Component {
  render() {
    return (
      <div className="work p-5 pb-0">
        <h1 className="opening mb-4">Work.</h1>
        <p>Development projects that I've worked on</p>
        <div className="d-flex flex-row flex-wrap">
          <Card
            title={"Cyber Security Countdown"}
            text={"Stop a ransomware attack by entering in 6 correct passwords within 5 hours"}
            link={"https://github.com/kboedges/cybersec-timer"}
            tech={"JavaScript, React, Redux, Fetch API"}
          />
          <Card
            title={"Bookshelf"}
            text={"Add books to your bookshelf to track your reading progress"}
            link={"https://github.com/kboedges/bookshelf"}
            tech={"JavaScript, React"}
          />
          <Card
            title={"Better Readable"}
            text={"Post, Comment, Edit, Delete...a Reddit clone app"}
            link={"https://github.com/kboedges/better-readable"}
            tech={"JavaScript, React, Redux, Fetch API"}
          />
          <Card
            title={"Mobile Flashcards"}
            text={
              "Quiz yourself with flashcards on iOS and Android, create your own decks, and add new cards to your decks"
            }
            link={"https://github.com/kboedges/better-readable"}
            tech={"JavaScript, React Native, Redux"}
          />
          <Card
            title={"CSS Retro Electronics"}
            text={"Drawing a variety of electronics from the 2000s and earlier using CSS, some projects incorporate JS"}
            link={"https://codepen.io/collection/XRVbGo/"}
            tech={"CSS, JS, Fetch API"}
          />
        </div>
      </div>
    );
  }
}

export default Work;
