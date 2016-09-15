import React from 'react';
import { Link } from 'react-router';
import styles from './styles.css';


const MainLayout = React.createClass({
  render: function() {
    return (
      <div className="app">
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
});

export default MainLayout;
