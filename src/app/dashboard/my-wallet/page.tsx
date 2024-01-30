import AddCardIcon from "@mui/icons-material/AddCard";

import { Box, Button, Typography } from "@mui/material";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";

import SocialMedia from "@/components/SocialMedia";
import { Grid } from "@mui/material";

const MyWallet = () => {
  return (
    <Box>
      <SocialMedia />
      {/* card */}
      <Box className="current-package">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                maxWidth: "460px",
                maxHeight: "305px",
                width: "100%",
                height: "305px",
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
              }}
            >
              <Typography variant="h3">Wallet Balance</Typography>
              <Box>
                <Box
                  sx={{
                    textAlign: "center",
                    py: "40px",
                    mt: "25px",
                    "& h1": {
                      fontSize: "40px",
                      color: "#EC3384",
                      fontFamily: "BROmegaBold",
                    },
                    "& h2": {
                      color: "#020203",
                      fontSize: "24px",
                      fontFamily: "BROmegaSemiBold",
                    },
                  }}
                >
                  <Typography variant="h1">$300.00</Typography>
                  <Typography variant="h2">Wallet Blance</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                maxWidth: "460px",
                maxHeight: "305px",
                width: "100%",
                height: "305px",
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
              }}
            >
              <Typography variant="h3">Recharge Wallet</Typography>
              <Box>
                <Button sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      textAlign: "center",
                      py: "40px",
                      "& svg": {
                        fontSize: "100px",
                        color: "#EC3384",
                      },
                      "& h2": {
                        color: "#020203",
                        fontSize: "24px",
                        fontFamily: "BROmegaSemiBold",
                      },
                    }}
                  >
                    <AddCardIcon />
                    <Typography variant="h2">Add Balance</Typography>
                  </Box>
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* wallet history */}
      <Box
        sx={{
          p: { sm: "20px 32px 38px", xs: "15px 12px 25px" },
          borderRadius: "4px",
          border: "1px solid #E9E9E9",
          background: "#fff",
          mt: "40px",
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
            Wallet History
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
                  <TableCell>Date</TableCell>
                  <TableCell>Package</TableCell>
                  <TableCell align="right">Payment Method</TableCell>
                  <TableCell align="right">Amount</TableCell>
                  <TableCell align="right">Approval</TableCell>
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
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default MyWallet;
