"use client";

import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
const Button = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-3 flex items-center gap-2"
    >
      <IoArrowBackOutline size={23} />
      Go Back
    </button>
  );
};

export default Button;
