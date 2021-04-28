import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
  TextField,
} from "@material-ui/core";

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
  title: {
    display: "flex",
    marginTop: "150px",
    margin: "auto",
    width: "500px",
  },
  post: {
    display: "flex",
    marginTop: "20px",
    margin: "auto",
    width: "500px",
  },
  tags: {
    display: "flex",
    marginTop: "20px",
    margin: "auto",
    width: "500px",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    marginTop: "15px",
  },
}));

function NewPost() {
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
      <div className={classes.button}>
        <Button className={classes.button} color="black" variant="contained">
          Share
        </Button>
      </div>
    </>
  );
}

export default NewPost;
