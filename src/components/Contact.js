import React, { useState } from "react";
import { Slide, toast } from "react-toastify";

import { useNav } from "./Hooks";
import "./Style.css";
require("dotenv").config();
const nodemailer = require("nodemailer");

const Contact = () => {
  const contactRef = useNav("Contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    console.log(email, name, message);
    const response = await fetch("http://localhost:3000/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    });
    console.log("working");
  };

  return (
    <section
      ref={contactRef}
      id="contactContainer"
      style={{ backgroundColor: "#5cdb95", height: "100%" }}
    >
      <div style={{}}>
        <h1
          style={{
            fontFamily: "Rock Salt",
            color: "#05386B",
            fontSize: "3em",
            borderBottom: "1px #05386B solid",
          }}
        >
          Contact Me
        </h1>
        <p
          style={{
            color: "#05386B",
            width: "80%",
            marginRight: "auto",
            marginLeft: "auto",
            fontFamily: "Merriweather",
            fontSize: "1.1em",
            textAlign: "center",
            marginTop: "-1.5em",
          }}
        >
          (504) 717-0795 <br></br>
          mathews.davidb@gmail.com
        </p>
        <div style={{ marginBottom: "4em" }}>
          <form class="contactform" onSubmit={sendEmail}>
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />{" "}
            <br></br>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />{" "}
            <br></br>
            <textarea
              style={{
                display: "block",
                minHeight: "4em",

                minWidth: "100%",
                maxWidth: "100%",
                paddingTop: "0",
                paddingBottom: "auto",
              }}
              placeholder="Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />{" "}
            <br></br>
            <button
              onClick={() => {
                toast.success(`Your message has been sent!`, {
                  transition: Slide,
                });
              }}
            >
              Send Message!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
