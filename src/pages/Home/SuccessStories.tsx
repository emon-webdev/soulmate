import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import success_Img_1 from "../../assets/images/success_stories/success_stories_1.png";
import success_Img_2 from "../../assets/images/success_stories/success_stories_2.png";
import success_Img_3 from "../../assets/images/success_stories/success_stories_3.png";
import success_Img_4 from "../../assets/images/success_stories/success_stories_4.png";
import success_Img_5 from "../../assets/images/success_stories/success_stories_5.png";
import success_Img_6 from "../../assets/images/success_stories/success_stories_6.png";
// Import Swiper styles
import Slider from "react-slick";
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
const SuccessStories = () => {
  const successStoriesSlider = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    centerPadding: "20px",
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    cssEase: "linear",
    rtl: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };

  const successStoriesSlider2 = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 7000,
    cssEase: "linear",
    rtl: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        },
      },
    ],
  };


  return (
    <Box
      className="success-stores"
      sx={{
        margin: "0 auto",
        overflow: "hidden",
        height: { md: "900px", xs: "1230px" },
        width: ["100%", "calc(100% - 8%)", "calc(100% - 12%)"],
        borderRadius: ["0px", "20px", "40px"],
        background: "linear-gradient(180deg, #23273A 46.35%, #FA4A6F 119.01%)",
        "& .slick-list": {
          margin: { md: "0 0", xs: "0 10px" }
        },
        "& .slick-slide": {
          padding: { md: "0 0", xs: "0 10px" },
        }
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          sx={{
            height: "900px",
            px: { sm: "25px" }
          }}
        >
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                // maxWidth: "570px",
                pt: { md: "250px", xs: "100px" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "40px", xs: "34px" },
                  lineHeight: { md: "48px", xs: "42px" },
                  fontFamily: "BROmegaSemiBold",
                  mb: "20px",
                  color: "#fff",
                  wordBreak: "break-word"
                }}
              >
                We have thousands of success stories
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#fff",
                  wordBreak: "break-word"
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Convallis id elit
                egoists aurice amet eu lactose Lucius intercom. Proin
                pellentesque vitae farer temper ultrices nulled
              </Typography>
              <Button
                className="primary-btn"
                sx={{
                  // width: "100%",
                  p: "14px 21px",
                  mt: "38px",
                  textTransform: "capitalize",
                  "& svg": {
                    ml: "6px",
                  },
                }}
              >
                Get start now
                <KeyboardArrowRightIcon />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box>
              <Box
                className="success-slider"
                sx={{
                  display: "flex",
                  flexDirection: { sm: "row", xs: "column" },
                  gap: "20px",
                  justifyContent: { md: "flex-end", sm: "center" },

                }}
              >
                <Box
                  className="success-slider_1"
                  sx={{
                    flex: "0 0 230px",
                    maxWidth: "300px",
                    mt: "50px",
                    position: "relative",
                    borderRadius: "20px",
                    zIndex: 0,
                    "&:before": {
                      display: { md: "block", xs: "none" },
                      position: "absolute",
                      content: '""',
                      left: "0",
                      bottom: "0",
                      width: "100%",
                      height: "270px",
                      borderRadius: "20px",
                      zIndex: 99,
                      background:
                        "linear-gradient(180deg, rgba(184, 64, 95, 0.29) 15.04%, #B73F5F 70.78%)",
                    },
                  }}
                >
                  <Slider {...successStoriesSlider}>
                    <Box
                      sx={{
                        marginTop: "20px",
                      }}
                    >
                      <Card
                        className="featured-card"
                        variant="outlined"
                        sx={{
                          position: "relative",
                          padding: "0",
                          borderRadius: "20px",
                          border: "0px solid #FFF;",
                          width: ["100%", "230px", "230px"],
                          height: "260px",
                          background: "#FFF",
                          transitionDelay: "0.4s",
                        }}
                      >
                        <Image
                          src={success_Img_1}
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                          alt={""}
                        />
                        <CardContent
                          sx={{
                            p: "10px 20px 15px",
                            pb: "20px !important",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#FA4A6F",
                              fontSize: "12px",
                              mb: "4px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            25 august -2020
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Jenny & Wilson Stories
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                    <Box
                      sx={{
                        marginTop: "20px",
                      }}
                    >
                      <Card
                        className="featured-card"
                        variant="outlined"
                        sx={{
                          position: "relative",
                          padding: "0",
                          borderRadius: "20px",
                          border: "0px solid #FFF;",
                          width: ["100%", "230px", "230px"],
                          height: "260px",
                          background: "#FFF",
                          transitionDelay: "0.4s",
                        }}
                      >
                        <Image
                          src={success_Img_2}
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                          alt={""}
                        />
                        <CardContent
                          sx={{
                            p: "10px 20px 15px",
                            pb: "20px !important",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#FA4A6F",
                              fontSize: "12px",
                              mb: "4px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            25 august -2020
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Jenny & Wilson Stories
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                    <Box
                      sx={{
                        marginTop: "20px",
                      }}
                    >
                      <Card
                        className="featured-card"
                        variant="outlined"
                        sx={{
                          position: "relative",
                          padding: "0",
                          borderRadius: "20px",
                          border: "0px solid #FFF;",
                          width: ["100%", "230px", "230px"],
                          height: "260px",
                          background: "#FFF",
                          transitionDelay: "0.4s",
                        }}
                      >
                        <Image
                          src={success_Img_3}
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                          alt={""}
                        />
                        <CardContent
                          sx={{
                            p: "10px 20px 15px",
                            pb: "20px !important",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#FA4A6F",
                              fontSize: "12px",
                              mb: "4px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            25 august -2020
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Jenny & Wilson Stories
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                    <Box
                      sx={{
                        marginTop: "20px",
                      }}
                    >
                      <Card
                        className="featured-card"
                        variant="outlined"
                        sx={{
                          position: "relative",
                          padding: "0",
                          borderRadius: "20px",
                          border: "0px solid #FFF;",
                          width: ["100%", "230px", "230px"],
                          height: "260px",
                          background: "#FFF",
                          transitionDelay: "0.4s",
                        }}
                      >
                        <Image
                          src={success_Img_4}
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                          alt={""}
                        />
                        <CardContent
                          sx={{
                            p: "10px 20px 15px",
                            pb: "20px !important",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#FA4A6F",
                              fontSize: "12px",
                              mb: "4px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            25 august -2020
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Jenny & Wilson Stories
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                    <Box
                      sx={{
                        marginTop: "20px",
                      }}
                    >
                      <Card
                        className="featured-card"
                        variant="outlined"
                        sx={{
                          position: "relative",
                          padding: "0",
                          borderRadius: "20px",
                          border: "0px solid #FFF;",
                          width: ["100%", "230px", "230px"],
                          height: "260px",
                          background: "#FFF",
                          transitionDelay: "0.4s",
                        }}
                      >
                        <Image
                          src={success_Img_5}
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                          alt={""}
                        />
                        <CardContent
                          sx={{
                            p: "10px 20px 15px",
                            pb: "20px !important",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#FA4A6F",
                              fontSize: "12px",
                              mb: "4px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            25 august -2020
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Jenny & Wilson Stories
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                    <Box
                      sx={{
                        marginTop: "20px",
                      }}
                    >
                      <Card
                        className="featured-card"
                        variant="outlined"
                        sx={{
                          position: "relative",
                          padding: "0",
                          borderRadius: "20px",
                          border: "0px solid #FFF;",
                          width: ["100%", "230px", "230px"],
                          height: "260px",
                          background: "#FFF",
                          transitionDelay: "0.4s",
                        }}
                      >
                        <Image
                          src={success_Img_6}
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                          alt={""}
                        />
                        <CardContent
                          sx={{
                            p: "10px 20px 15px",
                            pb: "20px !important",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#FA4A6F",
                              fontSize: "12px",
                              mb: "4px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            25 august -2020
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Jenny & Wilson Stories
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Slider>
                </Box>

                <Box
                  className="success-slider_2"
                  sx={{
                    flex: "0 0 230px",
                    maxWidth: "300px",
                    position: "relative",
                    borderRadius: "20px",
                    mt: { md: "-8px", xs: "40px" },
                    zIndex: 0,
                    "&:before": {
                      display: { md: "block", xs: "none" },
                      position: "absolute",
                      content: '""',
                      left: "0",
                      top: "0",
                      width: "100%",
                      height: "270px",
                      borderRadius: "20px",
                      zIndex: 99,
                      background:
                        "linear-gradient(180deg, #24273B 3.2%, rgba(183, 63, 95, 0.00) 112.45%)",
                    },
                  }}
                >
                  <Slider {...successStoriesSlider2}>
                    <Box
                      sx={{
                        mb: "20px",
                      }}
                    >
                      <Card
                        className="featured-card"
                        variant="outlined"
                        sx={{
                          position: "relative",
                          padding: "0",
                          borderRadius: "20px",
                          border: "0px solid #FFF;",
                          width: ["100%", "230px", "230px"],
                          height: "260px",
                          background: "#FFF",
                          transitionDelay: "0.4s",
                        }}
                      >
                        <Image
                          src={success_Img_6}
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                          alt={""}
                        />
                        <CardContent
                          sx={{
                            p: "10px 20px 15px",
                            pb: "20px !important",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#FA4A6F",
                              fontSize: "12px",
                              mb: "4px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            25 august -2020
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Jenny & Wilson Stories
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                    <Box
                      sx={{
                        mb: "20px",
                      }}
                    >
                      <Card
                        className="featured-card"
                        variant="outlined"
                        sx={{
                          position: "relative",
                          padding: "0",
                          borderRadius: "20px",
                          border: "0px solid #FFF;",
                          width: ["100%", "230px", "230px"],
                          height: "260px",
                          background: "#FFF",
                          transitionDelay: "0.4s",
                        }}
                      >
                        <Image
                          src={success_Img_5}
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                          alt={""}
                        />
                        <CardContent
                          sx={{
                            p: "10px 20px 15px",
                            pb: "20px !important",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#FA4A6F",
                              fontSize: "12px",
                              mb: "4px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            25 august -2020
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Jenny & Wilson Stories
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                    <Box
                      sx={{
                        mb: "20px",
                      }}
                    >
                      <Card
                        className="featured-card"
                        variant="outlined"
                        sx={{
                          position: "relative",
                          padding: "0",
                          borderRadius: "20px",
                          border: "0px solid #FFF;",
                          width: ["100%", "230px", "230px"],
                          height: "260px",
                          background: "#FFF",
                          transitionDelay: "0.4s",
                        }}
                      >
                        <Image
                          src={success_Img_4}
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                          alt={""}
                        />
                        <CardContent
                          sx={{
                            p: "10px 20px 15px",
                            pb: "20px !important",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#FA4A6F",
                              fontSize: "12px",
                              mb: "4px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            25 august -2020
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Jenny & Wilson Stories
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                    <Box
                      sx={{
                        mb: "20px",
                      }}
                    >
                      <Card
                        className="featured-card"
                        variant="outlined"
                        sx={{
                          position: "relative",
                          padding: "0",
                          borderRadius: "20px",
                          border: "0px solid #FFF;",
                          width: ["100%", "230px", "230px"],
                          height: "260px",
                          background: "#FFF",
                          transitionDelay: "0.4s",
                        }}
                      >
                        <Image
                          src={success_Img_3}
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                          alt={""}
                        />
                        <CardContent
                          sx={{
                            p: "10px 20px 15px",
                            pb: "20px !important",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#FA4A6F",
                              fontSize: "12px",
                              mb: "4px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            25 august -2020
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Jenny & Wilson Stories
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                    <Box
                      sx={{
                        mb: "20px",
                      }}
                    >
                      <Card
                        className="featured-card"
                        variant="outlined"
                        sx={{
                          position: "relative",
                          padding: "0",
                          borderRadius: "20px",
                          border: "0px solid #FFF;",
                          width: ["100%", "230px", "230px"],
                          height: "260px",
                          background: "#FFF",
                          transitionDelay: "0.4s",
                        }}
                      >
                        <Image
                          src={success_Img_2}
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                          alt={""}
                        />
                        <CardContent
                          sx={{
                            p: "10px 20px 15px",
                            pb: "20px !important",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#FA4A6F",
                              fontSize: "12px",
                              mb: "4px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            25 august -2020
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Jenny & Wilson Stories
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                    <Box
                      sx={{
                        mb: "20px",
                      }}
                    >
                      <Card
                        className="featured-card"
                        variant="outlined"
                        sx={{
                          position: "relative",
                          padding: "0",
                          borderRadius: "20px",
                          border: "0px solid #FFF;",
                          width: ["100%", "230px", "230px"],
                          height: "260px",
                          background: "#FFF",
                          transitionDelay: "0.4s",
                        }}
                      >
                        <Image
                          src={success_Img_1}
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                          alt={""}
                        />
                        <CardContent
                          sx={{
                            p: "10px 20px 15px",
                            pb: "20px !important",
                          }}
                        >
                          <Typography
                            sx={{
                              color: "#FA4A6F",
                              fontSize: "12px",
                              mb: "4px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            25 august -2020
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Jenny & Wilson Stories
                          </Typography>
                        </CardContent>
                      </Card>
                    </Box>
                  </Slider>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SuccessStories;
