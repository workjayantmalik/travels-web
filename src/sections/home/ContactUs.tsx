import React from "react";

interface IContactUsProps {}

export const ContactUs: React.FC<IContactUsProps> = () => {
  return (
    <section>
      <div className="bg-indigo-800">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-16 lg:space-y-0 lg:space-x-16">
            {/* Heading with Company Info */}
            <div className="lg:w-2/5 text-white">
              <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-400">
                We reply in 24hrs
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Get in touch
              </h2>
              <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-indigo-200">
                If something does not make sense, feel free to contact us and we
                will get back to you as soon as possible.
              </h3>
              <div className="text-indigo-200 mt-10">
                <h4 className="uppercase font-semibold tracking-wider mb-4">
                  Taxi Travels.
                </h4>
                <div className="leading-relaxed">
                  Kishan Garh, Chandigarh
                  <br />
                  India 160101
                  <br />
                  <abbr title="Mobile Number">Phone:</abbr> (123) 456-7890
                </div>
              </div>
            </div>
            {/* END Heading with Company Info */}
            {/* Contact Form */}
            <div className="lg:w-3/5 p-2 bg-white bg-opacity-10 rounded-xl">
              <form className="bg-white rounded-lg p-6 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label
                      htmlFor="tk-contact-firstname"
                      className="font-medium"
                    >
                      First Name
                    </label>
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      type="text"
                      id="tk-contact-firstname"
                    />
                  </div>
                  <div className="space-y-1">
                    <label
                      htmlFor="tk-contact-lastname"
                      className="font-medium"
                    >
                      Last Name
                    </label>
                    <input
                      className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                      type="text"
                      id="tk-contact-lastname"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="tk-contact-mobile" className="font-medium">
                    Mobile
                  </label>
                  <input
                    className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    type="tel"
                    id="tk-contact-mobile"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="tk-contact-message" className="font-medium">
                    Message
                  </label>
                  <textarea
                    className="block border border-gray-200 rounded placeholder-gray-400 px-5 py-3 w-full focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                    id="tk-contact-message"
                    rows={6}
                    defaultValue={""}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-4 py-3 leading-6 rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
                >
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-50 hi-solid hi-paper-airplane inline-block w-5 h-5"
                  >
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            {/* END Contact Form */}
          </div>
        </div>
      </div>
    </section>
  );
};
