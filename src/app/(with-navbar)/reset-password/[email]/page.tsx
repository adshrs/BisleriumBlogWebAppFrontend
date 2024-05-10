"use client";
import {
  Container,
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  ReturnProps,
  validateForm,
} from "@/app/common/helper/reset-password-helper/reset-password.validation";
import { ResetPassword } from "@/app/common/helper/reset-password-helper/reset-password.request";
import { CustomError } from "@/app/common/errors/custom.error";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const resetPasswordPage = () => {
  const currentPath = usePathname(); // getting the current path URL
  const parts = currentPath?.split("/"); // Split the path by slashes
  const email = parts!![2]; // Extract the part after the second slash

  const [resetPassword, setPassword] = useState("");

  const [passwordEmptyError, setPasswordEmptyError] = useState("");

  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [errorMessage, setErrorMessage] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();

  async function HandleResetPassword() {
    // Resetting error states
    setErrorMessage("");
    setIsPasswordEmpty(false);

    try {
      const validatedForm: ReturnProps = validateForm(resetPassword);
      if (validatedForm.isEmpty) {
        if (validatedForm.forPassword) {
          setIsPasswordEmpty(true);
          setPasswordEmptyError(validatedForm.forPassword);
        }
      } else {
        var response;
        response = await ResetPassword(
          {
            email,
          },
          {
            resetPassword,
          }
        );

        setSuccessMessage(response.Message);
        console.log("This is Response: ", response);

        // Redirect to Login Page
        router.push("/login");
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
  }

  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "150px",
          textAlign: "center",
          paddingRight: 0,
        }}
      >
        <Paper
          elevation={0}
          sx={{
            border: "1px solid #cccccc",
            p: 7,
            maxWidth: 450,
            margin: "0 auto",
            backgroundColor: "#f1efea",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h4" sx={{ mb: 2 }}>
              Reset Password
            </Typography>
          </Box>
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
            onClick={HandleResetPassword}
            type="submit"
            disableElevation
            fullWidth
            variant="contained"
            sx={{
              mt: 6,
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#303030" },
            }}
          >
            Reset
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default resetPasswordPage;
