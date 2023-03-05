import React, { useContext } from "react";
import {
  Container,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { Context } from "../Context/Context";
const DataTable = () => {
  const { theme, currentData } = useContext(Context);
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#EEBC1E", color: "black" }}>
            <TableRow sx={{ color: "black" }}>
              {["Category", "name", "description", "link"].map((head) => (
                <TableCell
                  sx={{
                    color: "black",
                    fontWeight: "700",
                    fontFamily: "Montserrat",
                    width: head === "description" ? "40%" : "20%",
                    padding: 1,
                    borderLeft: "1px solid white",
                  }}
                  key={head}
                  align="center"
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {currentData
              // .slice((page - 1) * 10, (page - 1) * 10 + 10)
              ?.map((row) => {
                return (
                  <TableRow
                    // onClick={() => navigate(`/coins/${row.id}`)}
                    key={row.id}
                    href={row.link}
                    sx={{
                      backgroundColor: theme === "light" ? "#fff" : "#2A2C37",
                      "&:hover": {
                        backgroundColor:
                          theme === "light" ? "#EFF8FA" : "#131111",
                      },
                    }}
                  >
                    <TableCell
                      sx={{
                        color: theme === "light" ? "black" : "white",
                        padding: 1,
                      }}
                    >
                      {row.category}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: theme === "light" ? "black" : "white",
                        padding: 1,
                      }}
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      sx={{
                        color: theme === "light" ? "black" : "white",
                        padding: 1,
                      }}
                    >
                      {row.description}
                    </TableCell>
                    <TableCell
                      sx={{
                        cursor: "pointer",
                        color: "blue",
                        padding: 1,
                      }}
                    >
                      <a href={row.link} target="_blank">
                        link
                      </a>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DataTable;
