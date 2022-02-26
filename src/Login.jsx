import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { getallUsers } from './Service/api';
import Header from './Navbar';

const Login = () => {
    const history = useHistory();
    const [users, setUsers] = useState([]);
    const [user_details, setDetails] = useState({
        'username':"",
        'password':""
    });
    useEffect(async()=>
    {
        let response = await getallUsers();
        setUsers(response.data);
        // console.log(user_details);
        // console.log(users);
        // alert("J");
    },[])
    const onValueChange = (events) => 
    {
        user_details[events.target.name] = events.target.value;
        setDetails(user_details);
        // console.log(user_details);
    }

    function rem_log(){}
    var i =0;
    var logged_in = 0;
    var username_rem = "";
    var pwd_rem = "";
    

    const login = async() =>
    {
        if(sessionStorage.getItem("Food_Service_username_login")!=null)
        {
            history.push("/Tiffin-Service-MERN_App/");
        }
        else if(sessionStorage.getItem("RemeberMe_username")!=null && sessionStorage.getItem("RemeberMe_pwd")!=null)
        {
            sessionStorage.setItem("Food_Service_username_login", users[i].emailId);
            sessionStorage.setItem("Food_Service_FirstName_login", users[i].firstName);
            sessionStorage.setItem("Food_Service_LastName_login", users[i].lastName);
            logged_in = 1;
            history.push("/Tiffin-Service-MERN_App/");
        }
        else if(users.length!=0)
        {
            for(i =0; i<users.length; i++)
            {
                // console.log("G ",users[i]);
                if(users[i].emailId==user_details.username)
                {
                    if(users[i].password==user_details.password)
                    {
                        sessionStorage.setItem("Food_Service_username_login", user_details.username);
                        sessionStorage.setItem("Food_Service_FirstName_login", users[i].firstName);
                        sessionStorage.setItem("Food_Service_LastName_login", users[i].lastName);
                        logged_in = 1;
                        history.push("/Tiffin-Service-MERN_App/");
                    }
                    break;
                }
            }
            if(i==users.length)
            {
                alert("Invalid Credential");
            }
        }
        
    
        rem_log()
        {
            if(logged_in==1){
            console.log(document.getElementById('rem').checked);
            if(document.getElementById('rem').checked==true)
            {
                sessionStorage.setItem("RemeberMe_username",user_details.username);
                sessionStorage.setItem("RemeberMe_pwd",user_details.password);
                console.log(user_details);
            }
            username_rem = user_details.username;
            pwd_rem = user_details.password;
            }
        }
    }



  return (
    <>
    <br/><br/><br/><br/><br/><br/>
    <center> <h1> Login </h1> </center>   
    <form className='form_login'>  
        <div className="container_login">   
            <label>Username / Email : </label> <br/> 
            {((sessionStorage.getItem("RemeberMe_username")!="") && (sessionStorage.getItem("RemeberMe_pwd")!="")) ? (
                <>
            <input type="text" placeholder="Enter Username (Email)" name="username" value={(sessionStorage.getItem("RemeberMe_username"))} autoComplete='off' onChange={((events)=>
            {
                onValueChange(events);
            })} required/>  <br/>
            <label>Password : </label>   <br/>
            <input type="password" placeholder="Enter Password" name="password" value={(sessionStorage.getItem("RemeberMe_pwd"))} autoComplete='off' onChange={((events)=>
            {
                onValueChange(events);
            })} required/></>):
            (
                <>
                <input type="text" placeholder="Enter Username (Email)" name="username" autoComplete='off' onChange={((events)=>
            {
                onValueChange(events);
            })} required/>  <br/>
            <label>Password : </label>   <br/>
            <input type="password" placeholder="Enter Password" name="password" autoComplete='off' onChange={((events)=>
            {
                onValueChange(events);
            })} required/>
                </>
            )}

            <br/>  <br/>
            <button class="btn btn-success" type="button" style={{fontSize:"16px", height:"40px", width:"50%", marginLeft:"25%", marginRight:"25%"}} onClick={login}>
                  Login
                </button><br/><br/>
                <div style={{fontSize:"16px", height:"40px", width:"62%", marginLeft:"0"}}>
            <input type="checkbox" onChange={rem_log} name='remember_me' id='rem'/> Remember me   <br/>
            Forgot <a href="#"> password? </a>   
            </div>
        </div>   
    </form>   
    </>
  )
}

export default Login