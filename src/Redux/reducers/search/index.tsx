import { SEARCH_VALUE } from "../../action";

export default function searchReducer(state = "", action: any) {
  switch (action.type) {
    case SEARCH_VALUE:
      return action.payload;
    default:
      return state;
      
  }
}
