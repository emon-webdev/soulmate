import { Box } from "@mui/material";
import Membership from "../Home/Membership";
import Testimonial from "../Home/Testimonial";

const Pricing = () => {
  return (
    <Box className="pricing-page">
      {/* <SocialMedia /> */}
      <Membership />
      <Testimonial />
    </Box>
  );
};

export default Pricing;
