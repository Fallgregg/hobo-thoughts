import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import "../home/Home.css";

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
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  signUp: {
    padding: "70px",
  },
}));

function SignUp() {
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
      <div className={classes.signUp}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h4">
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="fname"
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                variant="contained"
                color="default"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Have an account?"}
                </Link>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default SignUp;
