import { GET_CURRENT_USER, NO_USER_DETECTED } from "../Actions";

export default function(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case GET_CURRENT_USER:
      console.log({ here: action.payload.user });
      return action.payload.user;
    case NO_USER_DETECTED:
      return {};
  }
  return state;
}
