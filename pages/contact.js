import React from "react";

export default function Contact() {
  return (
    <div className="nes-container with-title" id="contact">
      <p className="title">Contact</p>

      <section className="nes-container">
        <section className="message-list">
          <section className="message -left">
            <div className="nes-balloon from-left">
              <p>Nice CV Julio, can you pass me your contact?</p>
            </div>
          </section>
          <i className="nes-mario"></i>
          <section className="message -left">
            <div className="nes-balloon from-left">
              <p>
                 Sure my friend:{" "}
                <a
                  href="https://www.linkedin.com/in/juliorspinheiro/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="nes-icon linkedin"></i>
                </a>{" "}
                <a
                  href="https://github.com/juliorenanp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="nes-icon github"></i>
                </a>{" "}
                <a
                  href="https://www.instagram.com/juliorenanp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="nes-icon instagram"></i>
                </a>{" "}
              </p>
            </div>
          </section>
          <div>
            {/* <i className="nes-ash"></i> {"  "} */}
            <img className="is-rounded julio" src="https://media-exp1.licdn.com/dms/image/C4D03AQGUq1LFL1eguw/profile-displayphoto-shrink_100_100/0/1658444643717?e=1663804800&v=beta&t=PIfdk7EielDsTHFviwJnmSMiCFx1BOy4TuhX5kvFUqo"></img> {"    "}
            <i className="nes-charmander"></i>
            {"  "}
            <i className="nes-squirtle"></i>
            <i className="nes-bulbasaur"></i>
            {"  "}
           
          </div>
        </section>
      </section>
    </div>
  );
}
