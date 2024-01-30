import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

import user_img_1 from "../../assets/images/auth/user-pictures/user-pic-1.png";
import user_img_2 from "../../assets/images/auth/user-pictures/user-pic-2.png";
import user_img_3 from "../../assets/images/auth/user-pictures/user-pic-3.png";
import user_img_4 from "../../assets/images/auth/user-pictures/user-pic-4.png";
import user_img_5 from "../../assets/images/auth/user-pictures/user-pic-5.png";
import user_img_6 from "../../assets/images/auth/user-pictures/user-pic-6.png";
import user_img_7 from "../../assets/images/auth/user-pictures/user-pic-7.png";
import user_img_8 from "../../assets/images/auth/user-pictures/user-pic-8.png";
import user_img_9 from "../../assets/images/auth/user-pictures/user-pic-9.png";
const PhotoGallery = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Box>
          <Grid container item spacing={3} mb={2}>
            <React.Fragment>
              <Grid item xs={6} md={4}>
                <Box
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <Image src={user_img_1} alt="first-img" />
                </Box>
              </Grid>
              <Grid item xs={6} md={4}>
                <Box
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <Image src={user_img_2} alt="first-img" />
                </Box>
              </Grid>
              <Grid item xs={6} md={4}>
                <Box
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <Image src={user_img_3} alt="first-img" />
                </Box>
              </Grid>
              <Grid item xs={6} md={4}>
                <Box
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <Image src={user_img_4} alt="first-img" />
                </Box>
              </Grid>
              <Grid item xs={6} md={4}>
                <Box
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <Image src={user_img_5} alt="first-img" />
                </Box>
              </Grid>
              <Grid item xs={6} md={4}>
                <Box
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <Image src={user_img_6} alt="first-img" />
                </Box>
              </Grid>
              <Grid item xs={6} md={4}>
                <Box
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <Image src={user_img_7} alt="first-img" />
                </Box>
              </Grid>
              <Grid item xs={6} md={4}>
                <Box
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <Image src={user_img_8} alt="first-img" />
                </Box>
              </Grid>
              <Grid item xs={6} md={4}>
                <Box
                  sx={{
                    "& img": {
                      width: "100%",
                      height: "auto",
                    },
                  }}
                >
                  <Image src={user_img_9} alt="first-img" />
                </Box>
              </Grid>
            </React.Fragment>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default PhotoGallery;
