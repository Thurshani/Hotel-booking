import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useAppContext } from '../context/AppContext';
import toast, { Toaster } from 'react-hot-toast'; // ✅ Make sure this is installed

const HotelReg = () => {
  const cities = ["Colombo", "Kandy", "Galle", "Jaffna", "Batticaloa"];
  const { setShowHotelReg, axios, getToken, setIsOwner } = useAppContext();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(
        `/api/hotels/`,
        { name, contact, address, city },
        { headers: { Authorization: `Bearer ${await getToken()}` } }
      );

      if (data.success) {
        toast.success(data.message || "Hotel registered successfully!");
        setIsOwner(true);
        setShowHotelReg(false);
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || "Server error");
    }
  };

  return (
    <div onClick={() => setShowHotelReg(false)} className='fixed top-0 bottom-0 left-0 right-0 z-[100] flex items-center justify-center bg-black/70'>
      <Toaster position="top-right" reverseOrder={false} /> {/* ✅ This enables toast display */}

      <form onSubmit={onSubmitHandler} onClick={(e) => e.stopPropagation()} className='flex bg-white rounded-xl max-w-3xl max-md:mx-2 min-h-[400px] w-full'>
        <img src={assets.regImage} alt="reg-image" className='w-2/5 rounded-l-xl hidden md:block object-cover' />

        <div className='relative flex flex-col gap-5 md:w-3/5 p-6 md:p-8'>
          <img src={assets.closeIcon} alt="close-icon" className='absolute top-4 right-4 h-6 w-6 cursor-pointer' onClick={() => setShowHotelReg(false)} />
          <p className='text-xl font-semibold mt-6'>Register Your Hotel</p>

          <div>
            <label htmlFor="name" className='text-sm font-medium text-gray-500'>Hotel Name</label>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name} name="name" placeholder='Type here' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required />
          </div>

          <div>
            <label htmlFor="contact" className='text-sm font-medium text-gray-500'>Contact</label>
            <input type="tel" id="contact" onChange={(e) => setContact(e.target.value)} value={contact} name="contact" placeholder='Type here' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required />
          </div>

          <div>
            <label htmlFor="address" className='text-sm font-medium text-gray-500'>Address</label>
            <input type="text" id="address" onChange={(e) => setAddress(e.target.value)} value={address} name="address" placeholder='Type here' className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required />
          </div>

          <div>
            <label htmlFor="city" className='text-sm font-medium text-gray-500'>City</label>
            <select id="city" onChange={(e) => setCity(e.target.value)} value={city} name="city" className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' required>
              <option value="">Select a city</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <button type="submit" className='bg-indigo-500 text-white hover:bg-indigo-600 transition-all px-2 py-1.5 rounded cursor-pointer mt-4 text-sm'>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default HotelReg;
