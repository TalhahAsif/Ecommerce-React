import React, { useEffect, useState } from "react";
import { Card, CardBody, CardFooter, Image, Spinner } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Product from "../Pages/Product";
import axios, { all } from "axios";
import CategoryChips from "./CategoryChips";

export default function CardCmp() {
  const [product, setProduct] = useState();
  const [loading, setloading] = useState(false);
  const [category, setCategory] = useState("all");
  const [chosen, setChosen] = useState();

  useEffect(() => {
    const URL =
      category === "all"
        ? "https://dummyjson.com/products"
        : `https://dummyjson.com/products/category/${category}`;
    setloading(true);
    axios
      .get(URL)
      .then((res) => {
        setProduct(res.data.products);
        setloading(false);
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }, [category]);

  const setCat = (chip) => {
    // console.log("click", chip);
    setCategory(chip);
    setChosen(chip);
  };

  return (
    <>
        <CategoryChips onClick={setCat} category={category} />
        <section className="flex justify-center items-center mt-14">
          <div className="gap-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 flex-wrap justify-center mx-7">
            {loading ? (
              <Spinner />
            ) : (
              product?.map((item, index) => (
                <Link
                  key={index}
                  to={`/product/${item.id}`}
                  className="text-white"
                >
                  <Card
                    shadow="sm"
                    isPressable
                    onPress={() => console.log("item pressed")}
                    className="p-0 w-full h-full bg-slate-800 text-white"
                  >
                    <CardBody className="overflow-visible p-0">
                      <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        alt={item.title}
                        className="w-full object-contain h-[140px]"
                        src={item.thumbnail}
                      />
                    </CardBody>
                    <CardFooter className="text-small justify-between">
                      <b className="">{item.title}</b>
                      <p className="text-default-500">${item.price}</p>
                    </CardFooter>
                  </Card>
                </Link>
              ))
            )}
          </div>
        </section>
    </>
  );
}
