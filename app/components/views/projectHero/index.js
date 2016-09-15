import React from 'react';
import styles from './styles.css'
var Scroll  = require('react-scroll');
var scroll  = Scroll.animateScroll;
var classNames = require('classnames/bind');




const ProjectHero = React.createClass({
  getInitialState: function() {
    return {
      active: false
    };
  },

  componentWillMount: function() {
    window.addEventListener('scroll', this.handleScroll);

  },

  componentDidMount: function() {
    window.addEventListener('scroll', this.handleScroll);
  },

  handleScroll: function(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    if (scrollTop > 100) {
      this.setState({
        active: true
      });
    } else {
      this.setState({
        active: false
      });
    }
  },

  render: function(){
    var cx = classNames.bind(styles);
    var heroClasses = cx(styles.hero, {active: this.state.active});


    return(
      <section className={heroClasses} style={{backgroundImage: 'url(../public/images/' + this.props.cover + ')'}}>
        <h1 className={styles.title}>{this.props.title}</h1>
      </section>
    )
  }
});

export default ProjectHero;
