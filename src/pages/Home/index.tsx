import { Box } from "@mui/material";
import Banner from "./Banner";
import FeatureProfile from "./FeatureProfile";
import HappyStories from "./HappyStories";
import Membership from "./Membership";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <Box className="home-page">
      <Banner />
      <HappyStories />
      <FeatureProfile />
      <Services />
      <Membership />
      <Testimonial />
    </Box>
  );
};

export default Home;
