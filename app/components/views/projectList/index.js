 import React from 'react';
import { Link, browserHistory } from 'react-router';
var classNames = require('classnames');
import styles from './styles.css';
var Scroll  = require('react-scroll');
var scroll  = Scroll.animateScroll;





const ProjectList = React.createClass({
  animate: function(e) {
    // Prevents link from loading
    e.preventDefault();

    var path = e.target.pathname
    var parentNode = e.target.parentNode

    var distanceToTop = parentNode.getBoundingClientRect().top;
    var offsetHeight = parentNode.offsetHeight;
    scroll.scrollMore(distanceToTop, {
      duration: 300
    });

    // Add class to parent of clicked element 
     setTimeout(function() {
      parentNode.setAttribute("state", "active");
    }, 400);
    // Navigate to path of clicked element
    setTimeout(function() {
      browserHistory.push(path);
    }, 1100);
  },

  render: function() {
    var projectClasses = classNames({
      'project': true
    });

    // var cover = {
    //   backgroundImage: url('"' + project.id + '/' + project.cover + '"');
    // }
    var projects = this.props.projects.map(function(project){
      return (
        <li className={styles.project} key={project.id} style={{backgroundImage: 'url(public/images/' + project.cover + ')'}}>
          <Link onClick={this.animate} to={'/projects/' + project.id } >
            <span>{project.name}</span>
          </Link>
        </li>  
      );
    }, this); 

    return (
     <ul className={styles['project-list']}>
        {projects}
    </ul>
    );
  }
});



export default ProjectList;



