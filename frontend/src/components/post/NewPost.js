import React from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import Header from "../header/Header";
import Autocomplete from "@material-ui/lab/Autocomplete";

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

const topics = [
  { title: "Chicks" },
  { title: "Dragons" },
  { title: "Fire" },
  { title: "Books" },
  { title: "Music" },
  { title: "Schindler's List" },
  { title: "Cage The Elephant" },
  { title: "Naruto" },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Node.js" },
  { title: "Stars" },
  { title: "Timothee Chalamet" },
  { title: "Forrest Gump", year: 1994 },
  { title: "Cookies" },
  { title: "Feet" },
  { title: "WW2" },
  { title: "X-files", year: 1993 },
  { title: "The Matrix", year: 1999 },
  { title: "Samurai" },
  { title: "Star Wars", year: 1977 },
  { title: "God" },
];

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
      {/* <TextField
        className={classes.tags}
        id="tags"
        label="Some tags to feel cool"
        multiline
        fullWidth
        variant="outlined"
        margin="normal"
      /> */}
      <Autocomplete
        className={classes.tags}
        multiple
        id="multiple-limit-tags"
        options={topics}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Add tags"
            placeholder="Favorites"
          />
        )}
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
