import DashboardLayout from '@/layouts/DashboardLayout';
import { Box, Button } from "@mui/material";

import addimage from "@/assets/images/auth/user-pictures/addimage.png";
import SocialMedia from '@/components/SocialMedia';
import PhotoGallery from '@/pages/active-members/PhotoGallery';
import { Typography } from '@mui/material';
import Image from "next/image";
import { ReactElement } from 'react';

const Gallery = () => {
    return (
        <Box
            sx={{
                p: { sm: "20px 32px 38px", xs: "15px 12px 25px" },
                borderRadius: "4px",
                border: "1px solid #E9E9E9",
                background: "#fff"
            }}
        >
            <SocialMedia />
            <Box sx={{ mb: "30px" }}>
                <Typography
                    sx={{
                        color: "#020203",
                        pb: "20px",
                        fontSize: "20px",
                        fontFamily: "BROmegaSemiBold",
                        borderBottom: "1px solid #D6D6D6"
                    }}
                >
                    Gallery
                </Typography>
            </Box>
            <Box>
                <Box>
                    <Box
                        sx={{
                            mb: "30px",
                            "& img": {
                                width: "100%",
                                maxWidth: "600px",
                                height: "auto",
                            },
                        }}
                    >
                        <Button>
                            <Image src={addimage} alt="first-img" />
                        </Button>
                    </Box>
                </Box>
                <PhotoGallery />
            </Box>
        </Box>
    );
};

export default Gallery;
Gallery.getLayout = function getLayout(page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
};
