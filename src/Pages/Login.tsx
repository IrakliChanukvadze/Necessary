import { data } from "autoprefixer";
import React, { useState, useContext, useEffect } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { Context } from "../Context/Context";
import { themeToggler } from "../Styles";

const Login = () => {
  const {
    checkUser,
    exist,
    logError,
    addUser,
    setLogError,
    logOrReg,
    setLogOrReg,
    loginData,
    setLoginData,
  } = useContext(Context);
  const { textColor, border, container, background } = themeToggler();

  const [formError, setFormError] = useState({ email: false, password: false });
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (loginData.email) {
      setFormError((prev) => ({ ...prev, email: false }));
    }
    if (loginData.password) {
      setFormError((prev) => ({ ...prev, password: false }));
    }
  }, [loginData]);

  const changeForm = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const reg = () => {
    if (loginData.email && loginData.password) {
      addUser(loginData);
    } else if (loginData.email) {
      setFormError((prev) => ({ ...prev, password: true }));
    } else if (loginData.password) {
      setFormError((prev) => ({ ...prev, email: true }));
    } else {
      setFormError((prev) => ({ password: true, email: true }));
    }
  };

  const log = () => {
    if (loginData.email && loginData.password) {
      checkUser(loginData);
    } else if (loginData.email) {
      setFormError((prev) => ({ ...prev, password: true }));
    } else if (loginData.password) {
      setFormError((prev) => ({ ...prev, email: true }));
    } else {
      setFormError((prev) => ({ password: true, email: true }));
    }
  };

  return (
    <div
      className={`  text-center ${textColor} absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`}
    >
      <h1 className="text-lg md:text-2xl xl:text-4xl pb-4 font-bold tracking-[2px] ">
        Welcome on <span className="text-green-700">Necessary</span>
      </h1>
      <p className="text-md md:text-lg xl:text-2xl pb-4 font-normal ">
        Here, you can find everything you need to study frontend development.{" "}
      </p>
      <div className="flex flex-col gap-6 max-w-sm m-auto mt-10">
        <div>
          {formError.email && (
            <p className="mb-1 text-[10px] text-red-500 text-left">required</p>
          )}

          {exist && logOrReg !== "login" && (
            <p className="mb-1 text-[10px] text-red-500 text-left">{exist}</p>
          )}

          <input
            type="text"
            name="email"
            value={loginData.email}
            onChange={changeForm}
            className={`w-full   outline-none py-3 text-black pl-6 border-${border} border-2 focus:border-blue-600  box-border`}
            placeholder="email"
          />
        </div>
        <div>
          {formError.password && (
            <p className="mb-1 text-[10px] text-red-500 text-left">required</p>
          )}
          <div className="relative">
            <input
              type={show === true ? "text" : "password"}
              name="password"
              value={loginData.password}
              onChange={changeForm}
              className={`w-full   outline-none py-3 text-black pl-6 border-${border} border-2 focus:border-blue-600  box-border`}
              placeholder="password"
            />
            <p
              className="absolute right-6 text-black top-[50%] -translate-y-[50%]"
              onClick={() => {
                setShow((prev) => !prev);
              }}
            >
              {show === true ? (
                <FiEyeOff size={25} className="cursor-pointer" />
              ) : (
                <FiEye size={25} className="cursor-pointer" />
              )}
            </p>
          </div>
        </div>
        <button
          className={`border-${border} border-2 w-[60%] m-auto py-2 hover:border-blue-600 ${container}`}
          onClick={() => {
            if (logOrReg === "login") {
              log();
            } else {
              reg();
            }
          }}
        >
          {logOrReg === "login" ? "Login" : "Sign up"}
        </button>
        {logError && (
          <p className="mb-1 text-[10px] text-red-500">{logError}</p>
        )}
      </div>
      {logOrReg === "login" && (
        <p className="mt-4">
          Dont have account?{" "}
          <span
            className="text-green-500 cursor-pointer"
            onClick={() => {
              setLogOrReg("signUp");
              setLoginData({ email: "", password: "" });
              setLogError("");
            }}
          >
            Sing Up
          </span>
        </p>
      )}
    </div>
  );
};

export default Login;
