 import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import ProfileRegistration from './pages/ProfileRegistration';
import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/profile' component={ProfileRegistration} />
          <Redirect to="/" />
        </Switch>
    </BrowserRouter>
  );
};

export default App;
