import SocialMedia from "@/components/SocialMedia";
import { Box } from "@mui/material";
import Banner from "./Banner";
import FeatureProfile from "./FeatureProfile";
import HappyStories from "./HappyStories";
import Membership from "./Membership";
import Services from "./Services";
import SuccessStories from "./SuccessStories";
import Testimonial from "./Testimonial";

const HomePage = () => {
  return (
    <Box className="home-page">
      <SocialMedia />
      <Banner />
      <HappyStories />
      <FeatureProfile />
      <Services />
      <SuccessStories />
      <Membership />
      <Testimonial />
    </Box>
  );
};

export default HomePage;
