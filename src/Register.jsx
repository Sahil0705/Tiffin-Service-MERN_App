import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addUser } from './Service/api';
import { useHistory } from 'react-router-dom';
import { createMuiTheme,  MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch, Link, useHistory } from "react-router-dom";

const initialValue = {
    firstName: '',
    lastName: '',
    emailId: '',
    contactNo: '',
    password: '',
    confirm_pwd: ''
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 10
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { firstName, lastName, emailId, contactNo, password, confirm_pwd } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async() => {
        console.log(user);
        await addUser(user);
        alert("Registered Successfully")
        history.push('/login');
    }


    return (
        <>
        <br/><br/><br/><br/>
      <div className="my-5">
        <h1 className="text-center"> Register </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{color:"black", fontSize:"19px"}}>
                  First Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="firstName"
                  value={user.firstName}
                  onChange={onValueChange}
                  placeholder="Enter your name"
                  style={{fontSize:"16px", height:"40px"}}
                  
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{color:"black", fontSize:"19px"}}>
                  Last Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="lastName"
                  value={user.lastName}
                  onChange={onValueChange}
                  placeholder="Enter your name"
                  style={{fontSize:"16px", height:"40px"}}
                  
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{color:"black", fontSize:"19px"}}>
                  Email
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="emailId"
                  value={user.emailId}
                  onChange={onValueChange}
                  placeholder="Enter your name"
                  style={{fontSize:"16px", height:"40px"}}
                  
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{color:"black", fontSize:"19px"}}>
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="contactNo"
                  value={user.contactNo}
                  onChange={onValueChange}
                  placeholder="mobile number"
                  style={{fontSize:"16px", height:"40px"}}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{color:"black", fontSize:"19px"}}>
                  Password
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="password"
                  value={user.password}
                  onChange={onValueChange}
                  placeholder="mobile number"
                  style={{fontSize:"16px", height:"40px"}}
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" style={{color:"black", fontSize:"19px"}}>
                  Confirm Password
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="confirm_pwd"
                  value={user.confirm_pwd}
                  onChange={onValueChange}
                  placeholder="mobile number"
                  style={{fontSize:"16px", height:"40px"}}
                />
              </div><br/>
              <div class="col-12" style={{marginLeft:"35%", marginRight:"55%", width:"10%"}}>
                <button class="btn btn-outline-primary" type="button" style={{fontSize:"16px", height:"40px", width:"140px"}} onClick={addUserDetails}>
                  Submit form
                </button><br/><br/>
                <Button component={Link} to="/login">Login</Button>
              </div>
            </form>
          </div>
        </div>
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </>
    )
}

export default AddUser;