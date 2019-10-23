import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Contact from './components/Contact';
import Dashboard from './components/Dashoard'
import Objective from './components/Objective'
import Skills from './components/Skills';

function App() {
  return (
    <BrowserRouter>
      <div className='bg'>
        <Navigation />
        <Switch>
          <Route path='/' component={Dashboard} exact />
          <Route path='/objective' component={Objective} />
          <Route path='/contact' component={Contact} />
          <Route path='/skills' component={Skills} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
