import React from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const Profile = () => {
    let history = useHistory();
    function logout()
    {
        // alert("Hello");
        sessionStorage.removeItem("Food_Service_username_login");
        sessionStorage.removeItem("Food_Service_FirstName_login");
        sessionStorage.removeItem("Food_Service_LastName_login"); 
        history.push("/");
        // alert("Bye");
    }
  return (
    <div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <Button type='button' color='secondary' style={{fontSize:"18px", marginRight:"37%",marginLeft:"37%", width:"24%", backgroundColor:"blue", color:'white'}} onClick={logout}>Logout</Button>
    </div>
  )
}

export default Profile