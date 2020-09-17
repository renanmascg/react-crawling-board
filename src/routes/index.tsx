import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Search from '../pages/Search';
import Results from '../pages/Results';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={SignIn} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/search" exact component={Search} />
    <Route path="/results" exact component={Results} />
  </Switch>
);

export default Routes;
