import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={SignIn} />
    <Route path="/dashboard" exact component={Dashboard} />
  </Switch>
);

export default Routes;
