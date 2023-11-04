export const fetchProductsFromAPI = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch products');
      }
    } catch (error) {
      throw new Error('Error fetching products:', error);
    }
};
// export const fetchProductIdFromApi = async (id) => {
//   try {
//     const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    
//     if (response.ok) {
//       const data = await response.json();
//       return data;
//     } else {
//       throw new Error('Failed to fetch products');
//     }
//   } catch (error) {
//     throw new Error('Error fetching products:', error);
//   }
// };