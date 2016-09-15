import React from 'react';
import { Link, browserHistory } from 'react-router';
import s from './styles.css';
var classNames = require('classnames/bind');

const Home = React.createClass({
  getInitialState: function() {
    return {
      exit: false,
      enter: false
    };
  },

  componentWillMount: function() {
     this.setState({
      enter: true    
    });
  },

  componentDidMount: function() {
     this.setState({
      enter: false    
    });
  },

  fadeOut: function(e){
    e.preventDefault();
    var path = e.target.pathname
    this.setState({
      exit: true
    });

    setTimeout(function(){
      browserHistory.push(path);    
    }, 500)
  },
  
  render: function() {
    var cx = classNames.bind(s);
    var homeClasses = cx(s.home, {exit: this.state.exit, enter: this.state.enter});

    return (
      <div id="home" className={homeClasses}>
        <nav className={s.nav}>
           <Link onClick={this.fadeOut} to={'about'}>About</Link>
        </nav>
        <section className={s.hero}>
          <h1 className={s.title}>Made By Human</h1> 
        </section>
        {this.props.children}
      </div>
    );
  }
});

export default Home;

