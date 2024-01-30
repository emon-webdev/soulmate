import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  Box,
  Button,
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

const MyInterests = () => {
  return (
    <Box
      sx={{
        p: { sm: "20px 32px 38px", xs: "15px 12px 25px" },
        borderRadius: "4px",
        border: "1px solid #E9E9E9",
        background: "#fff",
      }}
    >
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
          My Interests
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
                <TableCell align="right">Status</TableCell>
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
                <TableCell align="right">
                  <Button
                    size="small"
                    sx={{
                      color: "#D96A2B",
                      background: "#FFE4D4",
                      textTransform: "capitalize",
                    }}
                  >
                    Pending
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    sx={{
                      p: "0",
                      background: "#FFFAFA",
                      justifyContent: "end",
                      "& svg": {
                        color: "#FF0000",
                      },
                    }}
                  >
                    <DeleteOutlineIcon />
                  </Button>
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
                <TableCell align="right">
                  <Button
                    size="small"
                    sx={{
                      color: "#11A529",
                      background: "#D3FFDA",
                      textTransform: "capitalize",
                    }}
                  >
                    Approve
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    sx={{
                      p: "0",
                      background: "#FFFAFA",
                      justifyContent: "end",
                      "& svg": {
                        color: "#FF0000",
                      },
                    }}
                  >
                    <DeleteOutlineIcon />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default MyInterests;
