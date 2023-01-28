import React from "react";

const Card = (props) => {
  return (
    <div className="p-8 font-Poppins md:flex md:flex-row md:w-full ">
      <div className="md:w-1/2">
        <img
          className="rounded-lg w-full h-full"
          src={props.imageUrl}
          alt="image"
        />
      </div>
      <div className="p-2 md:w-1/2">
        <div className="flex space-x-3 text-sm items-center">
          <h2 className="font-normal  ">
            <span className="text-sm text-red-700 mr-2 ">
              <i className="fa-solid fa-location-dot "></i>
            </span>
            {props.location}
          </h2>
          <span className="text-gray-400 underline text-sm">
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </span>
        </div>
        <div>
          <h1 className="text-2xl mb-2  font-bold">{props.title}</h1>
          <p className="text-sm font-bold ">
            {props.startDate} - {props.endDate}
          </p>
          <p className="mt-2">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
