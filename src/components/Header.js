import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = ({ chatId }) => {
  const name = useSelector((state) => state.profile);

  return (
    <AppBar position="static" color="primary">
      <Link to="/" className="headerLink">
        <Typography variant="h6">Hello, {name} </Typography>
      </Link>
      <Link to="/profile" className="headerLink">
        Profile
      </Link>
      {chatId && <span>chat:{chatId}</span>}
    </AppBar>
  );
};
