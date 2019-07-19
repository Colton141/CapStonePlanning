import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Header from './Header';
import PropTypes from 'prop-types';


function App() {


    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route component={Error404} />
        </Switch>

        </div>
      );
  }


  export default App;
