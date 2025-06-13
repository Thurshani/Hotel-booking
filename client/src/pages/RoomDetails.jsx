import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, roomsDummyData, FacilityIcons } from "../assets/assets";
import StarRating from "../components/StarRating";

const roomCommanData = [
  {
    title: "Free Wi-Fi",
    description: "High-speed internet access in all rooms.",
    icon: assets.freeWifiIcon,
  },
  {
    title: "Free Breakfast",
    description: "Complimentary breakfast served daily.",
    icon: assets.freeBreakfastIcon,
  },
  {
    title: "Room Service",
    description: "Available 24/7 for your convenience.",
    icon: assets.roomServiceIcon,
  },
  {
    title: "Smooth Check-In",
    description: "Easy and quick check-in process.",
    icon: assets.heartIcon,
  },
  {
    title: "Excellent Location",
    description: "Prime spot close to all attractions.",
    icon: assets.locationFilledIcon,
  },
];

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    console.log("Looking for room ID:", id);
    const foundRoom = roomsDummyData.find((room) => room._id === id);
    if (foundRoom) {
      console.log("Room found:", foundRoom);
      setRoom(foundRoom);
      setMainImage(foundRoom.images?.[0]);
    } else {
      console.warn("Room not found!");
    }
  }, [id]);

  if (!room)
    return (
      <div className="text-center py-10">
        <p>Loading room details or room not found.</p>
      </div>
    );

  return (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Title and Badge */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-playfair">
          {room.hotel?.name}{" "}
          <span className="font-inter text-sm text-gray-500">
            ({room.roomType || "Deluxe Suite"})
          </span>
        </h1>
        <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
          20% OFF
        </p>
      </div>

      {/* Rating + Reviews */}
      <div className="flex items-center gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <img key={i} src={assets.starIcon} alt="star" className="w-5 h-5" />
        ))}
        <p className="ml-2 text-sm text-gray-600">200+ reviews</p>
      </div>

      {/* Location */}
      <div className="flex items-center gap-1 text-gray-500 mt-2">
        <img
          src={assets.locationFilledIcon}
          alt="location-icon"
          className="w-5 h-5"
        />
        <span className="text-sm">{room.hotel?.address}</span>
      </div>

      {/* Room Images */}
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="lg:w-1/2 w-full">
          <img
            src={mainImage}
            alt="Room Main"
            className="w-full h-[400px] object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {room.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              onClick={() => setMainImage(image)}
              alt={`Room thumbnail ${index + 1}`}
              className={`w-full h-40 object-cover rounded-lg cursor-pointer ${
                mainImage === image ? "ring-4 ring-orange-400" : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* Room Info */}
      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-playfair">
            Experience Luxury Like Never Before
          </h1>
          <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
            {room.amenities?.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
              >
                <img src={FacilityIcons[item]} alt={item} className="w-5 h-5" />
                <p className="text-xs">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-2xl font-medium">${room.pricePerNight}/night</p>
      </div>

      {/* Check-In/Out Form */}
      <form className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-md mx-auto mt-16 max-w-6xl">
        <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
          <div className="flex flex-col">
            <label htmlFor="checkInDate" className="font-medium">
              Check-In
            </label>
            <input
              type="date"
              id="checkInDate"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>

          <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

          <div className="flex flex-col">
            <label htmlFor="checkOutDate" className="font-medium">
              Check-Out
            </label>
            <input
              type="date"
              id="checkOutDate"
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>

          <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>

          <div className="flex flex-col">
            <label htmlFor="guests" className="font-medium">
              Guests
            </label>
            <input
              type="number"
              id="guests"
              placeholder="0"
              className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer"
        >
          Check Availability
        </button>
      </form>

      {/* Common Specs */}
      <div className="mt-25 space-y-4">
        {roomCommanData.map((spec, index) => (
          <div key={index} className="flex items-start gap-2">
            <img src={spec.icon} alt={`${spec.title}-icon`} className="w-6.5" />
            <div>
              <p className="text-base">{spec.title}</p>
              <p className="text-gray-500">{spec.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Availability Message */}
      <div className="max-w-3xl bg-white border-gray-300 border-y my-15 py-10 text-gray-500">
        <p className="text-sm leading-relaxed">
          Guests will be allocated on the ground floor according to availability.
          You’ll enjoy a comfortable two-bedroom apartment that offers a true
          city experience. The price shown is for two guests. If you have more
          guests, please enter the total number so pricing adjusts accordingly.
          Reserve now to ensure your stay is seamless.
        </p>
      </div>

      {/* Hosted by Section */}
      <div className="flex flex-col items-start gap-4">
        <div className="flex gap-4">
          <img
            src={room.hotel?.owner?.image}
            alt="Host"
            className="h-14 w-14 md:h-18 md:w-18 rounded-full"
          />
          <div>
            <p className="text-lg md:text-xl">Hosted by {room.hotel?.name}</p>
            <div className="flex items-center mt-1">
              <StarRating />
              <p className="ml-2">200+ reviews</p>
            </div>
          </div>
        </div>
        <button className="px-6 py-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
