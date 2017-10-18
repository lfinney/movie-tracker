// const getCurrentReducer = (state = [], action) => {
//   switch (action.type) {
//     case 'GET_INIT_DATA':
      // return [...state, Object.assign({}, action.apiResult)];
//     default:
//       return state;
//   }
// };
//
// export default getCurrentReducer;

export function itemsHasErrored(state = false, action) {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function items(state = [], action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;

        default:
            return state;
    }
}
