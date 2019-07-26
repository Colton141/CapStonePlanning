import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SignUpForm(){
  let _firstName = null;
  let _lastNmae = null;
  let _email = null;
  let _password = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({firstName: _firstName.value, lastNmae: _lastNmae.value, email: _email.value, password: _password.value, id: v4()});
    _firstName.value = '';
    _lastNmae.value = '';
    _email.value = '';
    _password.value = '';
  }

  return (
<div>
  <h1>Sign Up!</h1>
    <form onSubmit={handleNewKegFormSubmission}>
      <input
        type='text'
        id='firstName'
        placeholder='First Name'
        ref={(input) => {_firstName = input;}}/>
      <input
        type='text'
        id='lastNmae'
        placeholder='lastNmae'
        ref={(input) => {_lastNmae = input;}} />
      <input
        type='text'
        id='email'
        placeholder='email'
        ref={(input) => {_email = input;}} />
      <input
        type='text'
        id='password'
        placeholder='password'
        ref={(input) => {_password = input;}} />
      <button type='submit'>Add!</button>
    </form>
    </div>
  );
}

SignUpForm.propTypes = {
  onSignUpCreation: PropTypes.func
};

export default SignUp;