import React from "react";

export default function Header() {
  return (
    <div className="nes-container with-title is-centered">
      <p className="title">Welcome!</p>
      This is my geek resume! Hope you like it!{" "}
      <i className="nes-icon  like"></i>
      <p>
        <a href="#about">About me </a> - {" "}
        <a href="#skill">Skills </a> - {" "}
        <a href="#experience">Experience </a> - {" "}
        <a href="#education">Education </a> - {" "}
        <a href="#projects">Personal Projects </a> - {" "}
        <a href="#contact">Contact </a>
      </p>
    </div>
  );
}
