import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData } from "./redux/action";
import style from "./styles.module.css";
function LeftBar() {
  const { apidata } = useSelector((el) => el);
  const dispatch = useDispatch();

  const init = {
    capsule_serial: "",
    capsule_id: "",
    status: "",
    type: "",
  };
  const [inputData, steInputData] = useState(init);

  const handleFilter = () => {
    console.log(inputData, "input");

    if (inputData?.capsule_serial) {
      const filterdatas = apidata.filter((el) =>
        el.capsule_serial
          .toLowerCase()
          .includes(inputData?.capsule_serial?.toLowerCase())
      );
      dispatch(filterData(filterdatas));
      console.log(filterdatas, "giudh");
    } else if (inputData?.capsule_id) {
      const filterdata = apidata.filter((el) => {
        return el.capsule_id === inputData?.capsule_id;
      });
      dispatch(filterData(filterdata));
    } else if (inputData?.status) {
      const filterdata = apidata.filter((el) => {
        return el.status === inputData?.status;
      });
      dispatch(filterData(filterdata));
    } else if (inputData?.type) {
      const filterdata = apidata.filter((el) => {
        return el.type === inputData?.type;
      });
      dispatch(filterData(filterdata));
    }
  };

  const handelchange = (e) => {
    const { name, value } = e.target;
    if (name === "capsule_id") {
      steInputData({ capsule_id: value });
    } else if (name === "capsule_serial") {
      steInputData({ capsule_serial: value });
    } else if (name === "status") {
      steInputData({ status: value });
    } else if (name === "type") {
      steInputData({ type: value });
    }
  };
  const handleReset = () => {
    steInputData("");
  };
  return (
    <Paper
      sx={{
        width: "390px",
        backgroundColor: "#E1E4E8",

        height: "900px",
      }}
    >
      <div className={style.systumText}>
        System Dictionary &gt; Canned Comments
      </div>

      <TextField
        sx={{
          marginLeft: "28px",
          width: "330px",
          marginTop: "30px",
          backgroundColor: "white",
        }}
        name="capsule_id"
        onChange={handelchange}
        label=" Search Capsule Id "
        value={inputData.capsule_id || ""}
      />
      <TextField
        sx={{
          marginLeft: "28px",
          width: "330px",
          marginTop: "30px",
          backgroundColor: "white",
        }}
        name="capsule_serial"
        onChange={handelchange}
        label="Search by Capsule Serial"
        value={inputData.capsule_serial || ""}
      />
      <TextField
        sx={{
          marginLeft: "28px",
          width: "330px",
          marginTop: "30px",
          backgroundColor: "white",
        }}
        name="status"
        onChange={handelchange}
        label="Search by Status"
        value={inputData.status || ""}
      />
      <TextField
        sx={{
          marginLeft: "28px",
          width: "330px",
          marginTop: "30px",
          backgroundColor: "white",
        }}
        name="type"
        onChange={handelchange}
        label="Search by Type"
        value={inputData.type || ""}
      />
      <Button
        variant="outlined"
        sx={{ marginLeft: "40%", marginRight: "25px", marginTop: "50px" }}
        onClick={handleReset}
      >
        Reset
      </Button>
      <Button
        variant="contained"
        onClick={handleFilter}
        sx={{ marginTop: "50px" }}
      >
        Search
      </Button>
    </Paper>
  );
}

export default LeftBar;
