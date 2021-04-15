import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = ({ chatId }) => {
  const name = useSelector((state) => state.profile);
  const chats = useSelector((state) => state.chats);

  return (
    <AppBar position="static" color="primary">
      <Link to="/" className="headerLink">
        <Typography variant="h6">App </Typography>
      </Link>
      <Link to="/profile" className="headerLink">
        {name}
      </Link>
      {chatId && <span>{chats[chatId]?.name}</span>}
    </AppBar>
  );
};
