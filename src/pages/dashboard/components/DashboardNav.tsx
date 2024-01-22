import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CollectionsIcon from '@mui/icons-material/Collections';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import Person4Icon from '@mui/icons-material/Person4';
import ViewListIcon from '@mui/icons-material/ViewList';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button, ListItemIcon, ListItemText, MenuItem, MenuList, Typography } from '@mui/material';
import profile from "../../../assets/images/user/profile_1.png";
interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardNav = () => {
    return (
        <Box
            className="side_menu"
            sx={{
                display: { xs: 'flex' },
                flexDirection: "column",
                background: "#232635",
                borderRadius: "10px",
                width: "295px",
                flex: "0 0 295px",
                // position: { xs: "absolute", md: "inherit" },
                height: "100%",
                zIndex: "999"
                // textAlign: "center"
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                    padding: { md: "45px 24px", xs: "45px 24px 20px" },
                    "& p": {
                        fontSize: "22px",
                        color: "#fff",
                        mt: "25px",
                        mb: "18px",
                        fontFamily: "BROmegaSemiBold"
                    },
                    "& img": {
                        borderRadius: "50%",
                    }
                }}
            >
                <Image
                    width={124}
                    height={124}
                    src={profile}
                    alt="profile"
                />
                <Typography>
                    Brooklyn Simmons
                </Typography>
                <Link href="/">
                    <Button
                        // className='primary-btn'
                        sx={{
                            width: "100%",
                            p: "9px 10px",
                            background: "#fff ",
                            color: "#EC3384 ",
                            fontFamily: "BROmegaSemiBold",
                            fontSize: "16px",
                            borderRadius: "5px",
                            textTransform: "capitalize",
                            "&:hover": {
                                color: "#fff ",
                                background: "#EC3384 ",
                            }
                        }}
                    >
                        Public Profile
                    </Button>
                </Link>
            </Box>
            <Box>
                <MenuList sx={{
                    "& .css-kk1bwy-MuiButtonBase-root-MuiMenuItem-root": {

                    },
                    "& svg": {
                        color: "#fff",
                        fontSize: "24px"
                    },
                    "& li": {
                        color: "#fff",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                        mb: "10px",
                        p: "10px 16px"
                    }
                }}>
                    <Link href="/dashboard/pages">
                        <MenuItem>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText>Dashboard</ListItemText>
                        </MenuItem>
                    </Link>
                    <Link href="/dashboard/pages/my-profile">
                        <MenuItem>
                            <ListItemIcon>
                                <Person4Icon />
                            </ListItemIcon>
                            <ListItemText>My Profile</ListItemText>
                        </MenuItem>
                    </Link>
                    <Link href="/dashboard/pages/gallery">
                        <MenuItem>
                            <ListItemIcon>
                                <CollectionsIcon />
                            </ListItemIcon>
                            <ListItemText>Gallery</ListItemText>
                        </MenuItem>
                    </Link>
                    <Link href="/dashboard/pages/my-wallet">
                        <MenuItem>
                            <ListItemIcon>
                                <AccountBalanceWalletIcon />
                            </ListItemIcon>
                            <ListItemText>My Wallet</ListItemText>
                        </MenuItem>
                    </Link>
                    <Link href="/dashboard/pages/my-shotlists">
                        <MenuItem>
                            <ListItemIcon>
                                <ViewListIcon />
                            </ListItemIcon>
                            <ListItemText>Shortlist</ListItemText>
                        </MenuItem>
                    </Link>
                    <Link href="/dashboard/pages/package">
                        <MenuItem>
                            <ListItemIcon>
                                <AutoAwesomeIcon />
                            </ListItemIcon>
                            <ListItemText>Package</ListItemText>
                        </MenuItem>
                    </Link>
                    <Link href="/dashboard/pages/my-interests">
                        <MenuItem>
                            <ListItemIcon>
                                <AccountBalanceWalletIcon />
                            </ListItemIcon>
                            <ListItemText>My Interest </ListItemText>
                        </MenuItem>
                    </Link>
                    <Link href="/dashboard/pages/ignore-list">
                        <MenuItem>
                            <ListItemIcon>
                                <DoDisturbIcon />
                            </ListItemIcon>
                            <ListItemText>Ignored User List</ListItemText>
                        </MenuItem>
                    </Link>
                </MenuList>
            </Box>
            {/* logout button */}
            <Box
                sx={{
                    p: { md: "34px 24px", xs: "15px 24px 30px" }
                }}
            >
                <Button
                    // className="primary-btn"
                    sx={{
                        width: "100%",
                        p: "10px 10px",
                        background: "#EC3384",
                        color: "#fff",
                        fontFamily: "BROmegaSemiBold",
                        textTransform: "capitalize",
                        "& svg": {
                            mr: "9px",
                        },
                        "&:hover": {
                            background: "#fff ",
                            color: "#EC3384 ",
                        }
                    }}
                >
                    <LogoutIcon />
                    Logout
                </Button>
            </Box>
        </Box>
    );
};

export default DashboardNav;