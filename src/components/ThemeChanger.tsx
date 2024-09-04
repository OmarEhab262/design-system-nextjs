"use client";
import { useTheme } from "next-themes";
import ButtonUi from "@/components/ui/Button";
import { useEffect, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    { isClient } && (
      <>
        <li aria-current="page">
          <FaRegSun
            onClick={() => setTheme("light")}
            className="cursor-pointer"
          />
        </li>
        <li aria-current="page">
          <FaRegMoon
            onClick={() => setTheme("dark")}
            className="cursor-pointer"
          />
        </li>
      </>
    )
  );
};

export default ThemeChanger;
