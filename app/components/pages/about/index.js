import React from 'react';
import { Link,  browserHistory } from 'react-router';
import s from './styles.css';
var classNames = require('classnames/bind');



const About = React.createClass({
   getInitialState: function() {
    return {
      enter: false
    };
  },

  componentDidMount: function() {
    this.slideIn()  
  },

  slideIn: function() {
    this.setState({
      enter: true
    })
  },

  slideOut: function(e) {
    e.preventDefault();
    var path = e.target.pathname
    this.setState({
      enter: false
    })
    setTimeout(function(){
      browserHistory.push(path);
    },300);
  
  },/*
    Description:
    Returns the time (in milliseconds since the epoch) at which the event was created.
  
    Syntax:
    event.timeStamp
  */

  render: function() {
    var cx = classNames.bind(s);
    var panelClasses = cx(s.panel, {enter: this.state.enter});

    return (
      <div id="about" className={s.about}>
        <Link className={s.close} onClick={this.slideOut} to={'/'}>Close</Link>
        <div className={panelClasses}>
          <section className={s.content}>
            <div class="text-block">
              <h1>About Us</h1>
              <p>Leberkas capicola drumstick, kevin corned beef kielbasa alcatra venison porchetta salami. Brisket chicken short loin shankle tenderloin. Salami rump tongue pig. Meatball ribeye cow drumstick strip steak spare ribs chicken shoulder turducken tail venison biltong landjaeger pork chop. T-bone jowl corned beef turducken ball tip turkey.</p>
            </div>
            <div class="text-block">
              <h3>Get In Touch</h3>
              <p>Leberkas capicola drumstick, kevin corned beef kielbasa alcatra venison porchetta salami.</p>
              <p> Brisket chicken short loin shankle tenderloin. Salami rump tongue pig. Meatball ribeye cow drumstick strip steak spare ribs chicken shoulder turducken tail venison biltong landjaeger pork chop.</p>
            </div>

          </section>
          <section className={s.image} style={{backgroundImage: 'url(public/images/project_one_cover.jpeg)'}}>
          </section>
        </div>
      </div>
    );
  }
});

export default About;

