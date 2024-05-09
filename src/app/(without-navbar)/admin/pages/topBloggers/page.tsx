"use client";
import {
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import React from "react";

const topBloggersPage = () => {
  const [Monthfilter, setMonthFilter] = React.useState("all");
  const [Yearfilter, setYearFilter] = React.useState("2024");

  const handleMonthChange = (event: SelectChangeEvent) => {
    setMonthFilter(event.target.value as string);
  };

  const handleYearChange = (event: SelectChangeEvent) => {
    setYearFilter(event.target.value as string);
  };

  return (
    <Box sx={{ display: "flex", marginLeft: "250px" }}>
      <Box sx={{ p: 3 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
          }}
        >
          <Box
            width={"90%"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Typography variant="h5">Top 10 bloggers of all time.</Typography>
            <Box display={"flex"} flexDirection={"row"} gap={2}>
              <FormControl>
                <InputLabel>Month Filter</InputLabel>
                <Select
                  value={Monthfilter}
                  label="Month Filter"
                  onChange={handleMonthChange}
                >
                  <MenuItem value={"all"}>All Time</MenuItem>
                  <MenuItem value={"january"}>January</MenuItem>
                  <MenuItem value={"february"}>February</MenuItem>
                  <MenuItem value={"march"}>March</MenuItem>
                  <MenuItem value={"april"}>April</MenuItem>
                  <MenuItem value={"may"}>May</MenuItem>
                  <MenuItem value={"june"}>June</MenuItem>
                  <MenuItem value={"july"}>July</MenuItem>
                  <MenuItem value={"august"}>August</MenuItem>
                  <MenuItem value={"september"}>September</MenuItem>
                  <MenuItem value={"november"}>November</MenuItem>
                  <MenuItem value={"october"}>October</MenuItem>
                  <MenuItem value={"december"}>December</MenuItem>
                </Select>
              </FormControl>
              <FormControl>
                <InputLabel>Year Filter</InputLabel>
                <Select
                  value={Yearfilter}
                  label="YearFilter"
                  onChange={handleYearChange}
                >
                  <MenuItem value={"2024"}>2024</MenuItem>
                  <MenuItem value={"2023"}>2023</MenuItem>
                  <MenuItem value={"2022"}>2022</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            marginBottom: "25px",
            flexWrap: "wrap",
          }}
        >
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "230px",
              height: "230px",
              bgcolor: "#323232",
            }}
            elevation={0}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<MilitaryTechIcon sx={{ color: "gold" }} />}
              >
                <Avatar sx={{ bgcolor: "black" }}>AS</Avatar>
              </Badge>
              <Typography
                sx={{ color: "white", fontSize: "18px", textAlign: "center" }}
              >
                Aditya Chandra Shrestha
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "230px",
              height: "230px",
              bgcolor: "#323232",
            }}
            elevation={0}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<MilitaryTechIcon sx={{ color: "gold" }} />}
              >
                <Avatar sx={{ bgcolor: "black" }}>AS</Avatar>
              </Badge>
              <Typography
                sx={{ color: "white", fontSize: "18px", textAlign: "center" }}
              >
                Aditya Chandra Shrestha
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "230px",
              height: "230px",
              bgcolor: "#323232",
            }}
            elevation={0}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<MilitaryTechIcon sx={{ color: "gold" }} />}
              >
                <Avatar sx={{ bgcolor: "black" }}>AS</Avatar>
              </Badge>
              <Typography
                sx={{ color: "white", fontSize: "18px", textAlign: "center" }}
              >
                Aditya Chandra Shrestha
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "230px",
              height: "230px",
              bgcolor: "#323232",
            }}
            elevation={0}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<MilitaryTechIcon sx={{ color: "gold" }} />}
              >
                <Avatar sx={{ bgcolor: "black" }}>AS</Avatar>
              </Badge>
              <Typography
                sx={{ color: "white", fontSize: "18px", textAlign: "center" }}
              >
                Aditya Chandra Shrestha
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "230px",
              height: "230px",
              bgcolor: "#323232",
            }}
            elevation={0}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<MilitaryTechIcon sx={{ color: "gold" }} />}
              >
                <Avatar sx={{ bgcolor: "black" }}>AS</Avatar>
              </Badge>
              <Typography
                sx={{ color: "white", fontSize: "18px", textAlign: "center" }}
              >
                Aditya Chandra Shrestha
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "230px",
              height: "230px",
              bgcolor: "#323232",
            }}
            elevation={0}
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Badge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={<MilitaryTechIcon sx={{ color: "gold" }} />}
              >
                <Avatar sx={{ bgcolor: "black" }}>AS</Avatar>
              </Badge>
              <Typography
                sx={{ color: "white", fontSize: "18px", textAlign: "center" }}
              >
                Aditya Chandra Shrestha
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default topBloggersPage;
