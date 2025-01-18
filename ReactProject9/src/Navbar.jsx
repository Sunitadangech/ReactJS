import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ }) => {

  return (<>

    <Link to="/">
      Main
    </Link>
    <Link to="/home" >
      Home
    </Link>
    <Link to="/Services" >
      Services  
    </Link>
    <Link to="/about" >
      About  
    </Link>
  </>
  );
};

export default Navbar;
