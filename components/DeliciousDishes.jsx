import React from "react";
import { Link } from "react-router-dom";

const DeliciousDishes = () => {
  const dishes = [
    {
      name: "Chocolate Lava Cake",
      image: "https://www.allrecipes.com/thmb/J0D_WQYOGJs3PpuDqqconBr0efI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7272577-67dd531d7b4a48dbb254dcdaafa658d4.jpg",
      description: "Rich chocolate cake with a gooey molten center.",
    },
    {
      name: "Grilled Salmon",
      image: "https://c8.alamy.com/comp/2T5WMMP/brunch-table-setting-with-different-delicious-food-in-restaurant-2T5WMMP.jpg",
      description: "Perfectly grilled salmon with a lemon butter sauce.",
    },
    {
      name: "Tasty Food",
      image: "https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=",
      description: "The vegetables are slightly crispy on the edges yet soft and sweet on the inside, offering a satisfying contrast to the earthy quinoa.",
    },
  ];

  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Delicious Dishes</h1>
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

export default DeliciousDishes;
