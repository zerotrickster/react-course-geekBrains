import React from "react";
import { AppBar, Typography } from "@material-ui/core";

// import { MenuIcon } from "@material-ui/icons";

export const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Typography variant="h6">App</Typography>
    </AppBar>
  );
};
