import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "0.5px 0",
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
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    size: "32px",
  },
  form: {
    width: "100%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signIn: {
    padding: "70px",
  },
}));

function LogIn() {
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
        </Toolbar>
      </AppBar>
      <div className={classes.signIn}>
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Typography component="h1" variant="h4">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                variant="contained"
                color="default"
                className={classes.submit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="#" variant="h9">
                    {"Don't have an account?"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default LogIn;
