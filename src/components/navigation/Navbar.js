import React from "react";
import NavLink from "./NavLink";
import { navLinks } from "./navLinks";
import "../Style.css";

const Nav = () => {
  return (
    <nav>
      {navLinks.map(({ navLinkId, scrollToId }, idx) => (
        <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
      ))}
      <a href="https://www.linkedin.com/in/davidb-mathews/">
        <img
          class="social"
          src={"images/linkedIn_PNG38.png"}
          alt="Linkedin"
          style={{
            height: "35px",
            width: "auto",
            marginLeft: "2em",
            marginTop: "-0.1em",
            marginRight: "2em",
          }}
        />
      </a>
    </nav>
  );
};

export default Nav;
