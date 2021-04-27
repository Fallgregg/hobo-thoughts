import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";

import "../home/Home.css";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "4px 0",
    backgroundColor: "black",
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  menu: {
    display: "flex",
    alignSelf: "flex-end",
    justifyContent: "space-evenly",
    marginRight: theme.spacing(2),
  },

  menuButton: {
    fontWeight: 700,
    size: "18px",
  },
  logo: {
    marginRight: "1050px",
  },

  feed: {
    fontWeight: 700,
    size: "18px",
    marginLeft: "120px",
    textAlign: "center",
    marginBottom: "20px",
  },
  paper: {
    height: 140,
    width: 100,
    color: "transperent",
  },
  content: {
    marginTop: "150px",
    width: 1500,
  },

  follow: {
    fontSize: 14,
    textAlign: "center",
    marginTop: "5px",
  },
  root: {
    marginLeft: "40px",
  },
  route: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
  },
  large: {
    display: "flex",
    marginTop: "100px",
    margin: "auto",
    width: "240px",
    height: "240px",
  },
  divider: {
    fontWeight: 700,
    variant: "middle",
  },
  date: {
    fontSize: 10,
    textAlign: "right",
  },
  posts: {
    marginTop: "20px",
  },
  icon: {
    fontSize: 14,
    marginLeft: "1390px",
  },
  button: {
    marginLeft: "750px",
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
function Profile() {
  const classes = useStyles();
  return (
    <header>
      <AppBar className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.menu}>
            <Typography variant="h6" className={classes.logo}>
              hobo-thoughts
            </Typography>
            <Button
              className={classes.menuButton}
              color="inherit"
              //   key: label,
              //   to: href,
              //   component: RouterLink,
            >
              {" "}
              Home
            </Button>
            <Button className={classes.menuButton} color="inherit">
              New thought
            </Button>
            <Button className={classes.menuButton} color="inherit">
              Profile
            </Button>
          </div>
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
      <Button className={classes.button} color="black" variant="contained">
        SAve
      </Button>
    </header>
  );
}

export default Profile;
