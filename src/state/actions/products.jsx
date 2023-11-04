import { SET_PRODUCTS, UPDATE_PRODUCT } from '../../constants/actionTypes'

const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  }
}
const updateProducts = (products) => {
  return{
    type: UPDATE_PRODUCT,
    payload: products,
  }
}
export { setProducts,updateProducts }
