import {
  checkForUser,
  addNewUser
} from '../actions';

const checkForUserHelper = (userDataObject) => {
  return dispatch => {
    // this fucking works!
    // fetch('/api/users').then(res => res.json()).then(res => console.log(res))
  //   fetch('/api/users', {
  //     method: 'POST',
  //     body: JSON.stringify(userDataObject),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(wut => console.log(wut.json()));
  // };
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


module.exports = { checkForUserHelper };
