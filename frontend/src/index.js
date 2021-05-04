import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Profile from "./components/profile/Profile";
// import Registrated from "./components/home/Registrated";
// import LogIn from "./components/logIn/logIn";
// import NewPost from "./components/post/NewPost";
// import PersonalProfile from "./components/profile/PersonalProfile";
// import Settings from "./components/settings/Settings";
// import SignUp from "./components/signUp/SignUp";
// import Comments from "./components/comment/Comments";
// import Home from "./components/home/Home";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
