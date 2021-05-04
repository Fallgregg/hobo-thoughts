import React from "react";
import {
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TextField,
  Divider,
  Grid,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";
import { MemoryRouter, Route, Link } from "react-router-dom";
import { Autocomplete, Pagination, PaginationItem } from "@material-ui/lab";
import "./Home.css";
import avatar1 from "./avatars/testPic1.jpg";
import avatar2 from "./avatars/testPic2.jpg";
import avatar3 from "./avatars/testPic3.jpg";
import Header from "../header/Header";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
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
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

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
      <ListItem button component={Link} to="/comments">
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

function HomeRegistrated() {
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
  const postsGeneral = [
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
  const Headerpages = [
    { title: "Home", link: "/home" },
    { title: "New thought", link: "/create-post" },
    { title: "Profile", link: "/profile" },
  ];
  const HeaderpagesNotLoggedIn = [
    { title: "Home", link: "/home" },
    { title: "Sign In", link: "/sign-in" },
    { title: "Sign Up", link: "/sign-up" },
  ];
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const loggedIn = true;
  return (
    <>
      {loggedIn && <Header pages={Headerpages} />}
      {!loggedIn && <Header pages={HeaderpagesNotLoggedIn} />}
      <div className={classes.content}>
        <Grid container justify="center" spacing={4}>
          {loggedIn && (
            <Grid item xs={8}>
              <div disableRipple className={classes.feed}>
                <Tabs
                  indicatorColor="primary"
                  value={value}
                  onChange={handleChange}
                >
                  <Tab label="Following" />
                  <Tab label="General" />
                </Tabs>
              </div>
              <TabPanel value={value} index={0}>
                <PostList>
                  {posts.map((post, index) => {
                    const { user, post: postData } = post;
                    const last = index === posts.length - 1;
                    return <PostItem user={user} post={postData} last={last} />;
                  })}
                </PostList>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <PostList>
                  {postsGeneral.map((post, index) => {
                    const { user, post: postData } = post;
                    const last = index === postsGeneral.length - 1;
                    return <PostItem user={user} post={postData} last={last} />;
                  })}
                </PostList>
              </TabPanel>
            </Grid>
          )}
          {!loggedIn && (
            <Grid item xs={8}>
              <PostList>
                {posts.map((post, index) => {
                  const { user, post: postData } = post;
                  const last = index === posts.length - 1;
                  return <PostItem user={user} post={postData} last={last} />;
                })}
              </PostList>
            </Grid>
          )}
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

export default HomeRegistrated;
