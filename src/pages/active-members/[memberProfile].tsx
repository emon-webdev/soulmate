import RootLayout from "@/layouts/RootLayout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FlagIcon from "@mui/icons-material/Flag";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import SocialMedia from "@/components/SocialMedia";
import { Button, Container, Divider, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import React, { ReactElement } from "react";
import profile_pic from "../../assets/images/user/profile_1.png";
import profileBanner from "../../assets/images/user/profile_banner.png";
import puzzel from "../../assets/images/user/puzzel.png";
import PartnerPreference from "./PartnerPreference";
import PhotoGallery from "./PhotoGallery";
import ProfileDetails from "./ProfileDetails";
const MemberProfile = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <SocialMedia />
      <Container maxWidth="xl">
        {/* banner_top_info */}
        <Box className="banner_top_info">
          <Box
            sx={{
              "& img": {
                width: "100%",
                height: { md: "260px", xs: "175px" },
              },
            }}
          >
            <Image src={profileBanner} alt="" />
          </Box>
          {/* main info */}
          <Box
            className="profile_main_info"
            sx={{
              bgcolor: "#E9E9E9",
              border: "1px solid #E9E9E9",
              borderRadius: { sm: "0px 0px 20px 20px", xs: "0px 0px 10px 10px" },
              padding: { lg: "35px 60px 50px 32px", xs: "15px" },
              mt: "-6px",
            }}
          >
            <Grid container spacing={{ xs: 2, md: 3 }}>
              <Grid item xs={12} sm={3}>
                <Box
                  sx={{
                    mt: { xs: "-72px", sm: "-65px", md: "-160px" },
                    textAlign: "center",
                    width: "100%",
                    display: { xs: "flex", sm: "block" },
                    justifyContent: "space-between"
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        "& img": {
                          width: "100%",
                          height: "auto",
                          borderRadius: { md: "40px", xs: "20px" },
                          border: "8px solid #fff",
                        },
                      }}
                    >
                      <Image src={profile_pic} alt="" />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        py: "12px",
                        "& p": {
                          color: "#656875",
                          ml: "8px",
                        },
                        "& span": {
                          color: "#23273A",
                        },
                      }}
                    >
                      <Image src={puzzel} alt="" />
                      <Typography
                        sx={{
                          fontFamily: "BROmegaRegular",
                          color: "#656875",
                          fontSize: { md: "16px", xs: "12px" },
                          "& span": {
                            fontFamily: "BROmegaMedium",
                            color: "#23273A",
                          },
                        }}
                      >
                        Profile Match :{" "}
                        <Typography component="span">80%</Typography>
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { md: "row", xs: "column" },
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "12px",
                      mt: { md: "55px", xs: "20px" },
                      "& button": {
                        color: "#23273A",
                        background: "#EFEFEF",
                        borderColor: "#EFEFEF",
                        borderRadius: "3px",
                        fontSize: "12px",
                        lineHeight: "12px",
                        textTransform: "capitalize",
                        fontFamily: "BROmegaRegular",
                        p: "5px 10px",
                        "&:hover": {
                          border: "1px solid #fff",
                          background: "#fff",
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
                </Box>
              </Grid>
              <Grid item xs={12} sm={9}>
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      pb: { sm: "22px", xs: "16px" },
                    }}
                  >
                    <Box>
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
                      <Typography
                        sx={{
                          fontFamily: "BROmegaSemiBold",
                          fontSize: { md: "30px", xs: "20px", sm: "24px" },
                          p: "15px 0 6px",
                          "& svg": {
                            color: "#14D032",
                            fontSize: ["16px", "14px"],
                          },
                        }}
                      >
                        Jane Cooper <FiberManualRecordIcon />{" "}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          "& p": {
                            fontFamily: "BROmegaRegular",
                            color: "#656875",
                            fontSize: { sm: "16px", xs: "14px" }
                          },
                          "& > svg": {
                            color: "#FA4A6F",
                            fontSize: "26px",
                          },
                        }}
                      >
                        <FlagIcon />
                        <Typography>New York, United State</Typography>
                        <Typography
                          sx={{
                            "& svg": {
                              color: "#000",
                              fontSize: "12px",
                              mr: "6px",
                            },
                            "& span": {
                              color: "#FA4A6F",
                            },
                          }}
                        >
                          <FiberManualRecordIcon />
                          Member ID:{" "}
                          <Typography component="span">34456</Typography>{" "}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: { sm: "flex" },
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <Box
                        sx={{
                          width: "60px",
                          height: "63px",
                          background: "#fff",
                          borderRadius: "8px",
                          border: "0.5px solid #E9E9E9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          gap: "4px",
                          mb: "8px",
                          transition: ".3s",
                          cursor: "pointer",
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
                          p: "8px 10px",
                          background: "#fff",
                          borderRadius: "8px",
                          border: "0.5px solid #E9E9E9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          gap: "4px",
                          mb: "8px",
                          transition: ".3s",
                          cursor: "pointer",
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
                    </Box>
                  </Box>
                  <Divider />
                  <Box
                    sx={{
                      pt: { sm: "22px", xs: "16px" },
                    }}
                  >
                    <Grid container item spacing={3} mb={2}>
                      <React.Fragment>
                        <Grid item xs={3}>
                          <Typography
                            sx={{
                              color: "rgba(0, 0, 0, 0.7)",
                              fontSize: "16px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            First Language:
                          </Typography>
                          <Typography
                            sx={{
                              color: "#23273A",
                              fontSize: "20px",
                              fontFamily: "BROmegaMedium",
                            }}
                          >
                            English
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography
                            sx={{
                              color: "rgba(0, 0, 0, 0.7)",
                              fontSize: "16px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Marital Status:
                          </Typography>
                          <Typography
                            sx={{
                              color: "#23273A",
                              fontSize: "20px",
                              fontFamily: "BROmegaMedium",
                            }}
                          >
                            Never Married
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography
                            sx={{
                              color: "rgba(0, 0, 0, 0.7)",
                              fontSize: "16px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Age:
                          </Typography>
                          <Typography
                            sx={{
                              color: "#23273A",
                              fontSize: "20px",
                              fontFamily: "BROmegaMedium",
                            }}
                          >
                            30 Years
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography
                            sx={{
                              color: "rgba(0, 0, 0, 0.7)",
                              fontSize: "16px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Height:
                          </Typography>
                          <Typography
                            sx={{
                              color: "#23273A",
                              fontSize: "20px",
                              fontFamily: "BROmegaMedium",
                            }}
                          >
                            5`6`
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography
                            sx={{
                              color: "rgba(0, 0, 0, 0.7)",
                              fontSize: "16px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Religion:
                          </Typography>
                          <Typography
                            sx={{
                              color: "#23273A",
                              fontSize: "20px",
                              fontFamily: "BROmegaMedium",
                            }}
                          >
                            Islam
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <Typography
                            sx={{
                              color: "rgba(0, 0, 0, 0.7)",
                              fontSize: "16px",
                              fontFamily: "BROmegaRegular",
                            }}
                          >
                            Caste:
                          </Typography>
                          <Typography
                            sx={{
                              color: "#23273A",
                              fontSize: "20px",
                              fontFamily: "BROmegaMedium",
                            }}
                          >
                            Sunni
                          </Typography>
                        </Grid>
                      </React.Fragment>
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* Detailed Profile */}
        <Box
          sx={{
            pt: "80px",
            pb: "120px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              typography: "body1",
              "& .css-13xfq8m-MuiTabPanel-root": {
                padding: "0px",
              },
            }}
          >
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  mb: "40px",
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  sx={{
                    "& button": {
                      fontSize: "20px",
                      color: "#646775",
                      fontFamily: "BROmegaMedium",
                      textTransform: "capitalize",
                    },
                    "& .css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected":
                    {
                      color: "#23273A",
                    },
                    "& .css-1aquho2-MuiTabs-indicator": {
                      backgroundColor: "#FA4A6F",
                    },
                    "& .css-heg063-MuiTabs-flexContainer": {
                      flexWrap: "wrap",
                    },
                  }}
                >
                  <Tab label="Detailed Profile" value="1" />
                  <Tab label="Partner Preference" value="2" />
                  <Tab label="Photo Gallery" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <ProfileDetails />
              </TabPanel>
              <TabPanel value="2">
                <PartnerPreference />
              </TabPanel>
              <TabPanel value="3">
                <PhotoGallery />
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MemberProfile;
MemberProfile.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
