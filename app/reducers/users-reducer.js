export function activeUser (state = [], action) {
  switch (action.type) {
    case 'VALIDATE_USER_STATUS':
      return action.user;

    default:
      return state;
    }
}

export function postUser (state = [], action) {
  switch (action.type) {
    case 'POST_NEW_USER':
      return action.user;

    default:
      return state;
    }
}
