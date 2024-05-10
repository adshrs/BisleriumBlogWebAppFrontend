"use client";
import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Typography,
  Divider,
  Card,
  CardContent,
  IconButton,
  Chip,
  Button,
  AppBar,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Paper,
  InputAdornment,
  TextField,
  styled,
} from "@mui/material";
import { green } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import BadgeIcon from "@mui/icons-material/Badge";
import BorderAllIcon from "@mui/icons-material/BorderAll";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Face6Icon from "@mui/icons-material/Face6";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { CustomError } from "@/app/common/errors/custom.error";
import {
  ReturnProps,
  validateForm,
} from "@/app/common/helper/register-helper/register.validation";
import { BASE_URL } from "@/app/common/constant/constant";
import Cookies from "js-cookie";

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
const token = Cookies.get("Token");
interface User {
  userId: number;
  name: string;
}

interface Blog {
  title: string;
  content: string;
  postUser: User;
  imgUrl: string;
  upVote: number;
  downVote: number;
  votes: Array<any>; // Replace 'any' with the appropriate type if known
  comments: Array<any>; // Replace 'any' with the appropriate type if known
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}
const AccountPage = () => {
  // const userBlogs = [
  //   { id: 1, title: "Top world favorite travel destinations in 2024." },
  //   {
  //     id: 2,
  //     title: "Explore the world of dailtdotdev for amazing daily tech news.",
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
  //   },
  //   {
  //     id: 4,
  //     title:
  //       "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
  //   },
  //   {
  //     id: 5,
  //     title:
  //       "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
  //   },
  //   {
  //     id: 6,
  //     title:
  //       "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
  //   },
  //   {
  //     id: 7,
  //     title:
  //       "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
  //   },
  //   {
  //     id: 8,
  //     title:
  //       "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
  //   },
  //   {
  //     id: 9,
  //     title:
  //       "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
  //   },
  //   {
  //     id: 10,
  //     title:
  //       "Wonderful places around kathamdnu valley to hangout with your friends, discover more on my blog to see more.",
  //   },
  // ];

  const [openEditProfileDialog, setEditProfileDialogOpen] =
    React.useState(false);
  const [openEditDialog, setEditDialogOpen] = React.useState(false);
  const [openDeleteDialog, setDeleteDialogOpen] = React.useState(false);
  const [image, setImage] = useState<string | null>(null);

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [nameEmptyError, setNameEmptyError] = useState("");
  const [userNameEmptyError, setUserNameEmptyError] = useState("");

  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isUserNameEmpty, setIsUserNameEmpty] = useState(false);

  const [userBlogs, setBlogData] = useState<Blog[]>([]);

  const [editBlogName, setEditBlogName] = useState("");
  const [editBlogContent, setEditBlogContent] = useState("");
  const [selectedBlogId, setSelectedBlogId] = useState<string | number>("");
  const [userId, setSelecteduserId] = useState<string | number>("");

  const handleSave = async () => {
    console.log("Save is Clicked");

    const blogData = {
      title: editBlogName,
      content: editBlogContent,
      imgUrl: image,
    };

    try {
      const response = await fetch(
        `${BASE_URL}api/user/blogs/update/${selectedBlogId}
      `,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(blogData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setBlogData((previousData) =>
        previousData.map((blog) =>
          blog.id === selectedBlogId ? data.Data : blog
        )
      );

      // Update the state of your component here
      // For example, you might want to close the dialog and refresh the list of blogs
      handleEditDialogClose();
      // refreshBlogs(); // This is just an example. Implement this function based on your needs
    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error);
    }
  };

  const handleDelete = async (id: string | number) => {
    try {
      const response = await fetch(
        `${BASE_URL}api/user/blogs/soft-delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("This is Data delete: ", data.Data);
      setBlogData((previousData) =>
        previousData.filter((blog) => blog.id !== id)
      );
      handleDeleteDialogClose();
    } catch (error) {
      console.error("Error:", error);
      handleDeleteDialogClose();
    }
  };
  useEffect(() => {
    // Fetch user data
    async function fetchUserData() {
      // Handle API response
      try {
        const response = await fetch(
          `${BASE_URL}api/user/user/authorized-info`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();

        setSelecteduserId(data.Data.id);
        setUserName(data.Data.userName);
        setName(data.Data.name);
        setEmail(data.Data.email);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
      try {
        const blogs = await fetch(`${BASE_URL}api/user/blogs/personal-blogs`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const blogData = await blogs.json();
        console.log("These are Blogs", blogData.Data);
        setBlogData(blogData.Data);
      } catch (error) {}
    }
    fetchUserData();
  }, []);

  useEffect(() => {
    console.log("Name: ", name);
    console.log("Username: ", userName);
    console.log("Email: ", email);
    console.log("blogs: ", userBlogs);
    console.log("userId: ", userId);
  }, [name, userName, email, userBlogs, userId]);

  const handleEditProfileDialogOpen = () => {
    setEditProfileDialogOpen(true);
  };

  const handleEditProfileDialogClose = () => {
    setEditProfileDialogOpen(false);
    // setName("");
    // setUserName("");
    // setErrorMessage("");
    // setIsNameEmpty(false);
    // setIsUserNameEmpty(false);
  };

  const handleEditDialogOpen = (id: string | number) => {
    setEditDialogOpen(true);
    setSelectedBlogId(id);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handledeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      // Check if file size is less than or equal to 3 MB
      if (file.size <= 3 * 1024 * 1024) {
        setImage(URL.createObjectURL(file));
      } else {
        alert("File size exceeds 3 MB limit.");
      }
    }
  };

  async function HandleEditProfile() {
    // Resetting error states
    console.log("Profile Edit");

    const profileData = {
      name: name,
    };
    // setErrorMessage("");
    // setIsNameEmpty(false);
    // setIsUserNameEmpty(false);

    try {
      // Handle API response
      console.log("Else");

      const updateProfile = await fetch(
        `${BASE_URL}api/user/user/update
        `,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(profileData),
        }
      );

      const updatedData = await updateProfile.json();
      console.log("This is Updated Data: ", updatedData);

      handleEditProfileDialogClose();
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

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <>
      <Box
        marginBottom={"-80px"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        height={"700px"}
        width={"100%"}
      >
        {/* Profile Information */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            width: "300px",
            height: "100%",
            padding: "20px",
            bgcolor: "black",
            color: "white",
          }}
        >
          <Avatar
            sx={{ bgcolor: green[500], width: 100, height: 100, margin: 2 }}
            alt="Aditya Shrestha"
          ></Avatar>
          <Chip icon={<Face6Icon />} label={name} color="info" />
          <Box sx={{ marginBottom: 2 }}>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 2, margin: 2 }}
            >
              <PersonIcon />
              <Typography variant="body2">{name}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 2, margin: 2 }}
            >
              <BadgeIcon />
              <Typography variant="body2">{userName}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                margin: 2,
                maxWidth: "200px",
              }}
            >
              <EmailIcon />
              <Typography
                variant="body2"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {email}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={handleEditProfileDialogOpen}
              sx={{
                color: "white",
                borderColor: "white",
                width: "200px",
                "&:hover": {
                  color: "gray",
                  borderColor: "gray",
                },
              }}
            >
              Edit Profile
            </Button>
            <Dialog
              open={openEditProfileDialog}
              onClose={handleEditProfileDialogClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              PaperProps={{
                sx: {
                  width: "35%",
                },
              }}
              sx={{ bgcolor: "rgba(0,0,0,0.6)" }}
            >
              <DialogTitle id="alert-dialog-title">
                {"Edit Profile"}
              </DialogTitle>
              <DialogContent>
                <Box
                  sx={{
                    width: "100%",
                    margin: "0 auto",
                  }}
                >
                  {errorMessage}
                  <Typography pt={3}>Name:</Typography>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    variant="outlined"
                    defaultValue={name}
                    error={isNameEmpty}
                    helperText={isNameEmpty ? nameEmptyError : ""}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (e.target.value.trim() !== "") {
                        setNameEmptyError("");
                      }
                    }}
                    sx={{
                      width: "100%",
                      maxWidth: "100%",
                      backgroundColor: "#fff",
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
                  />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleEditProfileDialogClose}
                  sx={{ color: "grey" }}
                >
                  Cancel
                </Button>
                <Button onClick={HandleEditProfile} color="primary" autoFocus>
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </Box>
        </Box>

        <Box sx={{ display: "flex", height: "100%", overflow: "hidden" }}>
          {/* My Blogs Section */}
          <Box
            sx={{
              flex: "1 1 auto",
              paddingRight: "100px",
              marginBottom: "30px",
              width: "100vw",
              paddingLeft: 5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                paddingLeft: "25px",
                marginTop: 5,
                textAlign: "center",
              }}
            >
              <BorderAllIcon />
              <Typography variant="h6">My Blogs</Typography>
            </Box>
            <Divider sx={{ width: "100%", marginTop: 1 }} />
            <Container
              maxWidth="xl"
              sx={{
                paddingY: "10px",
                height: "85%",
                width: "100%",
                overflowY: "scroll",
                marginBottom: "0px",
              }}
            >
              {userBlogs.map((blog) => (
                <Card
                  key={blog.id}
                  sx={{ width: "100%", marginBottom: 2 }}
                  elevation={0}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        maxWidth: "calc(50% - 16px)",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {blog.title}
                    </Typography>
                    <Box>
                      <IconButton
                        aria-label="edit"
                        onClick={() => handleEditDialogOpen(blog.id)}
                      >
                        <EditIcon sx={{ color: "black" }} />
                      </IconButton>
                      <Dialog
                        fullScreen
                        open={openEditDialog}
                        onClose={handleEditDialogClose}
                      >
                        <AppBar sx={{ position: "relative", bgcolor: "black" }}>
                          <Toolbar>
                            <IconButton
                              edge="start"
                              color="inherit"
                              onClick={handleEditDialogClose}
                              aria-label="close"
                            >
                              <CloseIcon />
                            </IconButton>
                            <Typography
                              sx={{ ml: 2, flex: 1 }}
                              variant="h6"
                              component="div"
                            >
                              Edit Blog
                            </Typography>
                            <Button
                              autoFocus
                              color="inherit"
                              onClick={handleSave}
                            >
                              save
                            </Button>
                          </Toolbar>
                        </AppBar>
                        <Box
                          display={"flex"}
                          flexDirection={"column"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          height={"100%"}
                        >
                          <Box
                            display={"flex"}
                            flexDirection={"row"}
                            justifyContent={"start"}
                            alignItems={"center"}
                            width={"88.5%"}
                            mb={3}
                          >
                            <Typography variant="h6">
                              Click on the picture to upload a new cover photo:
                            </Typography>
                            <Typography variant="h6" ml={"265px"}>
                              Edit the blog content here:
                            </Typography>
                          </Box>
                          <Box
                            display={"flex"}
                            flexDirection={"row"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            width={"100%"}
                            height={"360px"}
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
                              height={"100%"}
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
                                  {image ? (
                                    <img
                                      src={image}
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
                                      <Typography>
                                        Click to Upload a Cover Photo
                                      </Typography>
                                    </>
                                  )}
                                  <VisuallyHiddenInput
                                    type="file"
                                    onChange={handleImageChange}
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
                                placeholder={blog.title}
                                defaultValue={blog.title}
                                onChange={(e) => {
                                  setEditBlogName(e.target.value);
                                }}
                                sx={{
                                  width: "100%",
                                  maxWidth: "100%",
                                  backgroundColor: "#fff",
                                  "& .MuiInputLabel-root": {
                                    color: "Black",
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
                              />
                              <TextField
                                required={true}
                                id="outlined-multiline-static"
                                label="Content"
                                multiline
                                rows={10}
                                placeholder={blog.content}
                                defaultValue={blog.content}
                                onChange={(e) => {
                                  setEditBlogContent(e.target.value);
                                }}
                                variant="outlined"
                                sx={{
                                  width: "100%",
                                  maxWidth: "100%",
                                  backgroundColor: "#fff",
                                  "& .MuiInputLabel-root": {
                                    color: "Black",
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
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Dialog>

                      <IconButton
                        aria-label="delete"
                        onClick={handledeleteDialogOpen}
                      >
                        <DeleteIcon sx={{ color: "#d90429" }} />
                      </IconButton>
                      <Dialog
                        open={openDeleteDialog}
                        onClose={handleDeleteDialogClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                        sx={{
                          opacity: "30%",
                        }}
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"Are you sure you want to delete?"}
                        </DialogTitle>
                        <DialogContent>
                          Warning: This action will permanently delete this
                          post.
                        </DialogContent>
                        <DialogActions>
                          <Button
                            onClick={handleDeleteDialogClose}
                            sx={{ color: "grey" }}
                          >
                            No
                          </Button>
                          <Button
                            onClick={() => handleDelete(blog.id)}
                            sx={{ color: "#d90429" }}
                            autoFocus
                          >
                            Yes
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Container>
            <Divider sx={{ width: "100%" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AccountPage;
