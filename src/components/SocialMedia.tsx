import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Person3Icon from "@mui/icons-material/Person3";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Tooltip } from "@mui/material";
import Link from "next/link";

const SocialMedia = () => {
  return (
    <Box
      className="social-icons"
      sx={{
        display: { sm: "block", xs: "none" },
      }}
    >
      <Box
        sx={{
          position: "fixed",
          zIndex: "999",
          height: "100%",
          display: "flex",
          transform: "translate(0, -50%)",
          top: "50%",
          width: "auto",
          left: "1%",
          flexDirection: "column",
          justifyContent: "center",
          gap: { md: "16px", xs: "12px" },
          flexWrap: "wrap",
          "& svg": {
            fontSize: { xs: "16px", md: "22px" },
            transition: ".6s",
            color: "#23273A",
          },
          "& a": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { md: "45px", xs: "36px" },
            height: { md: "45px", xs: "36px" },
            borderRadius: "50%",
            background: "#fff",
            textAlign: "center",
            transition: ".6s",
            boxShadow: "0 5px 4px rgba(0,0,0,.5)",
            "&:hover": {
              transform: "translate(20%, 0)",
              background: "#E4405F",
              "& svg": {
                color: "#fff",
              },
            },
          },
        }}
      >
        <Tooltip title="Portfolio">
          <Link
            href="https://emon-36659.web.app/"
            target="_blank"
            style={{
              color: "#000",
            }}
          >
            <Person3Icon />
          </Link>
        </Tooltip>
        <Tooltip title="Resume">
          <Link
            href="https://drive.google.com/file/d/1hQmY5Qy-EIj50NPZd2TtHcUg-O9eXiJu/view?usp=sharing"
            target="_blank"
            style={{
              color: "#000",
            }}
          >
            <LinkIcon />
          </Link>
        </Tooltip>
        <Tooltip title="Mobile">
          <Link
            href="tel:+8801919371381"
            target="_blank"
            style={{
              color: "#000",
            }}
          >
            <CallIcon />
          </Link>
        </Tooltip>
        <Tooltip title="Gmail">
          <Link
            href="mailto:emon.hossain.web@gmail.com"
            target="_blank"
            style={{
              color: "#000",
            }}
          >
            <MailOutlineIcon />
          </Link>
        </Tooltip>
      </Box>
      <Box
        sx={{
          position: "fixed",
          zIndex: "999",
          height: "100%",
          display: "flex",
          transform: "translate(0, -50%)",
          top: "50%",
          width: "auto",
          right: { md: "1%", xs: "1.7%" },
          flexDirection: "column",
          justifyContent: "center",
          gap: { md: "16px", xs: "12px" },
          flexWrap: "wrap",
          "& svg": {
            fontSize: { xs: "16px", md: "24px" },
            transition: ".6s",
            color: "#23273A",
          },
          "& a": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { md: "45px", xs: "36px" },
            height: { md: "45px", xs: "36px" },
            borderRadius: "50%",
            background: "#fff",
            textAlign: "center",
            transition: ".6s",
            boxShadow: "0 5px 4px rgba(0,0,0,.5)",
            "&:hover": {
              transform: "translate(-20%, 0)",
              background: "#E4405F",
              "& svg": {
                color: "#fff",
              },
            },
          },
        }}
      >
        <Tooltip title="LinkedIn">
          <Link
            href="https://www.linkedin.com/in/emon-webdev/"
            target="_blank"
            style={{
              color: "#000",
            }}
          >
            <LinkedInIcon />
          </Link>
        </Tooltip>
        <Tooltip title="Github">
          <Link
            href="https://github.com/emon-webdev"
            target="_blank"
            style={{
              color: "#000",
            }}
          >
            <GitHubIcon />
          </Link>
        </Tooltip>
        <Tooltip title="WhatsApp">
          <Link
            href="tel:+8801919371381"
            target="_blank"
            style={{
              color: "#000",
            }}
          >
            <WhatsAppIcon />
          </Link>
        </Tooltip>
        <Tooltip title="Facebook">
          <Link
            href="https://www.facebook.com/emon.webdev"
            target="_blank"
            style={{
              color: "#000",
            }}
          >
            <FacebookIcon />
          </Link>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default SocialMedia;
