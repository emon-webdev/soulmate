import SocialMedia from "@/components/SocialMedia";
import RootLayout from "@/layouts/RootLayout";

import { Box } from "@mui/material";
import { ReactElement } from "react";
import Membership from "../Home/Membership";
import Testimonial from "../Home/Testimonial";

const Pricing = () => {
  return (
    <Box className="pricing-page">
      <SocialMedia />
      <Membership />
      <Testimonial />
    </Box>
  );
};

export default Pricing;
Pricing.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
