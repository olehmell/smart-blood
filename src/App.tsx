 import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Donation from './pages/Donation';

import Header from './components/Header';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/donation' component={Donation} />
            <Redirect to="/" />
          </Switch>
      </Header>
    </BrowserRouter>
  );
};

export default App;
