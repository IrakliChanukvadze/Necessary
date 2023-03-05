import React, { useEffect, useState } from "react";
const Context = React.createContext();

const ContextProvider = (props) => {
  const [logged, setLogged] = useState(true);
  const [allUsers, setAllUsers] = useState([
    { email: "1@gmail.com", password: "1" },
  ]);
  const [exist, setExist] = useState("");
  const [logError, setLogError] = useState("");
  const [theme, setTheme] = useState("dark");
  const [logOrReg, setLogOrReg] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [dataId, setDataId] = useState(1);
  const [currentData, setCurrentData] = useState();
  const [allData, setAllData] = useState(
    localStorage.allData
      ? JSON.parse(localStorage.allData)
      : [
          {
            category: "styles",
            name: "css",
            link: "https://tailwindcss.com/docs/installation",
            id: 0,
            description: "library for styling",
          },
        ]
  );
  const [categories, setCategories] = useState(
    localStorage.categories
      ? JSON.parse(localStorage.categories)
      : ["All categories", "styles", "React", "jobs", "articles", "lessons"]
  );

  useEffect(() => {
    if (categories.length > 0)
      localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    if (allData.length > 0) {
      localStorage.setItem("allData", JSON.stringify(allData));
      setCurrentData([...allData]);
      setCategories([
        "All categories",
        ...allData.map((item) => item.category),
      ]);
    }
  }, [allData]);

  const filterByCategory = (category) => {
    if (category === "All categories") {
      setCurrentData([...allData]);
    } else {
      setCurrentData(allData.filter((item) => item.category === category));
    }
  };

  const handleSearch = (text) => {
    setCurrentData(
      text ? allData.filter((item) => item.name.includes(text)) : allData
    );
  };
  const checkUser = (user) => {
    const data = allUsers.find((item) => item.email === user.email);
    if (data?.password === user.password) {
      setLogged(true);
    } else {
      setLogError("incorrect email or password ");
    }
  };

  const addUser = (user) => {
    console.log("blabla");

    if (allUsers.some((item) => item.email === user.email)) {
      setExist("user already exist");
    } else {
      setAllUsers((prev) => [{ ...user, id: dataId }, ...prev]);
      setDataId((prev) => prev++);
      setExist("");
      setLogOrReg("login");
      setLoginData({ email: "", password: "" });
    }
  };

  const addData = (newData) => {
    setAllData((prev) => [{ ...newData }, ...prev]);
  };

  return (
    <Context.Provider
      value={{
        logged,
        addUser,
        checkUser,
        exist,
        logError,
        setLogError,
        theme,
        logOrReg,
        setLogOrReg,
        loginData,
        setLoginData,
        setTheme,
        categories,
        handleSearch,
        currentData,
        addData,
        filterByCategory,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
