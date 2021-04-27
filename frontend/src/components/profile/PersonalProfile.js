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

import Avatar from "@material-ui/core/Avatar";

import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import Divider from "@material-ui/core/Divider";
import "../home/Home.css";
import avatar1 from "../home/avatars/testPic1.jpg";

import SettingsIcon from "@material-ui/icons/Settings";

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
    marginTop: "40px",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",
  },
  large: {
    // display: "flex",
    marginTop: "25px",
    // marginLeft: "650px",
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

  icon: {
    display: "flex",
    alignSelf: "flex-end",
  },
  button: {
    marginLeft: "750px",
  },
}));

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
    post: { title, text, date },
    last,
  } = props;
  const classes = useStyles();
  return (
    <>
      <ListItem>
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              {text}
              <Typography color="textPrimary" className={classes.date}>
                {date}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider />
      {!last && <Divider variant="inset" />}
    </>
  );
}
function Profile() {
  const classes = useStyles();
  const posts = [
    {
      post: {
        title: "That book omg ..",
        text:
          "- Last week I`ve finished reading 'Find me ' by Andre Aciman ...",
        date: "20.04.2021",
      },
    },
    {
      post: {
        title: "CTE concert",
        text: "In 2017 I`ve visited Germany to listen to my favorite band ...",
        date: "18.02.2020",
      },
    },
    {
      post: {
        title: "Baby dolphins",
        text: "Visiting those nice creaters should be in ur backet-list !! ",
        date: "12.11.2020",
      },
    },
  ];
  return (
    <>
      {/* <AppBar className={classes.header}>
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
        
      </AppBar> */}
      <AppBar className={classes.header} position="static">
        <Toolbar className={classes.toolbar}>
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
        </Toolbar>
      </AppBar>

      <Avatar alt="User" src={avatar1} className={classes.large} />
      <Typography className={classes.username}>Fallgregg</Typography>
      <Typography className={classes.follow}>
        Following: {120} &nbsp; &nbsp; Followers: {19}
      </Typography>
      <div className={classes.icon}>
        <Button>
          <SettingsIcon /> Settings
        </Button>
      </div>
      <Divider className={classes.divider} />

      <Grid container justify="center" className={classes.posts}>
        <Grid item xs={6}>
          <PostList>
            {posts.map((post, index) => {
              const { post: postData } = post;
              const last = index === posts.length - 1;
              return <PostItem post={postData} last={last} />;
            })}
          </PostList>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
