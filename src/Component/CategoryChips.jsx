import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoryChips = ({ onClick, category }) => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);

  // categories.unshift("all")

  return (
    <>
      <section className="flex flex-wrap gap-4 p-3 justify-start">
        <div
          onClick={() => onClick("all")}
          className={`${
            category == "all" ? "bg-gray-900" : "border border-gray-700"
          } py-3 px-6 rounded-xl cursor-pointer hover:bg-slate-700 hover:text-white`}
        >
          <p>All</p>
        </div>
        {categories?.map((chip, index) => (
          <section key={index}>
            <div
              onClick={() => onClick(chip)}
              className={`${
                category == chip ? "bg-gray-900" : "border border-gray-700"
              } py-3 px-6 rounded-xl cursor-pointer hover:bg-slate-700 hover:text-white`}
            >
              <p>{chip}</p>
            </div>
          </section>
        ))}
      </section>
    </>
  );
};

export default CategoryChips;
