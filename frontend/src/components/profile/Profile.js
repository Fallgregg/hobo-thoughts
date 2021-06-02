import React from "react";
import {
  Button,
  Typography,
  Grid,
  Avatar,
  Divider,
  withStyles,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import SettingsIcon from "@material-ui/icons/Settings";
import "../home/Home.css";
import avatar from "../home/avatars/testPic2.jpg";
import Header from "../header/Header";
import { getProfileinfo } from "../../API/api";
import { Link } from "react-router-dom";
import PostItem from "../postItem/PostItemProfile";
import PostList from "../postList/PostList";

const styles = (theme) => ({
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
  icon: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileInfo: {
        login: "",
        followers: 0,
        following: 0,
      },
      posts: [],
    };
    this.loadProfileInfo = this.loadProfileInfo.bind(this);
  }

  componentDidMount() {
    this.loadProfileInfo();
  }

  async loadProfileInfo() {
    const data = await getProfileinfo();
    this.setState(data);
  }

  render() {
    const isPersonal = false;
    const { classes } = this.props;
    const {
      posts,
      profileInfo: { login, followers, following },
    } = this.state;

    const Headerpages = [
      { title: "Home", link: "/home" },
      { title: "New thought", link: "/create-post" },
      { title: "Profile", link: "/profile" },
    ];
    return (
      <>
        <Header pages={Headerpages} />
        <Avatar alt="User" src={avatar} className={classes.large} />
        <Typography className={classes.username}>{login}</Typography>
        <Typography className={classes.follow}>
          Following: {following} &nbsp; &nbsp; Followers: {followers}
        </Typography>
        <div className={classes.icon}>
          {isPersonal && (
            <Button className={classes.icon}>
              <AddCircleIcon /> Follow
            </Button>
          )}
          {!isPersonal && (
            <Button component={Link} to="/settings">
              <SettingsIcon /> Settings
            </Button>
          )}
        </div>
        <Divider className={classes.divider} />
        <Grid container justify="center" className={classes.posts}>
          <Grid item xs={6}>
            <PostList>
              {posts.map((post, index) => {
                const last = index === posts.length - 1;
                return <PostItem post={post} last={last} />;
              })}
            </PostList>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Profile);
