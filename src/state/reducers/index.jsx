import isCartOpenReducer from './isCartOpen'
import productsReducer from './products'
import cartReducer from './cart'
import { combineReducers } from 'redux'
import soldOutReducer from './soldOut'

const rootReducer = combineReducers({
  isCartOpen: isCartOpenReducer,
  products: productsReducer,
  cart: cartReducer,
  soldOut: soldOutReducer
})

export default rootReducer