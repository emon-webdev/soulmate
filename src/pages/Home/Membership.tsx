import SectionTitle from "@/components/SectionTitle";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import {
  Box,
  Button,
  Card,
  CardActions,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const Membership = () => {
  return (
    <Box
      sx={{
        p: { md: "100px 0 110px", xs: "80px 0 90px" },
      }}
    >
      <Container maxWidth="xl">
        <Box
          maxWidth={600}
          sx={{
            margin: "0 auto",
          }}
        >
          <SectionTitle
            title="Membership Plans"
            subtitle="Upgrade your plan as per your customized requirements. With a paid membership, you can seamlessly connect with your prospects and get more responses. Here are some key benefits:"
          />
        </Box>
        <Box
          sx={{
            marginTop: "80px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: { sm: "flex" },
              justifyContent: "center",
              gap: 4,
            }}
          >
            <Box
              sx={{
                alignSelf: "end",
              }}
            >
              <Card
                sx={{
                  borderRadius: "30px",
                  border: "1px solid #FA4A6F",
                  background: "#fff",
                  maxWidth: ["100%", "100%", "540px"],
                  width: "100%",
                  maxHeight: "745px",
                  height: "745px",
                  padding: "55px 65px",
                }}
              >
                <Box>
                  <Typography
                    variant="h2"
                    sx={{ color: "#FA4A6F", fontSize: "50px" }}
                  >
                    0.00{" "}
                    <Typography
                      component="span"
                      sx={{
                        color: "#91939C",
                        fontSize: "16px",
                      }}
                    >
                      / month
                    </Typography>
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "20px",
                      color: "#23273A",
                    }}
                  >
                    Premium Membership
                  </Typography>
                  <Divider
                    sx={{
                      borderColor: "#FA4A6F",
                      mt: "20px",
                      mb: "35px",
                    }}
                  />
                </Box>
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#23273A",
                          m: "0",
                        }}
                        primary="Match, Chat & Mee"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#23273A",
                          m: "0",
                        }}
                        primary="5 Super Likes a week"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#23273A",
                          m: "0",
                        }}
                        primary="Hide Advertisements"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#CDCDCD",
                          m: "0",
                        }}
                        primary="1 Free Boost a month"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#CDCDCD",
                          m: "0",
                        }}
                        primary="New Top Picks every day"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#CDCDCD",
                          m: "0",
                        }}
                        primary="Message before Matching"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#CDCDCD",
                          m: "0",
                        }}
                        primary=" Prioritised Likese"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#CDCDCD",
                          m: "0",
                        }}
                        primary="See the Likes you’ve sent in the last 7 days,"
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Card>
            </Box>
            <Box>
              <Box
                sx={{
                  maxWidth: ["100%", "100%", "540px"],
                  width: "100%",
                  background: "#532B79",
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "30px",
                  textAlign: "center",
                  p: "24px 20px 40px",
                  mb: "-23px",
                  mt: ["35px", "0", "0"],
                  "& p": {
                    color: "#fff",
                    fontSize: "20px",
                  },
                }}
              >
                <Typography>20% Off for yearly</Typography>
              </Box>
              <Card
                sx={{
                  borderRadius: "30px",
                  border: "1px solid #FA4A6F",
                  background: "#fff",
                  maxWidth: ["100%", "100%", "540px"],
                  width: "100%",
                  maxHeight: "745px",
                  height: "745px",
                  padding: "55px 65px",
                }}
              >
                <Box>
                  <Typography
                    variant="h2"
                    sx={{ color: "#FA4A6F", fontSize: "50px" }}
                  >
                    12.00{" "}
                    <Typography
                      component="span"
                      sx={{
                        color: "#91939C",
                        fontSize: "16px",
                      }}
                    >
                      / month
                    </Typography>
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: "20px",
                      color: "#23273A",
                    }}
                  >
                    Premium Membership
                  </Typography>
                  <Divider
                    sx={{
                      borderColor: "#FA4A6F",
                      mt: "20px",
                      mb: "35px",
                    }}
                  />
                </Box>
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#23273A",
                          m: "0",
                        }}
                        primary="Match, Chat & Meet"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#23273A",
                          m: "0",
                        }}
                        primary="5 Super Likes a week"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#23273A",
                          m: "0",
                        }}
                        primary="Hide Advertisements"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#23273A",
                          m: "0",
                        }}
                        primary="1 Free Boost a month"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#23273A",
                          m: "0",
                        }}
                        primary="New Top Picks every day"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#23273A",
                          m: "0",
                        }}
                        primary="Message before Matching"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#23273A",
                          m: "0",
                        }}
                        primary=" Prioritised Likese"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#23273A",
                          m: "0",
                        }}
                        primary="See the Likes you’ve sent in the last 7 days,"
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
                          minWidth: "35px",
                          "& svg": {
                            fontSize: "15px",
                          },
                        }}
                      >
                        <FiberManualRecordIcon />
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          color: "#23273A",
                          m: "0",
                        }}
                        primary="And many more."
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
                <CardActions
                  sx={{
                    mt: "35px",
                  }}
                >
                  <Button
                    className="primary-btn"
                    sx={{
                      width: "100%",
                      p: "15px 12px",
                      "& svg": {
                        ml: "6px",
                      },
                    }}
                  >
                    Subscribe now
                    <KeyboardArrowRightIcon />
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Box>
        </Box>
      </Container >
    </Box >
  );
};

export default Membership;
