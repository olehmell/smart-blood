 import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Points from './pages/Points';
import Donation from './pages/Donation';
import RetipientsList from './pages/RetipientsList';
import Authorization from './pages/Authorization';
import ProfileRegistration from './pages/ProfileRegistration';
import SidebarProfileProvider from './components/ProfileContext';
import Header from './components/Header';
import CenterStats from './pages/CenterStats';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SidebarProfileProvider>
        <Header>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/profile' component={Profile} />
              <Route path='/donation' component={Donation} />
              <Route path='/retipientlist' component={RetipientsList} />
              <Route path='/points' component={Points} />
              <Route path='/login' component={Authorization} />
              <Route path='/centerstats' component={CenterStats} />
              <Route path='/registration' component={ProfileRegistration} />
              <Redirect to="/" />
            </Switch>
        </Header>
      </SidebarProfileProvider>
    </BrowserRouter>
  );
};

export default App;
