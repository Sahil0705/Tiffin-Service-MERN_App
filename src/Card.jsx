import React from "react";
import web from "../src/images/s1.jpg";
import { NavLink } from "react-router-dom";
// import {veg} from "../public/images/veg.jpg";
// import {non_veg} from "../public/images/nonveg.jpg";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-12 mx-auto">
        <div className="card">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} style={{height:"200px", borderRadius:"0"}}/>
          <div className="card-body">
            <h2 className="card-title font-weight-bold" align='center'>{props.title}
            
            {(props.type=='veg') ? 
            (<>
              <img src="images/veg.jpg" className="Veg" style={{marginLeft:"10px",width:"21px",height:"21px", borderRadius:"0"}}/>
            </>) : 
            (
              <>
              <img src="images/nonveg.jpg" className="NonVeg" style={{marginLeft:"10px", width:"21px",height:"21px", borderRadius:"0"}}/>
              </>
            )}
            
            </h2>
            {/* <p style={{color:"black", display:"inline",float:"right"}}>Price &nbsp;: &nbsp;&nbsp;{props.price}</p> */}
          
            <NavLink to="" className="btn btn-primary" style={{marginTop:"15px", fontSize:"15px"}}>
              Add to Cart
            </NavLink>
            <p style={{marginTop:"5%",float:"right",color:"brown",fontWeight:"bold",fontSize:"17px",display:"inline"}}><span style={{color:"black", marginRight:"0%"}}>Price &nbsp;:</span> &nbsp;&nbsp;{props.price}</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;