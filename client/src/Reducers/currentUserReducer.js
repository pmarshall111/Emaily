import { GET_CURRENT_USER, NO_USER_DETECTED } from "../Actions";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_CURRENT_USER:
      if (!action.payload.user) return state;
      return action.payload.user;
    case NO_USER_DETECTED:
      return {};
    default:
      return state;
  }
}
