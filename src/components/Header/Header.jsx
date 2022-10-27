import React, { useContext } from "react";
import { Link } from "react-router-dom";
import headerImg from "../../images/header-img-1.png";
import { CoursesContext } from "../../pages/Main/Main";

const Header = () => {
  const courses = useContext(CoursesContext);

  return (
    <header className="py-8 lg:py-4">
      <div className="container mx-auto px-4 grid gap-10 items-center lg:grid-cols-2 lg:min-h-screen">
        <article className="flex flex-col gap-5 overflow-auto">
          <h1 className="break-words text-4xl lg:text-7xl">
            Improve Your Online Learning Experience Better Instantly
          </h1>
          <p className="text-xl">
            We have <b className="text-red-500">{courses.length}+</b> Online
            courses & <span className="text-red-500 font-bold">500+</span>{" "}
            Online registered student. Find your desired Courses from them.
          </p>
          <form className="flex gap-4 flex-wrap lg:flex-nowrap justify-center items-center lg:justify-start">
            <input
              className="w-3/4 h-full flex-grow rounded-full p-4 border border-blue-700"
              type="search"
              placeholder="Search Courses"
            />
            <button
              className="rounded-full lg:w-1/4 bg-blue-700 text-white p-4 border border-blue-700 hover:border-red-500 hover:bg-red-500 hover:text-slate-800 transition"
              type="submit">
              Search Now
            </button>
          </form>

          {/* student-list */}
          <figure className="flex items-center gap-8 flex-wrap ">
            <div className="flex justify-center lg:justify-start flex-grow lg:flex-grow-0">
              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                alt="banner"
                width="46"
                height="46"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                className="rounded-full ring-2 ring-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/94.jpg"
                alt="banner"
                width="46"
                height="46"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                className="rounded-full ring-2 ring-white -mx-2"
              />
              <img
                src="https://randomuser.me/api/portraits/women/11.jpg"
                alt="banner"
                width="46"
                height="46"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                className="rounded-full ring-2 ring-white"
              />
            </div>
            <p className="text-center lg:text-left">
              500+ People already trusted us.{" "}
              <Link
                className="inline-flex items-center text-lg underline hover:text-red-500 transition-colors"
                to="/courses">
                View Courses <span>➡</span>
              </Link>
            </p>
          </figure>
        </article>
        <figure className="order-first lg:order-none rounded-full bg-red-500 aspect-square">
          <picture className="inline-flex  ">
            <source srcSet={headerImg} />
            <img
              src={headerImg}
              alt="header banner"
              loading="lazy"
              width="2379"
              height="1656"
              decoding="async"
              fetchpriority="low"
            />
          </picture>
        </figure>
      </div>
    </header>
  );
};

export default Header;
