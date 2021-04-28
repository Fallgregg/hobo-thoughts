import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Profile from "./components/profile/Profile";
// import Registrated from "./components/home/Registrated";
// import Home from "./components/home/Home";
// import LogIn from "./components/logIn/logIn";
// import NewPost from "./components/post/NewPost";
// import PersonalProfile from "./components/profile/PersonalProfile";
// import Settings from "./components/settings/Settings";
// import SignUp from "./components/signUp/SignUp";
import Comments from "./components/comment/Comments";

ReactDOM.render(
  <React.StrictMode>
    <Comments />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
