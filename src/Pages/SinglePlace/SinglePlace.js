import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import backgroundImage from "../../assets/Rectangle 1.png";
// import { AuthContext } from "../../contexts/AuthProvider";
import DatePickerForm from "../DatePicker/DatePicker";

const SinglePlace = () => {
  const place = useLoaderData();
  // const { user } = useContext(AuthContext);
  console.log(place);
  return (
    <div>
      <div className="relative">
        <img
          src={backgroundImage}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6  text-3xl tracking-tight text-white sm:text-4xl sm:leading-none">
                  {place.name}
                </h2>
                <p className="max-w-xl mb-4 text-white md:text-lg">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil non, enim veniam molestias explicabo praesentium
                    quidem voluptatibus reprehenderit modi similique saepe, illo
                    at exercitationem quo in cum totam rerum earum.
                  </span>
                  {place.details}
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="firstName"
                        className="inline-block mb-1 font-medium"
                      >
                        Origin
                      </label>
                      <input
                        placeholder="Your Place"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="lastName"
                        className="inline-block mb-1 font-medium"
                      >
                        Destination
                      </label>
                      <input
                        placeholder="Destination Name"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="lastName"
                        name="lastName"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        E-mail
                      </label>
                      <input
                        placeholder="Enter Email"
                        required
                        type="email"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div>
                      <h2 className="mb-1 font-medium">Pick a Date</h2>
                      <DatePickerForm></DatePickerForm>
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <Link to="/hotels">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide btn btn-primary transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:btn-accent"
                        >
                          Book Now
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlace;
