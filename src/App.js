import React from "react";
import { Route,Redirect, Switch} from 'react-router-dom'
// import logo from './logo.svg';
// import './App.css';
// import GuestCard from "./components/card_component/guestCard";
import NavBar from "./components/NavBar_component/navBar";
import Login from "./components/Register_component/login";
// import ViewCard from "./components/card_component/viewCard";
import Home from "./components/Home_component/home";
import Register from './components/Register_component/register'
// import Message from "./components/message_component/message";
import AddMessage from "./components/message_component/addMessage";
import ViewMessages from "./components/message_component/viewAllMessage";

function App() {
  return (
    
    <React.Fragment>
    <Switch>
    <Route path="/messages"  component={ViewMessages} />
    <Route path="/login"   component={Login} />
    <Route path="/guestBook/:id" component={AddMessage} />
    <Route path="/home" component={Home} />
    {/* <Route path="/add-product" component={AddProduct} /> */}
    {/* <Route path="/edit/:id" component={AddProduct} /> */}
    <Route path="/register" component={Register} />
    <Redirect from="/" to="/login"/>
    </Switch>
  </React.Fragment>
  );
}

export default App;
