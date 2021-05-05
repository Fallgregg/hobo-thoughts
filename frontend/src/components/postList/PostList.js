import React from "react";
import { makeStyles, List } from "@material-ui/core";
import { MemoryRouter, Route } from "react-router";
import { Link } from "react-router-dom";
import { Pagination, PaginationItem } from "@material-ui/lab/";
import "../home/Home.css";

const useStyles = makeStyles((theme) => ({
  route: {
    marginTop: "40px",
    marginBottom: "40px",
    display: "flex",
    justifyContent: "center",
  },
  date: {
    fontSize: 10,
    textAlign: "right",
  },
}));

function PostList(props) {
  const classes = useStyles();
  return (
    <div>
      <List className={classes.postList}>{props.children}</List>
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
    </div>
  );
}

export default PostList;
