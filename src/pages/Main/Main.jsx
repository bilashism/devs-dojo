import React, { createContext, useEffect, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import {
  addToDb,
  getCourseCart,
  removeFromDb
} from "../../utilities/localStorage";
export const CoursesContext = createContext([]);
export const CartContext = createContext();

const Main = () => {
  const courses = useLoaderData();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getCourseCart();
    const storedCartItems = [];
    for (const id in storedCart) {
      const addedProducts = courses.find(course => course.id === id);
      if (addedProducts) {
        const quantity = storedCart[id];
        addedProducts.quantity = quantity;
        storedCartItems.push(addedProducts);
      }
    }

    setCart(storedCartItems);
  }, [courses]);

  const handleAddToCart = (ev, selectedProductId) => {
    const isExistingCourse = cart.find(prod => prod?.id === selectedProductId);
    let newCart = [];
    // console.log(isExistingCourse, cart);

    if (!isExistingCourse) {
      const newCourse = courses.find(prod => prod?.id === selectedProductId);
      newCart = [...cart, newCourse];
    } else {
      newCart = [...cart];
    }

    // console.log(newCart);
    setCart(newCart);
    // console.log(newCart);
    addToDb(selectedProductId);
    ev.target.disabled = true;
    ev.target.innerText = `Added to cart`;
    ev.target.classList.add("bg-green-500");
  };

  const handleRemoveFromCart = id => {
    const remainingItems = cart.filter(prod => prod?.id !== id);
    setCart([...remainingItems]);
    removeFromDb(id);
  };

  const cartContextData = {
    cart,
    setCart,
    handleAddToCart,
    handleRemoveFromCart
  };
  return (
    <CoursesContext.Provider value={courses}>
      <CartContext.Provider value={cartContextData}>
        <Navbar />
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </CoursesContext.Provider>
  );
};

export default Main;
