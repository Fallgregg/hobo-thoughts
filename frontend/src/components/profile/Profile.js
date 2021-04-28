import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Divider,
} from "@material-ui/core";
import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Pagination, PaginationItem } from "@material-ui/lab/";
import "../home/Home.css";
import avatar from "../home/avatars/testPic2.jpg";

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
  route: {
    marginTop: "40px",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",
  },
  large: {
    marginTop: "25px",
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
    justifyContent: "flex-end",
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
      {!last && <Divider />}
    </>
  );
}

function Profile() {
  const classes = useStyles();
  const posts = [
    {
      post: {
        title: "Hands up!",
        text:
          "Reading and trying to practise my new technique is too difficult.",
        date: "18.02.2021",
      },
    },
    {
      post: {
        title: "Baby Sakura",
        text: "What do you thibk about Sakura skills? ...",
        date: "22.10.2019",
      },
    },
  ];
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

      <Avatar alt="User" src={avatar} className={classes.large} />
      <Typography className={classes.username}>Sasuke_Uchiha</Typography>
      <Typography className={classes.follow}>
        Following: {1200} &nbsp; &nbsp; Followers: {199}
      </Typography>
      <div className={classes.icon}>
        <Button className={classes.icon}>
          <AddCircleIcon /> Follow
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
