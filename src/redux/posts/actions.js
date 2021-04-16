import axios from "axios";
import { SHOW_LOADER, FETCH_POSTS, FETCH_ERROR } from "./types";

const url = "https://jsonplaceholder.typicode.com/users/1/posts";

export function fetchPosts() {
  return async (dispatch) => {
    try {
      dispatch({ type: SHOW_LOADER });
      const response = await axios.get(url);
      dispatch({ type: FETCH_POSTS, payload: response.data });
    } catch (e) {
      dispatch({ type: FETCH_ERROR, payload: e.message });
    }
  };
}
