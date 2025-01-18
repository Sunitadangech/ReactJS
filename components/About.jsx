import React from "react";
import img from "../assets/img/about.png";
import Button from "../Layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
        We pride ourselves on offering a wide variety of dishes prepared with the freshest, locally sourced ingredients. Our chefs bring authentic recipes with flavors that transport you to different culinary cultures.
        </p>
        <p>
        Our team is dedicated to providing a warm, welcoming atmosphere where every guest feels valued. We focus on making your dining experience memorable from the moment you walk through the door.
        </p>
        <div className=" flex justify-center lg:justify-start">
          {/* <Button title="Learn More" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
