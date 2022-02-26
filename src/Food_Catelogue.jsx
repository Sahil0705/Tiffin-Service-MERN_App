import { Button } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

const Food_Catelogue = () => {
    let LoggedInUsername = sessionStorage.getItem("Food_Service_username_login");
    let LoggedInFirstname = sessionStorage.getItem("Food_Service_FirstName_login");
    let LoggedInLastname = sessionStorage.getItem("Food_Service_LastName_login");
    // console.log(LoggedInUsername);
  return (
    <div style={{marginBottom:"0px"}}><br/><br/><br/><br/><br/>
    <table align='right' width="100%" >
        <tr>
        <td width="90%"><h1 align="left" style={{marginLeft:"2%", display:"inline"}}>Hello! <b>{LoggedInFirstname} {LoggedInLastname}</b></h1></td>
            <td width="5%" align='right'><Button type='button' color='primary' style={{fontSize:"18px", marginRight:"2px", backgroundColor:"purple", color:'white'}}>Cart</Button></td>
            &nbsp;&nbsp;&nbsp;&nbsp;<td width="5%" align='right'><Button type='button' color='secondary' style={{fontSize:"18px", marginRight:"2px", backgroundColor:"blue", color:'white'}} component={Link} to="/Profile">Profile</Button></td>
        </tr>
    </table>
    </div>
    
  )
}

export default Food_Catelogue