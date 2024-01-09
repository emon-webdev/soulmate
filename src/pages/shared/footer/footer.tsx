import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Person3Icon from "@mui/icons-material/Person3";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, Grid, Tooltip, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import footerImg from "../../../assets/images/logo/footer_logo.png";

const Footer = () => {
  return (
    <Box
      className="footer-area"
      sx={{
        background: "#23273A",
        mt: "24px",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid
            sx={{
              marginTop: "35px",
              marginBottom: { md: "30px" },
              display: "flex",
            }}
            item
            xs={12}
            md={6}
          >
            <Box
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            >
              <Image
                src={footerImg}
                alt="realmate_logo"
                width={58}
                height={60}
              />
            </Box>
            <Link href="/">
              <Typography
                variant="h6"
                noWrap
                // component="span" // Use "span" instead of "a" here
                sx={{
                  ml: { md: 2, xs: 0 },
                  fontWeight: 900,
                  color: "#fff",
                  fontSize: { md: "31px", xs: "38px" },
                  lineHeight: { md: "28px", xs: "44px" },
                  fontFamily: "'BROmegaRegular', sans-serif",
                  "& br": {
                  }
                }}
              >
                SOUL <br /> MATE
              </Typography>
            </Link>
          </Grid>
          <Grid
            sx={{
              marginTop: "35px",
              marginBottom: "30px",
            }}
            item
            xs={6}
            md={3}
          >
            <Typography>
              <Link
                href="/"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  padding: "6px 0",
                  marginBottom: "4px",
                  display: "block",
                }}
              >
                Home
              </Link>
            </Typography>
            <Typography>
              <Link
                href="/"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  padding: "6px 0",
                  marginBottom: "4px",
                  display: "block",
                }}
              >
                Active Members
              </Link>
            </Typography>
            <Typography>
              <Link
                href="/"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  padding: "6px 0",
                  marginBottom: "4px",
                  display: "block",
                }}
              >
                Pricing
              </Link>
            </Typography>
            <Typography>
              <Link
                href="/"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  padding: "6px 0",
                  marginBottom: "4px",
                  display: "block",
                }}
              >
                Success Stories
              </Link>
            </Typography>
            <Typography>
              <Link
                href="/"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  padding: "6px 0",
                  marginBottom: "4px",
                  display: "block",
                }}
              >
                Contact us
              </Link>
            </Typography>
          </Grid>
          <Grid
            sx={{
              marginTop: "35px",
              marginBottom: "30px",
            }}
            item
            xs={6}
            md={3}
          >
            <Typography>
              <Link
                href="/"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  padding: "6px 0",
                  marginBottom: "4px",
                  display: "block",
                }}
              >
                Home
              </Link>
            </Typography>
            <Typography>
              <Link
                href="/"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  padding: "6px 0",
                  marginBottom: "4px",
                  display: "block",
                }}
              >
                Active Members
              </Link>
            </Typography>
            <Typography>
              <Link
                href="/"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  padding: "6px 0",
                  marginBottom: "4px",
                  display: "block",
                }}
              >
                Pricing
              </Link>
            </Typography>
            <Typography>
              <Link
                href="/"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  padding: "6px 0",
                  marginBottom: "4px",
                  display: "block",
                }}
              >
                Success Stories
              </Link>
            </Typography>
            <Typography>
              <Link
                href="/"
                style={{
                  color: "#fff",
                  fontSize: "16px",
                  padding: "6px 0",
                  marginBottom: "4px",
                  display: "block",
                }}
              >
                Contact us
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{}}>
        <Box
          sx={{
            py: "28px",
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            borderTop: "1px solid #EEEEEE",
          }}
        >
          <Box sx={{
            display: "flex",
            gap: { md: "30px", xs: "12px" },
            flexWrap: "wrap",
            "& svg": {
              fontSize: { xs: "16px", md: "24px" }
            }
          }}>
            <Tooltip title="Portfolio">
              <Link
                href="https://emon-36659.web.app/"
                target="_blank"
                style={{
                  color: "#fff",
                }}
              >
                <Person3Icon />
              </Link>
            </Tooltip>
            <Tooltip title="Github Profile">
              <Link
                href="https://github.com/emon-webdev"
                target="_blank"
                style={{
                  color: "#fff",
                }}
              >
                <GitHubIcon />
              </Link>
            </Tooltip>
            <Tooltip title="LinkedIn Profile">
              <Link
                href="https://www.linkedin.com/in/emon-webdev/"
                target="_blank"
                style={{
                  color: "#fff",
                }}
              >
                <LinkedInIcon />
              </Link>
            </Tooltip>
            <Tooltip title="Facebook Profile">
              <Link
                href="https://www.facebook.com/emon.webdev"
                target="_blank"
                style={{
                  color: "#fff",
                }}
              >
                <FacebookIcon />
              </Link>
            </Tooltip>
            <Tooltip title="Twitter Profile">
              <Link
                href="https://twitter.com/emon_webdev"
                target="_blank"
                style={{
                  color: "#fff",
                }}
              >
                <TwitterIcon />
              </Link>
            </Tooltip>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#F1F1F2",
                fontSize: { md: "14px", xs: "12px" },
              }}
            >
              © 2022 Real Mate. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
