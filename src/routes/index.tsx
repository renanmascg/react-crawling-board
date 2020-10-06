import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Search from '../pages/Search';
import Results from '../pages/Results';
import Settings from '../pages/Settings';
import ResultQuery from '../pages/ResultQuery';

import Route from './AuthRoute';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" exact component={Dashboard} isPrivate />
    <Route path="/search" exact component={Search} isPrivate />
    <Route path="/results" exact component={Results} isPrivate />
    <Route path="/results/:id" component={ResultQuery} isPrivate />
    <Route path="/settings" exact component={Settings} isPrivate />
  </Switch>
);

export default Routes;
