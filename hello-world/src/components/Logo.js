
import React from 'react';
import Image from 'react-image-resizer';
import logo from './logo.png'; // Tell Webpack this JS file uses this image
 
function Logo() {

    return (
      <div>
        <Image
          img src={logo} alt="logo" 
          //src="./logo.png"
          height={300}
          width={600}
        />
      </div>
    );
  
}

export default Logo;
