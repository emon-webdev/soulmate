import { Box, Typography } from "@mui/material";
interface SectionTitleType {
  title: string;
  subtitle: string;
}
const SectionTitle = ({ title, subtitle }: SectionTitleType) => {
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { md: "52px", xs: "38px" },
          lineHeight: { md: "60px", xs: "44px" },
          fontFamily: "BROmegaSemiBold",
          mb: "20px",
        }}
      >
        {title}
      </Typography>
      <Typography variant="body1">{subtitle}</Typography>
    </Box>
  );
};

export default SectionTitle;
