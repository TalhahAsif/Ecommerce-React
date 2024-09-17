import React from "react";
import NavbarCmp from "../Component/Navbar";
import CartItemCard from "../Component/CartItemCard";

const Cart = () => {
  const data = localStorage.getItem("products");
  const itemsFromLS = data ? JSON.parse(data) : [];
  console.log(itemsFromLS);

  return (
    <>
      <div>
        <NavbarCmp />

        <section className="gap-4 grid lg:grid-cols-2 sm:grid-cols-1 flex-wrap justify-center mx-7">
          {itemsFromLS.map((data) => (
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
