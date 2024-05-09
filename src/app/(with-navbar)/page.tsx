"use client";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Home = () => {
  const router = useRouter();

  const handleBlogsButtonClick = () => {
    router.push("/blogs");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "60px",
          height: "91vh",
          overflow: "hidden",
        }}
      >
        <img src="banner/banner2.png" alt="banner" />
        <div
          style={{
            height: "100%",
            width: "100%",
            paddingTop: "25%",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={handleBlogsButtonClick}
            className={styles.button}
            role="button"
            style={{ cursor: "pointer" }}
          >
            View Blogs
          </button>
        </div>
      </div>
      <Container
        maxWidth="xl"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          justifyContent: "space-between",
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
          <button
            onClick={handleBlogsButtonClick}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h5"
              mr="4px"
              sx={{ color: "#333", fontWeight: "bold" }}
            >
              Popular
            </Typography>
            <ChevronRightIcon
              fontSize="large"
              sx={{ fontSize: 32, color: "black" }}
            />
          </button>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 3,
            flexWrap: "wrap",
            padding: "0px 60px",
            marginLeft: "25px",
            marginRight: "25px",
          }}
        >
          <Box
            sx={{
              width: "53%",
              height: "467px",
            }}
          >
            {/* {cardsData.slice(0, 1).map((card, index) => (
              <Card
                sx={{
                  bgcolor: "#1a1a1a",
                  color: "white",
                  height: "467px",
                  maxWidth: "100%",
                  borderRadius: 1,
                  "&:hover": {
                    transform: "scale(1.01)",
                    bgcolor: "#f2f2f2",
                    color: "black",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
                elevation={0}
              >
                <CardActionArea disableRipple sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    image={card.image}
                    alt="green iguana"
                    sx={{ maxHeight: "83%" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                      {card.title}
                    </Typography>
                    <Typography fontSize={12}>{card.author}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))} */}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              width: "45%",
            }}
          >
            {/* {cardsData.slice(1, 4).map((card, index) => (
              <Card
                sx={{
                  bgcolor: "#1a1a1a",
                  color: "white",
                  maxHeight: 140,
                  maxWidth: "100%",
                  borderRadius: 1,
                  "&:hover": {
                    transform: "scale(1.01)",
                    bgcolor: "#f2f2f2",
                    color: "black",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
                elevation={0}
              >
                <CardActionArea
                  disableRipple
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      objectFit: "cover",
                      maxWidth: "45%",
                    }}
                    height="150"
                    image={card.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                      {card.title}
                    </Typography>
                    <Typography fontSize={12}>{card.author}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))} */}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
            marginTop: "60px",
            marginLeft: "25px",
            marginRight: "25px",
            paddingLeft: "63px",
          }}
        >
          <button
            onClick={handleBlogsButtonClick}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "start",
              backgroundColor: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Typography
              variant="h5"
              mr="4px"
              sx={{ color: "#333", fontWeight: "bold" }}
            >
              Latest
            </Typography>
            <ChevronRightIcon
              fontSize="large"
              sx={{ fontSize: 32, color: "black" }}
            />
          </button>
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
          {/* {cardsData.slice(5, 10).map((card, index) => (
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
                <CardMedia
                  component="img"
                  height="200"
                  image={card.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    {card.title}
                  </Typography>
                  <Typography fontSize={12}>{card.author}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))} */}
        </Box>
      </Container>
    </>
  );
};

export default Home;
