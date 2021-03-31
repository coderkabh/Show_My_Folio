import React from "react";
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component = {Home} />
      <Route exact path="/sign-in" component = {SignIn}/>
    </Switch>
    </>
  );
}

export default App;
