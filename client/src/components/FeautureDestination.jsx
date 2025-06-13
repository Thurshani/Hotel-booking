import React from 'react';
import { roomsDummyData } from '../assets/assets'; // fixed import name
import HotelCard from './HotelCard'; // make sure path is correct
import Title from './Title';
import { useNavigate } from 'react-router-dom';

const FeatureDestination = () => {
  const navigate =useNavigate()
  return (
    <div className='flex flex-col items-center px-4 md:px-6 lg:px-2 bg-slate-50 py-20'>

      <Title title='Hotel Deals' subTitle='Discover the perfect place to stay with our curated selection of top-rated
       hotels. Each listing is reviewed for quality, comfort, and convenience to ensure a memorable experience.'/>
    <div className='grid grid-cols-4 gap-6 mt-20'>
      {roomsDummyData.slice(0, 4).map((room, index) => (
        <HotelCard key={room._id} room={room} index={index} />
      ))}
    </div>

    <button onClick={()=>{navigate('/rooms');scrollTo(0,0)}}
    className='my-16 px-4 py-2 text-sm font-medium border border-gray-300
    rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
       View All Destinations
    </button>
    </div>
  );
};

export default FeatureDestination;
