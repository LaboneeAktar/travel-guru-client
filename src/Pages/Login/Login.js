import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        toast.success("Successfully Login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="w-full  xl:px-8 xl:w-6/12 mx-auto mt-10 mb-10">
        <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
          <h1 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
            Please Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-1 sm:mb-2">
              <label htmlFor="email" className="inline-block mb-1 text-lg">
                E-mail
              </label>
              <input
                placeholder="Enter Your Email"
                required
                type="email"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label htmlFor="password" className="inline-block mb-1 text-lg">
                Passowrd
              </label>
              <input
                placeholder="Enter Passowrd"
                required
                type="password"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="password"
                name="passoword"
              />
            </div>

            <div className="mt-4 mb-2 sm:mb-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide btn btn-primary hover:btn-accent"
              >
                Login Now
              </button>
            </div>
            <p className="lg:text-[15px] text-gray-600 sm:text-sm">
              Don't have an Accout?{" "}
              <Link to="/register" className="text-blue-700 text-center">
                {" "}
                Create Account
              </Link>
            </p>
            <div className="divider">OR</div>
            <div>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-5 font-medium tracking-wide btn btn-outline btn-info hover:btn-info"
              >
                <FaGoogle /> <span className="ml-3"> Login with Google</span>
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-5 font-medium tracking-wide btn btn-outline btn-primary hover:btn-primary"
              >
                <FaFacebook />{" "}
                <span className="ml-3"> Login with Facebook </span>
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide btn btn-outline  hover:btn-active"
              >
                <FaGithub /> <span className="ml-3"> Login with Github </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
