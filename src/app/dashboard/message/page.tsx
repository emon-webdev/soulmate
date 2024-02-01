import Image from "next/image";
// import DashboardLayout from '@/layouts/DashboardLayout';
import SocialMedia from "@/components/SocialMedia";
import { Box, Typography } from "@mui/material";

import messageImg from "../../../assets/images/dashboard/message.png";
const Message = () => {
  return (
    <div>
      <Box
        sx={{
          p: { sm: "20px 32px 38px", xs: "15px 12px 25px" },
          borderRadius: "4px",
          border: "1px solid #E9E9E9",
          background: "#fff",
        }}
      >
        <SocialMedia />

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
            It`s Just Image ! <br />
            Design is Cooking
          </Typography>
        </Box>
        <Box
          sx={{
            pt: "10px",
            "& img": {
              width: "100%",
            },
          }}
        >
          <Image src={messageImg} alt="message-img" />
        </Box>
      </Box>
    </div>
  );
};

export default Message;
