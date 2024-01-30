"use client";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import service_1 from "../../assets/images/services/service_1.png";
import service_2 from "../../assets/images/services/service_2.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";

// import './styles.css';

// import required modules
import { EffectCards } from "swiper/modules";
const Services = () => {
  return (
    <Box
      className="service-area"
      style={{
        padding: "100px 0",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          sx={{
            marginBottom: "85px",
            fontSize: { md: "40px", xs: "22px" },
            color: "23273A",
            paddingRight: { md: "25%", xs: "0%" },
          }}
        >
          Lorem dolor amet consectetur adipiscing. Commode acceptor bandit
          torpor meanness egoists mathis. ucibus laces ultrices acned seed.
        </Typography>
        <Box
          sx={{
            display: { md: "flex" },
            alignItems: "center",
            gap: "80px",
            justifyContent: "center",
          }}
        >
          <Box
            className="service-slider"
            sx={{
              maxWidth: "563px",
              overflow: { xs: "hidden", sm: "inherit" },
              mb: { md: "0px", xs: "50px" },
              "& .swiper": {
                width: "100%",
                maxWidth: { md: "350px", xs: "270px", sm: "290px" },
                height: { lg: "495px", md: "460px", xs: "400px", sm: "420px" },
              },
            }}
          >
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <Box
                  sx={{
                    "& img": {
                      // width: "100%",
                      // height: "100%"
                    },
                  }}
                >
                  <Image src={service_1} alt={""} />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    "& img": {
                      // width: "100%",
                      // height: "100%"
                    },
                  }}
                >
                  <Image src={service_2} alt={""} />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    "& img": {
                      // width: "100%",
                      // height: "100%"
                    },
                  }}
                >
                  <Image src={service_1} alt={""} />
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box
                  sx={{
                    "& img": {
                      // width: "100%",
                      // height: "100%"
                    },
                  }}
                >
                  <Image src={service_2} alt={""} />
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: "24px 0",
                borderBottom: "1px solid #E8E8E8",
                "& svg": {
                  color: "#FA4A6F",
                  fontSize: "40px",
                },
              }}
            >
              <VerifiedUserIcon />
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#FA4A6F",
                  ml: "20px",
                  fontWeight: "600",
                }}
              >
                100% Screened Profiles
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: "24px 0",
                borderBottom: "1px solid #E8E8E8",
                "& svg": {
                  color: "#FA4A6F",
                  fontSize: "40px",
                },
              }}
            >
              <VerifiedUserIcon />
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#FA4A6F",
                  ml: "20px",
                  fontWeight: "600",
                }}
              >
                Verification by Personal Visit
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                p: "24px 0",
                "& svg": {
                  color: "#FA4A6F",
                  fontSize: "40px",
                },
              }}
            >
              <VerifiedUserIcon />
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "#FA4A6F",
                  ml: "20px",
                  fontWeight: "600",
                }}
              >
                Strong Privacy
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
