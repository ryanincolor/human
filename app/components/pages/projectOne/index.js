import React from 'react';
import BigImage from '../../views/bigImage/'
import SplitImage from '../../views/blockSplitImage/'
import Image from '../../views/blockImage/'

const ProjectOne = React.createClass({
  render: function() {
    return (
      <div>
        <BigImage src="../public/images/projectTwo/image1.jpeg" />
        <SplitImage imageOne="../public/images/projectTwo/image1.jpeg" imageTwo="../public/images/projectTwo/image1.jpeg" />
        <Image image="../public/images/projectTwo/image1.jpeg" />
      </div>
    )
  }
});

export default ProjectOne;
