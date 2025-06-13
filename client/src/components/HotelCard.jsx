import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets'; // Make sure you have this or update icons manually

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={`/rooms/${room._id}`}
      onClick={() => scrollTo(0, 0)}
      className="w-full rounded-xl shadow bg-white overflow-hidden flex flex-col"
    >
      {/* Room Image */}
      <div className="relative">
        <img
          src={room.images[0]}
          alt="Room"
          className="w-full h-[150px] object-cover"
        />
        {/* Badge */}
        {index % 2 === 0 && (
          <p className="px-2 py-1 absolute top-2 left-2 text-xs bg-white text-gray-800 font-medium rounded-full shadow">
            Best Seller
          </p>
        )}
      </div>

      {/* Room Info */}
      <div className="p-3 text-sm text-gray-800 flex flex-col flex-grow">
        {/* Hotel Name + Rating */}
        <div className="font-semibold flex justify-between items-center">
          <span>{room.hotel.name}</span>
          <div className="flex items-center gap-1">
            <img src={assets.starIcon} alt="star-icon" className="w-4 h-4" />
            <span>4.5</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
          <img src={assets.locationFilledIcon} alt="location" className="w-3 h-3" />
          {room.hotel.address}
        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-base font-bold">${room.pricePerNight}</span>
          <button className="text-xs border border-gray-300 rounded px-2 py-1 hover:bg-gray-100">
            Book Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default HotelCard;
