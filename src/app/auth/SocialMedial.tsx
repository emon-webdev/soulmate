import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
const SocialMedial = () => {
  return (
    <>
      <Button
        className="primary-btn"
        sx={{
          border: "1px solid #EDEDED",
          color: "#020203 !important"
        }}
        fullWidth
        startIcon={<GoogleIcon />}
      >
        Signin with Google
      </Button>
      <Button
        className="primary-btn"
        sx={{
          border: "1px solid #EDEDED",
          color: "#020203 !important"
        }}
        fullWidth
        startIcon={<TwitterIcon />}
      >
        Signin with Twitter
      </Button>
      <Button
        className="primary-btn"
        sx={{
          border: "1px solid #EDEDED",
          color: "#020203 !important"
        }}
        fullWidth
        startIcon={<FacebookIcon />}
      >
        Sign in with Facebook
      </Button>
    </>
  );
};

export default SocialMedial;
