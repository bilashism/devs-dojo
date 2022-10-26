import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleCourse = () => {
  const course = useLoaderData();
  const {
    id,
    courseName,
    certification,
    courseImgFull,
    details,
    duration,
    price,
    rating,
    topics
  } = course;
  console.log(course);

  return (
    <article className="min-h-[calc(100vh-6rem)] grid items-center py-8">
      <div className="container max-w-4xl mx-auto px-4 flex flex-col">
        <figure className="text-center">
          <picture className="inline-flex ">
            <source srcSet={courseImgFull} />
            <img
              src={courseImgFull}
              alt={courseName}
              className="object-cover "
              loading="lazy"
              width="920"
              height="556"
              decoding="async"
              fetchpriority="low"
            />
          </picture>
        </figure>
        <div className="flex flex-col gap-2 flex-grow justify-between p-4 backdrop-blur-3xl -mt-16">
          <h3 className="text-2xl pb-3 text-white drop-shadow-md shadow-slate-500">
            {courseName}
          </h3>

          <p className="flex flex-wrap gap-3 items-center justify-between">
            <span className="">Rating: {rating}</span>
            <span className="">
              Certification: {certification ? `✔` : `❌`}
            </span>
          </p>
          <p className="">Duration: {duration}</p>
          <p className="">Topics: {topics}</p>
          <p className="">📝 {details}</p>

          <div className="flex items-center justify-between flex-wrap">
            <p className="text-red-500">${price}</p>
            <Link
              to={`/checkout/${id}`}
              className="inline-flex rounded-full bg-blue-700 text-white p-3 hover:bg-red-500 hover:text-slate-800 transition">
              Get premium access
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleCourse;
