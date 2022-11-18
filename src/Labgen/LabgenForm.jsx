import { Box } from "@mui/material";
import React, { useEffect } from "react";
import LeftBar from "./LeftBar";
import { useDispatch, useSelector } from "react-redux";

import Tables from "./Tables";
import Form from "./Form";
import { apiCall } from "./redux/action";
function LabgenForm() {
  const { formStatus, isEdit } = useSelector((el) => el);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/capsules")
      .then((res) => res?.json())
      .then((data) => {
        const payload = { apidata: data };
        dispatch(apiCall(payload));
      });
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <Box sx={{ width: "25%" }}>
        <LeftBar />
      </Box>
      <Box sx={{ width: "75%" }}>
        {isEdit || formStatus ? <Form /> : <Tables />}
      </Box>
    </div>
  );
}

export default LabgenForm;
