"use client";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getBlogs } from "@/app/common/helper/blog-helper/blog.request";
import { CustomError } from "@/app/common/errors/custom.error";

type CardData = {
  title: string;
  author: string;
  image: string;
};

const BlogsPage = () => {
  const [cardsData, setCardsData] = useState([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(0);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getBlogs({
          page: `${pageNumber}`,
          shortBy: null,
        });

        setCardsData(response.Data.data);
        setPageNumber(response.Data["pageNumber"]);
        setTotalCount(response.Data.totalCount);
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
  }, [pageNumber]);

  const router = useRouter();

  const handleAllFilter = () => {
    router.push("/blogs");
  };

  const handlePopularFilter = () => {
    router.push("/blogs");
  };

  const handleLatestFilter = () => {
    router.push("/blogs");
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageNumber(value);
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: "60px",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        justifyContent: "space-between",
        alignItems: "stretch",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          marginLeft: "25px",
          marginRight: "25px",
          paddingLeft: "63px",
        }}
      >
        <Typography
          variant="h5"
          mr="35px"
          sx={{ color: "#333", fontWeight: "bold" }}
        >
          Explore Blogs
        </Typography>
        <Stack direction="row" spacing={1.5}>
          <Chip
            label="All"
            onClick={handleAllFilter}
            sx={{ borderRadius: "4px" }}
          />
          <Chip
            label="Popular"
            variant="outlined"
            onClick={handlePopularFilter}
            sx={{ borderRadius: "4px" }}
          />
          <Chip
            label="Latest"
            variant="outlined"
            onClick={handleLatestFilter}
            sx={{ borderRadius: "4px" }}
          />
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap",
          marginLeft: "25px",
          marginRight: "25px",
        }}
      >
        {cardsData !== null &&
          cardsData.map((card, index) => (
            <Card
              sx={{
                bgcolor: "#1a1a1a",
                color: "white",
                maxHeight: 300,
                width: 240,
                maxWidth: "100%",
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
              <CardActionArea disableRipple href={`/blogs/${card["id"]}`}>
                <CardMedia
                  component="img"
                  height="200"
                  image={card["imgUrl"]}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="body1"
                    component="div"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {card["title"]}
                  </Typography>
                  <Typography fontSize={12}>
                    {card["postUser"]["name"]}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
          marginLeft: "25px",
          marginRight: "25px",
        }}
      >
        <Pagination
          count={Math.ceil(totalCount / 20)}
          page={pageNumber}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
        />
      </Box>
    </Container>
  );
};

export default BlogsPage;
