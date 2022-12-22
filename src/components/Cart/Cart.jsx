import React, { useContext } from "react";
import { CartContext } from "../../pages/Main/Main";

const Cart = () => {
  const { cart } = useContext(CartContext);
  const totalPrice = Number(
    cart.reduce((prev, cur) => prev + parseInt(cur.price), 0).toFixed(2)
  );
  const tax = Number((totalPrice * 0.1).toFixed(2));
  return (
    <div className="dark:bg-gray-900 dark:text-white transition-colors">
      <div className="flex items-center justify-between gap-8 flex-wrap text-xl">
        <h2 className="">Total price</h2>
        <b className="text-blue-500 ">${totalPrice}</b>
      </div>
      <div className="flex items-center justify-between gap-8 flex-wrap text-xl">
        <h2 className="">+ Tax</h2> <b className="text-blue-500 ">${tax}</b>
      </div>
      <hr className="border my-4" />
      <div className="flex items-center justify-between gap-8 flex-wrap text-4xl">
        <h2 className="">Grand total</h2>{" "}
        <b className="text-red-500 ">${totalPrice + tax}</b>
      </div>
      <button
        type="button"
        className="flex w-full items-center justify-center text-center gap-2 p-3 text-blue-700 bg-slate-200 hover:bg-slate-500 hover:text-white transition mt-8 font-bold text-xl">
        Place order
      </button>
    </div>
  );
};

export default Cart;
