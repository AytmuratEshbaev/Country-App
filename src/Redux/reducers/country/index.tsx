import {LOAD_ALL_DATA} from '../../action'

export default function countryReducer(state = [], action: any) {
  switch (action.type) {
    case LOAD_ALL_DATA: {
      return action.payload;
    }
    default:
      return state;
  }
}
