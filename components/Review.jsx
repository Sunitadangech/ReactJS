import React from "react";
import ReviewCard from "../Layouts/ReviewCard";
import img1 from "../assets/img/pic1.jpeg";
import img2 from "../assets/img/pic2.jpeg";
import img3 from "../assets/img/pic3.jpeg";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Sunita Dange" />
        <ReviewCard img={img2} name="Suraj Patil" />
        <ReviewCard img={img3} name="Pawan Patil" />
      </div>
    </div>
  );
};

export default Review;
