import * as actions from '../../actions';

describe('actions', () => {
  it('should create an action to fetch movie data', () => {
    const moviesObject = {
      results: [
        { title: 'It',
          popularity: 837.5},
        { title: 'Blade Runner 2049',
          popularity: 454.1}
      ]
    };
    const expected = {
      type: 'ITEMS_FETCH_DATA_SUCCESS',
      items: {
        results: [
          { title: 'It',
            popularity: 837.5},
          { title: 'Blade Runner 2049',
            popularity: 454.1}
        ]
      }
    };
    const expectation = actions.itemsFetchDataSuccess(moviesObject);

    expect(expectation).toEqual(expected);
  });

  it('should create an action to login a user', () => {
    const userObject = { email: 'gizmo@corgis.io', password: 'stumper4lyfe' };
    const expected = {
      type: 'LOGIN_USER',
      user: { email: 'gizmo@corgis.io', password: 'stumper4lyfe' }
    };
    const expectation = actions.loginUser(userObject);

    expect(expectation).toEqual(expected);
  });
});
