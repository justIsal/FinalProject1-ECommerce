import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { fetchProductsFromAPI } from '../../Api/productApi'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const loadDataFromLocalStorage = () => {
  const dataFromLocalStorage = localStorage.getItem('products');
  return dataFromLocalStorage ? JSON.parse(dataFromLocalStorage) : null;
};
const initializeStore = async()=> {
  const persistedState = loadDataFromLocalStorage();
  if (persistedState) {
    return createStore(
      rootReducer,
      persistedState,
      composeEnhancers(applyMiddleware(thunk))
    );
  }

  try {
    const products = await fetchProductsFromAPI();
    const quantity = products.map(obj => ({ ...obj, "stock": 20 }));
    localStorage.setItem('products', JSON.stringify({
      "isCartOpen": false,
      "products": quantity,
      "cart": []
    })); 

    console.log('masuk set item')
    return createStore(
      rootReducer,
      { quantity }, 
      composeEnhancers(applyMiddleware(thunk))
    );
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export default initializeStore