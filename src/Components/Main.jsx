import React, { useContext, useEffect, useState } from "react";
import { themeToggler } from "../Styles";
import { Context } from "../Context/Context";
import DataTable from "./DataTable";
import { AiOutlineSearch } from "react-icons/ai";
import { Pagination } from "@mui/material";
import AddNewModal from "./AddNewModal";

const Main = () => {
  const { handleSearch, theme, currentData } = useContext(Context);
  const { background, border, textColor, container } = themeToggler();
  const [searchText, setSeachText] = useState("");
  const [page, setPage] = useState(1);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    handleSearch(searchText);
  }, [searchText]);
  return (
    <div
      className={`w-full  h-full flex flex-col items-center gap-4 py-6 ${background} outline-none `}
    >
      <AddNewModal open={open} handleClose={handleClose} />
      <button
        className={`${textColor} border-${border} border-[1px] px-4 py-2 rounded-xl ${container}`}
        onClick={handleOpen}
      >
        Add New Link
      </button>
      <div className="relative  max-w-md w-[80%] border-${border} border-[1px] rounded-xl">
        <AiOutlineSearch
          size={20}
          className={`absolute top-[50%] -translate-y-[50%] left-2 `}
        />
        <input
          type="text"
          value={searchText}
          onChange={(e) => {
            setSeachText(e.target.value);
          }}
          className="w-full pl-8 py-2 outline-none rounded-xl"
        />
      </div>
      <DataTable />
      <div className="flex justify-center">
        <Pagination
          color="primary"
          sx={{
            "& .MuiPaginationItem-root": {
              border: `1px solid ${border}`,
              color: `${theme === "light" ? "#000" : "#fff"}`,
              ml: "8px",
            },
          }}
          count={Math.ceil(currentData?.length / 10)}
          page={page}
          variant="outlined"
          onChange={(event, value) => {
            setPage(value);
          }}
        />
      </div>
    </div>
  );
};

export default Main;
