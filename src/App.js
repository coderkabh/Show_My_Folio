import React from "react";
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import { Route, Switch } from "react-router-dom";
import SignUp from './Components/SignUp';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component = {Home} />
      <Route exact path="/sign-in" component = {SignIn}/>
      <Route exact path="/sign-up" component = {SignUp}/>
    </Switch>
    </>
  );
}

export default App;
