import React from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import Header from "../header/Header";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "flex",
    marginTop: "100px",
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
  const Headerpages = [
    { title: "Home", link: "/home" },
    { title: "New thought", link: "/create-post" },
    { title: "Profile", link: "/profile" },
  ];
  return (
    <>
      <Header pages={Headerpages} />
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
