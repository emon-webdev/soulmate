"use client";
// components/UserNav.tsx

import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "../../../assets/images/logo/main_logo.png";
import { HeaderProps } from "./header";

const Navbar = ({ handleDrawerToggle, sidebarOpen }: HeaderProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isDashboardRoute = pathname.startsWith("/dashboard");
  console.log("isDashboardRoute", isDashboardRoute);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const handleSubmenuHover = (index: number) => {
    setOpenSubmenu(index);
  };

  const handleSubmenuLeave = () => {
    setOpenSubmenu(null);
  };
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Pages",
      path: `${pathname}`,
      submenu: [
        { title: "Dashboard", path: "/dashboard" },
        { title: "Pages 2", path: "/pages-2" },
        { title: "Pages 3", path: "/pages-3" },
        { title: "Pages 4", path: "/pages-4" },
        { title: "Pages 5", path: "/pages-5" },
        { title: "Pages 6", path: "/pages-6" },
      ],
    },
    { title: "Active Members", path: "/active-members" },
    {
      title: "Pricing",
      path: "/pricing",
      submenu: [
        { title: "Pricing", path: "/pricing" },
        { title: "Pricing 2", path: "/pricing" },
      ],
    },
    { title: "Success Stories", path: "/success-stories" },

    { title: "Contact", path: "/contact" },
    // { title: "News", path: "/news" },
  ];
  return (
    <Box
      className="main-navbar"
      sx={{
        py: { xs: "12px", md: "0px" },
        "& .css-i4bv87-MuiSvgIcon-root": {
          color: "#000",
        },
        "& .MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiPaper-elevation8.MuiPopover-paper.MuiMenu-paper.MuiMenu-paper.css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
          {
            width: "100% !important",
            top: "89px !important",
          },
        transition: "padding 0.3s ease-in-out",
        background: "#fff",
        boxShadow: "0px 1.5px 0px 0px rgba(39, 39, 39, 0.10)",
        // padding: "15px 0",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            className="main-logo"
            style={{
              width: "auto",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                mr: 1,
                "& img": {
                  width: { xs: "42px", md: "58px" },
                  height: { xs: "44px", md: "60px" },
                },
              }}
            >
              <Image src={Logo} alt="realmate_logo" width={58} height={60} />
            </Box>
            <Typography
              variant="h6"
              noWrap
              // component="span" // Use "span" instead of "a" here
              sx={{
                ml: { md: "8px", xs: "4px" },
                display: "flex",
                fontWeight: 900,
                color: "#23273A",
                fontSize: { md: "31px", xs: "22px" },
                lineHeight: { xs: "20px", md: "30px" },
                fontFamily: "'BROmegaRegular', sans-serif",
              }}
            >
              SOUL <br /> MATE
            </Typography>
          </Link>
          {/* </Box> */}
          <Box
            sx={{
              display: {
                md: "none",
                xs: "flex",
                alignItems: "center",
                justifyContent: "end",
              },
            }}
          >
            {isDashboardRoute ? (
              <IconButton
                onClick={handleDrawerToggle}
                sx={{
                  fontSize: "32px",
                  display: { md: "none", xs: "block" },
                  color: "red",
                  zIndex: "9999",
                }}
              >
                {/* <MenuIcon /> */}
                {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            ) : (
              <IconButton
                onClick={handleClick}
                sx={{
                  zIndex: "9999",
                  // padding: "0",
                  "& svg": {
                    fontSize: "32px",
                  },
                }}
              >
                {isOpen ? (
                  <CloseIcon
                    sx={{
                      transform: isOpen ? "translate(2px, 3px)" : "none",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                ) : (
                  <MenuIcon
                    sx={{
                      transform: isOpen ? "translate(2px, 3px)" : "none",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                )}
              </IconButton>
            )}
          </Box>
          <Box
            sx={{
              display: { xs: isOpen ? "block" : "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
              // position: { xs: "absolute", md: "static" },
              "& .MuiBox-root.css-ubkz7l": {
                position: { xs: "absolute", md: "static" },
                top: "80px",
                width: "100%",
                background: "#ddd",
                display: { xs: "block", md: "flex" },
              },
              "& .MuiBox-root.css-1gmvxu4": {
                position: "absolute",
                top: "80px",
                width: "100%",
                background: "#ddd",
                // display: { xs: "block", md: "flex" }
                zIndex: "99",
              },
              // "& .MuiBox-root.css-bm9kr9": {
              //   top: "65px !important"
              // },
              "& a": {
                display: { xs: "block", md: "flex" },
              },
            }}
          >
            {/* Navigation links centered */}
            {navLinks.map(({ path, title, submenu }, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  cursor: "pointer",
                  "& > a": {
                    cursor: "pointer",
                    py: { md: "40px", xs: "12px" },
                    mx: "15px",
                    color: "#23273A",
                    fontSize: "16px",
                    transition: ".3s",
                    display: "flex",
                    // width: "100%",
                    "&:hover": {
                      color: "#FA4A6F",
                    },
                  },
                  "& svg": {
                    color: "#23273A",
                    fontSize: "16px",
                    ml: "5px",
                  },
                  "&.submenu": {
                    "& .submenu-title": {
                      position: "relative",
                      "&:hover": {
                        "& .submenu-container": {
                          opacity: 1,
                          visibility: "visible",
                          zIndex: "9999",
                        },
                      },
                    },
                    "& .submenu-container": {
                      padding: "10px 0",
                      background: "#232635 ",
                      position: "absolute",
                      left: { md: "16px" },
                      zIndex: "999",
                      top: "100%",
                      width: { xs: "100%", md: "240px" },
                      height: "max-content",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                      opacity: 0,
                      visibility: "hidden",
                      transition:
                        "opacity 0.4s ease-in-out, visibility 0.4s ease-in-out",
                      "& a": {
                        color: "#fff",
                        display: "inline-block",
                        fontSize: "16px",
                        padding: "6px 18px",
                        transition: ".3s",
                        width: "100%",
                        borderBottom: "1px solid hsla(0,0%,100%,.4)",
                        "&:hover": {
                          background: "#FA4A6F",
                          borderBottom: "1px solid hsla(0,0%,100%,.4)",
                        },
                      },
                    },
                  },
                }}
                className={`${submenu ? "submenu" : ""}`}
              >
                {submenu ? (
                  <Box
                    className="submenu-title"
                    onMouseEnter={() => handleSubmenuHover(index)}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        transition: ".3s",
                        alignItems: "center",
                        py: { md: "40px", xs: "12px" },
                        mx: "15px",
                        color: "#23273A",
                        fontSize: "16px",
                        "&:hover": {
                          color: "#FA4A6F",
                          "& svg": {
                            color: "#FA4A6F",
                          },
                        },
                      }}
                    >
                      {title}
                      <KeyboardArrowDownIcon />
                    </Typography>
                    {openSubmenu === index && (
                      <Box className="submenu-container">
                        {submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.path || "#"}
                            passHref
                            className="submenu-link"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </Box>
                    )}
                  </Box>
                ) : (
                  <Link href={path || "#"} passHref className="nav-link">
                    {title}
                  </Link>
                )}
              </Box>
            ))}
            {/* buttons */}
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Link
                href="/auth/login"
                className="primary-btn"
                style={{
                  color: "#23273A",
                  padding: "9px 16px",
                  background: "transparent",
                }}
              >
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="primary-btn register-btn"
                style={{
                  padding: "9px 16px",
                  color: "#23273A",
                  background: "transparent",
                }}
              >
                Register
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Link
              href="/auth/login"
              className="primary-btn"
              style={{
                color: "#23273A !important",
                padding: "9px 16px",
                background: "transparent",
              }}
            >
              Sign In
            </Link>
            <Link
              href="/auth/register"
              className="primary-btn register-btn"
              style={{
                padding: "9px 16px",
                marginLeft: "16px",
              }}
            >
              Register
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
