import React from "react";

interface IFeaturesSectionProps {}

export const FeaturesSection: React.FC<IFeaturesSectionProps> = () => {
  return (
    <section className="bg-gray-100">
      <div className="space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Our Travel Vehicles
          </h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            Amazing and latest feature equipped in vehicle to help you reach
            your next destination with comfort and super modern technology.
          </h3>
        </div>
        {/* END Heading */}
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <article className="py-5">
            <div className="p-2 bg-white rounded-lg mb-8 hover:bg-indigo-500 transition">
              <img
                src="https://images.unsplash.com/photo-1486746730710-0e7ce7b07038?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=650&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE1OTk0Mjk5&ixlib=rb-1.2.1&q=80&w=800"
                alt="Preview Feature Image"
                className="rounded-lg"
              />
            </div>
            <h4 className="text-lg font-bold mb-2">Super Fast &amp; Secure</h4>
            <p className="leading-relaxed text-gray-600 mb-3">
              We equipped our vehicles with modern technologies and focus on
              regular updates and maintainance. Thus we provide you one of the
              most exciting experience with security inbuilt in our vehicles.
            </p>
            <a
              href="#"
              className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="transform -rotate-45 opacity-50 hi-solid hi-arrow-right inline-block w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Book it now</span>
            </a>
          </article>
          <article className="py-5">
            <div className="p-2 bg-white rounded-lg mb-8 hover:bg-indigo-500 transition">
              <img
                src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=650&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE1NDgwMzYz&ixlib=rb-1.2.1&q=80&w=800"
                alt="Preview Feature Image"
                className="rounded-lg"
              />
            </div>
            <h4 className="text-lg font-bold mb-2">
              Sanitation &amp; Clean Space
            </h4>
            <p className="leading-relaxed text-gray-600 mb-3">
              We focus on our customers quality experience, and health is one of
              them. Hence we have regular vehicle checks and First Aid toolkit
              for sanitation and care for our customer health. Feel safe &amp;
              enjoy your ride.
            </p>
            <a
              href="#"
              className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-50 hi-solid hi-information-circle inline-block w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              <span>More info</span>
            </a>
          </article>
          <article className="py-5">
            <div className="p-2 bg-white rounded-lg mb-8 hover:bg-indigo-500 transition">
              <img
                src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=650&ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjE1OTk0MzEw&ixlib=rb-1.2.1&q=80&w=800"
                alt="Preview Feature Image"
                className="rounded-lg"
              />
            </div>
            <h4 className="text-lg font-bold mb-2">Driving Experience</h4>
            <p className="leading-relaxed text-gray-600 mb-3">
              We have been in driving industry from last 10+ years, hence our
              drivers are experienced and travel destination routes are familiar
              to us. Tell us about your destination and be safe.
            </p>
            <a
              href="#"
              className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-50 hi-solid hi-briefcase inline-block w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <span>Our Drivers</span>
            </a>
          </article>
        </div>
        {/* END Features */}
      </div>
    </section>
  );
};
