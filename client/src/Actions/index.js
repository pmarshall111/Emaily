export const GET_CURRENT_USER = "GET_CURRENT_USER";
export const NO_USER_DETECTED = "NO_USER_DETECTED";

//doesn't work right now... issue with async/await???
// export async function currentUserActionCreator(callback) {
//   var currentUser = await fetch("/current-user");
//   var cUJson = await currentUser.json();
//
//   if (cUJson.error) {
//     callback();
//     return { type: NO_USER_DETECTED };
//   }
//
//   return {
//     type: GET_CURRENT_USER,
//     payload: cUJson
//   };
// }

export function currentUserActionCreator(callback) {
  return function(dispatch) {
    //fetch by default doesn't include cookies in the request. We have set up a configuration
    //object to make sure cookies are sent along to requests with the same origin.
    //https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials
    //axios has this already
    fetch("/current-user", {
      method: "GET",
      credentials: "same-origin"
    })
      .then(d => d.json())
      .then(user => {
        console.log(user);
        if (user.error) {
          if (callback) callback();
          return dispatch({
            type: NO_USER_DETECTED
          });
        }

        dispatch({
          type: GET_CURRENT_USER,
          payload: user
        });
      });
  };
}
