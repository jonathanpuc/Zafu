import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Nearby from '../nearby';
import Start from '../start';

const NotFound = () => <Redirect to="/" />;

const Routes = () => (
  <Switch>
    <Route path="/" exact={true} component={Start} />
    <Route path="/nearby" exact={false} component={Nearby} />
    {/* <Route path="/place/:id" exact={false} component={Group} /> */}
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
