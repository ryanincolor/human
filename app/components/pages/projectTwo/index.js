import React from 'react';
import BigImage from '../../views/bigImage/'
import SplitImage from '../../views/blockSplitImage/'
import Image from '../../views/blockImage/'

const ProjectTwo = React.createClass({
  render: function() {
    return (
      <div>
        <SplitImage imageOne="../public/images/projectTwo/image1.jpg" imageTwo="../public/images/projectTwo/image1.jpg" />
        <Image image="../public/images/projectTwo/image1.jpg" />
      </div>
    );
  }
});

export default ProjectTwo;
