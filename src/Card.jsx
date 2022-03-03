import React, { useEffect, useState } from "react";
import { addCart,deleteCart,getallitemsfromCartByEmail } from "./Service/api";
import { Button } from "@material-ui/core";

const Card = (props) => {
  let card_id;
  const [cart_toggle, setCartBtn] = useState({
    title:"Add to Cart",
    backgroundColor:"blue"
  });
  // console.log(props.user_cart);
  const tocart = async(product_id=0) =>
  {
    if(cart_toggle.title=="Add to Cart")
    {
      // alert(props.title);
      let added_item = {
        emailId:sessionStorage.getItem("Food_Service_username_login"),
        prodId:props.id,
        prodName:props.title,
        price:props.price,
        quantity:props.quantity,
        vegNonveg:props.type
      }
      //console.log(added_item);
      await addCart(added_item);
      //console.log(added_item);
      alert("Added to Cart");
      props.user_cart[props.user_cart.length] = added_item;
      setCartBtn({title:"Added to Cart",backgroundColor:"red"});
    }
    else
    {
      // for(var i = 0;i<props.user_cart.length;i++)
      // {
      //   console.log("A",product_id," ",props.user_cart[i]['prodId']);
      //   if(props.user_cart[i]['prodId']==product_id)
      //   {
      //     console.log("B");
      //     card_id = props.user_cart[i]['_id'];
      //     console.log(card_id);
      //     break;
      //   }
      // }
      // console.log(card_id);
      // const deletedItem = await deleteCart(card_id,sessionStorage.getItem("Food_Service_username_login"),props.id);
      
    }
  }

  
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
      
            <Button id='toggle_btn' className="btn btn-primary" style={{marginTop:"15px", fontSize:"15px", backgroundColor:cart_toggle.backgroundColor, color:"white"}} onClick={tocart}>
              {cart_toggle.title}
            </Button>

            <p style={{marginTop:"5%",float:"right",color:"brown",fontWeight:"bold",fontSize:"17px",display:"inline"}}><span style={{color:"black", marginRight:"0%"}}>Price &nbsp;:</span> &nbsp;&nbsp;{props.price}</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;