import Hotel from "../models/Hotel.js";

export const registerHotel = async (req, res) => {
  try {
    const { name, city, description } = req.body;

    const hotel = new Hotel({
      name,
      city,
      description,
      owner: req.user.id,
    });

    const savedHotel = await hotel.save();
    res.status(201).json(savedHotel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

