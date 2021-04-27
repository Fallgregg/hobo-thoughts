import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { MemoryRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import Divider from "@material-ui/core/Divider";
import "./Home.css";
import avatar1 from "./avatars/testPic1.jpg";
import avatar2 from "./avatars/testPic2.jpg";
import avatar3 from "./avatars/testPic3.jpg";

const useStyles = makeStyles((theme) => ({
  // header: {
  //   padding: "4px 0",
  //   backgroundColor: "black",

  //   display: "flex",
  //   flexDirection: "row",
  // },
  // toolbar: {
  //   width: "100%",
  //   justifyContent: "flex-end",
  // },
  // logo: {
  //   marginRight: "auto",
  // },
  // menuButton: {
  //   fontWeight: 700,
  //   size: "18px",
  // },
  header: {
    // padding: "4px 0",
    // backgroundColor: "black",

    // display: "flex",
    // flexDirection: "row",
    padding: "4px 0",
    backgroundColor: "black",
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  logo: {
    fontWeight: 600,
    textAlign: "left",
  },
  menu: {
    alignSelf: "flex-end",
  },
  menuButton: {
    fontWeight: 700,
    size: "18px",
  },

  feed: {
    fontWeight: 700,
    size: "18px",
    marginLeft: "120px",
    textAlign: "center",
    marginBottom: "20px",
  },
  content: {
    margin: "32px",
  },
  tags: {
    // marginTop: "100px",
  },
  typography: {
    fontSize: 10,
    textAlign: "center",
  },
  postList: {
    marginLeft: "40px",
  },
  route: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
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

function PostList(props) {
  const classes = useStyles();
  return (
    <div>
      <List className={classes.postList}>{props.children}</List>
      <div className={classes.route}>
        <MemoryRouter initialEntries={["/inbox"]} initialIndex={0}>
          <Route>
            {({ location }) => {
              const query = new URLSearchParams(location.search);
              const page = parseInt(query.get("page") || "1", 10);
              return (
                <Pagination
                  page={page}
                  count={10}
                  renderItem={(item) => (
                    <PaginationItem
                      component={Link}
                      to={`/inbox${
                        item.page === 1 ? "" : `?page=${item.page}`
                      }`}
                      {...item}
                    />
                  )}
                />
              );
            }}
          </Route>
        </MemoryRouter>
      </div>
    </div>
  );
}

function PostItem(props) {
  const {
    user: { username, avatar },
    post: { title, text, date },
    last,
  } = props;
  const classes = useStyles();
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt={username} src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={username}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {title}
              </Typography>
              {text}
              <Typography color="textPrimary" className={classes.typography}>
                {date}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      {!last && <Divider variant="inset" />}
    </>
  );
}

function HomeReg() {
  const classes = useStyles();
  const posts = [
    {
      user: {
        username: "Fallgregg",
        avatar: avatar1,
      },
      post: {
        title: "That book omg ..",
        text:
          "- Last week I`ve finished reading 'Find me ' by Andre Aciman ...",
        date: "20.04.2021",
      },
    },
    {
      user: {
        username: "Sasuke_Uchiha",
        avatar: avatar2,
      },
      post: {
        title: "That book omg ..",
        text:
          "- Last week I`ve finished reading 'Find me ' by Andre Aciman ...",
        date: "20.04.2021",
      },
    },
    {
      user: {
        username: "Fallgregg",
        avatar: avatar3,
      },
      post: {
        title: "That book omg ..",
        text:
          "- Last week I`ve finished reading 'Find me ' by Andre Aciman ...",
        date: "20.04.2021",
      },
    },
    {
      user: {
        username: "Fallgregg",
        avatar: "",
      },
      post: {
        title: "That book omg ..",
        text:
          "- Last week I`ve finished reading 'Find me ' by Andre Aciman ...",
        date: "20.04.2021",
      },
    },
  ];
  return (
    <>
      <AppBar className={classes.header} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.menu}>
            <Button
              className={classes.menuButton}
              color="inherit"
              //   key: label,
              //   to: href,
              //   component: RouterLink,
            >
              Home
            </Button>
            <Button className={classes.menuButton} color="inherit">
              Sign in
            </Button>
            <Button className={classes.menuButton} color="inherit">
              Sign up
            </Button>
          </div>
          <Typography variant="h3" classname={classes.logo}>
            hobo-thoughts
          </Typography>
          <Typography variant="h9" classname={classes.logo}>
            for settled minds
          </Typography>
        </Toolbar>
      </AppBar>

      <div className={classes.content}>
        <Grid container justify="center" spacing={4}>
          <Grid item xs={8}>
            <div disableRipple className={classes.feed}>
              <Button color="inherit">Your feed</Button>|
              <Button color="inherit">Genral feed</Button>
              <Divider />
            </div>
            <PostList>
              {posts.map((post, index) => {
                const { user, post: postData } = post;
                const last = index === posts.length - 1;
                return <PostItem user={user} post={postData} last={last} />;
              })}
            </PostList>
          </Grid>

          <Grid item xs={4} className={classes.tags}>
            <Autocomplete
              multiple
              id="tags-standard"
              options={topics}
              getOptionLabel={(option) => option.title}
              defaultValue={[topics[6]]}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Tags"
                  placeholder="More "
                />
              )}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HomeReg;
