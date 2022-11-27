import countryReducer from "./country";
import countryDetailsReducer from "./countryDetails";
import themeReducer from "./theme";
import selectReducer from "./select";
import searchReducer from "./search";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  data: countryReducer,
  detail: countryDetailsReducer,
  theme: themeReducer,
  region: selectReducer,
  search: searchReducer
});

export default rootReducer;
