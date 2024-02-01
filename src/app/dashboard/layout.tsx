"use client";
import { Box, Container, Drawer } from "@mui/material";
import React from "react";
import DashboardNav from "./components/DashboardNav";

const DashboardLayout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <Box>
      {/* header navbar */}
      {/* <Header
        handleDrawerToggle={handleDrawerToggle}
        sidebarOpen={sidebarOpen}
      /> */}
      <Box sx={{ pt: "60px", pb: "160px" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              gap: "30px",
            }}
          >
            {/* Sidebar for md, lg, xl devices */}
            <Box
              className="side_menu"
              sx={{
                display: { md: "flex", xs: "none" },
                flexDirection: "column",
                background: "#232635",
                borderRadius: "10px",
                width: "295px",
                flex: "0 0 295px",
                height: "1000px",
              }}
            >
              <DashboardNav />
            </Box>
            {/* Drawer for xs and sm devices */}
            <Drawer
              anchor="left"
              open={sidebarOpen}
              onClose={handleDrawerToggle}
              variant="temporary"
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "295px",
                },
              }}
            >
              <DashboardNav />
            </Drawer>
            {/* drawer content */}
            <Box
              sx={{
                width: "100%",
                overflow: "hidden",
                bgcolor: "#fff",
              }}
            >
              {children}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
