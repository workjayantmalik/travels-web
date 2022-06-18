import React from "react";

interface IStatsProps {}

export const Stats: React.FC<IStatsProps> = () => {
  return (
    <section className="bg-white">
      <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
        <div className="bg-cover rounded-md mb-8">
          <div className="rounded-md px-10 py-12 lg:py-16 bg-gray-800 bg-opacity-95 border-8 border-white border-opacity-20 text-center shadow-xl">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-extrabold mb-1 text-white">
              Trusted by thousands of Travellers
            </h2>
            <h4 className="text-md md:text-lg font-medium text-gray-400 leading-relaxed lg:w-3/4 mx-auto mb-6 md:mb-10">
              Travellers from all over india are using our services. Join them
              and experience something amazing!
            </h4>
            {/* END Heading */}
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 text-center divide-y sm:divide-y-0 sm:divide-x-4 divide-white divide-opacity-5">
              <dl className="space-y-1 p-5">
                <dt className="text-4xl font-extrabold text-indigo-400">
                  26,000+
                </dt>
                <dd className="text-sm uppercase tracking-wide font-semibold text-gray-300">
                  Bookings
                </dd>
              </dl>
              <dl className="space-y-1 p-5">
                <dt className="text-4xl font-extrabold text-indigo-400">
                  1,500+
                </dt>
                <dd className="text-sm uppercase tracking-wide font-semibold text-gray-300">
                  Regular Clients
                </dd>
              </dl>
              <dl className="space-y-1 p-5">
                <dt className="text-4xl font-extrabold text-indigo-400">
                  800+
                </dt>
                <dd className="text-sm uppercase tracking-wide font-semibold text-gray-300">
                  Destinations
                </dd>
              </dl>
            </div>
            {/* END Stats */}
          </div>
        </div>
      </div>
    </section>
  );
};
