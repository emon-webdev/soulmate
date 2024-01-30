"use client";
import SocialMedia from "@/components/SocialMedia";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import signin_img from "../../../assets/images/auth/signin_img.png";
import SocialMedial from "../SocialMedial";
const Login = () => {
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
            p: { xs: "70px 0px 45px", md: "110px 0px 80px" },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontFamily: "BROmegaSemiBold",
              fontSize: { md: "52px", xs: "40px" },
            }}
          >
            Welcome Back!
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "BROmegaRegular",
              fontSize: { md: "18px", xs: "16px" },
            }}
          >
            World number #1 matrimony site
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
                <Image src={signin_img} alt="login_img" />
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
                <Box
                  component="form"
                  sx={
                    {
                      // padding: { md: "25px 65px 25px", xs: "25px 30px 35px" },
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
                    }}
                  >
                    <Grid item xs={12}>
                      <InputLabel htmlFor="inputFirstName">
                        Email/Phone
                      </InputLabel>
                      <TextField
                        fullWidth
                        id="outlined-basic"
                        size="small"
                        variant="outlined"
                        helperText="*Use Email Address"
                        placeholder="kenzi.lawson@example.com"
                        sx={{ marginTop: "6px" }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sx={{
                        mt: "10px",
                      }}
                    >
                      <InputLabel htmlFor="inputFirstName">
                        Your Password*
                      </InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="outlined-adornment-password"
                        sx={{ marginTop: "6px" }}
                        placeholder="********"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        px="20px"
                      >
                        <Grid item xs={6}>
                          <FormControlLabel
                            sx={{
                              color: "#7B7D89",
                              fontFamily: "BROmegaRegular",
                              "& .css-ahj2mt-MuiTypography-root": {
                                fontSize: "12px",
                              },
                            }}
                            control={
                              <Checkbox
                                defaultChecked
                                size="small"
                                sx={{
                                  py: "0",
                                }}
                              />
                            }
                            label="Remember me"
                          />
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            sx={{
                              color: "#7B7D89",
                              fontSize: "14px",
                              fontFamily: "BROmegaRegular",
                              textAlign: "end",
                              "& a": {
                                color: "#EC3384",
                                textDecoration: "underline",
                              },
                            }}
                          >
                            <Link href="/auth/forgot-password">
                              Forget Password?
                            </Link>
                          </Typography>
                        </Grid>
                      </Grid>
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
                        Login Now
                      </Button>
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "14px",
                          color: "#7B7D89",
                        }}
                      >
                        Or Login with
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
                          Don`t have an account?
                          <Link href="/auth/register">Create Account</Link>
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

export default Login;
