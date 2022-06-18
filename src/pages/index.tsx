import { NextPage } from "next";
import React from "react";
import { BasicContainer } from "../components/BasicContainer";
import { ContactUs } from "../sections/home/ContactUs";
import { FeaturesSection } from "../sections/home/FeaturesSection";
import { Prices } from "../sections/home/Prices";
import { Stats } from "../sections/home/Stats";

interface IHomePageProps {}

const HomePage: NextPage<IHomePageProps> = () => {
  return (
    <BasicContainer>
      {/* Hero Section: Image Side With Simple Header */}
      <div className="bg-white overflow-hidden">
        {/* Hero Content */}
        <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 text-center lg:text-left container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="lg:w-1/2 lg:flex lg:items-center">
            <div>
              <div className="font-semibold inline-flex px-2 py-1 leading-4 mb-2 text-sm rounded text-gray-700 bg-gray-200">
                QUALITY SERVICE GUARANTEED
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Welcome to <span className="text-indigo-600">Taxi Travels</span>
              </h2>
              <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                Super fast and comfort combined in vehicles to take you to your
                destination with ease. Book it today and profit.
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-2 pt-10 pb-16">
                <button
                  type="button"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-4 py-3 leading-6 rounded border-emerald-700 bg-emerald-700 text-white hover:text-white hover:bg-emerald-800 hover:border-emerald-800 focus:ring focus:ring-emerald-500 focus:ring-opacity-50 active:bg-emerald-700 active:border-emerald-700"
                >
                  Book Now
                </button>
                <button
                  type="button"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-4 py-3 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
                >
                  Our Packages
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-16 lg:flex lg:justify-center lg:items-center">
            <div className="lg:w-96 mx-5 relative">
              <div className="absolute pattern-dots-xl text-indigo-100 top-0 left-0 w-32 h-48 md:h-96 transform -translate-y-12 -translate-x-16 -rotate-3" />
              <div className="absolute pattern-dots-xl text-indigo-100 bottom-0 right-0 w-32 h-48 md:h-96 transform translate-y-12 translate-x-16 rotate-3" />
              <div className="absolute inset-0 rounded-xl bg-indigo-100 bg-opacity-50 -m-4 transform rotate-2" />
              <div className="absolute inset-0 rounded-xl bg-indigo-200 bg-opacity-50 -m-4 transform -rotate-2" />

              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE3MzMxNzgz&ixlib=rb-1.2.1&q=80&w=1280"
                alt="Hero Image"
                className="relative rounded-lg mx-auto shadow-lg"
              />
            </div>
          </div>
        </div>
        {/* END Hero Content */}
      </div>
      {/* END Hero Section: Image Side With Simple Header */}
      <FeaturesSection />
      <Stats />
      <Prices />
      <ContactUs />
    </BasicContainer>
  );
};

export default HomePage;
