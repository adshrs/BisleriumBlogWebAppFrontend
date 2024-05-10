"use client";
import {
  Box,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { use, useEffect } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { BASE_URL } from "@/app/common/constant/constant";
import { CustomError } from "@/app/common/errors/custom.error";
import {
  GetBlogCount,
  GetTotalComments,
  GetTotalVotes,
} from "@/app/common/helper/admin-helper/admin.fetch-blog.request";
const AdminDashboardPage = () => {
  const [Monthfilter, setMonthFilter] = React.useState("all");
  const [Yearfilter, setYearFilter] = React.useState("2024");

  //Total count of Blogs
  const [TotalBlogs, setTotalBlogs] = React.useState<number>(0);

  const [TotalVotes, setTotalVotes] = React.useState<number>(0);
  const [TotalUpvotes, setTotalUpvotes] = React.useState<number>(0);
  const [TotalDownvotes, setTotalDownvotes] = React.useState<number>(0);

  const [TotalComments, setTotalComments] = React.useState<number>(0);

  const handleMonthChange = (event: SelectChangeEvent) => {
    setMonthFilter(event.target.value as string);
  };

  const handleYearChange = (event: SelectChangeEvent) => {
    setYearFilter(event.target.value as string);
  };

  useEffect(() => {
    //fetch from 3 endpoints one from blog, one from upvotes, one from downvotes
    //Fetch from Blogs to get total blogs
    async function fetchBlogData() {
      try {
        const response = await GetBlogCount();
        console.log("This is Response: ", response.Data);
        setTotalBlogs(response.Data.totalCount);
      } catch (error) {}
    }

    async function fetchUpvotesData() {
      try {
        const response = await GetTotalVotes();
        console.log("This is Response: ", response.Data);
        setTotalVotes(response.Data.totalVotes);
        setTotalUpvotes(response.Data.totalUpVotes);
        setTotalDownvotes(response.Data.totalDownVotes);
      } catch (error) {}
    }

    async function fetchCommentsData() {
      try {
        const response = await GetTotalComments();
        console.log("This is Response: ", response.Data);
        setTotalComments(response.Data);
      } catch (error) {}
    }
    fetchBlogData();
    fetchUpvotesData();
    fetchCommentsData();
  }, []);

  useEffect(() => {
    console.log("This is total blog: ", TotalBlogs);
    console.log("This is total votes: ", TotalVotes);
    console.log("This is total upvotes: ", TotalUpvotes);
    console.log("This is total downvotes: ", TotalDownvotes);
    console.log("This is total comments: ", TotalComments);
  }, [TotalBlogs, TotalVotes, TotalUpvotes, TotalDownvotes, TotalComments]);
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
            <Typography variant="h5">Cumulative Counts</Typography>
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
          }}
        >
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "225px",
              height: "200px",
              bgcolor: "#e9c46a",
            }}
            elevation={0}
          >
            <CardContent>
              <Typography sx={{ color: "white", fontSize: "18px" }}>
                Total Blogs: {TotalBlogs}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "225px",
              height: "200px",
              bgcolor: "#f4a261",
            }}
            elevation={0}
          >
            <CardContent>
              <Typography sx={{ color: "white", fontSize: "18px" }}>
                Total Upvotes: {TotalUpvotes}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "225px",
              height: "200px",
              bgcolor: "#e76f51",
            }}
            elevation={0}
          >
            <CardContent>
              <Typography sx={{ color: "white", fontSize: "18px" }}>
                Total Downvotes: {TotalDownvotes}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "225px",
              height: "200px",
              bgcolor: "#e76f51",
            }}
            elevation={0}
          >
            <CardContent>
              <Typography sx={{ color: "white", fontSize: "18px" }}>
                Total Comments: {TotalComments}
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Typography variant="h5">Visualizations</Typography>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <LineChart
            xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
            series={[
              {
                data: [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8],
                showMark: ({ index }) => index % 2 === 0,
              },
            ]}
            width={500}
            height={300}
          />

          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: "series A" },
                  { id: 1, value: 15, label: "series B" },
                  { id: 2, value: 20, label: "series C" },
                ],
              },
            ]}
            width={400}
            height={200}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboardPage;
