import { ADD_TO_SOLDOUT } from "../../constants/actionTypes"


const addToSoldOut = (product) => {
    return {
      type: ADD_TO_SOLDOUT,
      payload: product,
    }
}
export default addToSoldOut;