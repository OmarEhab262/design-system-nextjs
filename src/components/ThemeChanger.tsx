"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import ButtonUi from "@/components/ui/Button";
const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <div className="flex gap-3 md:mt-0 mt-2 ">
          <li aria-current="page">
            <FaRegSun
              onClick={() => setTheme("light")}
              className={`${
                theme === "dark" && "text-yellow-500 "
              } cursor-pointer`}
            />
          </li>
          <li aria-current="page">
            <FaRegMoon
              onClick={() => setTheme("dark")}
              className={`${
                theme !== "dark" && "text-sky-700 "
              } cursor-pointer`}
            />
          </li>
        </div>
      ) : (
        <div className="flex gap-3 md:mt-0 mt-2 animate-pulse">
          <ButtonUi aria-current="page" variant={"secondary"}>
            {""}
          </ButtonUi>
          <ButtonUi aria-current="page" variant={"secondary"}>
            {""}
          </ButtonUi>
        </div>
      )}
    </>
  );
};

export default ThemeChanger;
