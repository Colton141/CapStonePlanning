import React from 'react';
import { Link } from 'react-router-dom';



function MainPage() {

  return (
    <div >
      <h1>QuizUp</h1>
      <h4>Connecting people through shared interests</h4>
      <ul>
        <li>Topics for every interest</li>
        <li>Play against friends in real time</li>
        <li>Discover like-minded people</li>
        <li>And it's FREE!</li>
      </ul>
      <Link to="/signup"><button>Sign Up</button></Link>
      <Link to="/login"><button>Log In</button></Link>
    </div>

  );
}

export default MainPage;