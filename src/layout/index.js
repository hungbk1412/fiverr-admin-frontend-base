import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const routes = require
  .context('../pages/', true, /\.js$/)
  .keys()
  .map(r => r.replace('./', '/').replace(/index|.js|\/index/g, ''));

function Layout() {
  return (
    <Router>
      <header>This is header</header>
      <ul>
        <li>
          <Link to="/auth">Auth</Link>
        </li>
        <li>
          <Link to="/auth/1">User 1</Link>
        </li>
        <li>
          <Link to="/auth/2">User 2</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        {routes.map(route => {
          const Com = require('../pages' + (route || '')).default;

          return (
            <Route
              exact
              path={route ? route.replace('_', ':') : '/'}
              key={route || '/'}
            >
              <Com />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}

export default Layout;
