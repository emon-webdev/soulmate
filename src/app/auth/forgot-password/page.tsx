import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  Container,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import reset from "../../../assets/images/auth/reset.png";
const ForgotPassword = () => {
  return (
    <Box className="login-area" sx={{ mb: "120px" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            p: { xs: "80px 0px 70px", md: "120px 0px 80px" },
            maxWidth: "580px",
            mx: "auto",
            textAlign: "center",
            "& img": {
              mb: "24px",
            },
          }}
        >
          <Image src={reset} alt="forget-img" />

          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              fontFamily: "BROmegaSemiBold",
              fontSize: "52px",
              mb: "20px",
            }}
          >
            Reset your Password
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontFamily: "BROmegaRegular",
              fontSize: "18px",
            }}
          >
            Please enter the email address you’d like your password reset
            information sent to
          </Typography>
        </Box>
        <Box
          sx={{
            maxWidth: "600px",
            mx: "auto",
            background: "#F8F5FF",
            borderRadius: "20px",
            p: "70px 60px",
          }}
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
                padding: "14px 16px",
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
              <InputLabel htmlFor="inputFirstName">Email Address</InputLabel>
              <TextField
                fullWidth
                id="outlined-basic"
                variant="outlined"
                placeholder="kenzi.lawson@example.com"
                sx={{ marginTop: "6px" }}
              />
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
                Send Password reset Link
              </Button>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#23273A",
                  "& a": {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "BROmegaMedium",
                    fontSize: "14px",
                  },
                }}
              >
                <Link href="/">
                  <ArrowBackIcon />
                  <Typography
                    component="span"
                    sx={{
                      ml: "12px",
                    }}
                  >
                    Back to Home page
                  </Typography>
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ForgotPassword;
