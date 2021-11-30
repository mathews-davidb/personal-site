import React from "react";
import { useNav } from "./Hooks";
import "./Style.css";

const About = () => {
  const projectsRef = useNav("Projects");

  return (
    <section
      ref={projectsRef}
      id="projectsContainer"
      style={{ height: "100%" }}
    >
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div
            style={{
              color: "white",

              marginRight: "4em",
              marginLeft: "auto",
            }}
          >
            <img
              src={"images/fullbookstack.png"}
              style={{ width: "400px", borderRadius: "10px" }}
            />
          </div>
          <div
            style={{
              width: "90%",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <h2
              style={{
                marginLeft: "0em",
                marginRight: "auto",
                marginBottom: "-0.3em",
                color: "#05386B",
                fontFamily: "Rock Salt",
              }}
            >
              Full Book Stack
            </h2>
            <p style={{ fontFamily: "Merriweather" }}>
              Full Book Stack is a demo e-commerce site allowing users to sign
              up and shop for books on the New York Times bestsellers' list.
              Server to server requests were made to populate the bookstore
              using the NY Times API. Guest users can browse and save items to
              their cart prior to registering to complete an order and perform
              server side searching to check the entire collection for certain
              products. After an order is completed, they can view their order
              history on an account page. Administrators have the ability to
              add, update and delete products with an admin dashboard and see
              entire entire users list.
            </p>
            <span style={{ marginLeft: "0em", marginRight: "auto" }}>
              <img
                src={"images/postgres.png"}
                style={{ height: "40px", width: "auto", paddingRight: "1em" }}
              />
              <img
                src={"images/axios.png"}
                style={{ height: "40px", width: "auto", paddingRight: "1em" }}
              />
              <img
                src={"images/node.png"}
                style={{ height: "40px", width: "auto", paddingRight: "1em" }}
              />
              <img
                src={"images/express.png"}
                style={{ height: "40px", width: "auto", paddingRight: "1em" }}
              />
              <img
                src={"images/react.png"}
                style={{ height: "40px", width: "auto", paddingRight: "1em" }}
              />
              <img
                src={"images/htmlcssjs.png"}
                style={{ height: "40px", width: "auto", paddingRight: "1em" }}
              />
            </span>
            <button
              style={{
                marginLeft: "0em",
                marginRight: "auto",
                marginTop: "1em",
                height: "3em",
                fontSize: "1em",
                border: "1px solid #05386B",
                borderRadius: "5px",
              }}
            >
              {" "}
              <a
                class="btn"
                href="http://www.google.com"
                style={{
                  textDecoration: "none",
                  color: "#05386B",
                }}
              >
                Launch Full Book Stack
              </a>
            </button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div
            style={{
              color: "white",

              marginRight: "4em",
              marginLeft: "auto",
            }}
          >
            <img
              src={"images/fitnesstracker.png"}
              style={{
                width: "400px",
                borderRadius: "10px",
                border: "1px solid black",
              }}
            />
          </div>
          <div
            style={{
              color: "black",
              width: "90%",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <h2
              style={{
                marginLeft: "0em",
                marginRight: "auto",
                marginBottom: "-0.3em",
                color: "#05386B",
                fontFamily: "Rock Salt",
              }}
            >
              Fitness Tracker
            </h2>
            <p style={{ fontFamily: "Merriweather" }}>
              Fitness Traker is a demo fitness app allowing users to create
              their own fitness routines. Users can also add new workout
              activities. When they create a new routine, they are able to add
              activities to it and specify count and duration of activities.
              They are also able to update and delete their own routines. Users
              can also see other users' routines who have shared them publicly.
            </p>
            <span
              style={{
                marginLeft: "0em",
                marginRight: "auto",
              }}
            >
              <img
                src={"images/postgres.png"}
                style={{ height: "40px", width: "auto", paddingRight: "1em" }}
              />
              <img
                src={"images/node.png"}
                style={{ height: "40px", width: "auto", paddingRight: "1em" }}
              />
              <img
                src={"images/express.png"}
                style={{ height: "40px", width: "auto", paddingRight: "1em" }}
              />
              <img
                src={"images/react.png"}
                style={{ height: "40px", width: "auto", paddingRight: "1em" }}
              />
              <img
                src={"images/htmlcssjs.png"}
                style={{ height: "40px", width: "auto", paddingRight: "1em" }}
              />
            </span>
            <button
              style={{
                marginLeft: "0em",
                marginRight: "auto",
                marginTop: "1em",
                height: "3em",
                fontSize: "1em",
                border: "1px solid #05386B",
                borderRadius: "5px",
              }}
            >
              {" "}
              <a
                class="btn"
                href="https://distracted-boyd-4c7e26.netlify.app/"
                style={{
                  textDecoration: "none",
                  color: "#05386B",
                }}
              >
                Launch Fitness Tracker
              </a>
            </button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div
            style={{
              color: "white",

              marginRight: "4em",
              marginLeft: "auto",
            }}
          >
            <img
              src={"images/thearcade.png"}
              style={{
                width: "400px",
                borderRadius: "10px",
                border: "1px solid black",
              }}
            />
          </div>
          <div
            style={{
              color: "black",
              width: "90%",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <h2
              style={{
                marginLeft: "0em",
                marginRight: "auto",
                marginBottom: "-0.3em",
                color: "#05386B",
                fontFamily: "Rock Salt",
              }}
            >
              The Arcade
            </h2>
            <p style={{ fontFamily: "Merriweather" }}>
              The Arcade is a simple JavaScript application that recreated
              classic games using simple javascript functionality, paired with
              CSS for simple styling.
            </p>
            <span
              style={{
                marginLeft: "0em",
                marginRight: "auto",
              }}
            >
              <img
                src={"images/htmlcssjs.png"}
                style={{ height: "40px", width: "auto", paddingRight: "1em" }}
              />
            </span>
            <button
              style={{
                marginLeft: "0em",
                marginRight: "auto",
                marginTop: "1em",
                height: "3em",
                fontSize: "1em",
                border: "1px solid #05386B",
                borderRadius: "5px",
              }}
            >
              {" "}
              <a
                class="btn"
                href="https://blissful-archimedes-021d90.netlify.app/"
                style={{
                  textDecoration: "none",
                  color: "#05386B",
                }}
              >
                Launch The Arcade
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
