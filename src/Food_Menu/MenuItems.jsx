import React, { useEffect, useState } from 'react'
import Card from '../Card';
import Food_Catelogue from '../Food_Catelogue';

const MenuItems = (props) => {
    //console.log(props.cart);
    let user_cart = [];
    if(sessionStorage.getItem("Food_Service_username_login")!=null)
    {
      for(var i = 0; i<props.cart.length; i++)
      {
        if(props.cart[i].emailId==sessionStorage.getItem("Food_Service_username_login"))
        {
          //console.log(props.cart[i].emailId);
          user_cart[user_cart.length] = props.cart[i];
        }
      }
      //console.log("E");
      console.log("E"+" "+user_cart);
    }
    let display_arr = props.items;
    console.log(display_arr);
    console.log(user_cart);
    let f = 0;
    display_arr = display_arr.filter((curr)=>
    {
      for(var i = 0; i<user_cart.length;i++)
      {
        if(user_cart[i]["prodId"]==curr['id'])
        {
          f = 1;
        }
      }
      if(f==0)
      {
        return curr;
      }
      f = 0;
    })
    console.log("S ",display_arr);

    return (
        <>
           <br/><br/>
           <div>
             <div>
               
             </div>
           </div>
           
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">  
            {
                display_arr.map((elem) => 
                {
                    const { id, name, image, description, price, type, quantity } = elem;
                    return <Card key={id} id={id} imgsrc={image} title={name} description={description} type={type} price={price} quantity={quantity} user_cart={user_cart}/>;
                })
            }
            </div>
          </div>
        </div>
      </div><br/><br/>
        </>
    )
}

export default MenuItems
