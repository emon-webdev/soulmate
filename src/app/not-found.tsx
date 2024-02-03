import { Box, Container, Typography } from "@mui/material";
import Link from "next/link";
import errorBg from "../assets/images/error/error.png";
const NotFoundPage = () => {
  return (
    <Box
      style={{
        // background: "#ddd",
        background: `url(${errorBg})`,
        backgroundSize: "cover",
        height: "calc(100vh - 480px)",
        minHeight: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h1">
          <Typography component="span">4</Typography>
          <Typography component="span">0</Typography>
          <Typography component="span">4</Typography>
        </Typography>
        <Typography variant="h3">Oops!</Typography>
        <Typography>
          We`re sorry,
          <br /> The page you were looking for doesn`t exist anymore.
        </Typography>
        <Link href="/">Back To Home</Link>
      </Container>
    </Box>
  );
};

export default NotFoundPage;
