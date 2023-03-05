import React, { useContext } from "react";
import { themeToggler } from "../Styles";
import { BsMoonStarsFill, BsFillSunFill, BsEyeSlash } from "react-icons/bs";
import { Context } from "../Context/Context";

const SideBar = () => {
  const { container, border, background, textColor } = themeToggler();
  const { theme, setTheme, categories, filterByCategory } = useContext(Context);

  return (
    <div
      className={`h-[100vh] relative w-[20%] ${container} border-r-[${border}] border-r-2 flex flex-col justify-between gap-6 py-4 `}
    >
      <h2 className={`${textColor} text-center  font-bold`}>Categories</h2>
      <div
        className={`flex flex-col gap-2 items-center  py-2 overflow-auto scrollbar-thin scrollbar-track-black scrollbar-thumb-gray-500  scrollbar-w-1 scrollbar-rounded-8 `}
      >
        {categories.map((item) => (
          <div
            key={item}
            className={`border-${border} border-[1px] flex items-center justify-center w-[84%] m-auto py-1 cursor-pointer ${textColor} ${background}  rounded-md`}
            onClick={() => {
              filterByCategory(item);
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div>
        <div
          className={`flex gap-4 py-[6px] items-center justify-center w-[84%] m-auto  ${background} rounded-md`}
        >
          <BsFillSunFill
            size={25}
            className={`${textColor} scale-[85%] 2xl:scale-100`}
          />
          <div
            className="bg-[#635FC7] relative w-10 h-5 2xl:w-16 2xlh-7 rounded-[20px] cursor-pointer"
            onClick={() =>
              setTheme((prev) => (prev === "light" ? "dark" : "light"))
            }
          >
            <div
              className={`absolute ${
                theme === "light" ? "bg-black" : "bg-white"
              } rounded-full w-4 h-4 2xlw-6 2xlh-6 top-[50%] -translate-y-[50%]  ${
                theme === "light" ? "left-1" : "right-1"
              }`}
            ></div>
          </div>{" "}
          <BsMoonStarsFill
            size={25}
            className={`${textColor} scale-[85%] 2xl:scale-100`}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
