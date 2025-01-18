// import React from "react";

// const SpicyDishes = () => {
//   const dishes = [
//     {
//       name: "Spicy Chicken Wings",
//       image: "https://www.terrafood.co.in/cdn/shop/files/VegBiryani.jpg?crop=center&height=2048&v=1687766592&width=2048",
//       description: "Crispy and spicy chicken wings with a tangy sauce.",
//     },
//     {
//       name: "Hot Pepperoni Pizza",
//       image: "https://images.unsplash.com/photo-1600718372042-4dfe17eb1e4e",
//       description: "Wood-fired pizza topped with spicy pepperoni and jalapeños.",
//     },
//     {
//       name: "Fiery Chili Bowl",
//       image: "https://images.unsplash.com/photo-1600788996378-c90cf7c9f66c",
//       description: "A bowl of fiery chili with beans and a hint of lime.",
//     },
//   ];

//   return (
//     <div className="p-10 bg-gray-100">
//       <h1 className="text-3xl font-bold text-center mb-8">Spicy Dishes</h1>
//       <div className="grid md:grid-cols-3 gap-8">
//         {dishes.map((dish, index) => (
//           <div
//             key={index}
//             className="border rounded-lg shadow-md overflow-hidden bg-white"
//           >
//             <img
//               src={dish.image}
//               alt={dish.name}
//               className="w-full h-64 object-cover"
//             />
//             <div className="p-5">
//               <h2 className="text-xl font-semibold">{dish.name}</h2>
//               <p className="text-gray-600 mt-2">{dish.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SpicyDishes;


import React from "react";
import { Link } from "react-router-dom";

const SpicyDishes = () => {
  const dishes = [
    {
      name: "Spicy Chicken Wings",
      image: "https://www.thespicehouse.com/cdn/shop/articles/Insane_Hot_Wings_720x.jpg?v=1588270427",
      description: "Crispy and spicy chicken wings with a tangy sauce.",
    },
    {
      name: "Hot Pepperoni Pizza",
      image: "https://gimmerecipe.com/wp-content/uploads/elementor/thumbs/Indulge-in-the-Irresistible-Fusion-Hot-Honey-Pepperoni-Pizza-qrfn0lpvra21hxkqhqk119vaqfcce7cbralcfwi4rg.webp",
      description: "Wood-fired pizza topped with spicy pepperoni and jalapeños.",
    },
    {
      name: "Spicy Veg Biryani ",
      image: "https://pub-9de3ef333ad945ebac537fd0ec8d12d0.r2.dev/image_925fee5d-863c-4201-bdd2-648eee486820_a6def426-add9-45a3-8d16-41451cebe3e3_1736274220.jpg",
      description: "The biryani is filled with a variety of vegetables, and the spices are visible, showcasing the rich and aromatic flavors.",
    },
  ];

  return (
    <div className="p-10 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Spicy Dishes</h1>
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

      {/* Back to Home Button */}
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

export default SpicyDishes;
