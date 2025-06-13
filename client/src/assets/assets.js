// Import all your images and icons here
import hotel1 from "./hotel1.jpg";
import hotel2 from "./hotel2.jpg";
import hotel3 from "./hotel3.jpg";
import hotel4 from "./hotel4.jpg";
import hotel5 from "./hotel5.jpg";
import hotel6 from "./hotel6.jpg";
import hotel7 from "./hotel7.jpg";
import hotel8 from "./hotel8.jpg";
import hotel9 from "./hotel9.jpg";
import hotel10 from "./hotel10.jpg";
import hotel18 from "./hotel18.jpg";
import hotel19 from "./hotel19.jpg";
import searchIcon from"./searchIcon.png";
import icon1 from "./icon1.png";
import imageWebp from "./image.webp";
import searchwhite from"./searchwhite.png";
import instagramIcon from "./instagram.png";
import facebookIcon from "./facebook.png";
import twitterIcon from "./twitter.png";
import linkedinIcon from "./linkedin.png";

import calendarIcon from "./homeIcon.png";
import freeWifiIcon from "./freeWifiIcon.png";
import freeBreakfastIcon from "./freeBreakfastIcon.png";
import roomServiceIcon from "./roomServiceIcon.png";
import mountainIcon from "./mountainIcon.png";
import poolIcon from "./poolIcon.png";
import homeIcon from "./homeIcon.png";
import badgeIcon from "./badgeIcon.png";
import locationFilledIcon from "./locationFilledIcon.png";
import heartIcon from "./heartIcon.png";



import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.jpg";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.jpg";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.jpg";
import starIcon from "./starIcon.png";
// Room Images
import roomImg1 from "./room1.jpg";
import roomImg2 from "./room2.jpg";
import roomImg3 from "./room3.png";
import roomImg4 from "./room4.jpg";
import roomImg5 from "./room5.jpg";
import roomImg6 from "./room6.jpg";
import roomImg7 from "./room7.jpg";
import roomImg8 from "./room8.jpg";
import hotelico from "./hotelico.png"
import menuIcon from "./menuIcon.png";
import closeIcon from "./closeIcon.png";
import hotela from "./hotela.jpg";
import arrowIcon from "./arrowIcon.png";
import guestIcon from "./guestIcon.png";
import regImage from "./regImage.jpg";
import addIcon from "./addIcon.png";
import listIcon from "./listIcon.png";
import dashboardIcon from "./dashboardIcon.png";
import totalBookingIcon from "./totalBookingIcon.png";
import totalRevenueIcon from "./totalRevenueIcon.png";
import uploadIcon from "./upload.png";


export const assets = {
  hotela,
  hotel1,
  hotel2,
  hotel3,
  hotel4,
  hotel5,
  hotel6,
  hotel7,
  hotel8,
  hotel9,
  hotel10,
  icon1,
  imageWebp,
  freeWifiIcon,
  freeBreakfastIcon,
  roomServiceIcon,
  mountainIcon,
  poolIcon,
  homeIcon,
  badgeIcon,
  locationFilledIcon,
  heartIcon,
  searchIcon,
  menuIcon,
  closeIcon,
  hotelico,
  searchwhite,
  hotel18,
  hotel19,
  calendarIcon,
  starIcon,
  arrowIcon,
  exclusiveOfferCardImg1,
  exclusiveOfferCardImg2,
  exclusiveOfferCardImg3,
  roomImg1,
  roomImg2,
  roomImg3,
  roomImg4,
  roomImg5,
  roomImg6,
  roomImg7,
  roomImg8,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  linkedinIcon,
  guestIcon,
  regImage,
  addIcon,
  listIcon,
  dashboardIcon,
  totalBookingIcon,
  totalRevenueIcon,
  uploadIcon
 
};

export const cities = [
  "New York",
  "Paris",
  "Tokyo",
  "London",
  "Dubai",
  "Rome",
  "Barcelona",
  "Istanbul",
];


