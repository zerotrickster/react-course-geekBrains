import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import App from "../App";
import { Profile } from "../pages/profile";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/chat/:chatId">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
