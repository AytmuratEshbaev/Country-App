import {CHANGE_THEME} from '../../action'

function themeReducer(state = "lightMode", action: any) {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
}

export default themeReducer;
