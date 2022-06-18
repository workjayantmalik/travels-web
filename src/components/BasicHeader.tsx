import React, { useState } from "react";
import clsx from "clsx";
import { RoutesDict } from "../contants/RoutesDIct";
import NextLink from "next/link";

interface IBasicHeaderProps {}

const links = [
  { title: "Home", href: RoutesDict.welcome },
  { title: "Prices", href: RoutesDict.plans },
  { title: "Contact", href: RoutesDict.contact },
  { title: "Book", href: RoutesDict.book },
] as const;

export const BasicHeader: React.FC<IBasicHeaderProps> = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <header className="flex flex-none items-center bg-indigo-800 z-1">
      <div className="container xl:max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between py-4">
          {/* Left Section */}
          <div className="flex items-center space-x-2 lg:space-x-6">
            {/* Logo */}
            <a
              href="#"
              className="group inline-flex items-center space-x-2 font-semibold text-lg tracking-wide text-gray-200 hover:text-indigo-300 active:text-gray-200"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90 text-indigo-400 transform transition group-hover:scale-110 hi-solid hi-cube-transparent inline-block w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="hidden sm:inline-block">Company</span>
            </a>
            {/* END Logo */}
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:items-center lg:space-x-2">
              {links.map((link, index) => (
                <NextLink key={index} href={link.href}>
                  <a className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-indigo-300 border border-transparent hover:text-white hover:bg-indigo-700 hover:border-indigo-700 active:bg-indigo-600 active:border-indigo-600">
                    {link.title}
                  </a>
                </NextLink>
              ))}
            </nav>
            {/* END Desktop Navigation */}
          </div>
          {/* END Left Section */}
          {/* Right Section */}
          <div className="flex items-center space-x-1 lg:space-x-2">
            {/* Notifications */}
            <a
              href="#"
              className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-indigo-900 bg-indigo-700 text-indigo-200 shadow-sm hover:text-white hover:bg-opacity-50 hover:shadow focus:ring focus:ring-indigo-500 focus:ring-opacity-25 active:bg-opacity-100 active:shadow-none"
            >
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="hi-outline hi-bell inline-block w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </a>
            {/* END Notifications */}

            {/* Toggle Mobile Navigation */}
            <div className="lg:hidden">
              <button
                type="button"
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-indigo-900 bg-indigo-700 text-indigo-200 shadow-sm hover:text-white hover:bg-opacity-50 hover:shadow focus:ring focus:ring-indigo-500 focus:ring-opacity-25 active:bg-opacity-100 active:shadow-none"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hi-solid hi-menu inline-block w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* END Toggle Mobile Navigation */}
          </div>
          {/* END Right Section */}
        </div>
        {/* Mobile Navigation */}

        <div className={clsx("lg:hidden", isNavbarOpen ? "" : "hidden")}>
          <nav className="flex flex-col space-y-2 py-4 border-t border-indigo-700">
            {links.map((link, index) => (
              <NextLink key={index} href={link.href}>
                <a className="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded text-indigo-300 border border-transparent hover:text-white hover:bg-indigo-700 hover:border-indigo-700 active:bg-indigo-600 active:border-indigo-600">
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
                  <span>{link.title}</span>
                </a>
              </NextLink>
            ))}
          </nav>
        </div>
        {/* END Mobile Navigation */}
      </div>
    </header>
  );
};
