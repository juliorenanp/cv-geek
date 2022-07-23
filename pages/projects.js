import React from "react";

export default function Projects() {
  return (
    <div className="nes-container with-title" id="projects">
    <p className="title">Personal Projects</p>
    <div className="lists">
      <ul className="nes-list is-circle">
        <li>
          <p>
            <a
              href="https://our-planet-juliopinheiro.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Our planet
            </a>{" "}
            - Canvas with HTML, Javascript and React.
          </p>
        </li>
        <li>
          <p>
            <a
              href="https://gameboy-julio.vercel.app/docs/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Gameboy with Pokemon Yellow 
            </a>{" "}
            - HTML, CSS, Javascript. 
          </p>
        </li>
      </ul>
    </div>
  </div>
  );
}
