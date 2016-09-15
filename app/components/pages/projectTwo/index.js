import React from 'react';
import BigImage from '../../views/bigImage/'
import SplitImage from '../../views/blockSplitImage/'
import Image from '../../views/blockImage/'

const ProjectTwo = React.createClass({
  render: function() {
    return (
      <div>
        <SplitImage imageOne="../public/images/projectTwo/image1.jpeg" imageTwo="../public/images/projectTwo/image1.jpeg" />
        <Image image="../public/images/projectTwo/image1.jpeg" />
      </div>
    );
  }
});

export default ProjectTwo;
