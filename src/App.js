import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Contact from './components/Contact';
import Dashboard from './components/Dashoard'
import About from './components/About'
import Skills from './components/Skills';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('UA-151012445-1');
  ReactGA.pageview('/');
  return (
    <BrowserRouter>
      <div className='bg'>
        <Navigation />
        <Switch>
          <Route path='/' component={Dashboard} exact />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/skills' component={Skills} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
