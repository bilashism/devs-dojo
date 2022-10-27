const getCourseCart = () => {
  let courseCart = {};

  //get the course cart from local storage
  const storedCart = localStorage.getItem("course-cart");
  if (storedCart) {
    courseCart = JSON.parse(storedCart);
  }
  return courseCart;
};
// use local storage to manage cart data

const addToDb = id => {
  const courseCart = getCourseCart();

  if (!courseCart[id]) {
    courseCart[id] = 1;
  }
  localStorage.setItem("course-cart", JSON.stringify(courseCart));
};

const removeFromDb = id => {
  const storedCourseCart = localStorage.getItem("course-cart");
  if (storedCourseCart) {
    const currentCourseCart = JSON.parse(storedCourseCart);
    if (id in currentCourseCart) {
      delete currentCourseCart[id];
      localStorage.setItem("course-cart", JSON.stringify(currentCourseCart));
    }
  }
};

const deleteCourseCart = () => {
  localStorage.removeItem("course-cart");
};

export { getCourseCart, addToDb, removeFromDb, deleteCourseCart };
