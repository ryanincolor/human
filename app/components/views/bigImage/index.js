import React from 'react';
import styles from './styles.css'

const BigImage = React.createClass({

  render: function() { 
    return (
      <section className={styles['big-image']}>
        <img src={this.props.src} />
      </section>  
    )
  }
});

export default BigImage;

