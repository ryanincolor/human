import React from 'react';
import { Link } from 'react-router';
import ProjectHero from '../projectHero/index.js';
import ProjectIntro from '../projectIntro/index.js';
import NextProject from '../nextProject/index.js';
import styles from './styles.css'

const Project = React.createClass({
  render: function(){
    return(
      <div className={styles.project}>
        <Link className={styles.back} to="/">Back</Link>
        <ProjectHero title={this.props.title} cover={this.props.cover} />
        <article>
          <ProjectIntro desc={this.props.desc} title={this.props.title} />
          {this.props.children}
        </article>
        <NextProject onReload={this.props.onReload} />
      </div>
    )
  }
});

export default Project;
