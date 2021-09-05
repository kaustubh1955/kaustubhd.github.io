import React from "react";
import { Link } from "react-router-dom";
import Main from "../layouts/Main";

const Index = () => (
  <Main
    description={
      "Kaustubh Dwivedi's personal website. B.E. Computer Science + MSc. Physics BITS Pilani, "
    }
  >
    <article className="post" id="index">
      <p>
        {" "}
        Hi there! Welcome to my website. Please feel free to read more{" "}
        <Link to="/about">about me</Link>, or you can check out my{" "}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{" "}
        or <Link to="/contact">contact</Link> me.
      </p>
      <p> </p>
    </article>
  </Main>
);

export default Index;
