import React from 'react';
import NewRideForm from './NewRideForm';
import PropTypes from 'prop-types';

class NewRideControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }


  render() {
    let currentlyVisibleContent = <NewRideForm onNewRideCreation={this.props.onNewRideCreation} />;
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewRideControl.propTypes = {
  onNewRideCreation: PropTypes.func
};


export default NewRideControl;
