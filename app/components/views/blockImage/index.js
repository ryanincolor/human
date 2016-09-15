import React from 'react';
import styles from './styles.css'

const BlockImage = React.createClass({

  render: function() { 
    return (
      <section className={styles['block-image']}>
        <img src={this.props.image} />
      </section>  
    )
  }
});

export default BlockImage;

