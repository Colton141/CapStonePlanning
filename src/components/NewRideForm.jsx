import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props){
  let _place = null;
  let _date = null;
  let _time = null;
  let _account = null;

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({place: _place.value, date: _date.value, time: _time.value, alcoholContent: _account.value, id: v4()});
    _place.value = '';
    _date.value = '';
    _time.value = '';
    _account.value = '';
  }

  return (
    <div>
    <form onSubmit={handleNewKegFormSubmission}>
      <input
        type='text'
        id='place'
        placeholder='name'
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
        id='alcoholContent'
        placeholder='alcoholContent'
        ref={(input) => {_account = input;}} />
      <button type='submit'>Add!</button>
    </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewkegCreation: PropTypes.func
};

export default NewKegForm;
