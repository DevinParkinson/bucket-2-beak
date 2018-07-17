import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BriantreeDrop from './BraintreeDrop';
import { Segment, Header, Divider } from 'semantic-ui-react'

const FullApp = styled.div`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3380034.jpg");
`
const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  background-color: white;
  margin-left: 7%;
  margin-right: 7%;
  height: 100%;
  text-align: center;
  font-family: Courier;
`

class StartPlan extends Component {
  state = { amount: 30.00 }
  render(){
    const { amount } = this.state;
    return (
      <FullApp>
        <AppContainer>
          <Segment basic textAlign='center'>
            <Header as='h1' textAlign='center'>Get Started with your Drop in the Bucket Plan</Header>
            <Header as='h5' textAlign='center'>Getting started is easy. Just sign up for our $30/month plan. We will do the rest. Payments start three days after you start the plan (So we can get your bucket out to you), then your payments will be charged monthly.</Header>
            <Divider />
            <BriantreeDrop amount={amount} />
          </Segment>
        </AppContainer>
      </FullApp>
    )
  }
}

export default connect()(StartPlan)
