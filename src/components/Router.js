import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import App from "../App";
import { NewsPage } from "../pages/news";
import { Profile } from "../pages/profile";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/chat/:chatId">
          <App />
        </Route>
        <Redirect exact to="/" />
      </Switch>
    </BrowserRouter>
  );
};
