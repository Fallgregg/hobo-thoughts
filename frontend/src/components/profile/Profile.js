import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Avatar from "@material-ui/core/Avatar";

import Divider from "@material-ui/core/Divider";
import "../home/Home.css";
import avatar from "../home/avatars/testPic2.jpg";
import AddCircleIcon from "@material-ui/icons/AddCircle";

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
  tags: {
    marginTop: "100px",
  },
  username: {
    fontSize: 30,
    textAlign: "center",
    marginTop: "5px",
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
    marginLeft: "650px",
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
      <Avatar alt="User" src={avatar} className={classes.large} />
      <Typography className={classes.username}>Sasuke_Uchiha</Typography>
      <Typography className={classes.follow}>
        Following: {50} &nbsp; &nbsp; Followers: {300}
      </Typography>
      <Button className={classes.icon}>
        <AddCircleIcon /> Follow
      </Button>
      <Divider className={classes.divider} />

      <Grid container justify="center" className={classes.posts} spacing={2}>
        <Grid item xs={4}>
          <ListItem>
            <ListItemText
              primary="Baby Sakura"
              secondary={
                <React.Fragment>
                  {"What do you thibk about Sakura skills? ..."}
                  <Typography color="textPrimary" className={classes.date}>
                    22.10.2019
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              primary="Hands up!"
              secondary={
                <React.Fragment>
                  {
                    "Reading and trying to practise my new technique is too difficult."
                  }
                  <Typography color="textPrimary" className={classes.date}>
                    18.02.2021
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </Grid>
      </Grid>
      <Button className={classes.button}>More</Button>
    </header>
  );
}

export default Profile;
