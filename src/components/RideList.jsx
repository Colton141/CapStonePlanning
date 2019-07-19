import React from 'react';
import Ride from './Ride';
import PropTypes from 'prop-types';



function RideList(props) {

  var RideStyle = {
    minHeight: '150px',
    borderRadius: '5px',
    backgroundColor: '#edeff1',
    paddingBottom: "2%",
    marginBottom: "2%"
  }
  var RideHeader = {
    padding: '1px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    backgroundColor: '#a08db5',
    color: 'white',
    fontSize: '10px'
  }

  return (
    <div style={RideStyle}>
    <hr />
    <header style={RideHeader}><h3>Rides</h3></header>
    {props.RideList.map((Ride) =>
      <Ride
      place={Ride.place}
      date={Ride.date}
      time={Ride.time}
      account={Ride.account}
      key={Ride.id} />

    )}
    </div>
  );
}

RideList.propTypes = {
  RideList: PropTypes.array
};

export default RideList;
