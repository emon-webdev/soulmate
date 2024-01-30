"use client";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import start from "../../assets/images/testimonial/star.png";
import user from "../../assets/images/testimonial/user_1.png";
const Testimonial = () => {
  const testimonialSlider = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
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
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      className="testimonial-area"
      sx={{
        padding: { md: "100px 0 125px", xs: "80px 0 150px" },
        background: "#FBFAFE",
      }}
    >
      <Container maxWidth="xl">
        <Typography
          sx={{
            mb: "80px",
            textAlign: "center",
            fontFamily: "BROmegaSemiBold",
            px: { md: "0", xs: "45px" },
            fontSize: { md: "52px", xs: "38px" },
            lineHeight: { md: "58px", xs: "44px" },
          }}
        >
          What our members say
        </Typography>
        <Box
          className="testimonial-slider"
          sx={{
            mb: { sm: "50px", md: "80px" },
          }}
        >
          <Slider {...testimonialSlider}>
            <Box
              sx={{
                px: { md: "10px", lg: "16px" },
              }}
            >
              <Image
                src={start}
                width={128}
                height={18}
                alt=""
                style={{
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <Typography
                sx={{
                  py: "25px",
                  fontSize: "19px",
                  color: "#23273A",
                  textAlign: "center",
                  fontFamily: "BROmegaMedium",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. In at sed sit tempor.
                Sed venenatis sodales Maurice bibendum blanket condiments
                curses.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={user} width={40} height={40} alt="" />
                <Typography sx={{ ml: "12px" }}>Brooklyn Simmons</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                px: { md: "10px", lg: "16px" },
              }}
            >
              <Image
                src={start}
                width={128}
                height={18}
                alt=""
                style={{
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <Typography
                sx={{
                  py: "25px",
                  fontSize: "19px",
                  color: "#23273A",
                  textAlign: "center",
                  fontFamily: "BROmegaMedium",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. In at sed sit tempor.
                Sed venenatis sodales Maurice bibendum blanket condiments
                curses.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={user} width={40} height={40} alt="" />
                <Typography sx={{ ml: "12px", fontWeight: "BROmegaMedium" }}>
                  Brooklyn Simmons
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                px: { md: "10px", lg: "16px" },
              }}
            >
              <Image
                src={start}
                width={128}
                height={18}
                alt=""
                style={{
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <Typography
                sx={{
                  py: "25px",
                  fontSize: "19px",
                  color: "#23273A",
                  textAlign: "center",
                  fontFamily: "BROmegaMedium",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. In at sed sit tempor.
                Sed venenatis sodales Maurice bibendum blanket condiments
                curses.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={user} width={40} height={40} alt="" />
                <Typography sx={{ ml: "12px" }}>Brooklyn Simmons</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                px: { md: "10px", lg: "16px" },
              }}
            >
              <Image
                src={start}
                width={128}
                height={18}
                alt=""
                style={{
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <Typography
                sx={{
                  py: "25px",
                  fontSize: "19px",
                  color: "#23273A",
                  textAlign: "center",
                  fontFamily: "BROmegaMedium",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. In at sed sit tempor.
                Sed venenatis sodales Maurice bibendum blanket condiments
                curses.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={user} width={40} height={40} alt="" />
                <Typography sx={{ ml: "12px" }}>Brooklyn Simmons</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                px: { md: "10px", lg: "16px" },
              }}
            >
              <Image
                src={start}
                width={128}
                height={18}
                alt=""
                style={{
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <Typography
                sx={{
                  py: "25px",
                  fontSize: "19px",
                  color: "#23273A",
                  textAlign: "center",
                  fontFamily: "BROmegaMedium",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. In at sed sit tempor.
                Sed venenatis sodales Maurice bibendum blanket condiments
                curses.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={user} width={40} height={40} alt="" />
                <Typography sx={{ ml: "12px" }}>Brooklyn Simmons</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                px: { md: "10px", lg: "16px" },
              }}
            >
              <Image
                src={start}
                width={128}
                height={18}
                alt=""
                style={{
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <Typography
                sx={{
                  py: "25px",
                  fontSize: "19px",
                  color: "#23273A",
                  textAlign: "center",
                  fontFamily: "BROmegaMedium",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. In at sed sit tempor.
                Sed venenatis sodales Maurice bibendum blanket condiments
                curses.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={user} width={40} height={40} alt="" />
                <Typography sx={{ ml: "12px" }}>Brooklyn Simmons</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                px: { md: "10px", lg: "16px" },
              }}
            >
              <Image
                src={start}
                width={128}
                height={18}
                alt=""
                style={{
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <Typography
                sx={{
                  py: "25px",
                  fontSize: "19px",
                  color: "#23273A",
                  textAlign: "center",
                  fontFamily: "BROmegaMedium",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. In at sed sit tempor.
                Sed venenatis sodales Maurice bibendum blanket condiments
                curses.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={user} width={40} height={40} alt="" />
                <Typography sx={{ ml: "12px" }}>Brooklyn Simmons</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                px: { md: "10px", lg: "16px" },
              }}
            >
              <Image
                src={start}
                width={128}
                height={18}
                alt=""
                style={{
                  display: "block",
                  margin: "0 auto",
                }}
              />
              <Typography
                sx={{
                  py: "25px",
                  fontSize: "19px",
                  color: "#23273A",
                  textAlign: "center",
                  fontFamily: "BROmegaMedium",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. In at sed sit tempor.
                Sed venenatis sodales Maurice bibendum blanket condiments
                curses.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={user} width={40} height={40} alt="" />
                <Typography sx={{ ml: "12px" }}>Brooklyn Simmons</Typography>
              </Box>
            </Box>
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;
