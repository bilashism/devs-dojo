import React, { useContext } from "react";
import { FaClock, FaLightbulb, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../pages/Main/Main";
import { TbCertificate, TbCertificateOff } from "react-icons/tb";

const Course = ({ course }) => {
  const { handleAddToCart } = useContext(CartContext);
  const {
    id,
    courseName,
    certification,
    courseImg,
    details,
    duration,
    price,
    rating,
    topics
  } = course;

  return (
    <article className="flex flex-col bg-slate-200 rounded-lg">
      <figure className="text-center">
        <picture className="inline-flex max-w-sm h-60">
          <source srcSet={courseImg} />
          <img
            src={courseImg}
            alt={courseName}
            className="object-cover "
            loading="lazy"
            width="420"
            height="256"
            decoding="async"
            fetchpriority="low"
          />
        </picture>
      </figure>
      <div className="flex flex-col gap-2 flex-grow justify-between p-4">
        <h3 className="text-2xl pb-3">{courseName}</h3>

        <p className="flex flex-wrap gap-3 items-center justify-between">
          <span className="flex items-center gap-2">
            <span className="inline-flex items-center text-lg text-blue-700">
              <FaStar />
            </span>
            <span className="">{rating}</span>
          </span>
          <span className="inline-flex items-center gap-2">
            Certification:{" "}
            <span className="inline-flex items-center text-green-700">
              {certification ? <TbCertificate /> : <TbCertificateOff />}
            </span>
          </span>
        </p>
        <p className="flex items-center gap-2">
          <span className="inline-flex items-center text-lg text-blue-700">
            <FaClock />
          </span>{" "}
          {duration}
        </p>
        <p className="">
          <span className="font-bold">Topics:</span> {topics}
        </p>
        <p className="">
          <span className="inline-flex items-center text-lg text-blue-700">
            <FaLightbulb />
          </span>{" "}
          {details.length >= 125 ? `${details.slice(0, 125)}...` : details}
          {details.length >= 125 && (
            <Link
              to={`/course/${id}`}
              className="inline-flex text-blue-700 hover:text-red-500 transition">
              Learn more
            </Link>
          )}
        </p>

        <div className="flex items-center justify-between flex-wrap">
          <p className="text-red-500 font-bold">${price}</p>
          {/* <Link
            to={`/course/${id}`}
            className="inline-flex rounded-full bg-blue-700 text-white p-3 hover:bg-red-500 hover:text-slate-800 transition">
            Buy now
          </Link> */}
          <button
            type="button"
            className="inline-flex rounded-full bg-blue-700 disabled:cursor-not-allowed disabled:hover:bg-blue-700 disabled:hover:text-white text-white p-3 hover:bg-red-500 hover:text-slate-800 transition"
            onClick={ev => handleAddToCart(ev, id)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default Course;
