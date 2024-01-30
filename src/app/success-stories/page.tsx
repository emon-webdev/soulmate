import SectionTitle from "@/components/SectionTitle";
import SocialMedia from "@/components/SocialMedia";
import CachedIcon from "@mui/icons-material/Cached";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import blog_img_1 from "../../assets/images/blog/success-blog_1.png";
import blog_img_2 from "../../assets/images/blog/success-blog_2.png";
import blog_img_3 from "../../assets/images/blog/success-blog_3.png";
import blog_img_4 from "../../assets/images/blog/success-blog_4.png";
import blog_img_5 from "../../assets/images/blog/success-blog_5.png";
const SuccessBlogs = () => {
  return (
    <Box
      className="success-blog"
      sx={{
        p: "110px 0 120px",
      }}
    >
      <SocialMedia />
      <Container maxWidth="xl">
        <Box
          maxWidth={766}
          sx={{
            margin: "0 auto",
            "& h2": {
              fontSize: { md: "40px", xs: "34px" },
              lineHeight: { md: "48px", xs: "42px" },
            },
          }}
        >
          <SectionTitle
            title="Real life inspirational stories of success"
            subtitle="Lorem ipsum dolor sit amet consectetur. Sit scelerisque ut mattis scelerisque tortor imperdiet tincidunt vulputate vitae. Nulla egestas sagittis non a diam lectus nulla scelerisque dignissim consectetur consectetur"
          />
        </Box>
        {/*  Blogs */}
        <Box
          sx={{
            p: { md: "120px 0 10px", xs: "60px 0 10px" },
          }}
        >
          {/* first blog */}
          <Box>
            <Grid className="blogs-content" container spacing={2}>
              <Grid item xs={12}>
                <Box
                  sx={{
                    "& img": {
                      width: "100%",
                      height: { md: "540px", xs: "270px" },
                    },
                  }}
                >
                  <Image src={blog_img_1} alt={""} />
                  <Box
                    sx={{
                      p: { sm: "20px 32px 42px", xs: "20px 20px 25px" },
                      borderRadius: "30px",
                      background: "#fff",
                      boxShadow: "0px 10px 10px 0px rgba(13, 15, 29, 0.05)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#91939C",
                        fontFamily: "BROmegaRegular",
                        "& span": {
                          color: "#FA4A6F",
                          ml: "5px",
                        },
                      }}
                    >
                      Date:
                      <Typography component="span">
                        25 august -2020,
                      </Typography>{" "}
                      Posted By:
                      <Typography component="span">Allan Rasel</Typography>
                    </Typography>
                    <Typography
                      sx={{
                        mt: "14px",
                        fontSize: { sm: "28px", xs: "22px" },
                        lineHeight: { sm: "36px", xs: "30px" },
                        color: "#23273A",
                        fontFamily: "BROmegaMedium",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur. Orci netus non non
                      turpis amet urna purus amet felis. Eros enim condimentum
                      molestie sit tortor rutrum consequat pharetra.
                    </Typography>
                    <Box
                      sx={{
                        mt: "24px",
                        textAlign: "end",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          background: "#FA4A6F",
                          p: "9px 16px",
                          borderRadius: "5px",
                          textAlign: "center",
                          boxShadow: 0,
                          transitionDelay: "0.3s",
                          maxWidth: "160px",
                          "&:hover": {
                            background: "#EC3384",
                            boxShadow: 0,
                          },
                        }}
                      >
                        Read More
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* card blog */}
          <Box
            sx={{
              mt: "20px",
            }}
          >
            <Grid className="active-members" container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    maxWidth: { md: "100%", lg: 630 },
                    width: "100%",
                    // maxHeight: { md: 390, lg: 400, xs: 526, sm: 350 },
                    // height: { md: 390, lg: 400, xs: 526, sm: 350 },
                    borderRadius: "20px",
                    background: "#FFFDF9",
                    "& img": {
                      width: "100%",
                      height: { md: "340px", xs: "250px" },
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                    },
                  }}
                >
                  <Image src={blog_img_2} alt={""} />
                  <Box
                    sx={{
                      p: { sm: "20px 32px 42px", xs: "16px 20px 36px" },
                      borderRadius: "30px",
                      background: "#fff",
                      boxShadow: "0px 10px 10px 0px rgba(13, 15, 29, 0.05)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#91939C",
                        fontFamily: "BROmegaRegular",
                        "& span": {
                          color: "#FA4A6F",
                          ml: "5px",
                        },
                      }}
                    >
                      Date:
                      <Typography component="span">
                        25 august -2020,
                      </Typography>{" "}
                      Posted By:
                      <Typography component="span">Allan Rasel</Typography>
                    </Typography>
                    <Typography
                      sx={{
                        mt: "14px",
                        fontSize: { sm: "24px", xs: "20px" },
                        lineHeight: { sm: "30px", xs: "26px" },
                        color: "#23273A",
                        fontFamily: "BROmegaMedium",
                      }}
                    >
                      If I had a flower every time I thought of you, I could
                      walk in my garden forever.
                    </Typography>
                    <Box
                      sx={{
                        mt: "24px",
                        textAlign: "end",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          background: "#FA4A6F",
                          p: "9px 16px",
                          borderRadius: "5px",
                          textAlign: "center",
                          boxShadow: 0,
                          transitionDelay: "0.3s",
                          maxWidth: "160px",
                          "&:hover": {
                            background: "#EC3384",
                            boxShadow: 0,
                          },
                        }}
                      >
                        Read More
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    maxWidth: { md: "100%", lg: 630 },
                    width: "100%",
                    // maxHeight: { md: 390, lg: 400, xs: 526, sm: 350 },
                    // height: { md: 390, lg: 400, xs: 526, sm: 350 },
                    borderRadius: "20px",
                    background: "#FFFDF9",
                    "& img": {
                      width: "100%",
                      height: { md: "340px", xs: "250px" },
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                    },
                  }}
                >
                  <Image src={blog_img_3} alt={""} />
                  <Box
                    sx={{
                      p: { sm: "20px 32px 42px", xs: "16px 20px 36px" },
                      borderRadius: "30px",
                      background: "#fff",
                      boxShadow: "0px 10px 10px 0px rgba(13, 15, 29, 0.05)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#91939C",
                        fontFamily: "BROmegaRegular",
                        "& span": {
                          color: "#FA4A6F",
                          ml: "5px",
                        },
                      }}
                    >
                      Date:
                      <Typography component="span">
                        25 august -2020,
                      </Typography>{" "}
                      Posted By:
                      <Typography component="span">Allan Rasel</Typography>
                    </Typography>
                    <Typography
                      sx={{
                        mt: "14px",
                        fontSize: { sm: "24px", xs: "20px" },
                        lineHeight: { sm: "30px", xs: "26px" },
                        color: "#23273A",
                        fontFamily: "BROmegaMedium",
                      }}
                    >
                      If I had a flower every time I thought of you, I could
                      walk in my garden forever.
                    </Typography>
                    <Box
                      sx={{
                        mt: "24px",
                        textAlign: "end",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          background: "#FA4A6F",
                          p: "9px 16px",
                          borderRadius: "5px",
                          textAlign: "center",
                          boxShadow: 0,
                          transitionDelay: "0.3s",
                          maxWidth: "160px",
                          "&:hover": {
                            background: "#EC3384",
                            boxShadow: 0,
                          },
                        }}
                      >
                        Read More
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    maxWidth: { md: "100%", lg: 630 },
                    width: "100%",
                    // maxHeight: { md: 390, lg: 400, xs: 526, sm: 350 },
                    // height: { md: 390, lg: 400, xs: 526, sm: 350 },
                    borderRadius: "20px",
                    background: "#FFFDF9",
                    "& img": {
                      width: "100%",
                      height: { md: "340px", xs: "250px" },
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                    },
                  }}
                >
                  <Image src={blog_img_4} alt={""} />
                  <Box
                    sx={{
                      p: { sm: "20px 32px 42px", xs: "16px 20px 36px" },
                      borderRadius: "30px",
                      background: "#fff",
                      boxShadow: "0px 10px 10px 0px rgba(13, 15, 29, 0.05)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#91939C",
                        fontFamily: "BROmegaRegular",
                        "& span": {
                          color: "#FA4A6F",
                          ml: "5px",
                        },
                      }}
                    >
                      Date:
                      <Typography component="span">
                        25 august -2020,
                      </Typography>{" "}
                      Posted By:
                      <Typography component="span">Allan Rasel</Typography>
                    </Typography>
                    <Typography
                      sx={{
                        mt: "14px",
                        fontSize: { sm: "24px", xs: "20px" },
                        lineHeight: { sm: "30px", xs: "26px" },
                        color: "#23273A",
                        fontFamily: "BROmegaMedium",
                      }}
                    >
                      If I had a flower every time I thought of you, I could
                      walk in my garden forever.
                    </Typography>
                    <Box
                      sx={{
                        mt: "24px",
                        textAlign: "end",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          background: "#FA4A6F",
                          p: "9px 16px",
                          borderRadius: "5px",
                          textAlign: "center",
                          boxShadow: 0,
                          transitionDelay: "0.3s",
                          maxWidth: "160px",
                          "&:hover": {
                            background: "#EC3384",
                            boxShadow: 0,
                          },
                        }}
                      >
                        Read More
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box
                  sx={{
                    maxWidth: { md: "100%", lg: 630 },
                    width: "100%",
                    // maxHeight: { md: 390, lg: 400, xs: 526, sm: 350 },
                    // height: { md: 390, lg: 400, xs: 526, sm: 350 },
                    borderRadius: "20px",
                    background: "#FFFDF9",
                    "& img": {
                      width: "100%",
                      height: { md: "340px", xs: "250px" },
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                    },
                  }}
                >
                  <Image src={blog_img_5} alt={""} />
                  <Box
                    sx={{
                      p: { sm: "20px 32px 42px", xs: "16px 20px 36px" },
                      borderRadius: "30px",
                      background: "#fff",
                      boxShadow: "0px 10px 10px 0px rgba(13, 15, 29, 0.05)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#91939C",
                        fontFamily: "BROmegaRegular",
                        "& span": {
                          color: "#FA4A6F",
                          ml: "5px",
                        },
                      }}
                    >
                      Date:
                      <Typography component="span">
                        25 august -2020,
                      </Typography>{" "}
                      Posted By:
                      <Typography component="span">Allan Rasel</Typography>
                    </Typography>
                    <Typography
                      sx={{
                        mt: "14px",
                        fontSize: { sm: "24px", xs: "20px" },
                        lineHeight: { sm: "30px", xs: "26px" },
                        color: "#23273A",
                        fontFamily: "BROmegaMedium",
                      }}
                    >
                      If I had a flower every time I thought of you, I could
                      walk in my garden forever.
                    </Typography>
                    <Box
                      sx={{
                        mt: "24px",
                        textAlign: "end",
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          background: "#FA4A6F",
                          p: "9px 16px",
                          borderRadius: "5px",
                          textAlign: "center",
                          boxShadow: 0,
                          transitionDelay: "0.3s",
                          maxWidth: "160px",
                          "&:hover": {
                            background: "#EC3384",
                            boxShadow: 0,
                          },
                        }}
                      >
                        Read More
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box
              sx={{
                textAlign: "center",
                pt: "60px",
                m: "0 auto",
                "& button": {
                  color: "#23273A",
                  fontFamily: "BROmegaSemiBold",
                  fontSize: "20px",
                  p: "6px 25px",
                  "&:hover": {
                    background: "#FA4A6F",
                    color: "#fff",
                    "& svg": {
                      color: "#fff",
                    },
                  },
                },
                "& svg": {
                  color: "#23273A",
                  fontFamily: "BROmegaSemiBold",
                  fontSize: "26px",
                },
              }}
            >
              <Button startIcon={<CachedIcon />}>Show More</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SuccessBlogs;
