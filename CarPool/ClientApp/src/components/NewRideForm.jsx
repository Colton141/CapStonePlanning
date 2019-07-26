import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

const getRides = async () => {
  const response = await fetch('/api/Rides/GetAll');
  const rides = await response.json();
  return rides;
}



function NewRideForm(props){
  let _place = null;
  let _date = null;
  let _time = null;
  let _account = null;

  function handleNewRideFormSubmission(event) {
    event.preventDefault();
    props.onNewRideCreation({place: _place.value, date: _date.value, time: _time.value, account: _account.value, id: v4()});
    _place.value = '';
    _date.value = '';
    _time.value = '';
    _account.value = '';
  }

  return (
    <div>
    <form onSubmit={handleNewRideFormSubmission}>
      <input
        type='text'
        id='place'
        placeholder='place'
        ref={(input) => {_place = input;}}/>
      <input
        type='text'
        id='date'
        placeholder='date'
        ref={(input) => {_date = input;}} />
      <input
        type='text'
        id='time'
        placeholder='time'
        ref={(input) => {_time = input;}} />
      <input
        type='text'
        id='account'
        placeholder='account'
        ref={(input) => {_account = input;}} />
      <button type='submit'>Add!</button>
    </form>
    </div>
  );
}

NewRideForm.propTypes = {
  onNewRideCreation: PropTypes.func
};

export default NewRideForm;
