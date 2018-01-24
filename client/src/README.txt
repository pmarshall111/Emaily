Right now, we can be logged in on our server, but when the frontend tries to check whether
we're logged in on our backend, it always returns we are not logged in.
-- Fixed by making sure Fetch sends off cookies with requests.

Next step is to change the callback on login so that we automatically go back to the home screen
instead of being put back into /auth/google/callback and have the app not be able to get the route.
