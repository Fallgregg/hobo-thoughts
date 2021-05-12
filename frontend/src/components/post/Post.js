import React from "react";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import "../home/Home.css";
import avatar from "../home/avatars/testPic1.jpg";
import Chip from "@material-ui/core/Chip";
import Header from "../header/Header";
import { Link } from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { red } from "@material-ui/core/colors";
import avatar2 from "../home/avatars/testPic4.jpg";
const useStyles = makeStyles(() => ({
  content: {
    margin: "32px",
  },
  title: {
    display: "flex",
    marginTop: "200px",
    width: "1000px",
  },
  post: {
    display: "flex",

    width: "1500px",
  },
  tags: {
    display: "flex",
  },
  divider: {
    fontWeight: 700,
    variant: "middle",
  },
  date: {
    fontSize: 10,
    textAlign: "right",
  },
  section2: {
    width: "100%",
    marginTop: "15px",
  },
  section3: {
    width: "100%",
    justifyContent: "space-between",
  },
  commentsSection: {
    margin: "auto",
  },
  root: {
    alignSelf: "flex-start",
    maxWidth: 600,
    backgroundColor: "inherit",
  },
  avatar: {
    backgroundColor: red[500],
  },
  paper: {
    backgroundColor: "inherit",
  },
  button: {
    display: "flex",
    margin: "auto",
  },
}));

function PostItem(props) {
  const {
    user: { username, avatar },
    post: { title, text, date },
  } = props;
  const classes = useStyles();

  return (
    <>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Fallgregg" src={avatar} />
          </ListItemAvatar>
          <ListItemText primary={username} />
        </ListItem>
      </List>
      <Typography gutterBottom variant="h4">
        {title}
      </Typography>
      <Typography color="textSecondary" variant="body2">
        {text}
      </Typography>
      <Typography className={classes.date}>{date} </Typography>
      <Divider variant="middle" />
    </>
  );
}

function Home() {
  const handleClick = () => {};
  const classes = useStyles();
  const Headerpages = [
    { title: "Home", link: "/home" },
    { title: "New thought", link: "/create-post" },
    { title: "Profile", link: "/profile" },
  ];
  const user = {
    username: "Fallgregg",
    avatar: avatar,
  };
  const post = {
    title: "That book omg ..",
    text:
      // eslint-disable-next-line no-multi-str
      "O Captain! my Captain! our fearful trip is done,\
        The ship has weather’d every rack, the prize we sought is won,\
        The port is near, the bells I hear, the people all exulting,\
        While follow eyes the steady keel, the vessel grim and daring;\
                                 But O heart! heart! heart!\
                                    O the bleeding drops of red,\
                                       Where on the deck my Captain lies,\
                                          Fallen cold and dead\
        O Captain! my Captain! rise up and hear the bells;\
        Rise up—for you the flag is flung—for you the bugle trills,\
        For you bouquets and ribbon’d wreaths—for you the shores a-crowding,\
        For you they call, the swaying mass, their eager faces turning;\
                                 Here Captain! dear father!\
                                    This arm beneath your head!\
                                       It is some dream that on the deck,\
                                         You’ve fallen cold and dead.",
    date: "20.04.2021",
  };
  return (
    <>
      <Header pages={Headerpages} />
      <div className={classes.content}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={5}>
            <PostItem user={user} post={post} />

            {/* tags */}
            <div className={classes.section2}>
              <div className={classes.section3}>
                <Chip
                  onClick={handleClick}
                  className={classes.chip}
                  label="Poetry"
                />
                <Chip
                  onClick={handleClick}
                  className={classes.chip}
                  label="Movies"
                />
                <Chip
                  onClick={handleClick}
                  className={classes.chip}
                  label="English"
                />
                <Chip
                  onClick={handleClick}
                  className={classes.chip}
                  label="Lit"
                />
              </div>
            </div>
          </Grid>

          <Grid item xs={7} className={classes.tags}>
            <div className={classes.commentsSection}>
              <div className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar
                      component={Link}
                      to="/profile"
                      src={avatar2}
                      className={classes.avatar}
                    ></Avatar>
                  }
                  title={"2k7_kid"}
                  subheader="13.06.2020"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    My loneliness is killing me (and I). I must confess I still
                    believe (still believe). When I'm not with you, I lose my
                    mind. Give me a sign.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
                <Divider />
              </div>
              <div className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar
                      component={Link}
                      to="/profile"
                      className={classes.avatar}
                    ></Avatar>
                  }
                  title={"GnR_fan"}
                  subheader={"19.10.2018"}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Don't you cry tonight. I still love you baby. Don't you cry
                    tonight.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                </CardActions>
                <Divider />
                <TextField
                  id="post"
                  label="Share your opinion about this thought"
                  multiline
                  fullWidth
                  rows={9}
                  variant="outlined"
                  margin="normal"
                />
                <Button variant="contained" component={Link} to="/post">
                  Share
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
