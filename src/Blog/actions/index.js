import jsonPlaceHolder from "../api/jsonPlaceHolder";
import _ from "lodash";

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceHolder.get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: response.data });
  };
};

export const fetchUser = id => {
  return dispatch => {
    _fetchUser(id, dispatch);
  };
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceHolder.get("/users/" + id);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
