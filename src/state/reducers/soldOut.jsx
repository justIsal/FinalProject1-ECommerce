import { ADD_TO_SOLDOUT } from "../../constants/actionTypes"


const INIT_STATE = false

const soldOutReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_TO_SOLDOUT:
      return true
    default:
      return state
  }
}

export default soldOutReducer