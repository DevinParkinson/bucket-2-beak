import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BriantreeDrop from './BraintreeDrop';
import { Segment, Header, Divider } from 'semantic-ui-react'

const FullApp = styled.div`
  height: 100%;
  width: 100%;
`

class StartPlan extends Component {
  state = { amount: 30.00 }
  render(){
    const { amount } = this.state;
    return (
      <FullApp>
        <Segment basic textAlign='center'>
          <Header as='h1' textAlign='center'>Get Started with your Drop in the Bucket Plan</Header>
          <Header as='h5' textAlign='center'>Getting started is easy. Just sign up for our $30/month plan. We will do the rest. Payments start three days after you start the plan (So we can get your bucket out to you), then your payments will be charged monthly.</Header>
          <Divider />
          <BriantreeDrop amount={amount} />
        </Segment>
      </FullApp>
    )
  }
}

export default connect()(StartPlan)
