import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className="text-backgroundColor">
        Welcome to Taste Haven, a culinary sanctuary where flavors come alive and every dish tells a story. Our restaurant is dedicated to offering a diverse menu that celebrates the richness of global cuisines while honoring fresh, locally-sourced ingredients. With a warm ambiance and exceptional service, Taste Haven promises an unforgettable dining experience for every guest. Whether you're savoring our signature dishes or exploring our seasonal specials, we invite you to embark on a journey of taste, tradition, and innovation. At Taste Haven, it's not just about food – it's about creating moments to cherish
        </p>

        <div className="lg:pl-44">
          <Link
            to="/ordernow"
            className="bg-brightColor text-white px-4 py-2 rounded-lg hover:bg-opacity-90"
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
