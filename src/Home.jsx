import React from "react";
import web from "../src/images/img2.svg";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";
import Food_Catelogue from "./Food_Catelogue";


const Home = () => {
  return (
    <>
    {(sessionStorage.getItem("Food_Service_username_login") ? <>
    <Food_Catelogue />
    </>
    :
    null)}
      <Commom
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;