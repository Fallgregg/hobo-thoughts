import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import SignUp from "./signUp/SignUp";
import SignIn from "./logIn/SignIn";
import NewPost from "./post/NewPost";
import Profile from "./profile/PersonalProfile";
import Comments from "./comment/Comments";
import Settings from "./settings/Settings";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/sign-in">
            <SignIn />
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
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
