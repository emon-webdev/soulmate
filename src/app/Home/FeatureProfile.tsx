"use client";
import SectionTitle from "@/components/SectionTitle";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import Image from "next/image";
import { ClassAttributes, HTMLAttributes, JSX } from "react";
import Slider from "react-slick";
import feature_Img_1 from "../../assets/images/feature_image/feature_img_1.png";
import feature_Img_2 from "../../assets/images/feature_image/feature_img_2.png";
import feature_Img_3 from "../../assets/images/feature_image/feature_img_3.png";
import feature_Img_4 from "../../assets/images/feature_image/feature_img_4.png";
import feature_Img_5 from "../../assets/images/feature_image/feature_img_5.png";
const FeatureProfile = () => {
  const NextArrow = (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLDivElement> &
      HTMLAttributes<HTMLDivElement>
  ) => (
    <div {...props}>
      <ArrowForwardIosIcon />
    </div>
  );

  const PrevArrow = (
    props: JSX.IntrinsicAttributes &
      ClassAttributes<HTMLDivElement> &
      HTMLAttributes<HTMLDivElement>
  ) => (
    <div {...props}>
      <ArrowBackIosNewIcon />
    </div>
  );
  const featureSliderActive = {
    // dots: true,
    arrows: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 0,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <Box
      className="features-area"
      sx={{
        background: "#FBFAFE",
        overflow: "hidden",
        p: { md: "80px 0", xs: "80px 0 120px" },
      }}
    >
      <Box
        sx={{
          width: ["100%", "calc(100% - 18%)", "calc(100% - 18%)"],
          m: "0 auto",
        }}
      >
        <Container maxWidth="xl">
          <SectionTitle
            title="Featured profiles"
            subtitle="Aenean at ligula massa. Donec ipsum elit, placenta sed duierrut dapibus semper turpin Fusce nec premium nuns."
          />
        </Container>
        <Box
          sx={{
            marginTop: "70px",
          }}
        >
          <Box sx={{}}>
            <Slider {...featureSliderActive}>
              <Box>
                <Card
                  className="featured-card"
                  variant="outlined"
                  sx={{
                    position: "relative",
                    padding: "0",
                    borderRadius: "20px",
                    border: "0px solid #FFF;",
                    width: "100%",
                    maxWidth: { md: "265px", xs: "285px" },
                    height: { xs: "450px", md: "420px", sm: "406px" },
                    background: "transparent",
                    margin: "0 auto",
                    transition: ".2s",
                    transitionDelay: "0.1s",
                    boxShadow: "0px 1px 1px 2px rgba(0, 0, 0, 0.05)",
                    "&:hover": {
                      background: "#fff",
                      boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.05)",

                      // background: "transparent",
                    },
                  }}
                >
                  <Image
                    src={feature_Img_1}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt={""}
                  />
                  <CardContent
                    sx={{
                      padding: { lg: "20px", md: "15px", xs: "12px" },
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#FA4A6F",
                        fontSize: { md: "18px", xs: "16px" },
                        mb: "6px",
                      }}
                    >
                      Yosemite National Park
                    </Typography>
                    <Typography>
                      2464 Royal Ln. Mesa, New Jersey 45463
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box>
                <Card
                  className="featured-card"
                  variant="outlined"
                  sx={{
                    position: "relative",
                    padding: "0",
                    borderRadius: "20px",
                    border: "0px solid #FFF;",
                    width: "100%",
                    maxWidth: { md: "265px", xs: "285px" },
                    height: { xs: "450px", md: "420px", sm: "406px" },
                    background: "transparent",
                    margin: "0 auto",
                    transition: ".2s",
                    transitionDelay: "0.1s",
                    boxShadow: "0px 1px 1px 2px rgba(0, 0, 0, 0.05)",
                    "&:hover": {
                      background: "#fff",
                      boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.05)",

                      // background: "transparent",
                    },
                  }}
                >
                  <Image
                    src={feature_Img_2}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt={""}
                  />
                  <CardContent
                    sx={{
                      padding: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#FA4A6F",
                        fontSize: "18px",
                        mb: "6px",
                      }}
                    >
                      Yosemite National Park
                    </Typography>
                    <Typography>
                      2464 Royal Ln. Mesa, New Jersey 45463
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box>
                <Card
                  className="featured-card"
                  variant="outlined"
                  sx={{
                    position: "relative",
                    padding: "0",
                    borderRadius: "20px",
                    border: "0px solid #FFF;",
                    width: "100%",
                    maxWidth: { md: "265px", xs: "285px" },
                    height: { xs: "450px", md: "420px", sm: "406px" },
                    background: "transparent",
                    margin: "0 auto",
                    transition: ".2s",
                    transitionDelay: "0.1s",
                    boxShadow: "0px 1px 1px 2px rgba(0, 0, 0, 0.05)",
                    "&:hover": {
                      background: "#fff",
                      boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.05)",

                      // background: "transparent",
                    },
                  }}
                >
                  <Image
                    src={feature_Img_3}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt={""}
                  />
                  <CardContent
                    sx={{
                      padding: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#FA4A6F",
                        fontSize: "18px",
                        mb: "6px",
                      }}
                    >
                      Yosemite National Park
                    </Typography>
                    <Typography>
                      2464 Royal Ln. Mesa, New Jersey 45463
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box>
                <Card
                  className="featured-card"
                  variant="outlined"
                  sx={{
                    position: "relative",
                    padding: "0",
                    borderRadius: "20px",
                    border: "0px solid #FFF;",
                    width: "100%",
                    maxWidth: { md: "265px", xs: "285px" },
                    height: { xs: "450px", md: "420px", sm: "406px" },
                    background: "transparent",
                    margin: "0 auto",
                    transition: ".2s",
                    transitionDelay: "0.1s",
                    boxShadow: "0px 1px 1px 2px rgba(0, 0, 0, 0.05)",
                    "&:hover": {
                      background: "#fff",
                      boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.05)",

                      // background: "transparent",
                    },
                  }}
                >
                  <Image
                    src={feature_Img_4}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt={""}
                  />
                  <CardContent
                    sx={{
                      padding: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#FA4A6F",
                        fontSize: "18px",
                        mb: "6px",
                      }}
                    >
                      Yosemite National Park
                    </Typography>
                    <Typography>
                      2464 Royal Ln. Mesa, New Jersey 45463
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box>
                <Card
                  className="featured-card"
                  variant="outlined"
                  sx={{
                    position: "relative",
                    padding: "0",
                    borderRadius: "20px",
                    border: "0px solid #FFF;",
                    width: "100%",
                    maxWidth: { md: "265px", xs: "285px" },
                    height: { xs: "450px", md: "420px", sm: "406px" },
                    background: "transparent",
                    margin: "0 auto",
                    transition: ".2s",
                    transitionDelay: "0.1s",
                    boxShadow: "0px 1px 1px 2px rgba(0, 0, 0, 0.05)",
                    "&:hover": {
                      background: "#fff",
                      boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.05)",

                      // background: "transparent",
                    },
                  }}
                >
                  <Image
                    src={feature_Img_5}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt={""}
                  />
                  <CardContent
                    sx={{
                      padding: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#FA4A6F",
                        fontSize: "18px",
                        mb: "6px",
                      }}
                    >
                      Yosemite National Park
                    </Typography>
                    <Typography>
                      2464 Royal Ln. Mesa, New Jersey 45463
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box>
                <Card
                  className="featured-card"
                  variant="outlined"
                  sx={{
                    position: "relative",
                    padding: "0",
                    borderRadius: "20px",
                    border: "0px solid #FFF;",
                    width: "100%",
                    maxWidth: { md: "265px", xs: "285px" },
                    height: { xs: "450px", md: "420px", sm: "406px" },
                    background: "transparent",
                    margin: "0 auto",
                    transition: ".2s",
                    transitionDelay: "0.1s",
                    boxShadow: "0px 1px 1px 2px rgba(0, 0, 0, 0.05)",
                    "&:hover": {
                      background: "#fff",
                      boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.05)",

                      // background: "transparent",
                    },
                  }}
                >
                  <Image
                    src={feature_Img_2}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt={""}
                  />
                  <CardContent
                    sx={{
                      padding: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#FA4A6F",
                        fontSize: "18px",
                        mb: "6px",
                      }}
                    >
                      Yosemite National Park
                    </Typography>
                    <Typography>
                      2464 Royal Ln. Mesa, New Jersey 45463
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box>
                <Card
                  className="featured-card"
                  variant="outlined"
                  sx={{
                    position: "relative",
                    padding: "0",
                    borderRadius: "20px",
                    border: "0px solid #FFF;",
                    width: "100%",
                    maxWidth: { md: "265px", xs: "285px" },
                    height: { xs: "450px", md: "420px", sm: "406px" },
                    background: "transparent",
                    margin: "0 auto",
                    transition: ".2s",
                    transitionDelay: "0.1s",
                    boxShadow: "0px 1px 1px 2px rgba(0, 0, 0, 0.05)",
                    "&:hover": {
                      background: "#fff",
                      boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.05)",

                      // background: "transparent",
                    },
                  }}
                >
                  <Image
                    src={feature_Img_1}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt={""}
                  />
                  <CardContent
                    sx={{
                      padding: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#FA4A6F",
                        fontSize: "18px",
                        mb: "6px",
                      }}
                    >
                      Yosemite National Park
                    </Typography>
                    <Typography>
                      2464 Royal Ln. Mesa, New Jersey 45463
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Slider>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureProfile;
