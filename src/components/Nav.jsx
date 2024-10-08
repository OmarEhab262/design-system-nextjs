"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ThemeChanger from "./ThemeChanger";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-200 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            width={50}
            height={50}
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            NextJs WebSite
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col md:items-center md:gap-0 gap-2 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/products"
                className="hover:text-blue-600"
                aria-current="page"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/variants"
                className="hover:text-blue-600"
                aria-current="page"
              >
                Variants
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <ThemeChanger />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
