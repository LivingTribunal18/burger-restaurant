import React from 'react';
import Landing from './landing';
import App from './app';
import NotFound from './notfound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/restaurant/:restaurantUrl" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;