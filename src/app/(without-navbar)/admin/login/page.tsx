"use client";
import { CustomError } from "@/app/common/errors/custom.error";
import { AdminLogin } from "@/app/common/helper/admin-helper/admin.login.request";
import {
  ReturnProps,
  validateForm,
} from "@/app/common/helper/login-helper/login.validation";
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
import Cookies from "js-cookie";
import { VisibilityOff, Visibility } from "@mui/icons-material";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
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

  const router = useRouter();

  async function HandleLogin() {
    // Resetting error states
    setErrorMessage("");
    setIsUserNameEmpty(false);
    setIsPasswordEmpty(false);

    try {
      const validatedForm: ReturnProps = validateForm(userName, null, password);
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
        const response = await AdminLogin({
          userName,
          password,
        });
        console.log("This is Response: ", response.Data);
        // Save to cookie.
        Cookies.set("Token", response.Data);

        // Redirect to Home page
        router.push("/admin/pages/dashboard");
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
        alignItems: "center",
        justifyContent: "center",
        height: "700px",
        overflow: "hidden",
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
              Admin Sign In
            </Typography>
          </Box>
          {errorMessage}
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
            onClick={HandleLogin}
            sx={{
              mt: 6,
              backgroundColor: "black",
              "&:hover": { backgroundColor: "#303030" },
            }}
          >
            Sign In
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;
