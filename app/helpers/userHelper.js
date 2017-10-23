import {
  loginHasErrored,
  loginUser
} from '../actions';

const checkForUserHelper = (userDataObject) => {
  return dispatch => {
    fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify(userDataObject),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => res.status === 'success' ? dispatch(loginUser(res.data)) :
        dispatch(loginHasErrored(true)))
      .catch(error => alert('Well, I was not prepared for this. ', error));
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
      .then(res => !res.ok ?
        dispatch(loginHasErrored(true)) :
        dispatch(checkForUserHelper(Object.assign({},
          {email: userDataObject.email,
            password:userDataObject.password}))));
  };
};
//
// const getUserData = () => {
//
// }


module.exports = { checkForUserHelper, addNewUserHelper };
