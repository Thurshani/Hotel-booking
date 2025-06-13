import React, { useState } from "react";
import Title from "../../components/Title";
import uploadIcon from "../../assets/upload.png"; // Ensure this path is correct

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free WiFi": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain view": false,
      "Pool Access": false,
    },
  });

  return (
    <form className="p-4">
      <Title
        align="left"
        font="outfit"
        titlle="Add Room"
        subTitle="Fill in the details carefully and accurate room details, pricing and amenities, to enhance the user booking experience"
      />

      {/* Image Upload Section */}
      <p className="text-gray-800 mt-10 font-semibold">Images</p>
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-1 my-4">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key}>
            <div className="relative border border-dashed border-gray-400 rounded-md overflow-hidden w-24 h-24 flex items-center justify-center cursor-pointer bg-gray-50 hover:shadow-md transition-all">
              <img
                className="object-cover w-full h-full"
                src={images[key] ? URL.createObjectURL(images[key]) : uploadIcon}
                alt="Upload"
              />
            </div>
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) =>
                setImages({
                  ...images,
                  [key]: e.target.files[0],
                })
              }
            />
          </label>
        ))}
      </div>

      {/* Room Type and Price */}
      <div className="w-full flex flex-wrap gap-6 mt-4">
        {/* Room Type */}
        <div className="flex flex-col w-48">
          <p className="text-gray-800 mt-4">Room Type</p>
          <select
            value={inputs.roomType}
            onChange={(e) =>
              setInputs({ ...inputs, roomType: e.target.value })
            }
            className="border opacity-70 border-gray-300 mt-1 rounded p-2"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxuary Room">Luxuary Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        {/* Price */}
        <div className="flex flex-col">
          <p className="mt-4 text-gray-800">
            Price <span className="text-xs">/night</span>
          </p>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-300 mt-1 rounded p-2 w-24"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
          />
        </div>
      </div>

      <p className="text-gray-800 mt-4">Amenities</p>
      <div className="flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
                  {Object.keys(inputs.amenities).map((amenity,index)=>(
                    <div key={index}>
                        <input type="checkbox" id={'amenities${index+1}'} checked={inputs.amenities[amenity]}
                        onChange={()=>setInputs({...inputs,amenities:{...inputs,amenities,[amenity]:!inputs.amenities[amenity]}})}/>
                    <label htmlFor={'amenities${index+1}'}>{amenity}</label>
                    </div>
                  ))}
      </div>
      <button className=" bg-primary text-white px-8 py-1 rounded mt-2">
        AddRoom
      </button>
    </form>
  );
};

export default AddRoom;
