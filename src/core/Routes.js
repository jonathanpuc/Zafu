import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nearby from '../nearby';
import Start from '../start';
import Search from '../search';
const NotFound = () => <Redirect to="/" />;

const Routes = ({ userLocation }) => (
  <Switch>
    <Route path="/" exact={true} component={Start} />
    <Route
      path="/nearby"
      exact={false}
      render={routeProps => (
        <Nearby {...routeProps} userLocation={userLocation} />
      )}
    />
    <Route
      path="/search"
      exact={false}
      render={routeProps => (
        <Search {...routeProps} userLocation={userLocation} />
      )}
    />
    {/* <Route path="/place/:id" exact={false} component={Group} /> */}
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
