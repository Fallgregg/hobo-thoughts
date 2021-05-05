import React from "react";
import {
  withStyles,
  Typography,
  TextField,
  Grid,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import "./Home.css";
import Header from "../header/Header";
import PropTypes from "prop-types";
import PostList from "../postList/PostList";
import PostItem from "../postItem/PostItemHomepage";
import { getHomepageInfo } from "../../API/api";

const styles = (theme) => ({
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
  postList: {
    marginLeft: "40px",
  },
  route: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
  },
});

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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      value: 0,
    };
    this.loadHomepageInfo = this.loadHomepageInfo.bind(this);
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  componentDidMount() {
    this.loadHomepageInfo();
  }

  async loadHomepageInfo() {
    const data = await getHomepageInfo();
    this.setState(data);
  }

  handleTabChange(event, value) {
    this.setState({ value });
  }

  render() {
    const { classes } = this.props;
    const { posts, value } = this.state;
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
                    onChange={this.handleTabChange}
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
                      return (
                        <PostItem user={user} post={postData} last={last} />
                      );
                    })}
                  </PostList>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <PostList>
                    {posts.map((post, index) => {
                      const { user, post: postData } = post;
                      const last = index === posts.length - 1;
                      return (
                        <PostItem user={user} post={postData} last={last} />
                      );
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
}

export default withStyles(styles)(Home);
