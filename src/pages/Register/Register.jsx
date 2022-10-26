import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthProvider/AuthProvider";
import registerImg from "../../images/transform-img.png";
import toast from "react-hot-toast";

const Register = () => {
  const defaultFeedback = `We'll never share your details.`;

  const navigate = useNavigate();
  const [feedback, setFeedback] = useState(defaultFeedback);
  const userNameRef = useRef();
  const userPhotoUrlRef = useRef();
  const userEmailRef = useRef();
  const userPasswordRef = useRef();

  const { createUser, verifyEmail } = useContext(AuthContext);

  /**
   * Sends an email verification to the current user.
   */
  const handleEmailVerify = () => {
    verifyEmail()
      .then(() => {
        toast.success(
          "Email verification link is sent. Please check your inbox or spam folder.",
          { duration: 5000 }
        );
      })
      .catch(err => console.error(err));
  };

  /**
   * If the email and password are valid, then create a user, reset the form, set the feedback to the
   * default feedback, toast a success message, handle the email verification, toast another success
   * message, and navigate to the home page.
   */
  const handleUserRegistration = ev => {
    ev.preventDefault();
    const form = ev.target;
    const email = userEmailRef.current.value;
    const password = userPasswordRef.current.value;

    if (email && password) {
      createUser(email, password)
        .then(result => {
          // const user = result.user;
          form.reset();
          setFeedback(defaultFeedback);
          toast.success("Registration is completed.", { duration: 3000 });
          handleEmailVerify();
          toast.success(
            "Please verify your email. Check your inbox or spam folder.",
            { duration: 4000 }
          );
          navigate("/");
          // console.log(result);
        })
        .catch(err => {
          setFeedback(err?.message.replace("Firebase: ", ""));
          console.error(err);
        });
    }
  };

  return (
    <section className="py-8 lg:py-4">
      <div className="container mx-auto px-4 grid gap-8 items-center lg:grid-cols-2 lg:min-h-screen">
        {/* image section */}
        <figure className="text-center lg:order-last rounded-full bg-red-500 aspect-square">
          <picture className="inline-flex  ">
            <source srcSet={registerImg} />
            <img
              src={registerImg}
              alt="register banner"
              className=""
              loading="lazy"
              width="629"
              height="694"
              decoding="async"
              fetchpriority="low"
            />
          </picture>
        </figure>

        {/* form section */}
        <div className="">
          <form
            onSubmit={handleUserRegistration}
            className="lg:max-w-lg mx-auto">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                id="user-name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                ref={userNameRef}
              />
              <label
                htmlFor="user-name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Your name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="url"
                id="user-photo-url"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                ref={userPhotoUrlRef}
              />
              <label
                htmlFor="user-photo-url"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Profile photo URL
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="email"
                id="user-email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                autoComplete="username"
                ref={userEmailRef}
              />
              <label
                htmlFor="user-email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="password"
                id="user-password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-blue-700 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                autoComplete="current-password"
                ref={userPasswordRef}
              />
              <label
                htmlFor="user-password"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Password
              </label>
            </div>
            <div className="py-2 text-center flex flex-col gap-5">
              <p className="">{feedback}</p>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition">
                Register
              </button>
            </div>
          </form>

          {/* others */}
          <div className="pt-4">
            <div className="lg:max-w-lg mx-auto">
              <hr className="border mb-6 border-red-500" />
              <div className="text-center flex flex-col gap-4">
                <Link to="/login" className="hover:underline self-center">
                  Already have an account?{" "}
                  <b className="text-red-500">Login now</b>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
