import React, { Component } from 'react';
import { Header, Form, Button, Segment, Label, Input, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import { setFlash } from '../actions/flash';
import BriantreeDrop from './BraintreeDrop';

const FullApp = styled.div`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX3380034.jpg");
`
const AppContainer = styled.div`
  justify-content: center;
  background-color: white;
  margin-left: 7%;
  margin-right: 7%;
  height: 100%;
  text-align: center;
  font-family: Courier;
  color: #ffffff;
`

class Register extends Component {
  state = { email: '', password: '', passwordConfirmation: '', amount: 30.00 };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password, passwordConfirmation } = this.state;
    const { dispatch, history } = this.props;
    if (password === passwordConfirmation) {
      dispatch(registerUser(email, password, passwordConfirmation, history));
    } else dispatch(setFlash('Passwords do not match!, please try again', 'red'));
  }

  handleChange = event => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  }

  render() {
    const { email, password, passwordConfirmation, amount } = this.state;

    return (
      <FullApp>
        <AppContainer>
          <Segment basic>
            <Header as='h1' textAlign='center'>Sign Up Now!</Header>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label htmlFor='email'>Email</label>
                <input
                  id='email'
                  placeholder='Email'
                  required
                  value={email}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='password'>Password</label>
                <input
                  id='password'
                  placeholder='Password'
                  type='password'
                  required
                  value={password}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='passwordConfirmation'>Password Confirmation</label>
                <input
                  id='passwordConfirmation'
                  placeholder='Password Confirmation'
                  type='password'
                  required
                  value={passwordConfirmation}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Segment basic textAlign='center'>
                <Button type='submit'>Submit</Button>
              </Segment>
                </Form>
                <Segment basic textAlign='center'>
                <Header as='h1' textAlign='center'>Get Started with your Drop in the Bucket Plan</Header>
                <Header as='h5' textAlign='center'>Getting started is easy. Just sign up for our $30/month plan. We will do the rest. Payments start three days after you start the plan (So we can get your bucket out to you), then your payments will be charged monthly.</Header>
                <Divider />
                <BriantreeDrop amount={amount} />
              </Segment>
          </Segment>
        </AppContainer>
      </FullApp>
    );
  }
}

export default connect()(Register);
