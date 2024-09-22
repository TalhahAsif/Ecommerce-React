import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { stringify } from "postcss";
import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";

const cartContext = createContext();

const CartContextProvider = ({ children }) => {

  const addToCart = async (items) => {
    console.log(items);
    try {
      const docRef = doc(db, "cartItems", items.date);

      const querySnapshot = await getDocs(
        query(
          collection(db, "cartItems"),
          where("product.id", "==", items.product.id)
        )
      );

      if (querySnapshot.empty) {
        await setDoc(docRef, items);
      } else {
        querySnapshot.forEach(async (productDoc) => {
          const productData = productDoc.data();
          const newQuantity = productData.quantity + items.quantity;

          await updateDoc(productDoc.ref, { quantity: newQuantity });
          // setupdatedProductQuantity(newQuantity);
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeToCart = () => {};

  return (
    <cartContext.Provider value={{ addToCart }}>
      {children}
    </cartContext.Provider>
  );
};

export { CartContextProvider, cartContext };
