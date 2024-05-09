"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  ReturnProps,
  validateForm,
} from "@/app/common/helper/blog-helper/blog.validation";
import { CustomError } from "@/app/common/errors/custom.error";
import { Login } from "@mui/icons-material";
import { CreateBlog } from "@/app/common/helper/blog-helper/blog.request";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddBlogPage = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [titleEmptyError, setTitleEmptyError] = useState("");
  const [contentEmptyError, setContentEmptyError] = useState("");
  const [imgEmptyError, setImgEmptyError] = useState("");

  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isContentEmpty, setIsContentEmpty] = useState(false);
  const [isImgEmpty, setIsImgEmpty] = useState(false);

  const router = useRouter();

  const handleUploadImage = async () => {
    try {
      if (!selectedFile) return;
      const formData = new FormData();
      formData.append("myImage", selectedFile);

      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Failed to upload image");
      }
    } catch (error) {
      console.error(error);
    }
  };

  async function HandleCreateBlog() {
    // Resetting error states
    setErrorMessage("");
    setIsTitleEmpty(false);
    setIsContentEmpty(false);
    setIsImgEmpty(false);

    try {
      const validatedForm: ReturnProps = validateForm(
        title,
        content,
        selectedImage
      );
      if (validatedForm.isEmpty) {
        if (validatedForm.forTitle) {
          setIsTitleEmpty(true);
          setTitleEmptyError(validatedForm.forTitle);
        }
        if (validatedForm.forContent) {
          setIsContentEmpty(true);
          setContentEmptyError(validatedForm.forContent);
        }
        if (validatedForm.forImgUrl) {
          setIsImgEmpty(true);
          setImgEmptyError(validatedForm.forImgUrl);
        }
      } else {
        const imgName = await handleUploadImage();
        const response = await CreateBlog({
          title,
          content,
          imgUrl: `blog-cover-photos/${imgName}`,
        });

        console.log("This is Response: ", response.Data);
        // Redirect to Blogs Page
        router.push("/blogs");
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
    <Container
      maxWidth="xl"
      sx={{
        paddingTop: "60px",
        display: "flex",
        flexDirection: "column",
        gap: 5,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="h5" sx={{ color: "#333", fontWeight: "bold" }}>
          Create Blog
        </Typography>
        <Divider sx={{ width: "88%", marginTop: 2 }} />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"100%"}
        minHeight={"360px"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginLeft={"25px"}
          paddingLeft={"63px"}
          paddingRight={"25px"}
          width={"50%"}
          height={"342px"}
        >
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              height: "100%",
              overflow: "hidden",
            }}
          >
            <Button
              disableRipple
              component="label"
              role={undefined}
              variant="outlined"
              sx={{
                padding: 0,
                width: "100%",
                height: "100%",
                gap: 2,
                color: "black",
                borderColor: "black",
                "&:hover": {
                  backgroundColor: "lightgrey",
                  borderColor: "black",
                },
              }}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <>
                  <CloudUploadIcon />
                  <Typography>Click to Upload a Cover Photo</Typography>
                </>
              )}
              <input
                type="file"
                hidden
                onChange={({ target }) => {
                  if (target.files) {
                    const file = target.files[0];
                    setSelectedImage(URL.createObjectURL(file));
                    setSelectedFile(file);
                  }
                }}
              />
            </Button>
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 3,
            flexWrap: "wrap",
            marginRight: "25px",
            paddingLeft: "25px",
            paddingRight: "63px",
            width: "50%",
            height: "100%",
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="Title"
            placeholder="Write a short title"
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
            error={isTitleEmpty}
            helperText={isTitleEmpty ? titleEmptyError : ""}
            onChange={(e) => {
              setTitle(e.target.value);
              if (e.target.value.trim() !== "") {
                setTitleEmptyError("");
              }
            }}
          />
          <TextField
            required={true}
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={10}
            placeholder="Write the blog content here"
            variant="outlined"
            sx={{
              width: "100%",
              maxWidth: "100%",
              "& .MuiInputLabel-root": {
                color: "grey", // Change the label color
              },
              "& .MuiInputLabel-root.Mui-focused": {
                fontSize: "20px", // Change the font size when focused
                color: "black",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black", // Change the border color
                },
                "&:hover fieldset": {
                  borderColor: "#black", // Change the border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "Black", // Change the border color when focused
                  fontSize: "20px",
                },
              },
            }}
            error={isContentEmpty}
            helperText={isContentEmpty ? contentEmptyError : ""}
            onChange={(e) => {
              setContent(e.target.value);
              if (e.target.value.trim() !== "") {
                setContentEmptyError("");
              }
            }}
          />
        </Box>
      </Box>
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Divider sx={{ width: "88%", marginBottom: 3 }} />
        <Button
          disableElevation
          variant="contained"
          sx={{
            width: "20%",
            height: "50px",
            bgcolor: "black",
            borderColor: "black",
            "&:hover": { backgroundColor: "gray" },
          }}
          onClick={HandleCreateBlog}
        >
          Create
        </Button>
      </Box>
    </Container>
  );
};

export default AddBlogPage;
