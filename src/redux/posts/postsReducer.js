import { FETCH_ERROR, FETCH_POSTS, SHOW_LOADER } from "./types";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
