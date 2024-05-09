"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddIcon from "@mui/icons-material/Add";
import { green } from "@mui/material/colors";

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
];

const settings = [
  {
    name: "Profile",
    path: "/account",
  },
  {
    name: "Logout",
    path: "#",
  },
];

function Navbar() {
  var tokenExists = true;
  var isAdmin = false;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "black", padding: "0 25px 0 25px" }}
      elevation={0}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="/favicon.ico" alt="logo" style={{ height: "20px" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 1.5,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BISLERIUM
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Button
                    key={page.name}
                    href={page.path}
                    sx={{ color: "black" }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </Button>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            BISLERIUM
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                href={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, mx: 2, color: "white", display: "block" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ ml: 2, flexGrow: 0 }}>
            {tokenExists ? (
              isAdmin ? (
                <Button
                  href="/admin/dashboard"
                  variant="outlined"
                  sx={{ color: "white", borderColor: "white" }}
                >
                  Admin
                </Button>
              ) : (
                <>
                  <Button
                    href="/add-blog"
                    variant="contained"
                    sx={{
                      color: "black",
                      bgcolor: "white",
                      borderColor: "white",
                      mr: 3,
                      pr: 3,
                      "&:hover": { backgroundColor: "lightgrey" },
                    }}
                  >
                    <AddIcon sx={{ mr: 1, height: "20px", width: "20px" }} />
                    Create
                  </Button>
                  <IconButton aria-label="account" edge="end" sx={{ mr: 2 }}>
                    <NotificationsIcon
                      color="primary"
                      sx={{ fontSize: 30, color: "white" }}
                    />
                  </IconButton>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        sx={{
                          bgcolor: green[500],
                        }}
                        alt="Aditya Shrestha"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting.name}
                        onClick={handleCloseUserMenu}
                      >
                        <Button
                          key={setting.name}
                          href={setting.path}
                          sx={{ color: "black" }}
                        >
                          <Typography textAlign="center">
                            {setting.name}
                          </Typography>
                        </Button>
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              )
            ) : (
              <Button
                href="/login"
                variant="outlined"
                sx={{ color: "white", borderColor: "white" }}
              >
                Get Started
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

// import Link from "next/link";
// import Links from "./links/Links";
// import styles from "./navbar.module.css";
// import DynamicLinks from "./dynamicLinks/DynamicLinks";

// const Navbar = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.logo}>
//         <Link href="/">Bislerium</Link>
//       </div>
//       <div className={styles.links}>
//         <div>
//           <Links />
//         </div>
//         <div>
//           <DynamicLinks />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
