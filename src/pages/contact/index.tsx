import SocialMedia from "@/components/SocialMedia";
import RootLayout from "@/layouts/RootLayout";
import AddLinkIcon from "@mui/icons-material/AddLink";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import email from "../../assets/images/logo/message.png";
import phone from "../../assets/images/logo/phone.png";
import whatsApp from "../../assets/images/logo/whats.png";

const Contact = () => {
  return (
    <Box
      className="contact-area"
      sx={{
        p: { xs: "80px 0px 70px", md: "120px 0px 100px" },
      }}
    >
      <SocialMedia />
      <Container maxWidth="xl">
        <Box
          sx={{
            pb: { xs: "80px", md: "100px" },
            maxWidth: "590px",
            mx: "auto",
            textAlign: "center",
            "& img": {
              mb: "24px",
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontFamily: "BROmegaSemiBold",
              fontSize: "52px",
              mb: "20px",
            }}
          >
            How we can help you
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "BROmegaRegular",
              fontSize: "18px",
            }}
          >
            Fill out the form and a member from our team will get back to you
            with 24 hours, of here more way to get in touch
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item sm={4} sx={{}}>
            <Box>
              <Box
                sx={{
                  mb: { md: "55px", xs: "25px" },
                }}
              >
                <Image src={whatsApp} alt="whats'app" />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "BROmegaSemiBold",
                    py: "12px",
                  }}
                >
                  Chat us on Whatsup:
                </Typography>
                <Typography>Mon-Fri from 8:00 am to 5:00pm</Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "BROmegaSemiBold",
                    mt: "12px",
                    "& a": {
                      color: "#23273A",
                    },
                  }}
                >
                  <a href="tel:+01919371381">+88-01919371381</a>
                </Typography>
              </Box>
              <Box
                sx={{
                  mb: { md: "55px", xs: "25px" },
                }}
              >
                <Image src={phone} alt="whats'app" />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "BROmegaSemiBold",
                    py: "12px",
                  }}
                >
                  Call us:
                </Typography>
                <Typography>Mon-Fri from 8:00 am to 5:00pm</Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "BROmegaSemiBold",
                    mt: "12px",
                    "& a": {
                      color: "#23273A",
                    },
                  }}
                >
                  <a href="tel:+01919371381">+88-01919371381</a>
                </Typography>
              </Box>
              <Box
                sx={{
                  mb: { md: "55px", xs: "25px" },
                }}
              >
                <Image src={email} alt="whats'app" />
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "BROmegaSemiBold",
                    py: "12px",
                  }}
                >
                  Email us:
                </Typography>
                <Typography>Mon-Fri from 8:00 am to 5:00pm</Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "BROmegaSemiBold",
                    mt: "12px",
                    "& a": {
                      color: "#23273A",
                      wordWrap: "break-word",
                    },
                  }}
                >
                  <a href="mailto:emon.hossain.web@gmail.com">
                    emon.hossain.web@gmail.com
                  </a>
                </Typography>
              </Box>
              <Box
                sx={{
                  mb: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontFamily: "BROmegaSemiBold",
                    py: "12px",
                  }}
                >
                  Follow on Social Media:
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "30px",
                    "& a": {
                      color: "#484A57",
                    },
                  }}
                >
                  <Link href="https://emon-36659.web.app/">
                    <AddLinkIcon />
                  </Link>
                  <Link href="https://github.com/emon-webdev">
                    <GitHubIcon />
                  </Link>
                  <Link href="https://www.linkedin.com/in/emon-webdev/">
                    <LinkedInIcon />
                  </Link>
                  <Link href="https://www.facebook.com/emon.webdev">
                    <FacebookIcon />
                  </Link>
                  <Link href="https://www.instagram.com/emon.always/">
                    <InstagramIcon />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={8}>
            <Box
              sx={{
                maxWidth: "760px",
                width: "100%",
                ml: "auto",
                background: "#EEFEFF",
                p: {
                  md: "85px 65px 90px",
                  lg: "85px 90px 90px",
                  xs: "60px 30px 65px",
                },
                borderRadius: "30px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "30px", xs: "24px" },
                  color: "#020203",
                  textAlign: "center",
                  fontFamily: "BROmegaMedium",
                  mb: { md: "60px", xs: "35px" },
                }}
              >
                Always we did love to here from you
              </Typography>
              <Box
                component="form"
                sx={
                  {
                    // position: "relative",
                    // zIndex: "1",
                    // maxWidth: "760px",
                    // ml: "auto",
                    // fontFamily: "BROmegaRegular",
                  }
                }
                noValidate
                autoComplete="on"
              >
                <Grid
                  container
                  spacing="20px"
                  sx={{
                    "& label": {
                      fontSize: "14px",
                      color: "#7B7D89",
                      fontFamily: "BROmegaRegular",
                    },
                    "& input": {
                      fontSize: "14px",
                      color: "#23273A",
                      padding: "8px 14px",
                      fontFamily: "BROmegaRegular",
                      background: "#fff",
                    },
                    "& p": {
                      fontSize: "12px",
                      mt: "8px",
                      ml: "0",
                      fontFamily: "BROmegaRegular",
                    },
                    "& textarea": {
                      width: "100%",
                      height: "192px !important",
                      border: "1px solid #ACACAC",
                      borderRadius: "4px",
                      fontSize: "1rem",
                      lineHeight: "1.4375em",
                      letterSpacing: "0.00938em",
                      padding: "8px 14px",
                      mt: "8px",
                    },
                  }}
                >
                  <Grid item xs={12}>
                    <InputLabel htmlFor="inputFirstName">Your Name</InputLabel>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      placeholder="Your Name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel htmlFor="inputFirstName">
                      Email Address*
                    </InputLabel>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      helperText="Please, enter the email address where you wish to receive our answer."
                      placeholder="kenzi.lawson@example.com"
                      sx={{ marginTop: "6px" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel htmlFor="inputFirstName">Subject*</InputLabel>
                    <TextField
                      fullWidth
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      placeholder="Write your subject here"
                      sx={{ marginTop: "6px" }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel htmlFor="inputFirstName">
                      Description **
                    </InputLabel>
                    <TextareaAutosize placeholder="Write your description here" />
                  </Grid>
                  {/* button */}
                  <Grid
                    item
                    xs={12}
                    sx={{
                      "& .primary-btn": {
                        background: "#EC3384",
                      },
                    }}
                  >
                    <Button
                      className="primary-btn"
                      fullWidth
                      sx={{
                        p: "14.60px 12px",
                        color: "#fff",
                        letterSpacing: "0.18px",
                        fontSize: "18px",
                        my: "12px",
                      }}
                    >
                      Send Now
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
