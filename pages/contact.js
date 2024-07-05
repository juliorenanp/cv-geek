import React from "react";

export default function Contact() {
  return (
    <div className="nes-container with-title" id="contact">
      <p className="title">Contact</p>

      <section className="nes-container">
        <section className="message-list">
          <section className="message -left">
            <div className="nes-balloon from-left">
              <p>
                Nice resume Julio, can you give me your contact information?
              </p>
            </div>
          </section>
          <i className="nes-mario"></i>
          <section className="message -left">
            <div className="nes-balloon from-left">
              <p>
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
            <img
              className="is-rounded julio"
              src="https://media.licdn.com/dms/image/C4D03AQGUq1LFL1eguw/profile-displayphoto-shrink_800_800/0/1658444644066?e=1725494400&v=beta&t=rVwsoTsdAJVVX6awrtZCrh2iShB9_PbskB4tEvfKv3A"
            />
            {"    "}
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
