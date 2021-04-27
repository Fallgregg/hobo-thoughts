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

import Divider from "@material-ui/core/Divider";
import "../home/Home.css";
import avatar from "../home/avatars/testPic1.jpg";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "4px 0",
    backgroundColor: "black",
  },
  toolbar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {},
  menu: {
    display: "flex",
    alignSelf: "flex-end",
    justifyContent: "space-evenly",
    marginRight: theme.spacing(2),
  },

  menuButton: {
    fontWeight: 700,
    size: "18px",
  },
  logo: {
    marginRight: "1050px",
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
    marginLeft: "200px",
    width: 1500,
  },

  username: {
    dontSize: 12,
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
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    marginTop: "200px",
    marginLeft: "300px",
    width: "1000px",
  },
  post: {
    display: "flex",
    marginLeft: "300px",
    width: "1000px",
  },
  tags: {
    display: "flex",

    marginTop: "100px",
  },
  divider: {
    fontWeight: 700,
    variant: "middle",
  },
  date: {
    fontSize: 10,
    textAlign: "right",
  },
  posts: {
    marginTop: "20px",
  },
  icon: {
    fontSize: 14,
    marginLeft: "1390px",
  },
  button: {
    marginLeft: "750px",
  },
  section1: {
    margin: "auto",
    marginTop: "100px",
  },
  section2: {
    marginTop: "15px",
  },
  section3: {
    justifyContent: "space-between",
  },
}));

const registred = true;

function Home() {
  const classes = useStyles();
  return (
    <header>
      <AppBar className={classes.header}>
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
      </AppBar>
      {registred && <div>bla</div>}

      <div className={classes.content}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={4}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Fallgregg" src={avatar} />
                </ListItemAvatar>
                <ListItemText primary="Fallgregg" />
              </ListItem>
            </List>

            <Typography gutterBottom variant="h4">
              That book omg ..
            </Typography>

            <Typography color="textSecondary" variant="body2">
              Text messages are used for personal, family, business and social
              purposes. Governmental and non-governmental organizations use text
              messaging for communication between colleagues. In the 2010s, the
              sending of short informal messages became an accepted part of many
              cultures, as happened earlier with emailing.[1] This makes texting
              a quick and easy way to communicate with friends, family and
              colleagues, including in contexts where a call would be impolite
              or inappropriate (e.g., calling very late at night or when one
              knows the other person is busy with family or work activities).
              Like e-mail and voicemail and unlike calls (in which the caller
              hopes to speak directly with the recipient), texting does not
              require the caller and recipient to both be free at the same
              moment; this permits communication even between busy individuals.
              Text messages can also be used to interact with automated systems,
              for example, to order products or services from e-commerce
              websites, or to participate in online contests. Advertisers and
              service providers use direct text marketing to send messages to
              mobile users about promotions, payment due dates, and other
              notifications instead of using postal mail, email, or voicemail.
            </Typography>
            <Typography className={classes.date}>21.08.2017</Typography>
            <Divider variant="middle" />

            <div className={classes.section2}>
              <div className={classes.section3}>
                <Chip className={classes.chip} label="Bae" />
                <Chip className={classes.chip} label="Music" />
                <Chip className={classes.chip} label="Bookzz" />
                <Chip className={classes.chip} label="Film" />
              </div>
            </div>
          </Grid>
          <Grid item xs={5} className={classes.tags}></Grid>
        </Grid>
      </div>
    </header>
  );
}

export default Home;
