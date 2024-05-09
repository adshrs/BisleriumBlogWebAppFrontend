"use client";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import React from "react";

const topBlogsPage = () => {
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
            <Typography variant="h5">Top 10 blogs of all time.</Typography>
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
            gap: 5,
            flexWrap: "wrap",
          }}
        >
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{
              bgcolor: "#1a1a1a",
              color: "white",
              maxHeight: 300,
              maxWidth: 240,
              borderRadius: 1,
              "&:hover": {
                transform: "scale(1.02)",
                bgcolor: "#f2f2f2",
                color: "black",
              },
              transition: "all 0.2s ease-in-out",
            }}
            elevation={0}
          >
            <CardActionArea disableRipple>
              <CardMedia component="img" height="200" alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  This is a card title, hello world how are you?
                </Typography>
                <Typography fontSize={12}>I am Author</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default topBlogsPage;
