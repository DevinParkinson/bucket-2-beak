import { ADD_USER } from '../actions/auth'

const user = ( state = [], action ) => {
  switch ( action.type ) {
    case ADD_PISTOLS:
      return [action.pistols, ...state]
  }
}

export default user
