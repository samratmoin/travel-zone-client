import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useFirebase from "../../hooks/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useFirebase();

  if (isLoading) {
    return <Spinner animation="border" variant="danger" />;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
