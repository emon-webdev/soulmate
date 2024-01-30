import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, FormGroup, Grid, Switch } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
const ProfileDetails = () => {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];

  return (
    <Box className="details_profile">
      <Accordion
        sx={{
          mb: "20px",
          border: "1px solid #E9E9E9",
          background: "#fff",
          boxShadow: "none",
          borderRadius: "4px !Important",
          p: { md: "14px 10px 14px 18px", xs: "5px" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
            }}
          >
            About Jane Cooper
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: { md: "16px", xs: "14px" },
              fontFamily: "BROmegaRegular",
            }}
          >
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment, so blinded by desire, that they cannot
            foresee the pain and trouble that are bound to ensue; and equal
            blame belongs to those who fail in their duty through weakness of
            will, which is the same as saying through shrinking from toil and
            pain.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          mb: "20px",
          border: "1px solid #E9E9E9",
          background: "#fff",
          boxShadow: "none",
          borderRadius: "4px !Important",
          p: { md: "14px 10px 14px 18px", xs: "14px 10px 14px 18px" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
            }}
          >
            Basic Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              mt: "4px",
            }}
          >

            <Box sx={{ flexGrow: 1, p: 2 }}>
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
                    Full Name*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                    }}
                  >
                    Cameron Williamson
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
                    Email Address
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                      wordWrap: "break-word"
                    }}
                  >
                    cameronwilliam@gmail.com
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
                    Gender *
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                      wordWrap: "break-word"
                    }}
                  >
                    Male
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
                  <Typography
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      fontSize: { md: "16px", xs: "14px" },
                      fontFamily: "BROmegaRegular",
                    }}
                  >
                    Date Of Birth *
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                    }}
                  >
                    12-12-2034
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
                  <Typography
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      fontSize: { md: "16px", xs: "14px" },
                      fontFamily: "BROmegaRegular",
                    }}
                  >
                    Mobile Number*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                    }}
                  >
                    123 5678 900
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
                    Marital Status *
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
                {/* {[...Array(6)].map((_, index) => (
                  <Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} minHeight={160} />
                ))} */}
              </Grid>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* Address */}
      <Accordion
        sx={{
          mb: "20px",
          border: "1px solid #E9E9E9",
          background: "#fff",
          boxShadow: "none",
          borderRadius: "4px !Important",
          p: { md: "14px 10px 14px 18px", xs: "14px 10px 14px 18px" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
            }}
          >
            Address
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              mt: "4px",
            }}
          >

            <Box sx={{ flexGrow: 1, p: 2 }}>
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
                    Country*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                    }}
                  >
                    Nepal
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
                    State*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                      wordWrap: "break-word"
                    }}
                  >
                    Deukhuri
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
                    City*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                      wordWrap: "break-word"
                    }}
                  >
                    Godawari
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
                  <Typography
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      fontSize: { md: "16px", xs: "14px" },
                      fontFamily: "BROmegaRegular",
                    }}
                  >
                    Postal Code*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                    }}
                  >
                    4672
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
                  <Typography
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      fontSize: { md: "16px", xs: "14px" },
                      fontFamily: "BROmegaRegular",
                    }}
                  >
                    Rode*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                    }}
                  >
                    123 5678 900
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
                    Home Number *
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                      wordWrap: "break-word"
                    }}
                  >
                    6781
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* Education */}
      <Accordion
        sx={{
          mb: "20px",
          border: "1px solid #E9E9E9",
          background: "#fff",
          boxShadow: "none",
          borderRadius: "4px !Important",
          p: { md: "14px 10px 14px 18px", xs: "5px" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
            }}
          >
            Education
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Designation</TableCell>
                  <TableCell>Company</TableCell>
                  <TableCell>Start</TableCell>
                  <TableCell>End</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    M.B.B.S
                  </TableCell>
                  <TableCell>Imperial Medical College</TableCell>
                  <TableCell>2010</TableCell>
                  <TableCell>2014</TableCell>
                  <TableCell>
                    <FormGroup>
                      <Switch defaultChecked />
                    </FormGroup>
                  </TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    M.B.B.S
                  </TableCell>
                  <TableCell>Imperial Medical College</TableCell>
                  <TableCell>2010</TableCell>
                  <TableCell>2014</TableCell>
                  <TableCell>
                    <FormGroup>
                      <Switch defaultChecked />
                    </FormGroup>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </AccordionDetails>
      </Accordion>
      {/* Physical Attributes */}
      <Accordion
        sx={{
          mb: "20px",
          border: "1px solid #E9E9E9",
          background: "#fff",
          boxShadow: "none",
          borderRadius: "4px !Important",
          p: { md: "14px 10px 14px 18px", xs: "14px 10px 14px 18px" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
            }}
          >
            Physical Attributes
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              mt: "4px",
            }}
          >

            <Box sx={{ flexGrow: 1, p: 2 }}>
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
                    Height (In Feet)*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                    }}
                  >
                    6’ 2”
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
                    Weight (In Kg)*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                      wordWrap: "break-word"
                    }}
                  >
                    65
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
                    Eye color*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                      wordWrap: "break-word"
                    }}
                  >
                    Black
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
                  <Typography
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      fontSize: { md: "16px", xs: "14px" },
                      fontFamily: "BROmegaRegular",
                    }}
                  >
                    Body Type*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                    }}
                  >
                    Medium
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} minHeight={{ md: 100, xs: 90 }}>
                  <Typography
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      fontSize: { md: "16px", xs: "14px" },
                      fontFamily: "BROmegaRegular",
                    }}
                  >
                    Body Art*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                    }}
                  >
                    Medium
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* Language */}
      <Accordion
        sx={{
          mb: "20px",
          border: "1px solid #E9E9E9",
          background: "#fff",
          boxShadow: "none",
          borderRadius: "4px !Important",
          p: { md: "14px 10px 14px 18px", xs: "14px 10px 14px 18px" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
            }}
          >
            Language
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              mt: "4px",
            }}
          >

            <Box sx={{ flexGrow: 1, p: 2 }}>
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
                <Grid item xs={12} md={6} minHeight={{ md: 100, xs: 90 }}>
                  <Typography
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      fontSize: { md: "16px", xs: "14px" },
                      fontFamily: "BROmegaRegular",
                    }}
                  >
                    Mother Tongue*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                    }}
                  >
                    Bangla
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6} minHeight={{ md: 100, xs: 90 }}>
                  <Typography
                    sx={{
                      color: "rgba(0, 0, 0, 0.7)",
                      fontSize: { md: "16px", xs: "14px" },
                      fontFamily: "BROmegaRegular",
                      wordWrap: "break-word"
                    }}
                  >
                    Known Languages*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                      wordWrap: "break-word"
                    }}
                  >
                    English
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* Family Information */}
      <Accordion
        sx={{
          mb: "20px",
          border: "1px solid #E9E9E9",
          background: "#fff",
          boxShadow: "none",
          borderRadius: "4px !Important",
          p: { md: "14px 10px 14px 18px", xs: "14px 10px 14px 18px" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
            }}
          >
            Family Information
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              mt: "4px",
            }}
          >

            <Box sx={{ flexGrow: 1, p: 2 }}>
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
                    Father*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                    }}
                  >
                    Yes
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
                    Mather*
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
                    Sibling*
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
              </Grid>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      {/* Partner Expectation */}
      {/* <Accordion
        sx={{
          mb: "20px",
          border: "1px solid #E9E9E9",
          background: "#fff",
          boxShadow: "none",
          borderRadius: "4px !Important",
          p: { md: "14px 10px 14px 18px", xs: "14px 10px 14px 18px" },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{
              fontSize: { md: "24px", xs: "20px" },
              fontFamily: "BROmegaMedium",
            }}
          >
            Partner Expectation
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              mt: "4px",
            }}
          >

            <Box sx={{ flexGrow: 1, p: 2 }}>
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
                    General Requirement*
                  </Typography>
                  <Typography
                    sx={{
                      color: "#23273A",
                      fontSize: { md: "24px", xs: "20px" },
                      fontFamily: "BROmegaMedium",
                    }}
                  >
                    Yes
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
              </Grid>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion> */}

    </Box>
  );
};

export default ProfileDetails;
