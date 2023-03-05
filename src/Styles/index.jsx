import React, { useContext } from "react";
import { Context } from "../Context/Context";

export const themeToggler = () => {
  const { theme } = useContext(Context);
  const background = theme === "light" ? "bg-[#F4F7FD]" : "bg-[#1F212C]";

  const container = theme === "light" ? "bg-[#fff]" : "bg-[#2A2C37]";
  const border = theme === "light" ? "#E4EBFA" : "#3E3F4E";
  const textColor = theme === "light" ? "text-black" : "text-white";

  return { container, background, border, textColor };
};
