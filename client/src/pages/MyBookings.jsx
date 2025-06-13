import React, { useState } from "react";
import Title from "../components/Title";
import { userRoomDummyData } from "../assets/assets";

const MyBookings = () => {
  const [bookings, setBookings] = useState(userRoomDummyData);

  return (
    <div className="py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="View and manage all your hotel reservations in one place with ease. Keep track of your stays, check-in details, and make updates whenever you need."
        align="left"
      />

      <div className="max-w-6xl mt-8 w-full text-gray-800">
        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="grid gap-6">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 border rounded-2xl shadow p-6 bg-white"
              >
                {/* 1st Column - Hotel Info */}
                <div className="flex gap-4">
                  <img
                    src={booking.room.images[0]}
                    alt={booking.hotel.name}
                    className="w-28 h-28 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{booking.hotel.name}</h2>
                    <p className="text-sm text-gray-600">
                      {booking.hotel.address}, {booking.hotel.city}
                    </p>
                    <p className="text-sm text-gray-700 mt-1">
                      Guests: {booking.guests}
                    </p>
                  </div>
                </div>

                {/* 2nd Column - Date & Time */}
                <div className="flex flex-col justify-center text-sm text-gray-700">
                  <p>Check-In: {new Date(booking.checkInDate).toLocaleDateString()}</p>
                  <p>Check-Out: {new Date(booking.checkOutDate).toLocaleDateString()}</p>
                </div>

                {/* 3rd Column - Payment & Status */}
                <div className="flex flex-col justify-center text-sm text-gray-700">
                  <p>
                    Payment:{" "}
                    <span
                      className={`font-semibold ${
                        booking.isPaid ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {booking.isPaid ? "Paid" : "Unpaid"}
                    </span>
                  </p>
                  <p>
                    Status:{" "}
                    <span
                      className={`font-semibold ${
                        booking.status === "confirmed"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {booking.status}
                    </span>
                  </p>
                  <p>Method: {booking.paymentMethod}</p>
                  <p>Total: ${booking.totalPrice}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
