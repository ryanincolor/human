import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import ProjectListContainer from './components/containers/ProjectListContainer';
import ProjectContainer from './components/containers/ProjectContainer';

// Pages
import Home from './components/pages/home/';
import About from './components/pages/about/';
import ProjectOne from './components/pages/projectOne';
import ProjectTwo from './components/pages/projectTwo';
import ProjectThree from './components/pages/projectThree';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>  
      <Route path="/">
        <Route component={Home}>
          <IndexRoute component={ProjectListContainer} />
        </Route>
      </Route>  
      <Route path="/about" component={About} /> 
      <Route path="projects/">
        <Route path="projectone" component={ProjectContainer}>
          <IndexRoute component={ProjectOne} />
        </Route>
         <Route path="projecttwo" component={ProjectContainer}>
          <IndexRoute component={ProjectTwo} />
        </Route>
        <Route path="projectthree" component={ProjectContainer}>
          <IndexRoute component={ProjectThree} />
        </Route>
      </Route>
    </Route>
  </Router>  
);
