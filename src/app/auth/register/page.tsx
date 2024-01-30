"use client";
import SocialMedia from "@/components/SocialMedia";
import UserForm from "@/components/UserForm";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import register_img from "../../../assets/images/auth/register_img.png";
import SocialMedial from "../SocialMedial";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box className="login-area" sx={{ mb: "120px" }}>
      <SocialMedia />
      <Container maxWidth="xl">
        <Box
          sx={{
            p: { xs: "70px 0px 50px", md: "120px 0px 80px" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontFamily: "BROmegaSemiBold",
              fontSize: { sm: "52px", xs: "35px" },
              lineHeight: { sm: "58px", xs: "44px" },
              mb: "15px",
            }}
          >
            Create your Account
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "BROmegaRegular",
              fontSize: { sm: "18px", xs: "16px" },
              px: { xs: "50px", sm: "0" },
            }}
          >
            Create account and find your mate with us!
          </Typography>
        </Box>
        <Box
          sx={{
            background: "#F8F5FF",
            borderRadius: { md: "30px", xs: "20px" },
            p: "0",
          }}
        >
          <Grid container spacing="0" alignItems="center">
            <Grid
              item
              sm={6}
              sx={{
                display: { sm: "block", xs: "none" },
                width: "100%",
                height: "100%",
                borderRadius: { md: "30px 0px 0px 30px", xs: "20px" },
                // background: "#FFC5B2",
              }}
            >
              <Box
                sx={{
                  borderRadius: {
                    md: "30px 0px 0px 30px",
                    xs: "20px 0px 0px 20px",
                  },
                  "& img": {
                    borderRadius: {
                      md: "30px 0px 0px 30px",
                      xs: "20px 0px 0px 20px",
                    },
                    height: "100% important",
                    width: "100%",
                  },
                }}
              >
                <Image src={register_img} alt="login_img" />
              </Box>
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                className="from-content"
                sx={{
                  borderRadius: "4px",
                  width: "100%",
                  padding: { md: "25px 65px 25px", xs: "40px 25px 35px" },
                  // background: "#fff",
                  // boxShadow: "0px 4px 0px 0px rgba(0, 0, 0, 0.05)",
                  ml: "auto",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "BROmegaSemiBold",
                    fontSize: { md: "30px", xs: "24px" },
                    color: "#23273A",
                    textAlign: "center",
                    mb: "35px",
                  }}
                >
                  We always love to see you
                </Typography>
                <UserForm />
                <Box component="form" sx={{}} noValidate autoComplete="on">
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
                        background: "#fff",
                        fontSize: "14px",
                        color: "#23273A",
                        padding: "8px 14px",
                        fontFamily: "BROmegaRegular",
                      },
                      "& p": {
                        fontSize: "12px",
                        mt: "8px",
                        ml: "0",
                        fontFamily: "BROmegaRegular",
                      },
                      "& .css-116unc6-MuiGrid-root input": {
                        background: "#fff",
                      },
                      "& .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                        {
                          background: "#fff",
                        },
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      sx={{
                        "& .primary-btn": {
                          background: "#EC3384",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "14px",
                          color: "#7B7D89",
                        }}
                      >
                        Or Join with
                      </Typography>
                    </Grid>
                    {/* social media */}
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          "& .primary-btn": {
                            background: "#fff",
                            p: "14.60px 12px",
                            color: "#020203",
                            letterSpacing: "0.18px",
                            fontFamily: "BROmegaMedium",
                            fontSize: "18px",
                            mb: "12px",
                            textTransform: "capitalize",
                            "&:hover": {
                              color: "#fff",
                            },
                          },
                        }}
                      >
                        <SocialMedial />
                      </Box>
                      <Box
                        sx={{
                          textAlign: "center",
                          fontSize: "14px",
                          color: "#7B7D89",
                          "& a": {
                            color: "#EC3384",
                            ml: "8px",
                          },
                        }}
                      >
                        <Typography>
                          I have an account?
                          <Link href="/auth/login">Login</Link>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Register;
