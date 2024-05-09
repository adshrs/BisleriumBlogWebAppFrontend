import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";

const AdminDashboardPage = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            bgcolor: "black",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "white",
            marginBlock: "40px",
            textAlign: "center",
          }}
        >
          Bislerium
        </Typography>
        <Divider sx={{ backgroundColor: "white", marginBottom: "20px" }} />
        <List>
          <ListItemButton sx={{ bgcolor: "#323232", marginY: "5px" }}>
            <ListItemIcon>
              <DashboardIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{ color: "white" }} />
          </ListItemButton>
          <ListItemButton sx={{ bgcolor: "#323232", marginY: "5px" }}>
            <ListItemIcon>
              <PersonAddIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Add Users" sx={{ color: "white" }} />
          </ListItemButton>
        </List>
        <Button
          variant="contained"
          endIcon={<LogoutIcon />}
          sx={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            borderRadius: "0px",
            bgcolor: "red",
          }}
        >
          Logout
        </Button>
      </Drawer>

      <Box sx={{ p: 3 }}>
        <h1>Welcome to Admin Dashboard!</h1>
      </Box>
    </Box>
  );
};

export default AdminDashboardPage;
