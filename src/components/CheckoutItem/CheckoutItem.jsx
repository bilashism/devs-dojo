import React, { useContext } from "react";
import { CartContext } from "../../pages/Main/Main";

const CheckoutItem = ({ course }) => {
  const { handleRemoveFromCart } = useContext(CartContext);
  const {
    id,
    courseName,
    courseImg,
    details,
    duration,
    price,
    rating,
    topics
  } = course;
  return (
    <article className="grid items-center self-start p-4 gap-4 lg:grid-cols-12 bg-slate-300 dark:bg-gray-700 dark:text-white transition-colors">
      <figure className="lg:col-span-2 flex items-center text-center">
        <picture className="inline-flex ">
          <source srcSet={courseImg} />
          <img
            src={courseImg}
            alt={courseName}
            className="object-cover"
            loading="lazy"
            width="920"
            height="556"
            decoding="async"
            fetchpriority="low"
          />
        </picture>
      </figure>
      <div className="lg:col-span-6 flex flex-col gap-2 flex-grow justify-between px-2">
        <h3 className="text-2xl pb-2">{courseName}</h3>

        <p className="text-sm">
          <b>Duration:</b> {duration}
        </p>
        <p className="text-sm">
          <b>Topics:</b> {topics}
        </p>
      </div>
      <div className="lg:col-span-3 flex items-center justify-between flex-col gap-4">
        <p className="text-red-500 font-bold text-2xl">${price}</p>
        <button
          type="button"
          onClick={() => handleRemoveFromCart(id)}
          className="inline-flex rounded-full bg-blue-700 text-white p-3 hover:bg-red-500 hover:text-slate-800 transition">
          Remove course
        </button>
      </div>
    </article>
  );
};

export default CheckoutItem;
