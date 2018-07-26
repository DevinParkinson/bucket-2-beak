import React, { Component } from 'react';
import { Header, Form, Button, Segment, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import { registerUser } from '../actions/auth';

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
`
const Disclaimers = styled.div`
  font-size: 2vh;
  text-align: left;
  font-family: Courier;
`

class Register extends Component {
  initialState = { email: '', name: '', address: '', city: '', state: '', zip: '', phone: '', redirect: false };
  state = { ...this.initialState }

  handleSubmit = ( e ) => {
    e.preventDefault();
    const user = {...this.state};
    const { dispatch } = this.props;
      dispatch(registerUser(user));
      this.setState({ redirect: true})
  }

  handleChange = event => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({ [id]: value });
  }

  redirectMe = () => {
    if (this.state.redirect) {
      return (<Redirect to="/startplan" />)
    }
  }

  render() {
    const { email, name, address, city, state, zip, phone } = this.state;

    return (
      <FullApp>
        <AppContainer>
          <Segment basic>
            <Header as='h1' textAlign='center'>Sign Up Now!</Header>
              <Disclaimers>
                <div>
                  All of your information is private and will not be shared with anyone for any reason beyond providing you Bucket To Beak products, or responding to any requests, complains, comments, or concerns.
                </div>
                <Divider hidden />
              </Disclaimers>
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
                <label htmlFor='name'>Name</label>
                <input
                  id='name'
                  placeholder='Name'
                  required
                  value={name}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='address'>Address</label>
                <input
                  id='address'
                  placeholder='Address'
                  required
                  value={address}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='city'>City</label>
                <input
                  id='city'
                  placeholder='City'
                  required
                  value={city}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='state'>State</label>
                <input
                  id='state'
                  placeholder='State'
                  required
                  value={state}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='zip'>Zip Code</label>
                <input
                  id='zip'
                  placeholder='Zip Code'
                  required
                  value={zip}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor='phone'>Phone #</label>
                <input
                  id='phone'
                  placeholder='Phone #'
                  required
                  value={phone}
                  onChange={this.handleChange}
                />
              </Form.Field>
            <Segment basic textAlign='center'>
              <Button type='submit'>Submit</Button>
            </Segment>
          </Form>
        </Segment>
        </AppContainer>
        {this.redirectMe()}
      </FullApp>
    );
  }
}

export default connect()(Register);
