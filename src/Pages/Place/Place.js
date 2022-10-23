import React from "react";
import { Link } from "react-router-dom";

const Place = ({ place }) => {
  //   console.log(place);
  const { id, name, img } = place;
  return (
    <div>
      <div className="">
        <div className="w-48">
          <Link to={`/places/${id}`} aria-label="View Item">
            <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src={img}
                alt=""
              />
              <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
                <h1 className="text-lg font-medium tracking-wide text-white">
                  {name}
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Place;
