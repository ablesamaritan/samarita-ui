import { DEFAULT_ERROR_MESSAGE } from "../actions/types";

// eslint-disable-next-line
export default (state, action) => {
  if (!action.error) {
    return {
      ...state,
      error: null,
    };
  }

  return {
    ...state,
    error: {
      errorMessage: DEFAULT_ERROR_MESSAGE,
      ...action.payload.response,
    },
  };
};
