import { SET_PRODUCTS, UPDATE_PRODUCT } from '../../constants/actionTypes'

const INIT_STATE = []

const productsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...action.payload]
    case UPDATE_PRODUCT:
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      
      const payload = action.payload.map(item => item.id); 
      const data = storedProducts.products; 
      const updatedProducts = data.map(product => {
        if (payload.includes(product.id)) {
          const updatedProduct = action.payload.find(item => item.id === product.id);
          return { ...product, stock: updatedProduct.stock };
        }
        return product;
      });

      const dataSoldFromStorage = storedProducts.soldOut;
      let newDataSold = []
      if(dataSoldFromStorage.length > 0) {
        newDataSold = [...dataSoldFromStorage,...action.payload];
      }else{
        newDataSold = action.payload;
      }
      
      localStorage.setItem('products', JSON.stringify({
        "isCartOpen": false,
        "products": updatedProducts,
        "cart": [],
        "soldOut": newDataSold
      }))
    default:
      return state
  }
}

export default productsReducer
