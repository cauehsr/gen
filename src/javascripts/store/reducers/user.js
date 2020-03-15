// helpers
import { SET_USER } from 'javascripts/helpers/actions';

const initialState = {
  logged: false
};

function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default user;
