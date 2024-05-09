"use client";
import {
  Avatar,
  AvatarGroup,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardMedia,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import SendIcon from "@mui/icons-material/Send";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SingleBlogPage = () => {
  return (
    <Box
      sx={{
        marginTop: "25px",
        maxWidth: "60%",
        minHeight: "500px",
        marginX: "auto",
        overflowWrap: "break-word",
      }}
    >
      <Breadcrumbs sx={{ marginBlock: 3 }}>
        <Link href={"/blogs"}>All Blogs</Link>
        <Typography color="text.primary">Blog Details</Typography>
      </Breadcrumbs>
      <Card
        sx={{
          bgcolor: "#1a1a1a",
          color: "white",
          height: "500px",
          width: "100%",
          borderRadius: 1,
          border: "1px solid",
        }}
        elevation={0}
      >
        <CardMedia
          component="img"
          // image={1.jpg}
          alt="green iguana"
          sx={{
            height: "100%",
          }}
        />
      </Card>
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Box marginTop={"26px"}>
          <AvatarGroup max={3}>
            <Avatar />
            <Avatar />
            <Avatar />
            <Avatar />
          </AvatarGroup>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
          <Typography
            variant="body1"
            sx={{ marginRight: "15px", color: "#1dd3b0", fontWeight: "500" }}
          >
            45
          </Typography>
          <Button
            size="small"
            disableElevation
            startIcon={<ThumbUpIcon />}
            variant="contained"
            sx={{ bgcolor: "#1dd3b0" }}
          >
            Upvote
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
          <Typography
            variant="body1"
            sx={{ marginRight: "15px", color: "#ef233c", fontWeight: "500" }}
          >
            55
          </Typography>
          <Button
            size="small"
            disableElevation
            startIcon={<ThumbDownAltIcon />}
            variant="contained"
            sx={{ bgcolor: "#ef233c" }}
          >
            Downvote
          </Button>
        </Box>
      </Box>
      <Box
        marginTop={"40px"}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar></Avatar>
          <Typography sx={{ fontSize: "20px" }}>Rishav Kumar Gurung</Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "14px" }}>12/12/2024</Typography>
        </Box>
      </Box>
      <Box marginTop={"30px"}>
        <Typography
          variant="h4"
          sx={{ maxWidth: "100%", textWrap: "wrap", textAlign: "justify" }}
        >
          Top places to visit in Rome 2025 that are budget-friendly. Discover
          the trip cost and details.
        </Typography>
      </Box>

      <Box marginTop={"30px"}>
        <Typography
          sx={{
            fontSize: "16px",
            maxWidth: "100%",
            textWrap: "wrap",
            textAlign: "justify",
          }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose. It is a long established fact that a
          reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose.
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose.
        </Typography>
      </Box>
      <Divider sx={{ width: "100%", marginTop: 5 }} />
      <Box marginTop={"30px"}>
        <Typography
          variant="h5"
          sx={{ width: "80%", margin: "auto", marginBottom: "15px" }}
        >
          Comments <span style={{ fontWeight: "bold" }}>(2)</span>
        </Typography>
        <Box
          sx={{
            height: "400px",
            overflowY: "auto",
            marginX: "auto",
            padding: 0,
          }}
        >
          <Card
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              margin: "auto",
              marginTop: 2,
              bgcolor: "white",
              paddingX: "40px",
              paddingY: "40px",
              position: "relative",
            }}
          >
            <Avatar></Avatar>
            <Box sx={{ width: "85%", margin: "auto" }}>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                Aditya Shrestha
              </Typography>
              <Typography sx={{ textAlign: "justify" }}>
                Hello, its my first comment, how are you??? I am fine, i like
                this blog, thankyou!!!!!!
              </Typography>
            </Box>
            <Box sx={{ position: "absolute", top: 5, right: 5 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" sx={{ color: "#1dd3b0" }}>
                  2
                </Typography>
                <IconButton>
                  <ThumbUpIcon sx={{ color: "#1dd3b0" }} />
                </IconButton>
                <Typography variant="body2" sx={{ color: "#ef233c" }}>
                  2
                </Typography>
                <IconButton>
                  <ThumbDownAltIcon sx={{ color: "#ef233c" }} />
                </IconButton>
              </Box>
            </Box>
          </Card>
          <Card
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              margin: "auto",
              marginTop: 2,
              bgcolor: "white",
              paddingX: "40px",
              paddingY: "40px",
              position: "relative",
            }}
          >
            <Avatar></Avatar>
            <Box sx={{ width: "85%", margin: "auto" }}>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                Aditya Shrestha
              </Typography>
              <Typography sx={{ textAlign: "justify" }}>
                Hello, its my first comment, how are you??? I am fine, i like
                this blog, thankyou!!!!!!
              </Typography>
            </Box>
            <Box sx={{ position: "absolute", top: 5, right: 5 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" sx={{ color: "#1dd3b0" }}>
                  2
                </Typography>
                <IconButton>
                  <ThumbUpIcon sx={{ color: "#1dd3b0" }} />
                </IconButton>
                <Typography variant="body2" sx={{ color: "#ef233c" }}>
                  2
                </Typography>
                <IconButton>
                  <ThumbDownAltIcon sx={{ color: "#ef233c" }} />
                </IconButton>
              </Box>
            </Box>
          </Card>
          <Card
            elevation={0}
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "80%",
              margin: "auto",
              marginTop: 2,
              bgcolor: "white",
              paddingX: "40px",
              paddingY: "40px",
              position: "relative",
            }}
          >
            <Avatar></Avatar>
            <Box sx={{ width: "85%", margin: "auto" }}>
              <Typography variant="body1" sx={{ fontWeight: "600" }}>
                Aditya Shrestha
              </Typography>
              <Typography sx={{ textAlign: "justify" }}>
                Hello, its my first comment, how are you??? I am fine, i like
                this blog, thankyou!!!!!!
              </Typography>
            </Box>
            <Box sx={{ position: "absolute", top: 5, right: 5 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2" sx={{ color: "#1dd3b0" }}>
                  2
                </Typography>
                <IconButton>
                  <ThumbUpIcon sx={{ color: "#1dd3b0" }} />
                </IconButton>
                <Typography variant="body2" sx={{ color: "#ef233c" }}>
                  2
                </Typography>
                <IconButton>
                  <ThumbDownAltIcon sx={{ color: "#ef233c" }} />
                </IconButton>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
      <Box sx={{ width: "720px", marginLeft: "89px", marginTop: "20px" }}>
        <TextField
          fullWidth
          placeholder="Add a comment"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default SingleBlogPage;
