import { useState, useEffect } from "react";
import axios from "axios";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      // Fetch categories from the API
      const {
        data: { data },
      } = await axios.get("http://localhost:1337/api/categories");
      setCategories(data); // Set the fetched categories to the state
    } catch (error) {
      console.log({ error });
    }
  };

  const fetchProducts = async () => {
    try {
      // Fetch products from the API, including related data
      const {
        data: { data },
      } = await axios.get("http://localhost:1337/api/products?populate=*");
      setProducts(data); // Set the fetched products to the state
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    // Fetch products and categories when the component mounts
    fetchProducts();
    fetchCategories();
  }, []);

  // Return the categories and products as the result of the custom hook
  return { categories, products };
};
