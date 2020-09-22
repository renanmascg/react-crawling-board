import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Search from '../pages/Search';
import Results from '../pages/Results';
import Settings from '../pages/Settings';
import ResultQuery from '../pages/ResultQuery';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={SignIn} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/search" exact component={Search} />
    <Route path="/results" exact component={Results} />
    <Route path="/results/:id" exact component={ResultQuery} />
    <Route path="/settings" exact component={Settings} />
  </Switch>
);

export default Routes;
