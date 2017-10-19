import {
  addNewUser,
  loginHasErrored,
  loginUser

} from '../actions';

const checkForUserHelper = (userDataObject) => {
  return dispatch => {
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify(userDataObject),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => !res.ok ? dispatch(loginHasErrored(true)) :
      dispatch(loginUser(userDataObject)))
      .catch(err => alert('Well, I was not prepared for this. ', err))
  };
};

const addNewUserHelper = (userDataObject) => {
  return dispatch => {
    fetch('/api/users/new', {
      method: 'POST',
      body: JSON.stringify(userDataObject),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => !res.ok ? dispatch(loginHasErrored(true)) : dispatch(checkForUserHelper(Object.assign({}, {email: userDataObject.email, password:userDataObject.password}))));
  };
};
  //take in the user object and check it agains the backend
  // use fetch to send to backend
  // if user exists in backend; verify passwords match
  // if passwords match let store know user is now logged in

  // return (dispatch) => {
  //   dispatch(itemsIsLoading(true));
  //
  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //
  //       dispatch(itemsIsLoading(false));
  //
  //       return response;
  //     })
  //     .then((response) => response.json())
  //     .then((items) => dispatch(itemsFetchDataSuccess(items)))
  //     .catch(() => dispatch(itemsHasErrored(true)));
  // };


module.exports = { checkForUserHelper, addNewUserHelper };
