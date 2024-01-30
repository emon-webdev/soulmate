import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import {
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";

const Package = () => {
  return (
    <Box>
      <Box
        sx={{
          p: { sm: "20px 32px 38px", xs: "15px 12px 25px" },
          borderRadius: "4px",
          border: "1px solid #E9E9E9",
          background: "#fff",
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#020203",
              pb: "20px",
              fontSize: "20px",
              fontFamily: "BROmegaSemiBold",
              borderBottom: "1px solid #D6D6D6",
            }}
          >
            Package History
          </Typography>
        </Box>
        {/* data table */}
        <Box
          sx={{
            pt: "40px",
          }}
        >
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: "none",
            }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Code</TableCell>
                  <TableCell>Package</TableCell>
                  <TableCell align="right">Payment Method</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Payment Status</TableCell>
                  <TableCell align="right">Purchase Date</TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                sx={{
                  background: "#FFFAFA",
                  borderRadius: "4px",
                  border: "1px solid #EDEDED",
                }}
              >
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell>210410-113908</TableCell>
                  <TableCell>Professional Package</TableCell>
                  <TableCell align="right">Stripe</TableCell>
                  <TableCell align="right">300$</TableCell>
                  <TableCell align="right">
                    <Button
                      size="small"
                      sx={{
                        color: "#fff",
                        background: "#14D032",
                        textTransform: "capitalize",
                        "&:hover": {
                          color: "#D96A2B",
                          background: "#FFE4D4",
                        },
                      }}
                    >
                      Paid
                    </Button>
                  </TableCell>
                  <TableCell align="right">2021-04-10</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell>210410-113908</TableCell>
                  <TableCell>Professional Package</TableCell>
                  <TableCell align="right">Stripe</TableCell>
                  <TableCell align="right">300$</TableCell>
                  <TableCell align="right">
                    <Button
                      size="small"
                      sx={{
                        color: "#fff",
                        background: "#14D032",
                        textTransform: "capitalize",
                        "&:hover": {
                          color: "#D96A2B",
                          background: "#FFE4D4",
                        },
                      }}
                    >
                      Paid
                    </Button>
                  </TableCell>
                  <TableCell align="right">2021-04-10</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    1
                  </TableCell>
                  <TableCell>210410-113908</TableCell>
                  <TableCell>Professional Package</TableCell>
                  <TableCell align="right">Stripe</TableCell>
                  <TableCell align="right">300$</TableCell>
                  <TableCell align="right">
                    <Button
                      size="small"
                      sx={{
                        color: "#fff",
                        background: "#14D032",
                        textTransform: "capitalize",
                        "&:hover": {
                          color: "#D96A2B",
                          background: "#FFE4D4",
                        },
                      }}
                    >
                      Paid
                    </Button>
                  </TableCell>
                  <TableCell align="right">2021-04-10</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      {/*  package*/}
      <Box>
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
            <Card
              sx={{
                borderRadius: "30px",
                border: "1px solid #E6E6E6",
                background: "#fff",
                maxWidth: ["100%", "100%", "540px"],
                width: "auto",
                maxHeight: { md: "720px", xs: "725px" },
                height: { md: "720px", xs: "725px" },
                padding: { lg: "50px 60px", xs: "35px 30px" },
                alignSelf: "end",
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
                  Free Membership
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

            <Box>
              <Box
                sx={{
                  maxWidth: ["100%", "100%", "540px"],
                  width: "100%",
                  background: "#532B79",
                  borderTopLeftRadius: "30px",
                  borderTopRightRadius: "30px",
                  textAlign: "center",
                  p: { lg: "24px 20px 40px", xs: "18px 20px 32px" },
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
                  maxHeight: { md: "720px", xs: "725px" },
                  height: { md: "720px", xs: "725px" },
                  padding: { lg: "50px 60px", xs: "35px 30px" },
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
      </Box>
    </Box>
  );
};

export default Package;
