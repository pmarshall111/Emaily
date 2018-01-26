export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const NO_USER_DETECTED = "NO_USER_DETECTED";

export function currentUserActionCreator(callback) {
  return async dispatch => {
    //fetch by default doesn't include cookies in the request. We have set up a configuration
    //object to make sure cookies are sent along to requests with the same origin.
    //https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials
    //Another thing with fetch is that we have to call the .json method to turn
    //the response into something readable. And if we are sending off a POST request,
    //we need to add in a Content-Type header with type application/json
    //axios has this already
    var jsonData = await fetch("/current-user", {
      method: "GET",
      credentials: "same-origin"
    });
    var user = await jsonData.json();

    if (!user.error) {
      console.log(user);
      return dispatch({
        type: GET_CURRENT_USER,
        payload: user
      });
    } else {
      if (callback) callback();
      dispatch({
        type: NO_USER_DETECTED
      });
    }
  };
}

export function updateUserCreditsCreator(token) {
  //we always need to include dispatch as an argument when using redux-thunk
  return async dispatch => {
    var request = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(token),
      credentials: "same-origin"
    });

    var response = await request.json();

    return dispatch({
      type: GET_CURRENT_USER,
      payload: response
    });
  };
}
