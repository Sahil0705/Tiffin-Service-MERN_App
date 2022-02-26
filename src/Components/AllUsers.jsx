import { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, makeStyles } from '@material-ui/core'
import { getallUsers, deleteUser } from '../Service/api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    user_details:
    {
        width: '90%',
        height: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '50px',
        overflowX: 'auto',
    },
    table: {
        width: '200%',
        margin: '40px 0 0 5px',
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF',
            textAlign:'center'
        }
    },
    row: {
        '& > *': {
            fontSize: 18,
            textAlign:'center'
        }
    }
})


const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllUsers();
    }, []);

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getAllUsers();
    }

    const getAllUsers = async () => {
        let response = await getallUsers();
        setUsers(response.data);
    }

    return (
        <>
        <br/><br/><br/><br/><br/><br/>
        <h1 align='center' style={{width:'100%', textAlign:'center'}}>List of All registered Customers 😀</h1>
        <div className={classes.user_details}>
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Password</TableCell>
                    <TableCell>Confirm Password</TableCell>
                    <TableCell>Update</TableCell>
                    <TableCell>Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user) => (
                    <TableRow className={classes.row} key={user._id}>
                        <TableCell>{user.firstName}</TableCell>
                        <TableCell>{user.lastName}</TableCell>
                        <TableCell>{user.emailId}</TableCell>
                        <TableCell>{user.contactNo}</TableCell>
                        <TableCell>{user.password}</TableCell>
                        <TableCell>{user.confirm_pwd}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10, fontSize:"15px"}} component={Link} to={`/Tiffin-Service-MERN_App/edit/${user._id}`}>Edit</Button>
                        </TableCell>
                        <TableCell>
                        <Button color="secondary" variant="contained" onClick={() => deleteUserData(user._id)} style={{fontSize:"15px"}}>Delete</Button> 
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        </div>
        <Button color="primary" variant="contained" style={{marginLeft:"45%", marginRight:"45%", width:"10%", fontSize:"15px", marginBottom:"40px"}} component={Link} to={`/Tiffin-Service-MERN_App/add`} id='add_user'>Add User</Button>
        <br/><br/>
        </>
    )
}

export default AllUsers;