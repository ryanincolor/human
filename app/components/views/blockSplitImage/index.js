import React from 'react';
import styles from './styles.css'

const SplitImage = React.createClass({

  render: function() { 
    return (
      <section className={styles['split-image']}>
        <img src={this.props.imageOne} />
        <img src={this.props.imageTwo} />
      </section>  
    )
  }
});

export default SplitImage;

