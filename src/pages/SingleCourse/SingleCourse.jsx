import React, { useContext } from "react";
import { FaFileDownload } from "react-icons/fa";
import { FcInfo } from "react-icons/fc";
import { TbCertificate, TbCertificateOff } from "react-icons/tb";
import { Link, useLoaderData } from "react-router-dom";
import { CartContext } from "../Main/Main";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const SingleCourse = () => {
  const { handleAddToCart } = useContext(CartContext);
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
  // console.log(course);

  const inputRef = useRef(null);
  const printDocument = () => {
    html2canvas(inputRef.current).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      pdf.save(`${courseName.replace(/ /gi, "-")}.pdf`);
    });
  };

  return (
    <article className="min-h-[calc(100vh-6rem)] grid items-center py-8">
      <div
        className="container max-w-4xl mx-auto px-4 flex flex-col gap-8"
        ref={inputRef}>
        <div className="flex items-center gap-2 justify-between drop-shadow-md shadow-slate-500 text-3xl">
          <h3 className="pb-3 flex-grow">{courseName}</h3>
          <button
            type="button"
            title="Download this article as .pdf"
            className="text-blue-700 transition-colors hover:text-red-500"
            onClick={printDocument}>
            <FaFileDownload />
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <figure className="flex text-center">
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

          <div className="flex flex-col gap-4 flex-grow justify-between p-4 bg-slate-200">
            <p className="flex flex-wrap gap-3 items-center justify-between">
              <span className="font-bold">
                Rating: <i className="text-blue-700">{rating}</i>
              </span>
              <span className="inline-flex items-center gap-2">
                Certification:{" "}
                {certification ? (
                  <span className="inline-flex items-center">
                    <TbCertificate />
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <TbCertificateOff />
                  </span>
                )}
              </span>
            </p>
            <p className="">
              <span className="font-bold">Duration:</span> {duration}
            </p>
            <p className="">
              <span className="font-bold">Topics:</span> {topics}
            </p>
            <p className="">
              {" "}
              <span className="inline-flex items-center">
                <FcInfo />
              </span>{" "}
              {details}
            </p>

            <div className="flex items-center justify-between flex-wrap">
              <p className="text-red-500">${price}</p>
              <Link
                to={`/checkout/${id}`}
                onClick={ev => handleAddToCart(ev, id)}
                className="inline-flex rounded-full bg-blue-700 text-white p-3 hover:bg-red-500 hover:text-slate-800 transition">
                Get premium access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleCourse;
