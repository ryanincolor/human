import React from 'react';
import * as projectApi from '../../api/projects.js';
import Project from "../views/project/"


const ProjectContainer = React.createClass({

  getInitialState: function() {
    return {
      project: {
        title: null,
        cover: null,
        desc: null,
        next: null 
      }  
    };
  },

  componentWillMount: function() {
    window.scrollTo(0,0);
  },
  
  componentDidMount: function() {
    window.scrollTo(0,0);
    var currentPath = this.props.routes[this.props.routes.length-2].path
    var project = projectApi.getProject(currentPath);

    this.setState({
      title: project.name,
      cover: project.cover,
      desc:  project.description,
    });
  },

 onReload: function(projectId) {

      var currentPath = this.props.routes[this.props.routes.length-2].path
      var project = projectApi.getProject(currentPath);
      var nextProject = projectApi.getNextProject(currentPath);
      this.setState({ 
        title: nextProject.name,
        cover: nextProject.cover,
        desc:  nextProject.description
      });
      window.scrollTo(0,0);
  },

  render: function() {
    return (
      <Project title={this.state.title} onReload={this.onReload} cover={this.state.cover} desc={this.state.desc} children={this.props.children}/>
    );
  }
});

export default ProjectContainer;
