import { LOAD_COUNTRY_DETAIL, LOAD_COUNTRY_DETAIL_SUCCESS } from "../../action";

let initial = {
  name: "",
  data: [],
};

export default function countryDetailsReducer(state = initial, action: any) {
  switch (action.type) {
    case LOAD_COUNTRY_DETAIL:
      return {
        ...state,
        name: action.payload,
      };
    case LOAD_COUNTRY_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