// Facility Icon
export const FacilityIcons = {
  "Free WiFi": assets.freeWifiIcon,
  "Free Breakfast": assets.freeBreakfastIcon,
  "Room Service": assets.roomServiceIcon,
  "Mountain View": assets.mountainIcon,
  "Pool Access": assets.poolIcon,
};

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
  {
    _id: 1,
    title: "Summer Escape Package",
    description: "Enjoy a complimentary night and daily breakfast",
    priceOff: 25,
    expiryDate: "Aug 31",
    image: exclusiveOfferCardImg1,
  },
  {
    _id: 2,
    title: "Romantic Getaway",
    description: "Special couples package including spa treatment",
    priceOff: 20,
    expiryDate: "Sep 20",
    image: exclusiveOfferCardImg2,
  },
  {
    _id: 3,
    title: "Luxury ReTrEAt",
    description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.",
    priceOff: 30,
    expiryDate: "Sep 25",
    image: exclusiveOfferCardImg3,
  },
];

// Testimonials Dummy Data
export const testimonials = [
  {
    _id: 1,
    name: "Emma Rodriguez",
    address: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 5,
  },
  {
    _id: 2,
    name: "Liam Johnson",
    address: "New York, USA",
    image: "https://images.unsplash.com/photo-1603415526960-f8fbd376f5a4?q=80&w=200",
    rating: 4,
  },
  {
    _id: 3,
    name: "Aisha Khan",
    address: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    rating: 5,
  },
];




// Dummy Hotel Info
export const hotelDummyData = {
  _id: "67f76393197ac559e4089b72",
  name: "Urbanza Suites",
  address: "Main Road 123 Street, 23 Colony",
  contact: "+0123456789",
  owner: "user_2unqyL4diJFP1E3pIBnasc7w8hP",
  city: "New York",
  createdAt: "2025-04-10T06:22:11.663Z",
  updatedAt: "2025-04-10T06:22:11.663Z",
  __v: 0,
};

// Dummy Rooms
export const roomsDummyData = [
  {
    _id: "room1",
    images: [roomImg1, roomImg2, roomImg3, roomImg4],
    pricePerNight: 120,
    roomType: "Single Bed",
    amenities: ["Free WiFi", "Free Breakfast"],
    hotel: {
      name: "Urbanza Suites",
      address: "Main Road 123 Street, 23 Colony",
      city: "Colombo",
      owner: {
        image: "https://ui-avatars.com/api/?name=Urbanza+Owner&background=random",
      },
    },
  },
  {
    _id: "room2",
    images: [roomImg5, roomImg6, roomImg7, roomImg8],
    pricePerNight: 150,
    roomType: "Double Bed",
    amenities: ["Pool Access", "Mountain View"],
    hotel: {
      name: "Ocean View Resort",
      address: "Beachside Avenue, California",
      city: "California",
      owner: {
        image: "https://ui-avatars.com/api/?name=Ocean+Owner&background=random",
      },
    },
  },
  {
    _id: "room3",
    images: [hotel7, roomImg2, roomImg3, roomImg4],
    pricePerNight: 95,
     roomType: "Luxury Room",
    amenities: ["Free WiFi", "Pool Access"],
    hotel: {
      name: "City Center In",
      address: "5th Avenue, New York",
      city: "New York",
      owner: {
        image: "https://ui-avatars.com/api/?name=CityCenter+Owner&background=random",
      },
    },
  },
  {
    _id: "room4",
    images: [hotel9, roomImg3, roomImg4, roomImg6],
    pricePerNight: 200,
     roomType: "Double Bed",
    amenities: ["Pool Access", "Free WiFi"],
    hotel: {
      name: "Luxury Palace",
      address: "Royal Street, London",
      city: "London",
      owner: {
        image: "https://ui-avatars.com/api/?name=Luxury+Owner&background=random",
      },
    },
  },
];



