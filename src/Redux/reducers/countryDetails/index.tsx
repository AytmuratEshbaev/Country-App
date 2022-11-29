import {
  LOAD_COUNTRY_DETAIL,
  LOAD_COUNTRY_DETAIL_SUCCESS,
} from "../../action";

let initial = {
  code: "",
  data: null,
  loading: false
};

export default function countryDetailsReducer(state = initial, action: any) {
  switch (action.type) {
    case LOAD_COUNTRY_DETAIL:
      return {
        ...state,
        code: action.payload,
        loading: true
      };
    case LOAD_COUNTRY_DETAIL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
