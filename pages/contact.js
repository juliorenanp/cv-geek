import React from "react";

export default function Contact() {
    return (
      <div className="nes-container with-title" id="contact">
        <p className="title">Contact</p>

        <section className="nes-container">
          <section className="message-list">
            <section className="message -left">
              <i className="nes-mario"></i>
              <div className="nes-balloon from-left">
                <p>Nice CV Julio, can you pass me your contact?</p>
              </div>
            </section>
            <section className="message -right">
              <div className="nes-balloon from-right">
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
              <i className="nes-squirtle"></i>
            </section>
          </section>
        </section>
      </div>
    );
}

