import React from "react";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
  Link,
  Grid,
  Container,
  CssBaseline,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "4px 0",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
  },
  toolbar: {
    width: "100%",
    justifyContent: "flex-end",
  },
  logo: {
    marginRight: "auto",
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
}));

function SignUp() {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.header} position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logo}>
            hobo-thoughts
          </Typography>
          <Button className={classes.menuButton} color="inherit">
            Home
          </Button>
          <Button className={classes.menuButton} color="inherit">
            Sign In
          </Button>
          <Button className={classes.menuButton} color="inherit">
            Sign up
          </Button>
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
    </>
  );
}

export default SignUp;
