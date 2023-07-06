import {
  CHANGE_SEARCH_FIELD,
  REQUEST_PENDING,
  REQUEST_SUCCESS,
  REQUEST_FAILED,
} from "./constants";

const initialStateSearch = {
  searchField: "",
};

export const searchKitten = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    // return { ...state, searchField: action.payload };  // <-- Object spread operator:
    default:
      return state;
  }
};

const initialStateKitten = {
  isPending: false,
  kittens: [],
};

export const requestKitten = (state = initialStateKitten, action = {}) => {
  switch (action.type) {
    case REQUEST_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_SUCCESS:
      return Object.assign({}, state, {
        kittens: action.payload,
        isPending: false,
      });
    case REQUEST_FAILED:
      return Object.assign({}, state, {
        kittens: action.payload,
        isPending: false,
      });
    default:
      return state;
  }
};
