import React from "react";

interface IPricesProps {}

export const Prices: React.FC<IPricesProps> = () => {
  return (
    <section className="relative bg-gray-100">
      <div className="absolute top-0 right-0 left-0 h-96 lg:h-2/3 bg-gray-50" />
      <div className="relative space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        {/* Heading */}
        <div className="text-center">
          <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
            Get it today
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Honest and affordable pricing
          </h2>
          <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600 lg:w-2/3 mx-auto">
            Get started easily and trouble free. Cancel anytime you want <br />
            without hidden fees.
          </h3>
        </div>
        {/* END Heading */}
        <div className="my-2 text-center">
          <a
            href="#"
            className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-emerald-700 bg-emerald-700 text-white hover:text-white hover:bg-emerald-800 hover:border-emerald-800 focus:ring focus:ring-emerald-500 focus:ring-opacity-50 active:bg-emerald-700 active:border-emerald-700"
          >
            See All Plans
          </a>
        </div>
        {/* Pricing Plans */}
        <div className="rounded-lg bg-white shadow-lg xl:mx-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 p-5 md:p-6 rounded-lg ring-1 ring-black ring-opacity-5">
            <article className="relative">
              <div className="p-5 lg:p-6 text-center rounded-lg bg-indigo-50 border-2 border-transparent hover:border-indigo-300 transition">
                <span className="inline-flex space-x-1 items-center text-xs uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-600 rounded-full mb-4">
                  <span className="uppercase">chandigarh - ladakh</span>
                </span>
                <div className="text-3xl lg:text-4xl font-extrabold mb-2">
                  ₹10,302
                </div>
                <p className="inline-flex items-center space-x-2 text-gray-600 text-sm font-medium mb-5">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>3 days Travel</span>
                </p>
                <a
                  href="#"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-200 bg-indigo-200 text-indigo-700 hover:text-indigo-700 hover:bg-indigo-300 hover:border-indigo-300 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-200 active:border-indigo-200"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-solid hi-shopping-cart inline-block w-5 h-5"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span>Purchase</span>
                </a>
              </div>
            </article>
            <article className="relative">
              <div className="p-5 lg:p-6 text-center rounded-lg bg-indigo-50 border-2 border-transparent hover:border-indigo-300 transition">
                <span className="inline-flex space-x-1 items-center text-xs uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-600 rounded-full mb-4">
                  <span className="uppercase">chandigarh - ladakh</span>
                </span>
                <div className="text-3xl lg:text-4xl font-extrabold mb-2">
                  ₹10,302
                </div>
                <p className="inline-flex items-center space-x-2 text-gray-600 text-sm font-medium mb-5">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>3 days Travel</span>
                </p>
                <a
                  href="#"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-200 bg-indigo-200 text-indigo-700 hover:text-indigo-700 hover:bg-indigo-300 hover:border-indigo-300 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-200 active:border-indigo-200"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-solid hi-shopping-cart inline-block w-5 h-5"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span>Purchase</span>
                </a>
              </div>
            </article>
            <article className="relative">
              <div className="p-5 lg:p-6 text-center rounded-lg bg-indigo-50 border-2 border-transparent hover:border-indigo-300 transition">
                <span className="inline-flex space-x-1 items-center text-xs uppercase tracking-wider font-semibold px-3 py-1 bg-indigo-200 bg-opacity-50 text-indigo-600 rounded-full mb-4">
                  <span className="uppercase">chandigarh - ladakh</span>
                </span>
                <div className="text-3xl lg:text-4xl font-extrabold mb-2">
                  ₹10,302
                </div>
                <p className="inline-flex items-center space-x-2 text-gray-600 text-sm font-medium mb-5">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-emerald-500 hi-solid hi-check-circle inline-block w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>3 days Travel</span>
                </p>
                <a
                  href="#"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-indigo-200 bg-indigo-200 text-indigo-700 hover:text-indigo-700 hover:bg-indigo-300 hover:border-indigo-300 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-200 active:border-indigo-200"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-solid hi-shopping-cart inline-block w-5 h-5"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                  <span>Purchase</span>
                </a>
              </div>
            </article>
          </div>
        </div>
        {/* END Pricing Section: Mini Boxes */}
      </div>
    </section>
  );
};
