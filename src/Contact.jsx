import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import Food_Catelogue from "./Food_Catelogue";
import { addContact, getUsers } from './Service/api';

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const [users, setUsers] = useState([]);

  let history = useHistory();

  useEffect(async()=>
    {
        let response = await getUsers();
        setUsers(response.data);
        // console.log(user_details);
        // console.log(users);
        // alert("J");
    },[])

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  // const formSubmit = (e) => {
  //   
  //   alert(
  //     `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I watn to say ${data.msg}`
  //   );
  // };

  const formSubmit = async(e) => {
    e.preventDefault();
        alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I watn to say ${data.msg}`
    );
    console.log(data);
    await addContact(data);
    history.push('/');
}
console.log("F ",data)
if(sessionStorage.getItem("Food_Service_username_login")!=null && sessionStorage.getItem("Food_Service_FirstName_login")!=null){
data.fullname = sessionStorage.getItem("Food_Service_FirstName_login");
data.email = sessionStorage.getItem("Food_Service_username_login");
}
  return (
    <>
    {(sessionStorage.getItem("Food_Service_username_login") ? <>
    <Food_Catelogue />
    </>
    :
    null)}<br/><br/>
      <div className="my-5"><br/><br/>
        <h1 className="text-center"> Contact US </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} method="POST">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{color:"black", fontSize:"19px"}}>
                  FullName
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                  style={{fontSize:"16px", height:"40px"}}
                  
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{color:"black", fontSize:"19px"}}>
                  Phone (optional)
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="mobile number"
                  style={{fontSize:"16px", height:"40px"}}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{color:"black", fontSize:"19px"}}>
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  style={{fontSize:"16px", height:"40px"}}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label" style={{color:"black", fontSize:"19px"}}>
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder='Enter your message...'
                  style={{fontSize:"16px", height:"100px"}}
                ></textarea>
              </div>
              
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit" style={{fontSize:"16px", height:"40px", width:"140px"}}>
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/>
    </>
  );
};

export default Contact;