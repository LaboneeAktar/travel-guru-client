import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const places = useLoaderData();
  console.log(places);
  return (
    <div>
      <h1>This is home</h1>
      <p>there are {places.length} place in this website</p>
    </div>
  );
};

export default Home;
