import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../images/testimonial-1.png";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../authentication/AuthProvider/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";

const Login = () => {
  const defaultFeedback = `We'll never share your details.`;

  const navigate = useNavigate();
  const [feedback, setFeedback] = useState(defaultFeedback);
  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const { userLogIn, providerLogin, setAuthLoading } = useContext(AuthContext);

  /**
   * The handleProviderLogin function takes a provider as an argument and then calls the providerLogin
   * function with the provider as an argument. If the promise resolves, it will display a toast message.
   * If the promise rejects, it will set the feedback state to the error message and log the error to the
   * console.
   */
  const handleProviderLogin = provider => {
    providerLogin(provider)
      .then(data => {
        toast.success("Login successful! 🎉");
        navigate(from, { replace: true });
      })
      .catch(err => {
        setFeedback(err?.message.replace("Firebase: ", ""));
        console.error(err);
      });
  };

  /**
   * When the user clicks the submit button, prevent the default action, grab the email and password from
   * the form, and if the email and password are not empty, call the userLogIn function, which is
   * imported from the firebase.js file, and pass in the email and password as arguments. If the
   * userLogIn function is successful, reset the form, set the feedback to the default feedback, show a
   * success message, and navigate to the home page. If the userLogIn function is unsuccessful, set the
   * feedback to the error message, and set the authLoading to false.
   */
  const handleUserLogIn = ev => {
    ev.preventDefault();
    const form = ev.target;
    const email = userEmailRef.current.value;
    const password = userPasswordRef.current.value;

    if (email && password) {
      userLogIn(email, password)
        .then(result => {
          console.log(result);
          form.reset();
          setFeedback(defaultFeedback);
          toast.success("Login successful! 🎉");
          navigate(from, { replace: true });
        })
        .catch(err => {
          setFeedback(err?.message.replace("Firebase: ", ""));
          console.error(err);
        })
        .finally(() => {
          setAuthLoading(false);
        });
    }
  };

  return (
    <section className="py-8 lg:py-4">
      <div className="container mx-auto px-4 grid gap-8 items-center lg:grid-cols-2 lg:min-h-screen">
        {/* image section */}
        <figure className="order-first lg:order-none rounded-full bg-red-500 aspect-square">
          <picture className="inline-flex  ">
            <source srcSet={loginImg} />
            <img
              src={loginImg}
              alt="login banner"
              className=""
              loading="lazy"
              width="629"
              height="694"
              decoding="async"
              fetchpriority="low"
            />
          </picture>
        </figure>

        {/* form section  */}
        <div className="">
          <form onSubmit={handleUserLogIn} className="lg:max-w-lg mx-auto">
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
                Log in
              </button>
            </div>
          </form>

          {/* others */}
          <div className="pt-4">
            <div className="lg:max-w-lg mx-auto">
              <hr className="border mb-6 border-red-500" />
              <div className="text-center flex flex-col gap-4">
                <button
                  onClick={() => handleProviderLogin(googleProvider)}
                  type="button"
                  className="inline-flex items-center justify-center text-center gap-2 p-3 bg-slate-200 hover:bg-slate-500 hover:text-white transition">
                  <FcGoogle /> Log in with Google
                </button>

                <button
                  onClick={() => handleProviderLogin(githubProvider)}
                  type="button"
                  className="inline-flex items-center justify-center text-center gap-2 p-3 bg-slate-200 hover:bg-slate-500 hover:text-white transition">
                  <FaGithub /> Log in with Github
                </button>
                <p className="">or</p>
                <Link to="/register" className="hover:underline self-center">
                  Create a new account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
