import { Modal } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../Context/Context";
import { themeToggler } from "../Styles";

const AddNewModal = ({ open, handleClose }) => {
  const [form, setForm] = useState({
    name: "",
    link: "",
    description: "",
    category: "",
  });
  const [error, setError] = useState("");
  const keys = ["name", "link", "description", "category"];
  const { container, textColor, background, border } = themeToggler();
  const { addData } = useContext(Context);
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const add = () => {
    const { name, description, link, category } = form;
    if (name && description && link && category) {
      addData(form);
      handleClose();
    } else {
      setError("Please fill in all the blanks");
    }
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <div
        className={`${container} max-w-lg w-[90vw] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] py-4`}
      >
        <h2 className={`${textColor} text-center font bold mb-8`}>
          Adding new Link
        </h2>
        <div className="flex flex-col gap-3 w-[90%] m-auto">
          {keys.map((item) => (
            <div key={item} className="flex gap-4">
              <h2 className={`${textColor} w-20`}>{item}:</h2>
              <input
                type="text"
                value={form[item]}
                name={item}
                onChange={handleChange}
                className={`flex-1 ${background} pl-2 outline-none ${textColor} `}
                placeholder={`${item}`}
              />
            </div>
          ))}
        </div>
        <p
          className={`${textColor} border-${border} border-[1px] px-4 py-2 rounded-xl ${container} cursor-pointer w-28 m-auto flex justify-center items-center mt-8`}
          onClick={add}
        >
          submit
        </p>
        {error && (
          <p className="mb-1 text-[10px] text-red-500 text-left">{error}</p>
        )}
      </div>
    </Modal>
  );
};

export default AddNewModal;
