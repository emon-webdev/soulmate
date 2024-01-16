import { Box, Grid, Typography } from "@mui/material";

const PartnerPreference = () => {
  return (
    <Box sx={{
      pt: "25px",
      "& .css-13s36uz-MuiGrid-root": {
        marginLeft: "0px",
        width: "100%"
      }
    }}>
      <Grid
        container
        spacing={2}
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
            }}
          >
            General:
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
            }}
          >
            Ernest K Cole
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Residence Country*
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            USA
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Profession*
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            Doctor
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Min Height (In Feet)*
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            4
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Max Weight (In Kg)*
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            90
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Marital Status*
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            Unmarried
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Children Acceptable*
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            No
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Religion*
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            Islam
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Education:
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            Bachelor Of Arts
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Profession:
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            Any
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Smoking Acceptable:
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            Dose not Matter
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Drinking Acceptable:
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            Dose not Matter
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Diet:
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            Dose not Matter
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Body Type:
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            Regular
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Preferred Country:
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            Afghanistan
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Family Value:
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            Xanthous Collins
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
              wordWrap: "break-word"
            }}
          >
            Complexion:
          </Typography>
          <Typography
            sx={{
              color: "#23273A",
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
              wordWrap: "break-word"
            }}
          >
            Fair skin, Always burns
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PartnerPreference;
