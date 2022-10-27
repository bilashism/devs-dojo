import React from "react";

const Blog = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-2">
          <div className="p-2 lg:p-12 flex flex-col items-start bg-stone-100">
            <span className="inline-block py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-medium tracking-widest">
              CORS
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              What is cors?
            </h2>
            <p className="leading-relaxed mb-8">
              <strong>Cross-Origin Resource Sharing</strong>
              <br />
              <br />
              CORS is the mechanism that provides the ability to alter the
              behavior of this policy, enabling you to do things like hosting
              static content at www.example.com and the backend API at
              api.example.com. This kind of request would be called a
              Cross-Origin request, as a resource from one subdomain is
              requesting a resource from another subdomain.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-blue-500 mt-auto w-full">
              <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-red-500">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </div>
          </div>

          <div className="p-2 lg:p-12 flex flex-col items-start bg-stone-100">
            <span className="inline-block py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-medium tracking-widest">
              AUTHENTICATION
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </h2>
            <p className="leading-relaxed mb-8">
              Google Firebase offers many features that pitch it as the go-to
              backend development tool for web and mobile apps. It reduces
              development workload and time. And it's a perfect prototyping
              tool. Firebase is simple, lightweight, friendly, and industrially
              recognized.
              <br />
              <br />
              Auth0, MongoDB, Passport, Okta, and Firebase are the most popular
              alternatives and competitors to Firebase Authentication.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-blue-500 mt-auto w-full">
              <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-red-500">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </div>
          </div>

          <div className="p-2 lg:p-12 flex flex-col items-start bg-stone-100">
            <span className="inline-block py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-medium tracking-widest">
              REACT
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              How does the private route work?
            </h2>
            <p className="leading-relaxed mb-8">
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
              <br />
              <br />
              Private Routes in React Router (also called Protected Routes)
              require a user being authorized to visit a route (read: page). So
              if a user is not authorized for a specific page, they cannot
              access it.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-blue-500 mt-auto w-full">
              <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-red-500">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </div>
          </div>

          <div className="p-2 lg:p-12 flex flex-col items-start bg-stone-100">
            <span className="inline-block py-1 px-2 rounded bg-blue-50 text-blue-500 text-xs font-medium tracking-widest">
              NODE
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
              What is Node? How does Node work?
            </h2>
            <p className="leading-relaxed mb-8">
              <strong>Node.js</strong>
              <br />
              As an asynchronous event-driven JavaScript runtime, Node.js is
              designed to build scalable network applications.
              <br />
              It is a used as backend service where javascript works on the
              server-side of the application. This way javascript is used on
              both frontend and backend. Node. js runs on chrome v8 engine which
              converts javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-blue-500 mt-auto w-full">
              <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-red-500">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
