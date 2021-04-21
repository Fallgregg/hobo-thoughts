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
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import Divider from "@material-ui/core/Divider";
import "./Home.css";
import avatar1 from "./avatars/testPic1.jpg";
import avatar2 from "./avatars/testPic2.jpg";
import avatar3 from "./avatars/testPic3.jpg";

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
  logo: {
    fontWeight: 600,
    textAlign: "left",
  },
  menu: {
    alignSelf: "flex-end",
  },
  menuButton: {
    fontWeight: 700,
    size: "18px",
  },
  paper: {
    height: 140,
    width: 100,
    color: "transperent",
  },
  content: {
    marginTop: "160px",
    width: 1500,
  },
  typography: {
    fontSize: 10,
    textAlign: "center",
  },
  root: {
    marginLeft: "120px",
  },
  route: {
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

function Home() {
  const classes = useStyles();
  return (
    <header>
      <AppBar className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.menu}>
            <Button
              className={classes.menuButton}
              color="inherit"
              //   key: label,
              //   to: href,
              //   component: RouterLink,
            >
              Home
            </Button>
            <Button className={classes.menuButton} color="inherit">
              Sign in
            </Button>
            <Button className={classes.menuButton} color="inherit">
              Sign up
            </Button>
          </div>
          <Typography variant="h3" classname={classes.logo}>
            hobo-thoughts
          </Typography>
          <Typography variant="h9" classname={classes.logo}>
            for settled minds
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={8}>
            <List className={classes.root}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Fallgregg" src={avatar1} />
                </ListItemAvatar>
                <ListItemText
                  primary="Fallgregg"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        That book omg ..
                      </Typography>
                      {
                        " - Last week I`ve finished reading 'Find me ' by Andre Aciman ..."
                      }
                      <Typography
                        color="textPrimary"
                        className={classes.typography}
                      >
                        20.04.2021
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Fallgregg" src={avatar2} />
                </ListItemAvatar>
                <ListItemText
                  primary="Fallgregg"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        That book omg ..
                      </Typography>
                      {
                        " - Last week I`ve finished reading 'Find me ' by Andre Aciman ..."
                      }
                      <Typography
                        color="textPrimary"
                        className={classes.typography}
                      >
                        20.04.2021
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Fallgregg" src={avatar3} />
                </ListItemAvatar>
                <ListItemText
                  primary="Fallgregg"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        That book omg ..
                      </Typography>
                      {
                        " - Last week I`ve finished reading 'Find me ' by Andre Aciman ..."
                      }
                      <Typography
                        color="textPrimary"
                        className={classes.typography}
                      >
                        20.04.2021
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Fallgregg" src=".home/testPic.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Fallgregg"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        That book omg ..
                      </Typography>
                      {
                        " - Last week I`ve finished reading 'Find me ' by Andre Aciman ..."
                      }
                      <Typography
                        color="textPrimary"
                        className={classes.typography}
                      >
                        20.04.2021
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Fallgregg" src=".home/testPic.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Fallgregg"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        That book omg ..
                      </Typography>
                      {
                        " - Last week I`ve finished reading 'Find me ' by Andre Aciman ..."
                      }
                      <Typography
                        color="textPrimary"
                        className={classes.typography}
                      >
                        20.04.2021
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" />
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Fallgregg" src=".home/testPic.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Fallgregg"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        That book omg ..
                      </Typography>
                      {
                        " - Last week I`ve finished reading 'Find me ' by Andre Aciman ..."
                      }
                      <Typography
                        color="textPrimary"
                        className={classes.typography}
                      >
                        20.04.2021
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
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
          </Grid>

          <Grid item xs={4}>
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
    </header>
  );
}

export default Home;
