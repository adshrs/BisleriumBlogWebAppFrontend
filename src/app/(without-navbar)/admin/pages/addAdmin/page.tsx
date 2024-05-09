"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { AddAdmin } from "@/app/common/helper/admin-helper/admin.add-admin.request";
import {
  ReturnProps,
  validateForm,
} from "@/app/common/helper/login-helper/login.validation";
import { Login, Visibility, VisibilityOff } from "@mui/icons-material";
import router from "next/router";
import { CustomError } from "@/app/common/errors/custom.error";

const AddUsersPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [userNameEmptyError, setUserNameEmptyError] = useState("");
  const [passwordEmptyError, setPasswordEmptyError] = useState("");

  const [isUserNameEmpty, setIsUserNameEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleAddUser = async () => {
    try {
      const validatedForm: ReturnProps = validateForm(username, null, password);
      if (validatedForm.isEmpty) {
        if (validatedForm.forUserName && validatedForm.forEmail) {
          setIsUserNameEmpty(true);
          setUserNameEmptyError(validatedForm.forUserName);
        }
        if (validatedForm.forPassword) {
          setIsPasswordEmpty(true);
          setPasswordEmptyError(validatedForm.forPassword);
        }
      } else {
        var response;
        response = await AddAdmin({
          userName: username,
          password,
        });
        console.log("This is Response: ", response.Data);
      }
    } catch (error) {
      if (error instanceof CustomError) {
        console.log("This is Error in fetch: ", error._error);
        if (error._error.Message instanceof Array) {
          //This is not required since every thing is handle by frontend
        }
        setErrorMessage(error._error.Message);
        console.log("This is Error: ", error._error.Message);
      }
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        maxWidth: "400px",
        marginLeft: "700px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "200px",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          border: "2px solid #cccccc",
          p: 7,
          maxWidth: 450,
          margin: "0 auto",
          backgroundColor: "#f4f4f4",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            Add Admin
          </Typography>
        </Box>
        <TextField
          margin="normal"
          required
          fullWidth
          variant="standard"
          label="Username"
          error={isUserNameEmpty}
          helperText={isUserNameEmpty ? userNameEmptyError : ""}
          onChange={(e) => {
            setUsername(e.target.value);
            if (e.target.value.trim() !== "") {
              setUserNameEmptyError("");
            }
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          variant="standard"
          label="Password"
          error={isPasswordEmpty}
          helperText={isPasswordEmpty ? passwordEmptyError : ""}
          type={showPassword ? "text" : "password"}
          onChange={(e) => {
            setPassword(e.target.value);
            if (e.target.value.trim() !== "") {
              setPasswordEmptyError("");
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="button"
          onClick={handleAddUser}
          disableElevation
          fullWidth
          variant="contained"
          sx={{
            mt: 4,
            backgroundColor: "black",
            borderRadius: "5",
            "&:hover": { backgroundColor: "#303030" },
          }}
        >
          Add
        </Button>
      </Paper>
    </Box>
  );
};

export default AddUsersPage;
