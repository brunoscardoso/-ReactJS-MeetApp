import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import New from '~/pages/Meetups/New';
import Edit from '~/pages/Meetups/Edit';
import Details from '~/pages/Meetups/Details';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetups/new" component={New} isPrivate />
      <Route path="/meetups/details/:id" component={Details} isPrivate />
      <Route path="/meetups/edit/:id" component={Edit} isPrivate />
    </Switch>
  );
}
