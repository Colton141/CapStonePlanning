import React from 'react';
import PropTypes from 'prop-types';

function Ride(props) {
  return (
    <div>

      <div>
      <h2>{props.name}</h2>
      <h4>{props.brand}</h4>
      <h4>{props.price}</h4>
      <h4>{props.alcoholContent}</h4>


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
