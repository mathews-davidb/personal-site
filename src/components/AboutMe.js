import "./Style.css";
import video from "./media/codebackground.mp4";
import { useNav } from "./Hooks";

const Home = (props) => {
  const homeRef = useNav("Home");

  return (
    <section
      ref={homeRef}
      id="aboutContainer"
      style={{
        backgroundImage: "",
        height: "100%",
        backgroundColor: "#5cdb95",
      }}
    >
      <div style={{ marginTop: "-4em" }}>
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <div>
            <img
              style={{ marginRight: "-10rem", height: "25em", width: "auto" }}
              class="face"
              src={"images/face.png"}
              alt="MY FACE"
            />
          </div>
          <div
            class="rightmain"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h1
              class="bigname1"
              style={{
                fontSize: "5em",
                color: "#edf5e1",
                fontFamily: "Rock Salt",
                marginTop: "-0.6em",
              }}
            >
              David
            </h1>
            <h1
              class="bigname2"
              style={{
                fontSize: "5em",
                color: "#edf5e1",
                fontFamily: "Rock Salt",
                marginTop: "-1.8em",
              }}
            >
              Mathews
            </h1>

            <p
              class="subtitle"
              style={{
                fontSize: "2em",
                color: "#edf5e1",
                fontFamily: "Merriweather",
                marginTop: "-1.8em",
              }}
            >
              a full-stack web developer
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "50% 50%",
            marginTop: "-2em",
          }}
        >
          <div
            style={{
              color: "#05386B",
              width: "80%",
              marginRight: "auto",
              marginLeft: "auto",
              fontFamily: "Merriweather",
              fontSize: "1.1em",
              textAlign: "center",
            }}
          >
            Hi, I’m David Mathews. I am a competitive, motivated and adept
            full-stack developer. I bring several years of leadership in the
            petroleum and construction sectors to the tech industry, where I
            recently completed a 6 month full-stack web developer course while
            working full time. I am currently seeking a position that will allow
            me to apply my new skills while also having the opportunity to learn
            new processes. I would love to join an established team where I can
            use creative ideas to further develop projects in the competitive
            market.
          </div>
          <div
            style={{
              color: "#05386B",
              width: "80%",
              marginRight: "auto",
              marginLeft: "auto",
              fontFamily: "Merriweather",
              textAlign: "center",
            }}
          >
            <u>TECHNICAL SKILLS</u> <br></br>Languages: <br></br>JavaScript |
            HTML | CSS | PostgreSQL | JSON | SQL <br></br>Frameworks/Libraries:{" "}
            <br></br>Node.js | React | Express | jQuery | API <br></br>Build
            Tools: <br></br>VS Code | Git | Heroku <br></br>
            <br></br>
            <u>SOFT SKILLS</u> <br></br>Problem Solving | Teamwork | Leadership
            Project Management | Time Management | Adaptability | Communication
            | Critical Thinking
          </div>
        </div>
        {/* <video id="background-video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video> */}
      </div>
    </section>
  );
};

export default Home;
