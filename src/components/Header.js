import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Header = ({ chatId }) => {
  return (
    <AppBar position="static" color="primary">
      <Link to="/" className="headerLink">
        <Typography variant="h6">App </Typography>
      </Link>
      <Link to="/profile" className="headerLink">
        Profile
      </Link>
      {chatId && <span>chat:{chatId}</span>}
    </AppBar>
  );
};