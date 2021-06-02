import React from "react";
import {
  makeStyles,
  Typography,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  typography: {
    fontSize: 10,
    textAlign: "center",
  },
}));

function PostItem(props) {
  const {
    user: { username, avatar },
    post: { title, text, date },
    last,
  } = props;
  const classes = useStyles();
  return (
    <>
      <ListItem button component={Link} to="/post">
        <ListItemAvatar>
          <Avatar alt={username} src={avatar} />
        </ListItemAvatar>
        <ListItemText
          primary={username}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {title}
              </Typography>
              {text}
              <Typography color="textPrimary" className={classes.typography}>
                {date}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      {!last && <Divider variant="inset" />}
    </>
  );
}

export default PostItem;
