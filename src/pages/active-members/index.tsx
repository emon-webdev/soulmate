import SocialMedia from "@/components/SocialMedia";
import RootLayout from "@/layouts/RootLayout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CachedIcon from "@mui/icons-material/Cached";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
import singleImg from "../../assets/images/singleImg.png";
const ActiveMembers = () => {
  const dummyData = [
    { id: 1, title: "Card 1", content: "Content for Card 1" },
    { id: 2, title: "Card 2", content: "Content for Card 2" },
    { id: 3, title: "Card 3", content: "Content for Card 3" },
    { id: 4, title: "Card 4", content: "Content for Card 4" },
    { id: 5, title: "Card 5", content: "Content for Card 5" },
    { id: 6, title: "Card 6", content: "Content for Card 6" },
    { id: 7, title: "Card 7", content: "Content for Card 7" },
    { id: 8, title: "Card 8", content: "Content for Card 8" },
  ];

  return (
    <Box
      sx={{
        pb: "120px",
      }}
    >
      <SocialMedia />
      <Container maxWidth="xl">
        <Box>
          <Box
            sx={{
              p: { md: "80px 0 60px", xs: "70px 0 50px" },
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: { md: "40px", xs: "34px" },
                lineHeight: { md: "48px", xs: "38px" },
                fontFamily: "BROmegaSemiBold",
              }}
            >
              Active Members
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                textAlign: "end",
              }}
            >
              Show Result:{" "}
              <Typography
                component="span"
                sx={{
                  ml: "24px",
                  fontFamily: "BROmegaSemiBold",
                  fontSize: "20px",
                }}
              >
                01-20
              </Typography>
            </Typography>
          </Box>
          <Box>
            <Grid className="active-members" container spacing={2}>
              {dummyData.map((card) => (
                <Grid key={card.id} item xs={12} md={6}>
                  <Box
                    sx={{
                      maxWidth: { md: "100%", lg: 630 },
                      width: "100%",
                      maxHeight: { md: 390, lg: 400, xs: 526, sm: 350 },
                      height: { md: 390, lg: 400, xs: 526, sm: 350 },
                      borderRadius: "20px",
                      border: "1px solid #E9E9E9",
                      background: "#FFFDF9",
                      p: { md: "20px", xs: "14px" },
                    }}
                  >
                    <Grid
                      container
                      spacing={2}
                      sx={{
                        pb: { lg: "20px", md: "20px", xs: "16px" },
                      }}
                    >
                      <Grid
                        item
                        sx={{
                          "& img": {
                            borderRadius: "20px",
                            width: { md: "135px", xs: "125px" },
                            height: { md: "155px", xs: "145px" },
                          },
                        }}
                      >
                        <Image
                          src={singleImg}
                          alt="Cameron Williamson profile picture"
                          width={155}
                          height={175}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={9}
                        sm
                        // md={12}
                        container
                      >
                        <Grid
                          item
                          xs
                          container
                          direction="column"
                          justifyContent="center"
                          // alignItems="center"
                          spacing={1}
                        >
                          <Grid item>
                            <Typography
                              sx={{
                                fontSize: "12px",
                                fontFamily: "BROmegaRegular",
                                color: "#fff",
                                background: "#FF8A35",
                                p: "4px 8px",
                                textAlign: "center",
                                borderRadius: "4px",
                                maxWidth: "94px",
                                textTransform: "uppercase",
                              }}
                            >
                              Premium
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              sx={{
                                fontSize: "20px",
                                color: "#020203",
                                fontFamily: "BROmegaMedium",
                              }}
                            >
                              Jane Cooper
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Member ID:{" "}
                              <Typography
                                component="span"
                                sx={{
                                  color: "#FA4A6F",
                                }}
                              >
                                34456
                              </Typography>
                            </Typography>
                          </Grid>
                          <Grid item>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                "& button": {
                                  width: { lg: "136px" },
                                  color: "#23273A",
                                  background: "#EFEFEF",
                                  borderColor: "#EFEFEF",
                                  borderRadius: "4px",
                                  fontSize: "12px",
                                  lineHeight: "12px",
                                  textTransform: "capitalize",
                                  "&:hover": {
                                    border: "1px solid #F8596D",
                                  },
                                },
                              }}
                            >
                              <Link href="/active-members/demo">
                                <Button
                                  variant="outlined"
                                  fullWidth
                                  startIcon={<AccountCircleIcon />}
                                >
                                  View Profile
                                </Button>
                              </Link>
                              <Link href="/active-members/demo">
                                <Button
                                  variant="outlined"
                                  fullWidth
                                  startIcon={<FormatListBulletedIcon />}
                                >
                                  Mark Shortlist
                                </Button>
                              </Link>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={3} sm>
                        <Box
                          sx={{
                            width: "60px",
                            height: "63px",
                            background: "#fff",
                            borderRadius: "6px",
                            border: "0.5px solid #E9E9E9",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: "4px",
                            mb: "8px",
                            transition: ".3s",
                            cursor: "pointer",
                            ml: "auto",
                            "& p": {
                              fontFamily: "BROmegaRegular",
                              fontSize: "12px",
                              color: "rgba(0, 0, 0, 0.6)",
                            },
                            "&:hover": {
                              background: "#FA4A6F",
                              "& p": {
                                color: "#fff",
                              },
                              "& svg": {
                                color: "#fff",
                              },
                            },
                          }}
                        >
                          <FavoriteBorderIcon />
                          <Typography>Interest</Typography>
                        </Box>
                        <Box
                          sx={{
                            width: "60px",
                            height: "63px",
                            background: "#fff",
                            borderRadius: "6px",
                            border: "0.5px solid #E9E9E9",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: "4px",
                            mb: "8px",
                            transition: ".3s",
                            cursor: "pointer",
                            ml: "auto",
                            "& p": {
                              fontFamily: "BROmegaRegular",
                              fontSize: "12px",
                              color: "rgba(0, 0, 0, 0.6)",
                            },
                            "&:hover": {
                              background: "#FA4A6F",
                              "& p": {
                                color: "#fff",
                              },
                              "& svg": {
                                color: "#fff",
                              },
                            },
                          }}
                        >
                          <DoNotDisturbAltIcon />
                          <Typography>Report</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                    <Divider
                      sx={{
                        mb: { lg: "20px", md: "20px", xs: "16px" },
                      }}
                    />
                    <Grid container spacing={1}>
                      <Grid container item spacing={3} mb={2}>
                        <React.Fragment>
                          <Grid item xs={4}>
                            <Typography
                              sx={{
                                color: "rgba(0, 0, 0, 0.7)",
                                fontSize: { md: "16px", xs: "14px" },
                              }}
                            >
                              Age:
                            </Typography>
                            <Typography
                              sx={{
                                color: "#23273A",
                                fontSize: { md: "20px", xs: "16px" },
                                fontFamily: "BROmegaMedium",
                              }}
                            >
                              30 Years
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography
                              sx={{
                                color: "rgba(0, 0, 0, 0.7)",
                                fontSize: { md: "16px", xs: "14px" },
                              }}
                            >
                              Height:
                            </Typography>
                            <Typography
                              sx={{
                                color: "#23273A",
                                fontSize: { md: "20px", xs: "16px" },
                                fontFamily: "BROmegaMedium",
                              }}
                            >
                              5’ 6’’
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography
                              sx={{
                                color: "rgba(0, 0, 0, 0.7)",
                                fontSize: { md: "16px", xs: "14px" },
                              }}
                            >
                              Religion:
                            </Typography>
                            <Typography
                              sx={{
                                color: "#23273A",
                                fontSize: { md: "20px", xs: "16px" },
                                fontFamily: "BROmegaMedium",
                              }}
                            >
                              Islam
                            </Typography>
                          </Grid>
                        </React.Fragment>
                      </Grid>

                      <Grid container item spacing={3}>
                        <React.Fragment>
                          <Grid item xs={4}>
                            <Typography
                              sx={{
                                color: "rgba(0, 0, 0, 0.7)",
                                fontSize: { md: "16px", xs: "14px" },
                              }}
                            >
                              Caste:
                            </Typography>
                            <Typography
                              sx={{
                                color: "#23273A",
                                fontSize: { md: "20px", xs: "16px" },
                              }}
                            >
                              Sunni
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography
                              sx={{
                                color: "rgba(0, 0, 0, 0.7)",
                                fontSize: { md: "16px", xs: "14px" },
                              }}
                            >
                              First Language:
                            </Typography>
                            <Typography
                              sx={{
                                color: "#23273A",
                                fontSize: { md: "20px", xs: "16px" },
                              }}
                            >
                              English
                            </Typography>
                          </Grid>
                          <Grid item xs={4}>
                            <Typography
                              sx={{
                                color: "rgba(0, 0, 0, 0.7)",
                                fontSize: { md: "16px", xs: "14px" },
                              }}
                            >
                              Marital Status:
                            </Typography>
                            <Typography
                              sx={{
                                color: "#23273A",
                                fontSize: { md: "20px", xs: "16px" },
                              }}
                            >
                              Never Married
                            </Typography>
                          </Grid>
                        </React.Fragment>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              ))}
              <Box
                sx={{
                  pt: "60px",
                  m: "0 auto",
                  "& button": {
                    color: "#23273A",
                    fontFamily: "BROmegaSemiBold",
                    fontSize: "20px",
                    p: "6px 25px",
                    "&:hover": {
                      background: "#FA4A6F",
                      color: "#fff",
                      "& svg": {
                        color: "#fff",
                      },
                    },
                  },
                  "& svg": {
                    color: "#23273A",
                    fontFamily: "BROmegaSemiBold",
                    fontSize: "26px",
                  },
                }}
              >
                <Button startIcon={<CachedIcon />}>Show More</Button>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ActiveMembers;
ActiveMembers.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
