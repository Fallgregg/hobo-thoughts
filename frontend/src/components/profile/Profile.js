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
  withStyles,
} from "@material-ui/core";
import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Pagination, PaginationItem } from "@material-ui/lab/";
import "../home/Home.css";
import avatar from "../home/avatars/testPic2.jpg";
import Header from "../header/Header";
import { getProfileinfo } from "../../API/api";

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

const useStyles = makeStyles((theme) => ({
  route: {
    marginTop: "40px",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",
  },
  date: {
    fontSize: 10,
    textAlign: "right",
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
      <ListItem button>
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
    const { classes } = this.props;
    const {
      posts,
      profileInfo: { login, followers, following },
    } = this.state;
    // const posts = [
    //   {
    //     post: {
    //       title: "Hands up!",
    //       text:
    //         "Reading and trying to practise my new technique is too difficult.",
    //       date: "18.02.2021",
    //     },
    //   },
    //   {
    //     post: {
    //       title: "Baby Sakura",
    //       text: "What do you thibk about Sakura skills? ...",
    //       date: "22.10.2019",
    //     },
    //   },
    // ];
    const Headerpages = [
      { title: "Home", link: "/" },
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
          <Button className={classes.icon}>
            <AddCircleIcon /> Follow
          </Button>
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
