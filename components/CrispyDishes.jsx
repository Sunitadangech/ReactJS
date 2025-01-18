import React from "react";
import { Link } from "react-router-dom";

const CrispyDishes = () => {
  const dishes = [
    {
      name: "Crispy Fried Chicken",
      image: "https://static.vecteezy.com/system/resources/previews/014/214/308/large_2x/delicious-hot-and-crispy-fried-chicken-meat-free-photo.jpg",
      description: "Golden brown fried chicken with a crunchy crust.",
    },
    {
      name: "Tempura Vegetables",
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce",
      description: "Crispy tempura vegetables with a light dipping sauce.",
    },
    {
      name: "Potato Wedges",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/10/potato-wedges-recipe-500x375.jpg",
      description: "Seasoned potato wedges fried to crispy perfection.",
    },
  ];

  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Crispy Dishes</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md overflow-hidden bg-white"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold">{dish.name}</h2>
              <p className="text-gray-600 mt-2">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="bg-brightColor text-white px-6 py-2 rounded-lg hover:bg-opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CrispyDishes;
