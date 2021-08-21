//Functional Components(Prefer)

import React from 'react';

function Header() {
  //JSX-> javascript+ HTML
  return (
    <div className='header'>
      <ul>
        <li> Home</li>
        <li> About Us</li>
        <li> Company</li>
        <li> Logout</li>
      </ul>
    </div>
  );
}

export default Header;

//Aroww Function-> Lambda
/*
const Header=()=>{

} 
*/
