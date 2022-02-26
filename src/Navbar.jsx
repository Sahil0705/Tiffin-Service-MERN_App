// IMPORTING APIS
import React, { useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  useMediaQuery,
  Button,
  useScrollTrigger,
  Slide,
  Menu,
  MenuItem,
  ListItemIcon
} from "@material-ui/core";

import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import AllUsers from "./Components/AllUsers";
import {Redirect } from "react-router-dom";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Link, useHistory } from "react-router-dom";

// IMPORTING ICONS
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import Admin from "./Admin";

// REACT APP IMPORTS
// import Home from "./Pages/Home";
// import College from "./Pages/College";
// import About from "./Pages/About";
// import Personal from "./Pages/Personal";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color:'white',
    fontSize:'25px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'white',
    fontSize:'25px'
  },
  title: {
    flexGrow: 1,
    color:'white',
    fontSize:'25px'
  }
}));
var reg_log = "";
var reg_link = "";


function hover1()
{
  document.getElementById('menu_icon1').style.textDecoration='underline';
}
function hover2()
{
  document.getElementById('menu_icon2').style.textDecoration='underline';
}
function hover3()
{
  document.getElementById('menu_icon3').style.textDecoration='underline';
}
function hover4()
{
  document.getElementById('menu_icon4').style.textDecoration='underline';
}
function hover5()
{
  document.getElementById('menu_icon5').style.textDecoration='underline';
}
function hover6()
{
  document.getElementById('menu_icon6').style.textDecoration='underline';
}
function hoverout1()
{
  document.getElementById('menu_icon1').style.textDecoration='none';
}
function hoverout2()
{
  document.getElementById('menu_icon2').style.textDecoration='none';
}
function hoverout3()
{
  document.getElementById('menu_icon3').style.textDecoration='none';
}
function hoverout4()
{
  document.getElementById('menu_icon4').style.textDecoration='none';
}
function hoverout5()
{
  document.getElementById('menu_icon5').style.textDecoration='none';
}
function hoverout6()
{
  document.getElementById('menu_icon6').style.textDecoration='none';
}

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction={"down"} in={!trigger}>
      {children}
    </Slide>
  );
}
var logged_in_name = "";
const Header = (props) => {
  
  const classes = useStyles();
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchor(event.currentTarget);
  };
 
  let history = useHistory();
  function redirect_to_admin_panel()
  {
    
    let person = prompt("Enter the private admin key");
    if(person=='abc')
    {
      // alert("Correct Key, Click ok to Proceed to Admin Panel");
      history.push("/Tiffin-Service-MERN_App/AllUsers");
    }
    else if(person!='abc' && person.length!=0)
    {
      alert("Wrong Key, may be you are not accessbile");
    }
  }
    
    useEffect(()=>
    {
      console.log("H");
      if(sessionStorage.getItem("Food_Service_username_login")!=null)
      {
        logged_in_name = true;
        //alert(logged_in_name);
      }
    })

    
  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
          <AppBar style={{backgroundColor:'black'}}>
            <Toolbar>
              <Typography
                variant="h5"
                component="p"
                color="textSecondary"
                className={classes.title}
              >
                Food Services
              </Typography>
              {isMobile ? (
                <>
                  <IconButton
                    color="textPrimary"
                    className={classes.menuButton}
                    edge="start"
                    aria-label="menu"
                    onClick={handleMenu}
                    
                  >
                    <MenuIcon style={{fontSize:'25px'}} />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchor}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    KeepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right"
                    }}
                    open={open}
                  >
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/Tiffin-Service-MERN_App/"
                    >
                      <ListItemIcon>
                        <HomeIcon style={{fontSize:'22px'}}/>
                      </ListItemIcon>
                      <Typography variant="h5" > Home</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                    >
                      <ListItemIcon>
                        <SchoolIcon style={{fontSize:'22px'}}/>
                      </ListItemIcon>
                      <Typography variant="h5" onClick={redirect_to_admin_panel}> Admin </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/Tiffin-Service-MERN_App/Services"
                    >
                      <ListItemIcon>
                        <PersonIcon style={{fontSize:'22px'}}/>
                      </ListItemIcon>
                      <Typography variant="h5"> Services</Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/Tiffin-Service-MERN_App/Contact"
                    >
                      <ListItemIcon>
                        <BookmarksIcon style={{fontSize:'22px'}}/>
                      </ListItemIcon>
                      <Typography variant="h5"> Contact </Typography>
                    </MenuItem>
                    <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/Tiffin-Service-MERN_App/About"
                    >
                      <ListItemIcon>
                        <BookmarksIcon style={{fontSize:'22px'}}/>
                      </ListItemIcon>
                      <Typography variant="h5"> About </Typography>
                    </MenuItem>

                      <MenuItem
                      onClick={() => setAnchor(null)}
                      component={Link}
                      to="/Tiffin-Service-MERN_App/Register"
                    >
                      <ListItemIcon>
                        <BookmarksIcon style={{fontSize:'22px'}}/>
                      </ListItemIcon>
                      <Typography variant="h5"> Register </Typography>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <div style={{ marginRight: "2rem" }}>
                  <Button
                    variant="text"
                    component={Link}
                    to="/Tiffin-Service-MERN_App/"
                    color="default"
                  >
                    <HomeIcon  style={{fontSize:'22px', color:'white', marginLeft:'10px'}}/>&nbsp;&nbsp;
                    <h4 style={{fontSize:'15px', color:'white', fontWeight:'bold'}} id='menu_icon1' onMouseEnter={hover1} onMouseLeave={hoverout1}>Home</h4>
                  </Button>
                  <Button
                    variant="text"
                    color="default"
                    component={Link}
                    onClick={redirect_to_admin_panel}
                  >
                    <SchoolIcon  style={{fontSize:'22px', color:'white', marginLeft:'10px'}}/>&nbsp;&nbsp;
                    <h4 style={{fontSize:'15px', color:'white', fontWeight:'bold'}} id='menu_icon2' onMouseEnter={hover2} onMouseLeave={hoverout2} >Admin</h4>
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/Tiffin-Service-MERN_App/Services"
                    color="default"
                  >
                    <PersonIcon  style={{fontSize:'22px', color:'white', marginLeft:'10px'}}/>&nbsp;&nbsp;
                    <h4 style={{fontSize:'15px', color:'white', fontWeight:'bold'}} id='menu_icon3' onMouseEnter={hover3} onMouseLeave={hoverout3}>Service</h4>
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/Tiffin-Service-MERN_App/Contact"
                    color="default"
                  >
                    <BookmarksIcon  style={{fontSize:'20px', color:'white', marginLeft:'10px'}}/>&nbsp;&nbsp;
                    <h4 style={{fontSize:'15px', color:'white', fontWeight:'bold'}} id='menu_icon4' onMouseEnter={hover4} onMouseLeave={hoverout4}>Contact</h4>
                  </Button>
                  <Button
                    variant="text"
                    component={Link}
                    to="/Tiffin-Service-MERN_App/About"
                    color="default"
                  >
                    <BookmarksIcon  style={{fontSize:'20px', color:'white', marginLeft:'10px'}}/>&nbsp;&nbsp;
                    <h4 style={{fontSize:'15px', color:'white', fontWeight:'bold'}} id='menu_icon5' onMouseEnter={hover5} onMouseLeave={hoverout5}>About</h4>
                  </Button>
                      <Button
                      variant="text"
                      component={Link}
                      color="default"
                      to="/Tiffin-Service-MERN_App/Register"
                    >
                      <BookmarksIcon  style={{fontSize:'20px', color:'white', marginLeft:'10px'}}/>&nbsp;&nbsp;
                      <h4 style={{fontSize:'15px', color:'white', fontWeight:'bold'}} id='menu_icon6' onMouseEnter={hover6} onMouseLeave={hoverout6}>Register</h4>
                    </Button>
                </div>
              )}
            </Toolbar>
          </AppBar>
          
      </HideOnScroll>
    </div>
  );
};

export default Header;
