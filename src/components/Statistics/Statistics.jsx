import React from "react";

const Statistics = () => {
  return (
    <section className="text-gray-600 body-font py-12 dark:bg-gray-900 dark:text-white transition-colors">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h2 className="title-font font-medium text-3xl mb-2 text-gray-900 dark:text-slate-200">
              Our methods are tested and proven!
            </h2>
            <div className="leading-relaxed">
              We believe in quality and hard work.
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-slate-200">
              2.7K
            </h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-slate-200">
              1.8K
            </h2>
            <p className="leading-relaxed">Subscribes</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900 dark:text-slate-200">
              35
            </h2>
            <p className="leading-relaxed">Downloads</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src="https://images.unsplash.com/photo-1546514714-bbedf0abd907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
