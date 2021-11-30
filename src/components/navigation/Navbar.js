import React from "react";
import NavLink from "./NavLink";
import { navLinks } from "./navLinks";
import "../Style.css";

const Nav = () => {
  return (
    <nav>
      <a href="https://www.linkedin.com/in/davidb-mathews/">
        <img
          class="social"
          src={"images/linkedIn_PNG38.png"}
          alt="Linkedin"
          style={{
            height: "35px",
            width: "auto",
            marginLeft: "2em",
            marginTop: "0.9em",
            marginRight: "1em",
          }}
        />
      </a>

      {navLinks.map(({ navLinkId, scrollToId }, idx) => (
        <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
      ))}
    </nav>
  );
};

export default Nav;
