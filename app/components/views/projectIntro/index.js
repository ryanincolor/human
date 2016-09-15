import React from 'react';
import styles from './styles.css'

const ProjectIntro = React.createClass({
  render: function(){
    return(
      <section className={styles['project-intro']}>
        <div className={styles['block-text']}>
          <h2>{this.props.title}</h2>
          <p className={styles['description']}>{this.props.desc}</p>
        </div>
      </section>
    )
  }
});

export default ProjectIntro;
