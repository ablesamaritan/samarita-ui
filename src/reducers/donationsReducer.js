import _ from "lodash";

import * as actionTypes from "../actions/types";
import errors from "./errorsReducer";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_DONATIONS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case actionTypes.GET_DONATIONS_ERROR:
      return { ...errors(state, action) };
    case actionTypes.GET_A_DONATION:
      return { ...state, [action.payload.id]: action.payload };
    case actionTypes.GET_A_DONATION_ERROR:
      return { ...errors(state, action) };
    default:
      return state;
  }
};
