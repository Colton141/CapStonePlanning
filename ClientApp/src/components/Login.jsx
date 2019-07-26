import React from 'react';
import { Link } from 'react-router-dom';

function Login(){
  return (
    <div>
      <h1>Log In</h1>
      <form>
        <input type='text' id='email' placeholder='EMAIL'/>
        <input type='password' id='password' placeholder='PASSWORD'/>
        <Link to="/"><button type='submit'>Log In</button></Link>
      </form>
    </div>
  );
}

export default Login;