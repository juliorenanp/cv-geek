import React from "react";

export default function Header() {
  return (
    <div className="nes-container with-title is-centered">
      <p className="title nes-black">Welcome!</p>
      This is my geek resume! Hope you like it!{" "}
      <i className="nes-icon  like"></i>
      <p>
        <a href="#about" className="secondary">
          About me
        </a>{" "}
        -{" "}
        <a href="#skill" className="secondary">
          Skills
        </a>{" "}
        -{" "}
        <a href="#experience" className="secondary">
          Experience
        </a>{" "}
        -{" "}
        <a href="#education" className="secondary">
          Education
        </a>{" "}
        -{" "}
        <a href="#projects" className="secondary">
          Personal Projects
        </a>{" "}
        -{" "}
        <a href="#contact" className="secondary">
          Contact
        </a>
      </p>
    </div>
  );
}
