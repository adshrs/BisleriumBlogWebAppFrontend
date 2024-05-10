"use client";
import { CustomError } from "@/app/common/errors/custom.error";
import { ForgotPassword } from "@/app/common/helper/forgot-password-helper/forgot-password.request";
import {
  ReturnProps,
  validateForm,
} from "@/app/common/helper/forgot-password-helper/forgot-password.validation";
import { Margin, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const [EmailEmptyError, setEmailEmptyError] = useState("");

  const [isEmailEmpty, setIsEmailEmpty] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  async function HandleForgotPassword() {
    // Resetting error states
    setErrorMessage("");
    setIsEmailEmpty(false);

    try {
      const validatedForm: ReturnProps = validateForm(email);
      if (validatedForm.isEmpty) {
        if (validatedForm.forEmail) {
          setIsEmailEmpty(true);
          setEmailEmptyError(validatedForm.forEmail);
        }
      } else {
        var response;
        response = await ForgotPassword({
          email,
        });

        setSuccessMessage(response.Message);
        console.log("This is Response: ", response);
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
              Verify E-mail
            </Typography>
          </Box>
          <Typography>{errorMessage}</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            variant="standard"
            label="Email"
            error={isEmailEmpty}
            helperText={isEmailEmpty ? EmailEmptyError : ""}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value.trim() !== "") {
                setEmailEmptyError("");
              }
            }}
          />
          <Button
            onClick={HandleForgotPassword}
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
            Veirfy
          </Button>
          {successMessage && (
            <Alert severity="success" sx={{ mt: 2 }}>
              {successMessage}
            </Alert>
          )}
          {errorMessage && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {errorMessage}
            </Alert>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default ForgotPasswordPage;
