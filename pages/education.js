import React from "react";

export default function Education() {
  return (
    <div className="nes-container  with-title">
      <p className="title">Education</p>
      <div className="nes-container">
        <p>
          <b>Master of Business Administration</b> - PUCRS (Jan/2019 - Jan/2020)
        </p>
        <div className="lists">
          <ul className="nes-list is-circle">
            <li>
              <p>Leadership, Innovation and Management 3.0.</p>
            </li>
          </ul>
        </div>
        <p>
          <b>Technologist</b> - SENAC BRAZIL (Jan/2013 - Dec/2015)
        </p>
        <div className="lists">
          <ul className="nes-list is-circle">
            <li>
              <p>Analysis and Systems Development.</p>
            </li>
          </ul>
        </div>
        <p>
          <b>Technical</b> - CEAP (Jun/2010 - Jun/2012)
        </p>
        <div className="lists">
          <ul className="nes-list is-circle">
            <li>
              <p>Computer Network.</p>
            </li>
          </ul>
        </div>

        <p>
          <b>IT Tranings</b> - Alura
        </p>
        <div className="lists">
          <ul className="nes-list is-circle">
            <li>
              <p>More than 66 courses completed.</p>
            </li>
            <li>
              <p>700 hours of training.</p>
            </li>
            <li>
              <p>
                Link for the{" "}
                <a
                  href="https://cursos.alura.com.br/user/juliorenan/fullCertificate/d3de7d5baa50ba6d1801152dabc69ea1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Certificates.
                </a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
