import React from 'react';
import { Link } from 'react-router';
import * as projectApi from '../../api/projects.js';
import ProjectList from '../views/projectList/index';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Scroll  = require('react-scroll');


const ProjectListContainer = React.createClass({


  getInitialState: function() {
    return {
      active: false,
      projects: []  
    };
  },

  componentDidMount: function() {
    var projects = projectApi.getProjects();
    this.setState({
      projects: projects
    })
  },

  render: function() {
  
    return (
      <ProjectList projects={this.state.projects} />
    );
  }
});

export default ProjectListContainer;

