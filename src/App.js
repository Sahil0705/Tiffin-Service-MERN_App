// import Home from './Components/Home'; 
// import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
// import NavBar from './Components/NavBar';
import NotFound from './Components/NotFound'; 
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import AdminPwd from './Components/AdminPwd';

// function App() {
//   return (
//     <BrowserRouter basename={process.env.PUBLIC_URL}>
//       <NavBar />
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/all" component={AllUsers} />
//         <Route exact path="/add" component={AddUser} />
//         <Route exact path="/adminPwd" component={AdminPwd} />
//         <Route exact path="/edit/:id" component={EditUser} />
//         <Route component={NotFound} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import AllUsers from "./Components/AllUsers";
import Admin from "./Admin";
import Register from "./Register";
import Login from './Login';
import Food_Catelogue from './Food_Catelogue';
import Logout from './Logout';
import Profile from './Profile';

const App = () => {
  console.log("fdfdfdfdf");
  return (
    
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AllUsers" component={AllUsers} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/Services" component={Service} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/About" component={About} />
        <Route exact path="/all" component={AllUsers} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Food_Catelogue" component={Food_Catelogue} />
        <Route exact path="/Profile" component={Profile} />
        <Route component={NotFound} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;