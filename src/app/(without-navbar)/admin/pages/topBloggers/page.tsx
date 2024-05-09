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
import React, { useEffect, useState } from "react";
import { GetTopBloggers } from "@/app/common/helper/admin-helper/admin.top-bloggers.request";
import { CustomError } from "@/app/common/errors/custom.error";

const topBloggersPage = () => {
  const [monthfilter, setMonthFilter] = useState<string>("1");
  const [yearfilter, setYearFilter] = useState<string>("2024");
  const monthNameToNumber: Record<string, string> = {
    january: "1",
    february: "2",
    march: "3",
    april: "4",
    may: "5",
    june: "6",
    july: "7",
    august: "8",
    september: "9",
    october: "10",
    november: "11",
    december: "12",
  };

  const [cardsData, setCardsData] = useState<any[]>([]);

  const [errorMessage, setErrorMessage] = useState("");

  const handleMonthChange = (event: SelectChangeEvent) => {
    const monthName = event.target.value.toLowerCase();

    setMonthFilter(monthName === "all" ? "" : monthNameToNumber[monthName]);
  };

  const handleYearChange = (event: SelectChangeEvent) => {
    setYearFilter(event.target.value as string);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await GetTopBloggers({
          year: yearfilter,
          month: monthfilter,
        });
        console.log(response);

        setCardsData(response.Data);
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

    fetchData();
  }, [monthfilter, yearfilter]);

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
                  value={monthfilter}
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
                  value={yearfilter}
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
          {cardsData !== null &&
            cardsData.map((card, index) => (
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
                    <Avatar sx={{ bgcolor: "black" }}></Avatar>
                  </Badge>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "18px",
                      textAlign: "center",
                    }}
                  >
                    {card.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default topBloggersPage;
