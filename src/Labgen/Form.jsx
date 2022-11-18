import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { addItem, gotoBack, update } from "./redux/action";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";

function Form() {
  // const numeric = /^0|[1-9]\d*$/;
  // const Srinngs = /^0|[A-Za-z]\d*$/;
  const dispatch = useDispatch();
  const { edit, isEdit, inputValues } = useSelector((el) => el);

  const Schema = Yup?.object().shape({
    capsule_serial: Yup?.string()
      .required("Please enter your Capsule Serial")

      .min(4)
      .max(4),

    capsule_id: Yup.string()
      .required("Please Enter Your capsule_id ")
      .typeError("Amount must be a number & String"),
    status: Yup.string()
      .required("Please Enter Your status")
      .typeError("Amount must be a String "),
    original_launch: Yup.string().required("Please Enter Original Launch"),
    original_launch_unix: Yup.number()
      //   .matches(numeric, "enter a number")
      .required("please Enter Your Original Launch  Unix"),
    // radio_buttons: Yup.string().required("Select Your Gender"),
    landings: Yup.number()
      //   .matches(numeric, "enter a number")
      .typeError("Amount must be a number")
      .required("Required Field"),

    type: Yup.string()
      .required("Please Enter type")
      .typeError("Amount must be a string"),

    details: Yup.string()
      .required("Please Enter Your blood pre...")
      .typeError("Amount must be a number"),
    reuse_count: Yup.number()
      .required("Please Enter Your Temperature")
      .typeError("Amount must be a number"),
    // agree: Yup.boolean().oneOf(
    //   [true],
    //   "You must accept the terms and conditions"
    // ),
  });

  const {
    register,

    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: isEdit ? edit : inputValues,
    mode: "onChange",

    resolver: yupResolver(Schema),
  });

  const onSubmit = (data) => {
    dispatch(addItem(data));

    console.log(data, "data");
  };

  const handleUpdate = (updates) => {
    dispatch(update(updates));
    console.log(updates, "updates");
  };
  const handleCancel = () => {
    dispatch(gotoBack());
  };

  return (
    <>
      <form onSubmit={handleSubmit(isEdit ? handleUpdate : onSubmit)}>
        <Paper
          sx={{
            width: "80%",
            marginLeft: "120px",
            marginTop: "60px",
          }}
        >
          <div style={{ height: "67", backgroundColor: "#BEDAF4" }}>
            <h2
              style={{
                textAlign: "center",
                padding: "20px",
                marginTop: "50px",
              }}
            >
              <SystemUpdateAltIcon
                sx={{
                  marginRight: "30px",
                  marginTop: "5px",
                  marginBottom: "0px",
                }}
              />
              Add/Edit Canned Comments
            </h2>
          </div>
          <Paper
            sx={{
              padding: "50px",

              height: "60%",
              marginTop: "60px",
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <TextField
                    sx={{ width: "330px" }}
                    placeholder="Please enter your Capsule Serial"
                    name="capsule_serial"
                    label="Capsule Serial"
                    {...register("capsule_serial")}
                  />
                  <p style={{ color: "red" }}>
                    {errors?.capsule_serial?.message}
                  </p>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    sx={{ width: "330px" }}
                    placeholder="Please enter your Capsule Id "
                    name="capsule_id"
                    label="Capsule Id"
                    {...register("capsule_id")}
                  />
                  <p style={{ color: "red" }}>{errors?.capsule_id?.message} </p>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    sx={{ width: "330px" }}
                    placeholder=" "
                    name="original_launch"
                    {...register("original_launch")}
                    label="Original Launch"
                  />
                  <p style={{ color: "red" }}>
                    {errors?.original_launch?.message}
                  </p>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    sx={{ width: "330px" }}
                    placeholder="original_launch_unix "
                    name="original_launch_unix"
                    {...register("original_launch_unix")}
                    type="number"
                    label="Original Launch Unix"
                  />
                  <p style={{ color: "red" }}>
                    {errors?.original_launch_unix?.message}
                  </p>
                </Grid>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      label="Type"
                      sx={{ width: "330px" }}
                      {...register("type")}
                    >
                      <MenuItem value={"Dragon 1.0"}>Dragon 1.0</MenuItem>
                      <MenuItem value={"Dragon 1.1"}>Dragon 1.1</MenuItem>
                      <MenuItem value={"Dragon 2.0"}>Dragon 2.0</MenuItem>
                    </Select>
                  </FormControl>

                  {/* 
                  <Select
                    name="type"
                    label="Type"
                    sx={{ width: "330px" }}
                   
                  >
                 
                  </Select> */}

                  <p style={{ color: "red" }}>{errors?.Type?.message} </p>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    sx={{ width: "330px" }}
                    placeholder="landings "
                    name="landings"
                    {...register("landings")}
                    type="number"
                    label="Landings"
                  />
                  <p style={{ color: "red" }}>{errors?.landings?.message} </p>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    sx={{ width: "330px" }}
                    placeholder="Status "
                    name={<samp style={{ color: "black" }}> Type</samp>}
                    label="Status"
                    {...register("status")}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    sx={{ width: "330px" }}
                    placeholder="Details "
                    name="details"
                    {...register("details")}
                    label="Details"
                  />
                  <p style={{ color: "red" }}>{errors?.details?.message} </p>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    sx={{ width: "330px" }}
                    placeholder="Reuse Count "
                    name="reuse_count"
                    {...register("reuse_count")}
                    type="number"
                    label="Reuse Count"
                  />
                  <p style={{ color: "red" }}>{errors?.reuse_count?.message}</p>
                </Grid>
              </Grid>
            </Box>

            <span style={{ display: "flex" }}>
              <Button
                variant="outlined"
                sx={{
                  marginLeft: "80%",
                  marginRight: "25px",
                  marginTop: "50px",
                }}
                onClick={handleCancel}
              >
                CANCEL
              </Button>
              {isEdit ? (
                <Button
                  variant="contained"
                  sx={{ marginTop: "50px" }}
                  type="submit"
                >
                  UPDATE
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ marginTop: "50px" }}
                >
                  SAVE
                </Button>
              )}
            </span>
          </Paper>
        </Paper>
      </form>
    </>
  );
}

export default Form;
