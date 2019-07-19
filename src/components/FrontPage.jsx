import React from 'react';
import { Link } from 'react-router-dom';



function FrontPage() {

  return (
    <div >
      <h1>Hitched</h1>
      <h4>Hop on Board</h4>
   
      <Link to="/signup"><button>Sign Up</button></Link>
      <Link to="/login"><button>Log In</button></Link>
    </div>

  );
}

export default FrontPage;