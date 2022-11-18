import { Button, Paper } from "@mui/material";
import React from "react";
import styles from "./table.module.css";
import TablePagination from "@mui/material/TablePagination";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import PrintIcon from "@mui/icons-material/Print";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteItem, editItem, gotoForm } from "./redux/action";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function Tables() {
  const dispatch = useDispatch();
  const { apidata } = useSelector((el) => el);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(7);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleDelet = (id) => {
    dispatch(deleteItem(id));
  };
  const handleEdit = (el) => {
    const payload = { isEdit: true, editdata: el };

    dispatch(editItem(payload));
  };

  const handleAdd = () => {
    const payload = {
      formStatus: true,
    };
    dispatch(gotoForm(payload));
  };

  return (
    <>
      <Paper
        sx={{
          width: "80%",
          height: "75%",
          marginRight: "25px",
          marginLeft: "120px",
          marginTop: "50px",
          padding: "40px",
          marginBottom: "30px",
        }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow sx={{ background: "#CFD9FE", height: "70px" }}>
                <TableCell align="center">
                  <b>Capsule Serial</b>
                </TableCell>
                <TableCell align="center">
                  <b>CapsuleId</b>
                </TableCell>
                <TableCell align="center">
                  <b>Status</b>
                </TableCell>
                <TableCell align="center">
                  <b>Type</b>
                </TableCell>
                <TableCell align="center">
                  <b>Action</b>
                </TableCell>
              </TableRow>
            </TableHead>
            {apidata

              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableBody className={styles.tableRow}>
                  <TableRow>
                    <TableCell align="center">{row.capsule_serial}</TableCell>
                    <TableCell align="center">{row.capsule_id}</TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        display: "flex",
                        height: "30px",
                        marginTop: "10px",
                        textAlign: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <ContentCopyIcon />
                      <PrintIcon />
                      <EditIcon onClick={() => handleEdit(row)} />
                      <DeleteIcon
                        onClick={() => handleDelet(row.capsule_serial)}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[7, 10, 20]}
          component="div"
          count={apidata.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

        <Button
          variant="contained"
          sx={{ marginLeft: "93%" }}
          onClick={handleAdd}
        >
          <AddCircleOutlineIcon /> Add
        </Button>
      </Paper>
    </>
  );
}

export default Tables;
