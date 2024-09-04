import { Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [data, setdata] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setdata(res));
  }, []);

  console.log(data);

  return (
    <>
      <Image
        isZoomed
        // isBlurred
        width={240}
        alt="NextUI Fruit Image with Zoom"
        src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
      />
    </>
  );
};

export default Product;
