import React from "react";
import { Avatar, Button, makeStyles, TextField } from "@material-ui/core";
import "../home/Home.css";
import Header from "../header/Header";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
  },
  username: {
    display: "flex",
    margin: "auto",
    marginTop: "30px",
    width: "500px",
  },
  email: {
    display: "flex",
    margin: "auto",
    marginTop: "15px",
    width: "500px",
  },
  password: {
    display: "flex",
    margin: "auto",
    marginTop: "15px",
    width: "500px",
  },
  input: {
    display: "none",
  },
  large: {
    marginTop: "25px",
    margin: "auto",
    width: "240px",
    height: "240px",
  },
}));

function Settings() {
  const classes = useStyles();
  const Headerpages = [
    { title: "Home", link: "/home" },
    { title: "New thought", link: "/create-post" },
    { title: "Profile", link: "/profile" },
  ];
  return (
    <>
      <Header pages={Headerpages} />
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
      />
      <label htmlFor="icon-button-file">
        {/* <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton> */}
        <Avatar className={classes.large} alt="Upload Picture" srcSet="" />
      </label>
      <TextField
        className={classes.username}
        id="username"
        label="Username"
        multiline
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <TextField
        className={classes.email}
        id="email"
        label="Email"
        multiline
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <TextField
        className={classes.password}
        id="password"
        label="Password"
        multiline
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <div className={classes.button}>
        <Button className={classes.button} color="black" variant="contained">
          SAve
        </Button>
      </div>
    </>
  );
}

export default Settings;
