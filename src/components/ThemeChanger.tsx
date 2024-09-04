"use client";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-gray-200 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-200 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li className="hover:text-blue-600" aria-current="page">
          <button onClick={() => setTheme("light")}>Light Mode</button>
        </li>
        <li className="hover:text-blue-600" aria-current="page">
          <button onClick={() => setTheme("dark")}>Dark Mode</button>
        </li>
      </ul>
    </>
  );
};

export default ThemeChanger;
