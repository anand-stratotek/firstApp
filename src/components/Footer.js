/* Two type of component

    //Class Based Components
   

*/

import React, { Component } from 'react';
import Header from './Header';

class Footer extends Component {
  render() {
    return <div className='footer'>This is my class based component</div>;
  }
}

export default Footer;
