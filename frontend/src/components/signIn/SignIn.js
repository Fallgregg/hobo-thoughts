import {
  Button,
  makeStyles,
  Typography,
  TextField,
  Grid,
  Container,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";

const useStyles = makeStyles((theme) => ({
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
  signIn: {},
}));

function LogIn() {
  const classes = useStyles();
  const Headerpages = [
    { title: "Home", link: "/home" },
    { title: "Sign In", link: "/sign-in" },
    { title: "Sign Up", link: "/sign-up" },
  ];
  return (
    <>
      <Header pages={Headerpages} />
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
                variant="contained"
                className={classes.submit}
                component={Link}
                to={"/home"}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/sign-up" variant="h9">
                    {"Don't have an account?"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LogIn;
