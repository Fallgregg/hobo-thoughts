import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
  TextField,
} from "@material-ui/core";
import "../home/Home.css";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "4px 0",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
  },
  toolbar: {
    width: "100%",
    justifyContent: "flex-end",
  },
  logo: {
    marginRight: "auto",
  },
  menuButton: {
    fontWeight: 700,
    size: "18px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
  },
  username: {
    display: "flex",
    margin: "auto",
    marginTop: "330px",
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
}));

function Settings() {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.header} position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logo}>
            hobo-thoughts
          </Typography>
          <Button className={classes.menuButton} color="inherit">
            Home
          </Button>
          <Button className={classes.menuButton} color="inherit">
            New thought
          </Button>
          <Button className={classes.menuButton} color="inherit">
            Profile
          </Button>
        </Toolbar>
      </AppBar>

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
