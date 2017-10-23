import * as userReducer from '../../reducers/users-reducer';

describe('users reducer', () => {
  it('should return our initial state', () => {
    const expectation = {};

    expect(userReducer.activeUser(undefined, {})).toEqual(expectation);
  });

  it('should allow me to add active user to state', () => {
    const action = { type: 'LOGIN_USER', user: {
      email: 'gizmo_da_corgi@doggos.com',
      password: 'stumper4lyfe' }
    };
    const expectation = action.user;

    expect(userReducer.activeUser(undefined, action)).toEqual(expectation);
  });

  it('should allow me to log a user out', () => {
    const action = { type: 'SIGN_OUT_USER', user: {}
    };
    const expectation = {};

    expect(userReducer.activeUser(undefined, action)).toEqual(expectation);
  });

  it('should fire an error when login does not function properly', () => {
    const action = { type: 'LOGIN_ERROR', loginError: true
    };
    const expectation = true;

    expect(userReducer.userLoginError(undefined, action)).toEqual(expectation);
  });

  it('should reset login status', () => {
    const action = { type: 'LOGIN_RESET', loginError: false
    };
    const expectation = false;

    expect(userReducer.userLoginError(undefined, action)).toEqual(expectation);
  });
});
