import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from './pages/app.jsx';
import Home from './pages/home.jsx';
import Repos from './pages/repos.jsx';
import Info from './pages/info.jsx';
import NotFound from './pages/notFound.jsx';
import RepoForm from './components/repoForm.jsx';
import RepoTable from './components/repoTable.jsx';

const routes = (
  <Router history={createBrowserHistory()}>
    <Route path='/' component={ App }>
      <IndexRoute component={ Home }/>
      <Route path='info' component={ Info } />
      <Route path='home' component={ Home } />
      <Route path='repos' component={ Repos }>
        <IndexRoute component={ RepoTable }/>
        <Route path='create' component={ RepoForm } />
      </Route>
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
);

export default routes;