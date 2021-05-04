import React from "react";
import {
  Button,
  makeStyles,
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
import SettingsIcon from "@material-ui/icons/Settings";
import { Pagination, PaginationItem } from "@material-ui/lab/";
import "../home/Home.css";
import avatar from "../home/avatars/testPic1.jpg";
import Header from "../header/Header";

const useStyles = makeStyles((theme) => ({
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
      <ListItem button component={Link} to="/comments">
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

function PersonalProfile() {
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
  const Headerpages = [
    { title: "Home", link: "/home" },
    { title: "New thought", link: "/create-post" },
    { title: "Profile", link: "/profile" },
  ];
  // const isPersonal = true;
  return (
    <>
      <Header pages={Headerpages} />

      <Avatar alt="User" src={avatar} className={classes.large} />
      <Typography className={classes.username}>Fallgregg</Typography>
      <Typography className={classes.follow}>
        Following: {120} &nbsp; &nbsp; Followers: {19}
      </Typography>
      <div className={classes.icon}>
        <Button component={Link} to="/settings" className={classes.icon}>
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

export default PersonalProfile;
