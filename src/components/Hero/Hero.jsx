import React from "react";
import './Hero.css';

const Hero = () => {
  return (
    <section className="container bg-[#f9f9f9] max-w-[1200px] w-[100%]">
      <div className=" mx-auto px-4 flex flex-col-reverse md:flex-row items-center">

        <div className="text-center md:text-left md:w-1/2 space-y-6">
        <span className="text-gray-600">
        WELCOME TO GREENSHOP
        </span>
          <h1 className="text-[70px] font-[900] md:text-5xl w-[430px] text-[#3D3D3D]">
            LET'S MAKE A BETTER <span className="text-green-600">PLANET</span>
          </h1>
          <p className="text-gray-600">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create a unique Urban Jungle. Order
            your favorite plants!
          </p>
          <button className="bg-green-600 text-white text-[16px] font-[700] py-[9px] px-[27px] rounded-lg hover:bg-green-700">
            SHOP NOW
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="./hero_flower.png"
            alt="Hero Plant"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
