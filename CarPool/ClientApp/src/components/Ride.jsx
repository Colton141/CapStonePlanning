import React from 'react';
import PropTypes from 'prop-types';

function Ride(props) {
  return (
    <div>

      <div>
      <h2>{props.place}</h2>
      <h4>{props.date}</h4>
      <h4>{props.time}</h4>
      <h4>{props.account}</h4>


      <br />
      </div>
      <hr />
      </div>
    );
  }

  Ride.propTypes = {
    place: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    account: PropTypes.string.isRequired,
  };

  export default Ride;
