import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";

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
  text: {},
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
  title: {
    display: "flex",
    marginTop: "200px",
    marginLeft: "300px",
    width: "1000px",
  },
  post: {
    display: "flex",
    marginLeft: "300px",
    width: "1000px",
  },
  tags: {
    display: "flex",
    marginLeft: "300px",
    width: "1000px",
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
function NewPost() {
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
        className={classes.title}
        id="titile"
        label="Give a title to your hobo-though"
        multiline
        fullWidth
        variant="outlined"
        margin="normal"
      />

      <TextField
        className={classes.post}
        id="post"
        label="What`s in your mind?"
        multiline
        fullWidth
        rows={9}
        variant="outlined"
        margin="normal"
      />
      <TextField
        className={classes.tags}
        id="tags"
        label="Some tags to feel cool"
        multiline
        fullWidth
        variant="outlined"
        margin="normal"
      />
      <Button className={classes.button} color="black" variant="contained">
        Share
      </Button>
    </header>
  );
}

export default NewPost;
