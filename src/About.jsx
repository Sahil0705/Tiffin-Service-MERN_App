import React from "react";
import web from "../src/images/hero-img.png";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";
import Food_Catelogue from "./Food_Catelogue";

const About = () => {
  return (
    <>
    {(sessionStorage.getItem("Food_Service_username_login") ? <>
    <Food_Catelogue />
    </>
    :
    null)}
      <Commom
        name="Welcome to About Us"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;