"use client";
import { CustomError } from "@/app/common/errors/custom.error";
import { RegisterCommon } from "@/app/common/helper/register-helper/register.request";
import {
  ReturnProps,
  validateForm,
} from "@/app/common/helper/register-helper/register.validation";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  colors,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [nameEmptyError, setNameEmptyError] = useState("");
  const [emailEmptyError, setEmailEmptyError] = useState("");
  const [userNameEmptyError, setUserNameEmptyError] = useState("");
  const [passwordEmptyError, setPasswordEmptyError] = useState("");

  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isUserNameEmpty, setIsUserNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();

  async function HandleSignup() {
    // Resetting error states
    setErrorMessage("");
    setIsNameEmpty(false);
    setIsUserNameEmpty(false);
    setIsEmailEmpty(false);
    setIsPasswordEmpty(false);

    try {
      const validatedForm: ReturnProps = validateForm(
        name,
        userName,
        email,
        password
      );
      if (validatedForm.isEmpty) {
        if (validatedForm.forName) {
          setIsNameEmpty(true);
          setNameEmptyError(validatedForm.forName);
        }
        if (validatedForm.forUserName) {
          setIsUserNameEmpty(true);
          setUserNameEmptyError(validatedForm.forUserName);
        }
        if (validatedForm.forEmail) {
          setIsEmailEmpty(true);
          setEmailEmptyError(validatedForm.forEmail);
        }
        if (validatedForm.forPassword) {
          setIsPasswordEmpty(true);
          setPasswordEmptyError(validatedForm.forPassword);
        }
      } else {
        const response = await RegisterCommon({
          name,
          userName,
          email,
          password,
        });
        console.log("This is Response: ", response.Message);
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
      component="main"
      maxWidth="xl"
      sx={{
        paddingTop: "60px",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 15,
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ marginBottom: 2 }}>
          Create an Account
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          & Explore the
        </Typography>
        <Typography
          variant="h2"
          gutterBottom
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          World of Blogs
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
          paddingRight: 0,
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
              Sign up
            </Typography>
          </Box>
          {errorMessage}
          <TextField
            margin="normal"
            required
            fullWidth
            variant="standard"
            label="Name"
            error={isNameEmpty}
            helperText={isNameEmpty ? nameEmptyError : ""}
            onChange={(e) => {
              setName(e.target.value);
              if (e.target.value.trim() !== "") {
                setNameEmptyError("");
              }
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            variant="standard"
            label="Username"
            error={isUserNameEmpty}
            helperText={isUserNameEmpty ? userNameEmptyError : ""}
            onChange={(e) => {
              setUserName(e.target.value);
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
            label="Email"
            error={isEmailEmpty}
            helperText={isEmailEmpty ? emailEmptyError : ""}
            onChange={(e) => {
              setEmail(e.target.value);
              if (e.target.value.trim() !== "") {
                setEmailEmptyError("");
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
            type="submit"
            disableElevation
            fullWidth
            variant="contained"
            onClick={HandleSignup}
            sx={{
              mt: 6,
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#303030" },
            }}
          >
            Create account
          </Button>
          <Typography variant="body2" sx={{ mt: 4 }}>
            Dont have an account?{" "}
            <Link style={{ color: "blue" }} href="/login">
              Sign in
            </Link>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default RegisterPage;
