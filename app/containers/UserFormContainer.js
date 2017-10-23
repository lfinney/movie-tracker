import UserForm from '../components/UserForm';
import { connect } from 'react-redux';
import { checkForUserHelper, addNewUserHelper } from '../helpers/userHelper';
import { redirectToLogin } from '../actions'; 

const mapStateToProps = (store) => ({
  activeUser: store.activeUser,
  userLoginError: store.userLoginError
});

const mapDispatchToProps = (dispatch) => ({
  verifyUserLogin: (user) => dispatch(checkForUserHelper(user)),
  postUserSignUp: (user) => dispatch(addNewUserHelper(user)),
  turnOffLoginFlag: (bool) => dispatch(redirectToLogin(bool))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
