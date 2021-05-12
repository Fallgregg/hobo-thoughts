import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import SignUp from "./signUp/SignUp";
import SignIn from "./signIn/SignIn";
import NewPost from "./newPost/NewPost";
import Profile from "./profile/Profile";
import Post from "./post/Post";
import Settings from "./settings/Settings";
import Comments from "./comments/Comments";

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
          <Route path="/post">
            <Post />
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
