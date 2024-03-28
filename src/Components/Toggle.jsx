"use client";
import React from "react";
import {FaMoon} from "react-icons/fa";
import {BsSunFill} from "react-icons/bs";
import {useEffect, useState} from "react";

export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme == "dark") setDarkMode(false);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div
      className=" relative w-16 h-6 flex items-center dark:bg-gray-900 bg-teal-500 cursor-pointer rounded-full p-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className=" text-white" size={15} />
      <div
        className=" absolute bg-white w-5 h-5 rounded-full shadow-sm transform transition-transform duration-300"
        style={darkMode ? {left: "2px"} : {right: "2px"}}
      ></div>
      <BsSunFill className=" ml-auto text-yellow-400" size={15} />
    </div>
  );
}
