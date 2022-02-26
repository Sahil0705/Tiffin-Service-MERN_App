import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getUsers, editUser } from '../Service/api';

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
            marginTop: 20
        }
    }
})

const EditUser = () => {
    const [user, setUser] = useState(initialValue);
    const { firstName, lastName, emailId, contactNo, password, confirm_pwd } = user;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();
    const _id = id;

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadUserDetails = async() => {
        const response = await getUsers(_id);
        setUser(response);
    }

    const editUserDetails = async() => {
        const response = await editUser(id, user);
        history.push('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value})
        console.log(user);
    }

    
    return (
        <>
        <br/><br/><br/><br/>
      <div className="my-5">
        <h1 className="text-center"> Contact US </h1>
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
                <button class="btn btn-outline-primary" type="button" style={{fontSize:"16px", height:"40px", width:"140px"}} onClick={editUserDetails}>
                  Edit Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></>
    )
    
}

export default EditUser;