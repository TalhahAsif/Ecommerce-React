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
      <section className="flex gap-4 p-3 overflow-hidden">
        <div
          onClick={() => onClick("all")}
          className={`${
            category == "all"
              ? "bg-gray-900 font-extrabold text-yellow-400"
              : "border border-gray-700"
          } py-3 px-6 rounded-xl cursor-pointer hover:bg-slate-700 hover:text-yellow-500`}
        >
          <p>All</p>
        </div>
        <div className="flex overflow-x-scroll scrollbar-hide gap-4">
          {categories?.map((chip, index) => (
            <section key={index}>
              <div
                onClick={() => onClick(chip)}
                className={`${
                  category == chip
                    ? "bg-gray-900 font-extrabold text-yellow-400"
                    : "border border-gray-700"
                } py-3 rounded-xl cursor-pointer hover:bg-gray-900 hover:text-yellow-400 hover:font-extrabold w-56 text-center`}
              >
                <p>{chip}</p>
              </div>
            </section>
          ))}
          </div>
        </section>
    </>
  );
};

export default CategoryChips;
