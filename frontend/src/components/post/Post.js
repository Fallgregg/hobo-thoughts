import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
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
// import { Link } from "react-router-dom";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardContent from "@material-ui/core/CardContent";
// import CardActions from "@material-ui/core/CardActions";
// import IconButton from "@material-ui/core/IconButton";
// import FavoriteIcon from "@material-ui/icons/Favorite";
import { red } from "@material-ui/core/colors";

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
        <Grid container alignItems="center" spacing={3}>
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

          {/* <Grid item xs={6} className={classes.tags}>
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
            <div className={classes.paper} style={{ padding: "25px 20px" }}>
              <Grid container spacing={2}>
                <Grid item>
                  <Avatar alt="Remy Sharp" />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <h4 style={{ margin: 0, textAlign: "left" }}>
                    Michel Michel
                  </h4>
                  <p style={{ textAlign: "left" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean luctus ut est sed faucibus. Duis bibendum ac ex
                    vehicula laoreet. Suspendisse congue vulputate lobortis.
                    Pellentesque at interdum tortor. Quisque arcu quam,
                    malesuada vel mauris et, posuere sagittis ipsum. Aliquam
                    ultricies a ligula nec faucibus. In elit metus, efficitur
                    lobortis nisi quis, molestie porttitor metus. Pellentesque
                    et neque risus. Aliquam vulputate, mauris vitae tincidunt
                    interdum, mauris mi vehicula urna, nec feugiat quam lectus
                    vitae ex.{" "}
                  </p>
                </Grid>
                <Button
                  className={classes.button}
                  component={Link}
                  to="/comments"
                  variant="body2"
                >
                  {"Wanna know what others think of this?"}
                </Button>
              </Grid>

              <div className={classes.commentsSection}>
                <Card className={classes.root}>
                  <CardHeader
                    avatar={<Avatar className={classes.avatar}>R</Avatar>}
                    title="Chris_002"
                    subheader="September 14, 2016"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
                <Card className={classes.root}>
                  <CardHeader
                    avatar={<Avatar className={classes.avatar}>R</Avatar>}
                    title="Chris_002"
                    subheader="September 14, 2016"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </div>
            </div>
          </Grid> */}
        </Grid>
      </div>
    </>
  );
}

export default Home;
