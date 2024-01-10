import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Slider from "react-slick";
import cardLove from "../../assets/images/happy_stories/card_love.png";
import couple_1 from "../../assets/images/happy_stories/couple.png";
const HappyStories = () => {
  const happyStoriesSlider = {
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
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
      sx={{
        py: { xs: "70px", sm: "100px", lg: "120px" },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "16px",
          }}
          // display="grid"
          // gridTemplateColumns="repeat(12, 1fr)"
          // gap={2}
        >
          <Box
            sx={{
              gridColumn: { md: "span 3", xs: "span 12" },
            }}
            // gridColumn="span 3"
          >
            <Typography
              variant="h1"
              sx={{
                mt: { md: "45px", xs: "10px" },
                mb: { md: "40px", xs: "20px" },
                fontSize: "36px",
                fontWeight: 700,
                "& span": {
                  fontSize: "40px",
                  fontWeight: 700,
                },
              }}
            >
              Over{" "}
              <Typography sx={{ color: "#FA4A6F" }} component="span">
                Five
              </Typography>{" "}
              Million Happy stories
            </Typography>
            <Button
              variant="contained"
              sx={{
                display: { md: "block", xs: "none" },
                background: "#FA4A6F",
                p: "9px 16px",
                borderRadius: "5px",
                boxShadow: 0,
                transitionDelay: "0.3s",
                "&:hover": {
                  background: "#EC3384",
                  boxShadow: 0,
                },
              }}
            >
              View All
            </Button>
          </Box>
          <Box
            sx={{
              gridColumn: { md: "span 9", xs: "span 12" },
              mt: { xs: "30px", md: "0px" },
            }}
            // gridColumn="span 9"

            className="stories-slider"
          >
            <Slider {...happyStoriesSlider}>
              <Box>
                <Card
                  className="stories-card"
                  sx={{
                    position: "relative",
                    borderRadius: "20px",
                    // border: "5px solid #FFF;",
                    maxWidth: " 285px",
                    width: "100%",
                    height: "364px",
                    maxHeight: "364px",
                    background: "#FFF",
                    boxShadow:
                      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                    transitionDelay: "0.4s",
                    margin: "0 auto",
                    "&:hover .card-default": {
                      display: "none",
                    },
                    "&:hover .card-hover": {
                      display: "flex",
                    },
                    "& .css-46bh2p-MuiCardContent-root": {
                      padding: "0px !important",
                    },
                  }}
                >
                  <CardActionArea
                    className="card-default"
                    sx={{
                      maxWidth: "285px",
                      width: "100%",
                      height: "364px",
                      maxHeight: "364px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      margin: "0 auto",
                    }}
                  >
                    <Image src={couple_1} width={136} height={136} alt={""} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Jesson & Milla
                      </Typography>
                    </CardContent>
                    <Image
                      src={cardLove}
                      width={66}
                      height={66}
                      style={{
                        position: "absolute",
                        bottom: "8px",
                        right: "8px",
                      }}
                      alt={""}
                    />
                  </CardActionArea>
                  <CardActionArea
                    className="card-hover"
                    sx={{
                      display: "none",
                      maxWidth: 299,
                      width: "100%",
                      height: "379px",
                      maxHeight: 379,
                      flexDirection: "column",
                      alignItems: "center",
                      padding: { md: "28px 20px", xs: "28px 18px" },
                      background: "#F8596D",
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{ color: "#fff" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Fredrec Ahmed & Jasica
                      </Typography>
                      <Typography
                        sx={{ color: "#fff", fontSize: "16px" }}
                        variant="body2"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry`s standard dummy text ever since the 1500s,
                        when an unknown
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
              <Box>
                <Card
                  className="stories-card"
                  sx={{
                    position: "relative",
                    borderRadius: "20px",
                    // border: "5px solid #FFF;",
                    maxWidth: " 285px",
                    width: "100%",
                    height: "364px",
                    maxHeight: "364px",
                    background: "#FFF",
                    boxShadow:
                      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                    transitionDelay: "0.4s",
                    margin: "0 auto",
                    "&:hover .card-default": {
                      display: "none",
                    },
                    "&:hover .card-hover": {
                      display: "flex",
                    },
                    "& .css-46bh2p-MuiCardContent-root": {
                      padding: "0px !important",
                    },
                  }}
                >
                  <CardActionArea
                    className="card-default"
                    sx={{
                      maxWidth: " 285px",
                      width: "100%",
                      height: "364px",
                      maxHeight: "364px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      margin: "0 auto",
                    }}
                  >
                    <Image src={couple_1} width={136} height={136} alt={""} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Jesson & Milla
                      </Typography>
                    </CardContent>
                    <Image
                      src={cardLove}
                      width={66}
                      height={66}
                      style={{
                        position: "absolute",
                        bottom: "8px",
                        right: "8px",
                      }}
                      alt={""}
                    />
                  </CardActionArea>
                  <CardActionArea
                    className="card-hover"
                    sx={{
                      display: "none",
                      maxWidth: 299,
                      width: "100%",
                      height: "379px",
                      maxHeight: 379,
                      flexDirection: "column",
                      alignItems: "center",
                      padding: { md: "28px 20px", xs: "28px 18px" },
                      background: "#F8596D",
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{ color: "#fff" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Fredrec Ahmed & Jasica
                      </Typography>
                      <Typography
                        sx={{ color: "#fff", fontSize: "16px" }}
                        variant="body2"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry`s standard dummy text ever since the 1500s,
                        when an unknown
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
              <Box>
                <Card
                  className="stories-card"
                  sx={{
                    position: "relative",
                    borderRadius: "20px",
                    // border: "5px solid #FFF;",
                    maxWidth: " 285px",
                    width: "100%",
                    height: "364px",
                    maxHeight: "364px",
                    background: "#FFF",
                    boxShadow:
                      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                    transitionDelay: "0.4s",
                    margin: "0 auto",
                    "&:hover .card-default": {
                      display: "none",
                    },
                    "&:hover .card-hover": {
                      display: "flex",
                    },
                    "& .css-46bh2p-MuiCardContent-root": {
                      padding: "0px !important",
                    },
                  }}
                >
                  <CardActionArea
                    className="card-default"
                    sx={{
                      maxWidth: " 285px",
                      width: "100%",
                      height: "364px",
                      maxHeight: "364px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      margin: "0 auto",
                    }}
                  >
                    <Image src={couple_1} width={136} height={136} alt={""} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Jesson & Milla
                      </Typography>
                    </CardContent>
                    <Image
                      src={cardLove}
                      width={66}
                      height={66}
                      style={{
                        position: "absolute",
                        bottom: "8px",
                        right: "8px",
                      }}
                      alt={""}
                    />
                  </CardActionArea>
                  <CardActionArea
                    className="card-hover"
                    sx={{
                      display: "none",
                      maxWidth: 299,
                      width: "100%",
                      height: "379px",
                      maxHeight: 379,
                      flexDirection: "column",
                      alignItems: "center",
                      padding: { md: "28px 20px", xs: "28px 18px" },
                      background: "#F8596D",
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{ color: "#fff" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Fredrec Ahmed & Jasica
                      </Typography>
                      <Typography
                        sx={{ color: "#fff", fontSize: "16px" }}
                        variant="body2"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry`s standard dummy text ever since the 1500s,
                        when an unknown
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
              <Box>
                <Card
                  className="stories-card"
                  sx={{
                    position: "relative",
                    borderRadius: "20px",
                    // border: "5px solid #FFF;",
                    maxWidth: " 285px",
                    width: "100%",
                    height: "364px",
                    maxHeight: "364px",
                    background: "#FFF",
                    boxShadow:
                      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                    transitionDelay: "0.4s",
                    margin: "0 auto",
                    "&:hover .card-default": {
                      display: "none",
                    },
                    "&:hover .card-hover": {
                      display: "flex",
                    },
                    "& .css-46bh2p-MuiCardContent-root": {
                      padding: "0px !important",
                    },
                  }}
                >
                  <CardActionArea
                    className="card-default"
                    sx={{
                      maxWidth: " 285px",
                      width: "100%",
                      height: "364px",
                      maxHeight: "364px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      margin: "0 auto",
                    }}
                  >
                    <Image src={couple_1} width={136} height={136} alt={""} />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Jesson & Milla
                      </Typography>
                    </CardContent>
                    <Image
                      src={cardLove}
                      width={66}
                      height={66}
                      style={{
                        position: "absolute",
                        bottom: "8px",
                        right: "8px",
                      }}
                      alt={""}
                    />
                  </CardActionArea>
                  <CardActionArea
                    className="card-hover"
                    sx={{
                      display: "none",
                      maxWidth: 299,
                      width: "100%",
                      height: "379px",
                      maxHeight: 379,
                      flexDirection: "column",
                      alignItems: "center",
                      padding: { md: "28px 20px", xs: "28px 18px" },
                      background: "#F8596D",
                    }}
                  >
                    <CardContent>
                      <Typography
                        sx={{ color: "#fff" }}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        Fredrec Ahmed & Jasica
                      </Typography>
                      <Typography
                        sx={{ color: "#fff", fontSize: "16px" }}
                        variant="body2"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry`s standard dummy text ever since the 1500s,
                        when an unknown
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Box>
            </Slider>
            <Box
              sx={{
                display: { md: "none", xs: "block" },
                textAlign: "center",
                mt: "68px",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background: "#FA4A6F",
                  p: "9px 16px",
                  borderRadius: "5px",
                  textAlign: "center",
                  boxShadow: 0,
                  transitionDelay: "0.3s",
                  maxWidth: "100px",
                  "&:hover": {
                    background: "#EC3384",
                    boxShadow: 0,
                  },
                }}
              >
                View All
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HappyStories;
