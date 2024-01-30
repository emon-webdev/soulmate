// import DashboardLayout from '@/layouts/DashboardLayout';
import SocialMedia from "@/components/SocialMedia";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import tableProfile from "../../../assets/images/table_profile.png";

const IgnoredList = () => {
  return (
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
          Ignored Member
        </Typography>
      </Box>
      {/* data table */}
      <Box
        sx={{
          pt: "40px",
        }}
      >
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Religion</TableCell>
                <TableCell align="right">Location</TableCell>
                <TableCell align="right">Mother Tongue</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                background: "#FFFAFA",
                borderRadius: "4px",
                border: "1px solid #EDEDED",
              }}
            >
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  1
                </TableCell>
                <TableCell>
                  <Image src={tableProfile} alt="table profile" />
                </TableCell>
                <TableCell>Lesile Alexander</TableCell>
                <TableCell align="right">20</TableCell>
                <TableCell align="right">Islam</TableCell>
                <TableCell align="right">Bangladesh</TableCell>
                <TableCell align="right">Bangla</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete">
                    <DeleteOutlineIcon
                      sx={{
                        color: "#FF0000",
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  1
                </TableCell>
                <TableCell>
                  <Image src={tableProfile} alt="table profile" />
                </TableCell>
                <TableCell>Lesile Alexander</TableCell>
                <TableCell align="right">20</TableCell>
                <TableCell align="right">Hindu</TableCell>
                <TableCell align="right">India</TableCell>
                <TableCell align="right">Hindi</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete">
                    <DeleteOutlineIcon
                      sx={{
                        color: "#FF0000",
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  1
                </TableCell>
                <TableCell>
                  <Image src={tableProfile} alt="table profile" />
                </TableCell>
                <TableCell>Lesile Alexander</TableCell>
                <TableCell align="right">20</TableCell>
                <TableCell align="right">Islam</TableCell>
                <TableCell align="right">Bangladesh</TableCell>
                <TableCell align="right">Bangla</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete">
                    <DeleteOutlineIcon
                      sx={{
                        color: "#FF0000",
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default IgnoredList;
