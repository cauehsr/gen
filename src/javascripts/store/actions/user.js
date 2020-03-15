// helpers
import { SET_USER } from 'javascripts/helpers/actions';

export function setUser(data) {
  return { type: SET_USER, payload: data };
}
