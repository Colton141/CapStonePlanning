import React from 'react';
import { Switch, Route } from 'react-router-dom';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import Error404 from './Error404';
import Employee from './Employee';
import Header from './Header';
import PropTypes from 'prop-types';


class App extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      masterKegList: []
    };
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
  }

  handleAddingNewKegToList(newKeg) {
  let newMasterKegList = this.state.masterKegList.slice();
  newMasterKegList.push(newKeg);
  this.setState({masterKegList: newMasterKegList});
}

  render() {
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} />} />
        <Route path='/newkeg' render={() =><NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />} />
        <Route path='/employee' render={() =><Employee keglist={this.state.masterKegList} />} />
        <Route component={Error404} />
        </Switch>

        </div>
      );
    }
  }


  export default App;
