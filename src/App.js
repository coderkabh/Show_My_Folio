import React from "react";
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import { Route, Switch } from "react-router-dom";
import SignUp from './Components/SignUp';
import AboutUs from "./Components/AboutUs";
import Footer from './Components/Footer';
import Profile from "./Components/Profile";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component = {Home} />
      <Route exact path="/sign-in" component = {SignIn}/>
      <Route exact path="/sign-up" component = {SignUp}/>
      <Route exact path="/about-us">
          <AboutUs/>
          <Footer/>
      </Route>
    <Route exact path="/Profile" component={Profile}/>
    </Switch>
    </>
  );
}

export default App;
