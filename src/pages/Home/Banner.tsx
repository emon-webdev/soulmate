import UserForm from "@/components/UserForm";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import hero_img from "../../assets/images/hero_img.png";
const Banner = () => {
  return (
    <Box
      className="banner-area"
      sx={{
        position: "relative",
        mt: "17px",
        background:
          "radial-gradient(38.69% 38.69% at 65.34% 54.59%, #F8F0FF 0%, #FFF6FA 100%)",
      }}
    >
      {/* <Box className="banner-img">
        <Image src={hero_img} alt="" />
      </Box> */}
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          sx={{
            height: { md: "1080px", xs: "1035px" },
          }}
        >
          <Grid item xs={12} md={6}>
            <Box
              className="banner-img"
              sx={{
                // background: "rgba(255, 255, 255, 0)",
                // background: `url(${hero_img})`,
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "top",
                // backgroundSize: "cover",
                // width: "44%",
                // height: "1080px",
                position: "absolute",
                bottom: 0,
                left: 0,
                // zIndex: 1,
                // background: "#333",
                "& img": {
                  width: "100%"
                }
              }}
            >
              <Image src={hero_img} alt="" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              maxWidth: { md: "590px", xs: "100%" },
              width: "100%",
              ml: "auto",
            }}
          >
            <Box
              className="banner-content"
              sx={{
                position: "relative",
                zIndex: "1",
                maxWidth: { sm: "590px", xs: "100%" },
                width: "100%",
                ml: { sm: "auto", xs: "0" },
                mb: { md: "0", xs: "70px" },
                fontFamily: "BROmegaRegular",
              }}
            >
              <Typography
                sx={{
                  mb: "26px",
                  fontFamily: "BROmegaSemiBold",
                  fontSize: { md: "65px", xs: "50px" },
                  lineHeight: { md: "70px", xs: "55px" },
                  color: "#23273A",
                }}
              >
                Find your <br /> mate with us
              </Typography>
              <Box
                className="from-content"
                sx={{
                  padding: { md: "30px 55px 36px", xs: "30px 26px 36px" },
                  borderRadius: "4px",
                  background: "#fff",
                  maxWidth: "590px",
                  boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.05)",
                  ml: { sm: "auto", xs: "0" },
                }}
              >
                <Typography
                  sx={{
                    mb: "35px",
                    fontFamily: "BROmegaSemiMedium",
                    fontSize: "20px",
                    color: "#23273A",
                    textAlign: "center",
                  }}
                >
                  Create your profile for your perfect match!
                </Typography>
                <UserForm />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
