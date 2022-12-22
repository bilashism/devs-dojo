import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 min-h-screen overflow-hidden text-center lg:text-left dark:bg-gray-900 dark:text-white transition-colors">
      <div className=" w-full xl:w-1/2 relative">
        <div className="relative">
          <div className="">
            <div className="">
              <h1 className="my-2 text-gray-800 dark:text-white font-bold text-2xl">
                Looks like you've found the doorway to the great nothing
              </h1>
              <p className="my-2 text-gray-800 dark:text-white">
                Sorry about that! Please visit our homepage to get where you
                need to go.
              </p>

              <Link
                to="/"
                className="inline-flex sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50">
                Go back to home page
              </Link>
            </div>
          </div>
          <div className="absolute top-0 -z-10">
            <img
              src="https://i.ibb.co/G9DC8S0/404-2.png"
              alt="error page"
              width="516"
              height="190"
              className="scale-150 object-contain"
            />
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://i.ibb.co/ck1SGFJ/Group.png"
          alt="error page"
          width="539"
          height="400"
          className="w-80"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
