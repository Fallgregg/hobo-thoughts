import {
  POST_PAGE_LOADED,
  POST_PAGE_UNLOADED,
  ADD_COMMENT,
} from "../constants/actionTypes";

const postReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_PAGE_LOADED:
      return {
        ...state,
        post: action.payload[0].post,
        comments: action.payload[1].comments,
      };
    case POST_PAGE_UNLOADED:
      return {};
    case ADD_COMMENT:
      return {
        ...state,
        commentErrors: action.error ? action.payload.errors : null,
        comments: action.error
          ? null
          : (state.comments || []).concat([action.payload.comment]),
      };
    default:
      return state;
  }
};

export default postReducer;