// Dummy User
export const userDummyData = {
  _id: "user_2unqyL4diJF1E3pIBnasc7w8hP",
  username: "Great Stack",
  email: "user.greatstack@gmail.com",
  image: "https://img.clerk.com/eyJ0eXBlIjoi...FzWSJ9", // Replace with your user image if needed
  role: "hotelOwner",
  createdAt: "2025-03-25T09:29:16.367Z",
  updatedAt: "2025-04-10T06:34:48.719Z",
  __v: 1,
  recentSearchedCities: ["New York"],
};

// User Room Bookings
export const userRoomDummyData = [
  {
    _id: "677f6835947c559d5b4d98b8",
    user: userDummyData,
    room: roomsDummyData[1],
    hotel: hotelDummyData,
    checkInDate: "2025-04-30T00:00:00.000Z",
    checkOutDate: "2025-05-01T00:00:00.000Z",
    totalPrice: 299,
    guests: 1,
    status: "pending",
    paymentMethod: "Stripe",
    isPaid: true,
    createdAt: "2025-04-10T06:42:36.000Z",
    updatedAt: "2025-04-10T06:42:36.000Z",
    __v: 0,
  },
  {
    _id: "67f76829994a731e97d3b08c",
    user: userDummyData,
    room: roomsDummyData[0],
    hotel: hotelDummyData,
    checkInDate: "2025-05-10T00:00:00.000Z",
    checkOutDate: "2025-05-12T00:00:00.000Z",
    totalPrice: 598,
    guests: 2,
    status: "confirmed",
    paymentMethod: "Stripe",
    isPaid: true,
    createdAt: "2025-04-11T09:15:00.000Z",
    updatedAt: "2025-04-11T09:15:00.000Z",
    __v: 0,
  },
  {
    _id: "88a1b6731fc90aaf87efb11a",
    user: userDummyData,
    room: roomsDummyData[2],
    hotel: hotelDummyData,
    checkInDate: "2025-06-05T00:00:00.000Z",
    checkOutDate: "2025-06-07T00:00:00.000Z",
    totalPrice: 850,
    guests: 3,
    status: "pending",
    paymentMethod: "PayPal",
    isPaid: false,
    createdAt: "2025-05-20T13:30:00.000Z",
    updatedAt: "2025-05-20T13:30:00.000Z",
    __v: 0,
  },
  {
    _id: "90c4dbb472ec4d5aa981d3aa",
    user: userDummyData,
    room: roomsDummyData[3],
    hotel: hotelDummyData,
    checkInDate: "2025-07-01T00:00:00.000Z",
    checkOutDate: "2025-07-04T00:00:00.000Z",
    totalPrice: 1200,
    guests: 4,
    status: "confirmed",
    paymentMethod: "Card",
    isPaid: false,
    createdAt: "2025-06-15T08:00:00.000Z",
    updatedAt: "2025-06-15T08:00:00.000Z",
    __v: 0,
  },
];

const roomCommanData = [
  {
    title: "Free Wi-Fi",
    description: "High-speed internet access in all rooms.",
    icon: assets.freeWifiIcon, // existing icon
  },
  {
    title: "Free Breakfast",
    description: "Complimentary breakfast served daily.",
    icon: assets.freeBreakfastIcon, // your imported breakfast icon
  },
  {
    title: "Room Service",
    description: "Available 24/7 for your convenience.",
    icon: assets.roomServiceIcon,
  },
];
export const dashboardDummyData = {
  totalBookings: 128,
  totalRevenue: 7560,
  bookings: [
    {
      user: { username: "Alice Johnson" },
      room: { roomType: "Deluxe Suite" },
      totalPrice: 450,
      isPaid: true,
    },
    {
      user: { username: "Bob Smith" },
      room: { roomType: "Standard Room" },
      totalPrice: 300,
      isPaid: false,
    },
    {
      user: { username: "Charlie Lee" },
      room: { roomType: "Family Room" },
      totalPrice: 600,
      isPaid: true,
    },
  ],
};
