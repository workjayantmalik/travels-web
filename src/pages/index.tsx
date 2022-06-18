import { NextPage } from "next";
import React from "react";
import { BasicContainer } from "../components/BasicContainer";

interface IHomePageProps {}

const HomePage: NextPage<IHomePageProps> = () => {
  return (
    <BasicContainer>
      {/* Page Heading */}
      <section className="bg-indigo-800 h-48">
        <div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center py-4 border-t border-white border-opacity-10">
            <div className="grow">
              <h1 className="text-2xl font-semibold text-gray-200">
                Dashboard
              </h1>
            </div>
            <div className="flex-none flex items-center justify-center sm:justify-end space-x-2 py-3 rounded sm:bg-transparent px-2 sm:px-0">
              <a
                href="#"
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-indigo-200 bg-indigo-200 text-indigo-700 hover:text-indigo-700 hover:bg-indigo-300 hover:border-indigo-300 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-200 active:border-indigo-200"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:opacity-50 hi-solid hi-plus inline-block w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="hidden sm:inline-block">New Booking</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* END Page Heading */}

      {/* Page Section */}
      <section className="-mt-28 lg:-mt-32 container xl:max-w-7xl mx-auto p-4 lg:p-8">
        <div className="rounded shadow-sm bg-white p-5 lg:p-6">
          {/*

ADD YOUR MAIN CONTENT BELOW

*/}
          {/* Placeholder */}
          <div className="flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-64">
            Content (max width 1280px)
          </div>
          {/*

ADD YOUR MAIN CONTENT ABOVE

*/}
        </div>
      </section>
      {/* END Page Section */}
    </BasicContainer>
  );
};

export default HomePage;
