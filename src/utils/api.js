// src/utils/api.js
export const fetchProducts = async (limit = 10) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
      if (!response.ok) throw new Error("Failed to fetch products");
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  