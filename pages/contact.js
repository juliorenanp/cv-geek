import React from "react";
import Image from "next/image";
import julio from "../public/assets/julio.jpeg";

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
            <div
              className="nes-balloon from-left"
              style={{ marginLeft: "100px" }}
            >
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
            <Image
              src={julio}
              width={150}
              height={150}
              alt="Julio Picture"
              style={{ borderRadius: "300px" }}
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
