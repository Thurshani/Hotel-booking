import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffers = () => {
  return (
    <div className="px-6 md:px-16 lg:px-16 xl:px-32 pt-20 pb-30">
      {/* Top section with title and button */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
        <div className="text-left w-full md:w-1/2">
          <Title
            align="left"
            title="Exclusive Offers"
            subTitle="Unlock limited-time deals tailored just for you. Don’t miss your chance to save big on our best products and services."
          />
        </div>

        <button className="group flex items-center gap-2 font-medium cursor-pointer mt-6 md:mt-0">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="transition-all group-hover:translate-x-1"
          />
        </button>
      </div>

      {/* Offers grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative flex flex-col items-start justify-between gap-1 pt-12 px-4 pb-6 rounded-xl text-white bg-no-repeat bg-cover bg-center min-h-[300px]"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
              {item.priceOff}% OFF
            </p>
            <div>
              <p className="text-2xl font-medium font-playfair">{item.title}</p>
              <p>{item.description}</p>
              <p className="text-xs text-white/70 mt-3">Expires {item.expiryDate}</p>
            </div>
            <button className="flex items-center gap-2 font-medium cursor-pointer mt-4">
              View Offers
              <img
                src={assets.arrowIcon}
                alt="arrow-icon"
                className="invert group-hover:translate-x-1 transition-all"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
