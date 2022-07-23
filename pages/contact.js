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
                For sure my friend:{" "}
                <a href="https://github.com/juliorenanp">
                  <i className="nes-icon github"></i>
                </a>{" "}
                <a href="https://www.linkedin.com/in/juliorspinheiro/">
                  <i className="nes-icon linkedin"></i>
                </a>
              </p>
            </div>
          </section>
          <div>
          <i className="nes-ash"></i> {"  "}
          <i className="nes-charmander"></i>{"  "}
          <i className="nes-squirtle"></i>
          <i className="nes-bulbasaur"></i>{"  "}
          </div>
        </section>
      </section>
    </div>
  );
}
