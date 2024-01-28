import DashboardLayout from "@/layouts/DashboardLayout";
import CheckIcon from "@mui/icons-material/Check";
import CollectionsIcon from "@mui/icons-material/Collections";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { ReactElement } from "react";
import dimond from "../../../assets/images/logo/dimond.png";
import match_profile from "../../../assets/images/similar_profile.png";

const Dashboard = () => {
  return (
    <Box>
      {/* <SocialMedia /> */}
      <Box
        sx={{
          mb: "40px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                maxWidth: { md: "295px", xs: "100%" },
                maxHeight: "300px",
                width: "100%",
                height: "100%",
                padding: "40px 60px",
                textAlign: "center",
                borderRadius: "4px",
                background: "#F5F7FE",
                transition: ".3s",
                transitionDuration: ".3s",
                "& svg": {
                  fontSize: "52px",
                  color: "#FA4A6F",
                },
                "& h2": {
                  fontSize: "32px",
                  fontFamily: "BROmegaSemiBold",
                  lineHeight: "44px",
                  color: "#FA4A6F",
                },
                "& p": {
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontFamily: "BROmegaRegular",
                  color: "#484C5F",
                },
                "&:hover": {
                  background: "#FA4A6F",
                  "& h2": {
                    color: "#fff",
                  },
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
              <Typography variant="h2">3400</Typography>
              <Typography>Remaining Interest</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                maxWidth: { md: "295px", xs: "100%" },
                maxHeight: "300px",
                width: "100%",
                height: "100%",
                padding: "40px",
                textAlign: "center",
                borderRadius: "4px",
                background: "#F5F7FE",
                transition: ".3s",
                transitionDuration: ".3s",
                "& svg": {
                  fontSize: "52px",
                  color: "#FA4A6F",
                },
                "& h2": {
                  fontSize: "32px",
                  fontFamily: "BROmegaSemiBold",
                  lineHeight: "44px",
                  color: "#FA4A6F",
                },
                "& p": {
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontFamily: "BROmegaRegular",
                  color: "#484C5F",
                },
                "&:hover": {
                  background: "#FA4A6F",
                  "& h2": {
                    color: "#fff",
                  },
                  "& p": {
                    color: "#fff",
                  },
                  "& svg": {
                    color: "#fff",
                  },
                },
              }}
            >
              <LocalPhoneIcon />
              <Typography variant="h2">3400</Typography>
              <Typography>Remaining Contact View</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                maxWidth: { md: "295px", xs: "100%" },
                maxHeight: "300px",
                width: "100%",
                height: "100%",
                padding: "40px",
                textAlign: "center",
                borderRadius: "4px",
                background: "#F5F7FE",
                transition: ".3s",
                transitionDuration: ".3s",
                "& svg": {
                  fontSize: "52px",
                  color: "#FA4A6F",
                },
                "& h2": {
                  fontSize: "32px",
                  fontFamily: "BROmegaSemiBold",
                  lineHeight: "44px",
                  color: "#FA4A6F",
                },
                "& p": {
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontFamily: "BROmegaRegular",
                  color: "#484C5F",
                },
                "&:hover": {
                  background: "#FA4A6F",
                  "& h2": {
                    color: "#fff",
                  },
                  "& p": {
                    color: "#fff",
                  },
                  "& svg": {
                    color: "#fff",
                  },
                },
              }}
            >
              <CollectionsIcon />
              <Typography variant="h2">3400</Typography>
              <Typography>Remaining Gallery Image Upload</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="current-package">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                maxWidth: "460px",
                maxHeight: "auto",
                width: "100%",
                height: "auto",
                padding: "20px 32px 32px",
                // textAlign: "center",
                border: "1px solid #E9E9E9",
                borderRadius: "4px",
                background: "#fff",
                transition: ".3s",
                transitionDuration: ".3s",
                "& h3": {
                  fontSize: "20px",
                  color: "#020203",
                  pb: "14px",
                  fontFamily: "BROmegaSemiBold",
                  borderBottom: "1px solid #D6D6D6",
                },
                "& h2": {
                  fontSize: "32px",
                  fontFamily: "BROmegaSemiBold",
                  lineHeight: "44px",
                  color: "#FA4A6F",
                },
                "& p": {
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontFamily: "BROmegaRegular",
                  color: "#484C5F",
                },
              }}
            >
              <Typography variant="h3">Current package</Typography>
              <Box>
                <Box
                  sx={{
                    textAlign: "center",
                    py: "40px",
                    "& img": {},
                    "& h2": {
                      color: "#020203",
                      fontFamily: "BROmegaMedium",
                    },
                  }}
                >
                  <Image width={110} src={dimond} alt="professional package" />
                  <Typography variant="h2">Professional Package</Typography>
                </Box>

                <Box
                  sx={{
                    mb: "20px",
                  }}
                >
                  <List disablePadding>
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{
                          px: "0",
                          "&:hover": {
                            background: "transparent",
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: "30px",
                            "& svg": {
                              fontSize: "16px",
                              color: "#0EB7BE",
                            },
                          }}
                        >
                          <CheckIcon />
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            color: "#23273A",
                            m: "0",
                            fontFamily: "BROmegaRegular",
                          }}
                          primary="1000 Express Interests"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{
                          px: "0",
                          "&:hover": {
                            background: "transparent",
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: "30px",
                            "& svg": {
                              fontSize: "16px",
                              color: "#0EB7BE",
                            },
                          }}
                        >
                          <CheckIcon />
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            color: "#23273A",
                            m: "0",
                            fontFamily: "BROmegaRegular",
                          }}
                          primary="1000 Gallery Photo Upload"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{
                          px: "0",
                          "&:hover": {
                            background: "transparent",
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: "30px",
                            "& svg": {
                              fontSize: "16px",
                              color: "#0EB7BE",
                            },
                          }}
                        >
                          <CheckIcon />
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            color: "#23273A",
                            m: "0",
                            fontFamily: "BROmegaRegular",
                          }}
                          primary="1000 Contact Info View"
                        />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{
                          px: "0",
                          "&:hover": {
                            background: "transparent",
                          },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: "30px",
                            "& svg": {
                              fontSize: "16px",
                              color: "#0EB7BE",
                            },
                          }}
                        >
                          <CheckIcon />
                        </ListItemIcon>
                        <ListItemText
                          sx={{
                            color: "#23273A",
                            m: "0",
                            fontFamily: "BROmegaRegular",
                          }}
                          primary="Show Auto Profile Match"
                        />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Box>
              </Box>
              <Box
                sx={{
                  pt: "22px",
                  borderTop: "1px solid #E9E9E9",
                  "& p": {
                    color: "#020203",
                    fontSize: "22px",
                    fontFamily: "BROmegaMedium",
                    mb: "15px",
                  },
                  "& button": {
                    borderRadius: "5px",
                    background: "#0EB7BE",
                    color: "#fff",
                    textTransform: "capitalize",
                    fontFamily: "BROmegaMedium",
                    fontSize: "15px",
                    p: "9px 15px",
                    "&:hover": {
                      background: "#FA4A6F",
                    },
                  },
                }}
              >
                <Typography>Package expiry date: 2025-08-14</Typography>
                <Button>Upgrade Package</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                maxWidth: "460px",
                maxHeight: "auto",
                width: "100%",
                height: "auto",
                padding: "20px 32px 32px",
                // textAlign: "center",
                border: "1px solid #E9E9E9",
                borderRadius: "4px",
                background: "#fff",
                transition: ".3s",
                transitionDuration: ".3s",
                "& h3": {
                  fontSize: "20px",
                  color: "#020203",
                  pb: "14px",
                  fontFamily: "BROmegaSemiBold",
                  borderBottom: "1px solid #D6D6D6",
                },
                "& h2": {
                  fontSize: "32px",
                  fontFamily: "BROmegaSemiBold",
                  lineHeight: "44px",
                  color: "#FA4A6F",
                },
                "& p": {
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontFamily: "BROmegaRegular",
                  color: "#484C5F",
                },
              }}
            >
              <Typography variant="h3">Matched profile</Typography>
              <Box>
                <Box
                  sx={{
                    textAlign: "center",
                    py: "40px",
                    "& img": {},
                    "& h2": {
                      color: "#020203",
                      fontSize: "18px",
                      fontFamily: "BROmegaSemiBold",
                    },
                    "& p": {
                      color: "#23273A",
                      fontFamily: "BROmegaRegular",
                    },
                  }}
                >
                  <Image
                    width={110}
                    src={match_profile}
                    alt="professional package"
                  />
                  <Typography variant="h2">Leslie Alexander</Typography>
                  <Typography>
                    4517 Washington Ave. Manchester, Kentucky 39495
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
