import { combineReducers } from "redux";

import donationsReducer from "./donationsReducer";
import errorsReducer from "./errorsReducer";

export default combineReducers({
  donations: donationsReducer,
  errors: errorsReducer,
});
