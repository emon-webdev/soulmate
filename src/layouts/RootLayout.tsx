import Footer from "@/pages/shared/footer/footer";
import Header from "@/pages/shared/header/header";
import { Box } from "@mui/material";
import React from "react";
export interface props {
  children?: React.ReactNode;
}
interface HeaderProps {
  handleDrawerToggle: () => void;
  sidebarOpen: boolean;
}
const RootLayout = ({ children }: props) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div>
      <Header
        handleDrawerToggle={handleDrawerToggle}
        sidebarOpen={sidebarOpen}
      />
      <Box>{children}</Box>
      <Footer />
    </div>
  );
};

export default RootLayout;
