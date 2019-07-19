import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import FrontPage from './MainPage';
import Login from './Login';
import SignUp from './SignUp';
import Header from './Header';

import PropTypes from 'prop-types';


function App() {


    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={FrontPage} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route component={Error404} />
        </Switch>

        </div>
      );
  }


  export default App;
