import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
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
  console.log(course);

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
          <span className="">Rating: {rating}</span>
          <span className="">Certification: {certification ? `✔` : `❌`}</span>
        </p>
        <p className="">Duration: {duration}</p>
        <p className="">Topics: {topics}</p>
        <p className="">
          📝 {details.length >= 125 ? `${details.slice(0, 125)}...` : details}
          {details.length >= 125 && (
            <Link
              to={`/course/${id}`}
              className="inline-flex text-blue-700 hover:text-red-500 transition">
              Learn more
            </Link>
          )}
        </p>

        <div className="flex items-center justify-between flex-wrap">
          <p className="text-red-500">${price}</p>
          <Link
            to={`/course/${id}`}
            className="inline-flex rounded-full bg-blue-700 text-white p-3 hover:bg-red-500 hover:text-slate-800 transition">
            Buy now
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Course;
