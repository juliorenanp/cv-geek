import React from "react";

export default function Skills() {
  return (
    <div className="nes-container  with-title" id="skill">
      <p className="title">Skills</p>
      <p>
        Well, I dont like to think of myself as a full stack lvl 99+, but I keep
        studying for it. {"  "}
        <i className="nes-icon heart"></i>
        <i className="nes-icon heart"></i>
        <i className="nes-icon heart"></i>
        <br />
        Here are a few of the techs that I love to work with:
      </p>
      <div className="lists">
        <ul className="nes-list is-disc">
          <li>.NET Core;</li>
          <li>C#;</li>
          <li>NodeJs;</li>
          <li>Angular;</li>
          <li>React;</li>
          <li>JavaScript;</li>
          <li>TypeScript;</li>
          <li>Oracle;</li>
          <li>SQL;</li>
          <li>MongoDB;</li>
        </ul>
      </div>
    </div>
  );
}
