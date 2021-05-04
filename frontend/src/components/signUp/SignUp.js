import React from "react";
import {
  Button,
  makeStyles,
  Typography,
  Link,
  Grid,
  Container,
  CssBaseline,
  TextField,
} from "@material-ui/core";
import Header from "../header/Header";
import "../home/Home.css";

const useStyles = makeStyles((theme) => ({
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
}));

function SignUp() {
  const classes = useStyles();
  const Headerpages = [
    { title: "Home", link: "/home" },
    { title: "Sign In", link: "/sign-in" },
    { title: "Sign Up", link: "/sign-up" },
  ];
  return (
    <>
      <Header pages={Headerpages} />
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
    </>
  );
}

export default SignUp;
