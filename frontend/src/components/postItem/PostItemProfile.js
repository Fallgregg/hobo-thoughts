import React from "react";
import {
  makeStyles,
  Typography,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  date: {
    fontSize: 10,
    textAlign: "right",
  },
}));

function PostItem(props) {
  const {
    post: { title, text, date },
    last,
  } = props;
  const classes = useStyles();
  return (
    <>
      <ListItem button component={Link} to="/post">
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              {text}
              <Typography color="textPrimary" className={classes.date}>
                {date}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      {!last && <Divider />}
    </>
  );
}

export default PostItem;
