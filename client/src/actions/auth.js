import React from 'react';
import axios from 'axios';
import { setFlash } from '../actions/flash';
import { setHeaders } from '../actions/headers';
export const ADD_USER = 'ADD_USER'



export const registerUser = ( user ) => {
  return ( dispatch ) => {
    axios.post( '/api/user', { user } )
      .then( res => dispatch( { type: ADD_USER, user: res.data } ) )
      .catch( res => {
        debugger
        const messages =
          res.response.data.errors.full_messages.map(message =>
            <div>{message}</div>);
        const { headers } = res;
        dispatch(setHeaders(headers));
        dispatch(setFlash(messages, 'red'));
      })
  }

}
