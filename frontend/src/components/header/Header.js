import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

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
}));

function Header(props) {
  const classes = useStyles();
  const { pages } = props;
  return (
    <>
      <AppBar className={classes.header} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.menu}>
            {pages.map(({ title, link }) => (
              <Button
                className={classes.menuButton}
                color="inherit"
                component={Link}
                to={link}
              >
                {title}
              </Button>
            ))}
          </div>
          <Typography variant="h3" classname={classes.logo}>
            hobo-thoughts
          </Typography>
          <Typography variant="h9" classname={classes.logo}>
            for settled minds
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
