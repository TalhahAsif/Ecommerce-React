import React, { useEffect, useState } from "react";
import NavbarCmp from "../Component/Navbar";
import CartItemCard from "../Component/CartItemCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Cart = () => {
  const [firebaseData, setFirebaseData] = useState();
  const [loading, setLoading] = useState(false);

  const data = localStorage.getItem("products");
  const itemsFromLS = data ? JSON.parse(data) : [];

  console.log(firebaseData);

  useEffect(() => {
    setLoading(true);
    const fetchingData = async () => {
      try {
        const firebaseData = await getDocs(collection(db, "cartItems"));
        const data = firebaseData.docs.map((doc) => doc.data());
        setLoading(false);
        setFirebaseData(data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchingData();
  }, []);

  return (
    <>
      <div>
        <NavbarCmp />

        <section className="gap-4 grid lg:grid-cols-2 sm:grid-cols-1 flex-wrap justify-center mx-7">
          {firebaseData?.map((data) => (
            <div key={data.product.id}>
              <CartItemCard
                image={data.product.thumbnail}
                title={data.product.title}
                price={data.product.price}
                brand={data.product.brand}
                quntity={data.quantity}
              />
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default Cart;
