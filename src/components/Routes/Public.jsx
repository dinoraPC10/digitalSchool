import React from "react";
import { Redirect, Route } from "react-router-dom";

const Public = ({ component: Component, ...moreProps }) => {
  const userLogged = localStorage.getItem("token");

  if (userLogged) return <Redirect to="/" />;

  return <Route {...moreProps} render={Component} />;
};

export default Public;
