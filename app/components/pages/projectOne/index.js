import React from 'react';
import BigImage from '../../views/bigImage/'
import SplitImage from '../../views/blockSplitImage/'
import Image from '../../views/blockImage/'

const ProjectOne = React.createClass({
  render: function() {
    return (
      <div>
        <BigImage src="../public/images/projectTwo/image1.jpg" />
        <SplitImage imageOne="../public/images/projectTwo/image1.jpg" imageTwo="../public/images/projectTwo/image1.jpg" />
        <Image image="../public/images/projectTwo/image1.jpg" />
      </div>
    )
  }
});

export default ProjectOne;
