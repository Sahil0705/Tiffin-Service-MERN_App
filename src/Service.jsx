import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import Food_Catelogue from "./Food_Catelogue";

const Services = () => {
  return (
    <>
    {(sessionStorage.getItem("Food_Service_username_login") ? <>
    <Food_Catelogue />
    </>
    :
    null)}<br/><br/>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div><br/><br/>
    </>
  );
};

export default Services;