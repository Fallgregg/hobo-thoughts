import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Registrated";
import SignUp from "./signUp/SignUp";
import LogIn from "./logIn/logIn";
import NewPost from "./post/NewPost";
import Profile from "./profile/PersonalProfile";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/sign-in">
            <LogIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/create-post">
            <NewPost />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
