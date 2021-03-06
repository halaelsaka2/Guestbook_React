import React from "react";
import { Route,Redirect, Switch} from 'react-router-dom'
import Login from "./components/Register_component/login";
import Home from "./containers/Home";
import Register from './components/Register_component/register'
import AddMessage from "./components/AddMessage";
import ViewMessages from "./components/ViewAllMessages";
import NavBar from "./components/NavBar";

function App() {
  return (
    
    <React.Fragment>
    <NavBar />
    <Switch>
      <Route path="/messages"  component={ViewMessages} />
      <Route path="/login"   component={Login} />
      <Route path="/guestBook/:id" component={AddMessage} />
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
      <Redirect from="/" to="/login"/>
    </Switch>
  </React.Fragment>
  );
}

export default App;
