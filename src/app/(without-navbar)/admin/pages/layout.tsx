import {
  Button,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import LogoutIcon from "@mui/icons-material/Logout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Drawer
          sx={{
            width: 250,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
              bgcolor: "black",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "white",
              marginBlock: "40px",
              textAlign: "center",
            }}
          >
            Bislerium
          </Typography>
          <Divider sx={{ backgroundColor: "white", marginBottom: "20px" }} />
          <List>
            <ListItemButton
              href="/admin/pages/dashboard"
              sx={{
                bgcolor: "#323232",
                marginY: "5px",
                "&:hover": {
                  bgcolor: "#232323",
                },
              }}
            >
              <ListItemIcon>
                <DashboardIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Dashboard" sx={{ color: "white" }} />
            </ListItemButton>
            <ListItemButton
              href="/admin/pages/topBloggers"
              sx={{
                bgcolor: "#323232",
                marginY: "5px",
                "&:hover": {
                  bgcolor: "#232323",
                },
              }}
            >
              <ListItemIcon>
                <GroupsIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Top Bloggers" sx={{ color: "white" }} />
            </ListItemButton>
            <ListItemButton
              href="/admin/pages/topBlogs"
              sx={{
                bgcolor: "#323232",
                marginY: "5px",
                "&:hover": {
                  bgcolor: "#232323",
                },
              }}
            >
              <ListItemIcon>
                <WorkspacePremiumIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Top Blogs" sx={{ color: "white" }} />
            </ListItemButton>
            <ListItemButton
              href="/admin/pages/addAdmin"
              sx={{
                bgcolor: "#323232",
                marginY: "5px",
                "&:hover": {
                  bgcolor: "#232323",
                },
              }}
            >
              <ListItemIcon>
                <PersonAddIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary="Add Admin" sx={{ color: "white" }} />
            </ListItemButton>
          </List>
          <Button
            variant="contained"
            endIcon={<LogoutIcon />}
            sx={{
              position: "absolute",
              bottom: "0",
              height: "50px",
              width: "100%",
              borderRadius: "0px",
              bgcolor: "red",
              "&:hover": {
                bgcolor: "#bf0603",
              },
            }}
          >
            Logout
          </Button>
        </Drawer>
        {children}
      </body>
    </html>
  );
}
