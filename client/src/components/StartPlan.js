import React, { Component } from 'react';
import { connect } from 'react-redux';


class StartPlan extends Component {
  render(){
    return (
      <div>
      Let's do this. Getting started
      </div>
    )
  }
}

export default connect()(StartPlan)
