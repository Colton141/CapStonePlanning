import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div>
    <style jsx>{`
      h1 {
        color: black;
        text-align: center;
        font-size: 40px;
      }
      `}</style>
      <div>
      <Link to="/">Home</Link>| <Link to="/ride">Rides</Link> | <Link to="/add">Add</Link>
     
      <hr />
      </div>
      </div>
    );
  }

  export default Header;
