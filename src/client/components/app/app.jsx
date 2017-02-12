import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class App extends Component {
  render() {
    return (
      <div>React Starter App</div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(App);
