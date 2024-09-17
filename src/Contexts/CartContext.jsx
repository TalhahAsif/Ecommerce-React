import { stringify } from "postcss";
import { createContext, useState } from "react";

const cartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(0);
  
  const addToCart = (item) => {
    const datafromLS = localStorage.getItem("products");
    const array = datafromLS ? JSON.parse(datafromLS) : [];

    if (datafromLS) {
      const itemIndex = array.findIndex(
        (data) => data.product.id == item.product.id
      );

      if (itemIndex == -1) {
        array.push(item);
        cartItems == array.length;
        console.log(cartItems);
      } else {
        array[itemIndex].quantity++;
      }
    }

    const dataToPush = [...array];
    const stringify = JSON.stringify(dataToPush);

    localStorage.setItem("products", stringify);
  };

  const removeToCart = () => {};

  return (
    <cartContext.Provider value={{ addToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export { CartContextProvider, cartContext };
