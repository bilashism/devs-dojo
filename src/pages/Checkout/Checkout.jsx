import React, { useContext, useEffect } from "react";
import Cart from "../../components/Cart/Cart";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { getCourseCart } from "../../utilities/localStorage";
import { CartContext } from "../Main/Main";

const Checkout = () => {
  const { cart, setCart } = useContext(CartContext);
  // console.log(cart);

  useEffect(() => {
    const storedCart = getCourseCart();
    const storedCartItems = [];
    for (const id in storedCart) {
      const addedProducts = cart.find(course => course.id === id);
      if (addedProducts) {
        const quantity = storedCart[id];
        addedProducts.quantity = quantity;
        storedCartItems.push(addedProducts);
      }
    }

    setCart(storedCartItems);
  }, []);

  return (
    <div className="py-4 dark:bg-gray-900 dark:text-white transition-colors">
      <div className="container mx-auto px-4 flex flex-col gap-8  ">
        <h2 className="text-4xl text-center pt-4">Checkout</h2>
        <p className="text-center">Items added: {cart.length}</p>

        <div className="grid gap-8 lg:grid-cols-12 my-6">
          <div className="lg:col-span-8 grid gap-8 lg:gap-10 ">
            {cart.map(course => (
              <CheckoutItem key={course.id} course={course} />
            ))}
          </div>
          <div className="lg:col-span-4">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
