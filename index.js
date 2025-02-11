const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;


const cors = require("cors");
app.use(cors());

let hotels = [
  {
    id: 1,
    name: "Romantic Getaway",
    category: "Resort",
    rating: 2.2,
    reviews: 4572,
    amenity: "Spa",
    price: 10464,
    country: "South Africa",
  },
  {
    id: 2,
    name: "Wellness Retreat",
    category: "Family",
    rating: 2.8,
    reviews: 2114,
    amenity: "Pool",
    price: 13243,
    country: "Australia",
  },
  {
    id: 3,
    name: "Romantic Getaway",
    category: "Luxury",
    rating: 3.1,
    reviews: 4359,
    amenity: "Restaurant",
    price: 3299,
    country: "Germany",
  },
  {
    id: 4,
    name: "Luxury Suites",
    category: "Family",
    rating: 4.9,
    reviews: 3651,
    amenity: "Bar",
    price: 16359,
    country: "United Kingdom",
  },
  {
    id: 5,
    name: "Luxury Suites",
    category: "Budget",
    rating: 4.6,
    reviews: 688,
    amenity: "Gym",
    price: 15570,
    country: "France",
  },
  {
    id: 6,
    name: "Cultural Heritage Hotel",
    category: "Boutique",
    rating: 2.0,
    reviews: 219,
    amenity: "Pet Friendly",
    price: 2321,
    country: "USA",
  },
];

//  Get all hotels
app.get("/hotels", (req, res) => {
  res.json({ hotels });
});

//  Sort hotels by pricing
app.get("/hotels/sort/pricing", (req, res) => {
  const { pricing } = req.query;
  let sortedHotels = [...hotels];

  if (pricing === "low-to-high") {
    sortedHotels.sort((a, b) => a.price - b.price);
  } else {
    sortedHotels.sort((a, b) => b.price - a.price);
  }

  res.json({ hotels: sortedHotels });
});

//  Sort hotels by rating
app.get("/hotels/sort/rating", (req, res) => {
  const { rating } = req.query;
  let sortedHotels = [...hotels];

  if (rating === "low-to-high") {
    sortedHotels.sort((a, b) => a.rating - b.rating);
  } else {
    sortedHotels.sort((a, b) => b.rating - a.rating);
  }

  res.json({ hotels: sortedHotels });
});

//  Sort hotels by reviews
app.get("/hotels/sort/reviews", (req, res) => {
  const { reviews } = req.query;
  let sortedHotels = [...hotels];

  if (reviews === "least-to-most") {
    sortedHotels.sort((a, b) => a.reviews - b.reviews);
  } else {
    sortedHotels.sort((a, b) => b.reviews - a.reviews);
  }

  res.json({ hotels: sortedHotels });
});

//  Filter hotels by amenity
app.get("/hotels/filter/amenity", (req, res) => {
  const { amenity } = req.query;
  let filteredHotels = hotels.filter(
    (hotel) => hotel.amenity.toLowerCase() === amenity.toLowerCase()
  );

  res.json({ hotels: filteredHotels });
});

//  Filter hotels by country
app.get("/hotels/filter/country", (req, res) => {
  const { country } = req.query;
  let filteredHotels = hotels.filter(
    (hotel) => hotel.country.toLowerCase() === country.toLowerCase()
  );

  res.json({ hotels: filteredHotels });
});

//  Filter hotels by category
app.get("/hotels/filter/category", (req, res) => {
  const { category } = req.query;
  let filteredHotels = hotels.filter(
    (hotel) => hotel.category.toLowerCase() === category.toLowerCase()
  );

  res.json({ hotels: filteredHotels });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
