import Header from "@/pages/shared/header/header";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";

import DashboardNav from "@/pages/dashboard/components/DashboardNav";
import { Drawer } from "@mui/material";
interface DashboardLayoutProps {
  children: React.ReactNode;
}

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <Box>
      <Header
        handleDrawerToggle={handleDrawerToggle}
        sidebarOpen={sidebarOpen}
      />
      <Box sx={{ pt: "60px", pb: "160px" }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              gap: "30px",
              // bgcolor: "#232635"
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
