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
import { usePathname } from "next/navigation";
import { CustomError } from "@/app/common/errors/custom.error";
import {
  CreateBlog,
  GetBlogInfo,
  GetBlogs,
} from "@/app/common/helper/blog-helper/blog.request";
import { useEffect, useState } from "react";
import {
  DownVoteBlog,
  GetVoteInfo,
  UpVoteBlog,
} from "@/app/common/helper/vote-helper/vote.request";
import { AddComment } from "@/app/common/helper/comment-helper/comment.request";
import {
  ReturnProps,
  validateForm,
} from "@/app/common/helper/comment-helper/comment.validation";
import router from "next/router";

const SingleBlogPage = () => {
  const currentPath = usePathname(); // getting the current path URL
  const parts = currentPath?.split("/"); // Split the path by slashes
  const blogId = parts!![2]; // Extract the part after the second slash

  const [imgUrl, setImgUrl] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [upvotes, setUpVotes] = useState(0);
  const [downvotes, setDownVotes] = useState(0);
  const [isUpVote, setIsUpVote] = useState<boolean | null>(null);
  const [comment, setComment] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [commentEmptyError, setCommentEmptyError] = useState("");

  const [isCommentEmpty, setIsCommentEmpty] = useState(false);

  useEffect(() => {
    async function fetchBlogInfo() {
      try {
        console.log("requesting");
        const response = await GetBlogInfo({
          blogId,
        });
        setImgUrl("/" + response.Data.imgUrl);
        setAuthor(response.Data.postUser.name);
        setTitle(response.Data.title);
        setContent(response.Data.content);

        //Formatting date
        const dateString = response.Data.createdAt;
        const dateObject = new Date(dateString);
        const formattedDate = dateObject.toISOString().split("T")[0];
        setDate(formattedDate);

        setUpVotes(response.Data.upVote);
        setDownVotes(response.Data.downVote);

        console.log("This is Blog Info Response: ", response.Data);
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

    async function fetchVoteInfo() {
      try {
        console.log("requesting");
        const response = await GetVoteInfo({
          blogId,
        });

        setIsUpVote(response.Data.isUpVote);
        console.log("This is Vote Info Response: ", response.Data);
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

    fetchBlogInfo();
    fetchVoteInfo();
  }, [blogId]);

  async function handleUpVote() {
    try {
      console.log("requesting");
      const response = await UpVoteBlog({
        blogId,
      });

      setUpVotes((prevUpvotes) => prevUpvotes + 1);
      setDownVotes((prevDownvotes) => prevDownvotes - 1); // Decrease the downvotes
      setIsUpVote(true);

      console.log("This is Upvote Response: ", response.Data);
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

  async function handleDownVote() {
    try {
      console.log("requesting");
      const response = await DownVoteBlog({
        blogId,
      });

      setDownVotes((prevDownvotes) => prevDownvotes + 1);
      setUpVotes((prevUpvotes) => prevUpvotes - 1);
      setIsUpVote(false);

      console.log("This is Downvote Response: ", response.Data);
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

  async function HandleCreateComment() {
    // Resetting error states
    setErrorMessage("");
    setIsCommentEmpty(false);

    try {
      const validatedForm: ReturnProps = validateForm(comment);
      if (validatedForm.isEmpty) {
        if (validatedForm.forMessage) {
          setIsCommentEmpty(true);
          setCommentEmptyError(validatedForm.forMessage);
        }
      } else {
        console.log("This is comment and blogid", comment, blogId);

        const response = await AddComment(
          {
            blogId,
          },
          {
            message: comment,
          }
        );

        console.log("This is Response: ", response.Data);
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
          image={imgUrl}
          alt=""
          sx={{
            height: "100%",
          }}
        />
      </Card>
      <Box display={"flex"} alignItems={"center"} gap={2}>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
          <Typography
            variant="body1"
            sx={{ marginRight: "15px", color: "#1dd3b0", fontWeight: "500" }}
          >
            {upvotes}
          </Typography>

          {
            <Button
              size="small"
              disableElevation
              startIcon={<ThumbUpIcon />}
              variant="contained"
              sx={{ bgcolor: "#1dd3b0" }}
              disabled={isUpVote === true}
              onClick={handleUpVote}
            >
              Upvote
            </Button>
          }
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
          <Typography
            variant="body1"
            sx={{ marginRight: "15px", color: "#ef233c", fontWeight: "500" }}
          >
            {downvotes}
          </Typography>
          <Button
            size="small"
            disableElevation
            startIcon={<ThumbDownAltIcon />}
            variant="contained"
            sx={{ bgcolor: "#ef233c" }}
            disabled={isUpVote === false}
            onClick={handleDownVote}
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
          <Typography sx={{ fontSize: "20px" }}>{author}</Typography>
        </Box>
        <Box pl={2}>
          <Typography sx={{ fontSize: "16px" }}>{date}</Typography>
        </Box>
      </Box>
      <Box marginTop={"30px"}>
        <Typography
          variant="h4"
          sx={{ maxWidth: "100%", textWrap: "wrap", textAlign: "justify" }}
        >
          {title}
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
          {content}
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
          onChange={(e) => {
            setComment(e.target.value);
            if (e.target.value.trim() !== "") {
              setCommentEmptyError("");
            }
          }}
          required
          id="outlined-required"
          placeholder="Add a comment"
          sx={{
            width: "100%",
            maxWidth: "100%",
            "& .MuiInputLabel-root": {
              color: "grey",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              fontSize: "20px",
              color: "black",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "black",
              },
              "&:hover fieldset": {
                borderColor: "#black",
              },
              "&.Mui-focused fieldset": {
                borderColor: "Black",
                fontSize: "20px",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={HandleCreateComment}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={isCommentEmpty}
          helperText={isCommentEmpty ? commentEmptyError : ""}
        />
      </Box>
    </Box>
  );
};

export default SingleBlogPage;
