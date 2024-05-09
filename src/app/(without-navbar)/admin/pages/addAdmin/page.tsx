"use client";
import React, { useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { BASE_URL } from "@/app/common/constant/constant";

const AddUsersPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleAddUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/admin/admin/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userName: username,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to add user");
      }
      console.log("User added successfully");
      setUsername("");
      setPassword("");
    } catch (error) {
      console.error("Error adding user:", error);
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          variant="standard"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
