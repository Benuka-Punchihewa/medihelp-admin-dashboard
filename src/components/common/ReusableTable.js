import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import colors from "../../assets/styles/colors";

export default function ReusableTable({
  rows,
  columns,
  totalElements,
  onPageChange,
  onLimitChange,
}) {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    onPageChange(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setLimit(+event.target.value);
    setPage(0);
    onPageChange(1);
    onLimitChange(+event.target.value);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead
            sx={{
              backgroundColor: colors.primary,
              boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
            }}
          >
            <TableRow>
              {columns &&
                columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows &&
              rows.map((row, key) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={key}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {totalElements &&
        typeof onPageChange === "function" &&
        typeof onLimitChange === "function" && (
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={totalElements || 0}
            rowsPerPage={limit || 10}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        )}
    </Paper>
  );
}
