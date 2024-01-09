import { Box } from "@mui/material";
import Navbar from "./Navbar";
export interface HeaderProps {
  handleDrawerToggle: () => void;
  sidebarOpen: boolean; // Add this line
}
const Header = ({ handleDrawerToggle, sidebarOpen }: HeaderProps) => {

  return (
    <Box className="header-area">
      <Navbar
        handleDrawerToggle={handleDrawerToggle}
        sidebarOpen={sidebarOpen} />
      {/* <DemoNavbar /> */}
    </Box>
  );
};

export default Header;
