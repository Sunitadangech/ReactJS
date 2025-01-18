import React from "react";
import { Link } from "react-router-dom";

const TastyDishes = () => {
  const dishes = [
    {
      name: "Garlic Butter Shrimp",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHFiYHDygWnm3VicrFbW_xZAD-pTSNh91IoQ&s",
      description: "Succulent shrimp cooked in garlic butter and herbs.",
    },
    {
      name: "Classic Cheeseburger",
      image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90",
      description: "Juicy burger with melted cheese and fresh toppings.",
    },
    {
      name: "Pasta Primavera",
      image: "https://images.themodernproper.com/billowy-turkey/production/posts/PastaPrimavera_10.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1719193287&s=0104e0b241aea73e5709db128503d749",
      description: "Pasta tossed with fresh vegetables and a light sauce.",
    },
  ];

  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Tasty Dishes</h1>
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

export default TastyDishes;
