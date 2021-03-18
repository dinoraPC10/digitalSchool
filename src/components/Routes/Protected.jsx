import React from "react";
import { Redirect, Route } from "react-router-dom";

const Protected = ({ component: Component, ...moreProps }) => {
  const userLogged = localStorage.getItem("token");
  if (!userLogged) return <Redirect to="/login" />;

  return <Route {...moreProps} component={Component} />;
};

export default Protected;
