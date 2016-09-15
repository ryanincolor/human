import React from 'react';
import styles from './styles.css'
import { Link } from 'react-router';
import * as projectApi from '../../../api/projects.js';

const NextProject = React.createClass({

  render: function() {
    var pathname = window.location.pathname.split('/').pop();
    var nextProject = projectApi.getNextProject(pathname);

    return (
      <section className={styles['next-project']}>
        <Link to={'/projects/' + nextProject.id} onClick={this.props.onReload}>Next</Link>
      </section>  
    )
  }
});

export default NextProject;

