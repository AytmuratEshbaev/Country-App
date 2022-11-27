import {SELECT_REGION} from '../../action';

function selectReducer(state = "All", action: any) {
  switch (action.type) {
    case SELECT_REGION:
      return action.payload;
    default:
      return state;
  }
}

export default selectReducer;
