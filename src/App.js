import React from "react";
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import { Route, Switch } from "react-router-dom";
import SignUp from './Components/SignUp';
import AboutUs from "./Components/AboutUs";
import Footer from './Components/Footer';


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
    </Switch>
    </>
  );
}

export default App;
