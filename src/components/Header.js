import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export const Header = ({ chatId }) => {
  const name = useSelector((state) => state.profile);
  const chats = useSelector((state) => state.chats);

  return (
    <AppBar position="static" color="primary">
      <ButtonGroup>
        <Link to="/" className="headerLink">
          <Typography variant="h6">App </Typography>
        </Link>
        <Link to="/profile" className="headerLink">
          <Typography variant="h6">Profile {name}</Typography>
        </Link>
        <Link to="/news" className="headerLink">
          <Typography variant="h6">News</Typography>
        </Link>

        {chatId && <span className="headerSpan">{chats[chatId]?.name}</span>}
      </ButtonGroup>
    </AppBar>
  );
};
