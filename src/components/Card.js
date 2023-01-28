import React from "react";

const Card = () => {
  return (
    <div className="p-8 font-Poppins">
      <div className="">
        <img
          className="rounded-lg"
          src="https://source.unsplash.com/WLxQvbMyfas"
          alt="image"
        />
      </div>

      <div className="p-2">
        <div className="flex space-x-3 text-xl items-center">
          <h2 className="">Japan</h2>
          <span className="text-gray-400 underline text-sm">
            View on Google Maps
          </span>
        </div>
        <div>
          <h1 className="text-3xl mb-3  font-bold">Mount Fuji</h1>
          <p className="text-sm font-bold ">12 JAN, 2021 - 24 Jan,2021</p>
          <p>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
