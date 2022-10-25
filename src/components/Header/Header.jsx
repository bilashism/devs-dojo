import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../../images/header-img-1.png";
const Header = () => {
  return (
    <header className="py-8 lg:py-1">
      <div className="container mx-auto px-4 grid gap-8 items-center lg:grid-cols-2 lg:min-h-screen">
        <article className="flex flex-col gap-5">
          <h1 className="text-5xl lg:text-7xl">
            Improve Your Online Learning Experience Better Instantly
          </h1>
          <p className="text-2xl">
            We have 40+ Online courses & 500K+ Online registered student. Find
            your desired Courses from them.
          </p>
          <form className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <input
              className="h-full flex-grow rounded-full pl-4 py-4 border border-blue-700"
              type="search"
              placeholder="Search Courses"
            />
            <button
              className="rounded-full bg-blue-700 text-white p-3 hover:bg-red-500 hover:text-slate-800 transition"
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
                className="rounded-full ring-2 ring-white"
              />
              <img
                src="https://randomuser.me/api/portraits/women/94.jpg"
                alt="banner"
                width="46"
                height="46"
                className="rounded-full ring-2 ring-white -mx-2"
              />
              <img
                src="https://randomuser.me/api/portraits/women/11.jpg"
                alt="banner"
                width="46"
                height="46"
                className="rounded-full ring-2 ring-white"
              />
            </div>
            <p className="text-center lg:text-left">
              500+ People already trusted us.{" "}
              <Link
                className="inline-flex items-center text-lg underline"
                href="/courses">
                {" "}
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
              className=""
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
