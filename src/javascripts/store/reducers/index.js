import { combineReducers } from 'redux';

// reducers
import user from 'javascripts/store/reducers/user';

const rootReducers = combineReducers({ user });
export default rootReducers;
