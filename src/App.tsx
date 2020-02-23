 import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Points from './pages/Points';
import Donation from './pages/Donation';
import RetipientsList from './pages/RetipientsList';

import Header from './components/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/donation' component={Donation} />
            <Route path='/retipientlist' component={RetipientsList} />
            <Route path='/points' component={Points} />
            <Redirect to="/" />
          </Switch>
      </Header>
    </BrowserRouter>
  );
};

export default App;
