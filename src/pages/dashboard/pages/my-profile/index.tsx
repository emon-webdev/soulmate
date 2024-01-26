import DashboardLayout from "@/layouts/DashboardLayout";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, FormGroup, Grid, IconButton, NativeSelect, SelectChangeEvent, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Paper from "@mui/material/Paper";
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import * as React from "react";
import { ReactElement } from "react";

const MyProfile = () => {
  const [profileType, setProfileType] = React.useState("Groom");
  const dateOfBirth = new Date();
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <Box className="my-profile"
        sx={{
          "& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
            width: "100%",
            // paddingRight: "16px"
          },
          "& .css-o4b71y-MuiAccordionSummary-content.Mui-expanded": {
            margin: "0px"
          },
          "& .css-8sa2q5-MuiPaper-root-MuiAccordion-root:before": {
            display: "none"
          },

        }} >
        {/* Introduction */}
        < Accordion
          sx={{
            mb: "25px !important",
            border: "1px solid #E9E9E9",
            background: "#fff",
            boxShadow: "none",
            borderRadius: "4px !Important",
            p: "18px 20px",
            "& .css-o4b71y-MuiAccordionSummary-content": {
              borderBottom: "1px solid #D6D6D6",
              m: "0px"
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontFamily: "BROmegaMedium",
                color: "#020203",
                pb: "16px",
              }}
            >
              Introduction
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "BROmegaMedium",
              }}
            >
              Introduction
            </Typography>
            <Box
              sx={{
                background: "#FFFAFA",
                padding: "26px 24px",
                mt: "15px",
                "& textarea": {
                  width: "100%",
                  height: "90px",
                  border: "0px",
                  background: "#FFFAFA",
                  padding: "12px 24px",
                }
              }}
            >
              <textarea>
                Lorem ipsum dolor sit amet consectetur. Praesent commodo nec amet sollicitudin. Venenatis bibendum ut sagittis a commodo integer. Id ullamcorper pellentesque velit tellus.
              </textarea>
            </Box>
            {/* update button */}
            <Box
              sx={{
                pt: "16px",
                textAlign: "end",
              }}
            >
              <Button
                sx={{
                  width: "126px",
                  p: "7px 8px",
                  background: "#EC3384",
                  color: "#fff",
                  fontFamily: "BROmegaSemiBold",
                  textTransform: "capitalize",
                  "&:hover": {
                    background: "linear-gradient(180deg, #fa4a6f 0%, #532b79 100%)",
                    color: "#fff ",
                  }
                }}
              >
                Update Now
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* Change your email  */}
        <Accordion
          sx={{
            mb: "25px !important",
            border: "1px solid #E9E9E9",
            background: "#fff",
            boxShadow: "none",
            borderRadius: "4px !Important",
            p: "18px 20px",
            "& .css-o4b71y-MuiAccordionSummary-content": {
              borderBottom: "1px solid #D6D6D6",
              m: "0px"
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontFamily: "BROmegaMedium",
                color: "#020203",
                pb: "16px",
              }}
            >
              Change your email
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "BROmegaMedium",
              }}
            >
              Your Email
            </Typography>
            <Box
              sx={{
                background: "#FFFAFA",
                padding: "26px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mt: "15px",
                "& input": {
                  width: "100%",
                  border: "1px solid #EC3384",
                  background: "#FFFAFA",
                  padding: "12px 24px",
                }
              }}
            >
              <TextField
                id="outlined-basic"
                placeholder="kenzi.lawson@example.com"
                variant="outlined"
              />
              <Button
                sx={{
                  width: "126px",
                  border: "1px solid #EC3384",
                  p: "7px 8px",
                  background: "#fff",
                  color: "#FA4A6F",
                  fontFamily: "BROmegaSemiBold",
                  textTransform: "capitalize",
                  "&:hover": {
                    background: "linear-gradient(180deg, #fa4a6f 0%, #532b79 100%)",
                    color: "#fff ",
                  }
                }}
              >
                Verify email
              </Button>
            </Box>
            {/* update button */}
            <Box
              sx={{
                pt: "16px",
                textAlign: "end",
              }}
            >
              <Button
                sx={{
                  width: "126px",
                  p: "7px 8px",
                  background: "#EC3384",
                  color: "#fff",
                  fontFamily: "BROmegaSemiBold",
                  textTransform: "capitalize",
                  "&:hover": {
                    background: "linear-gradient(180deg, #fa4a6f 0%, #532b79 100%)",
                    color: "#fff ",
                  }
                }}
              >
                Update Now
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* Basic Information  */}
        <Accordion
          sx={{
            mb: "25px !important",
            border: "1px solid #E9E9E9",
            background: "#fff",
            boxShadow: "none",
            borderRadius: "4px !Important",
            p: "18px 20px",
            "& .css-o4b71y-MuiAccordionSummary-content": {
              borderBottom: "1px solid #D6D6D6",
              m: "0px"
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontFamily: "BROmegaMedium",
                color: "#020203",
                pb: "16px",
              }}
            >
              Basic Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "& .css-p1d8x5-MuiTypography-root": {
                  fontSize: "14px",
                  fontFamily: "BROmegaRegular",
                  mb: "8px"
                },
                "& input": {
                  width: "100%",
                  border: "1px solid #EDEDED",
                  padding: "8px 12px",
                  fontSize: "12px",
                  fontFamily: "BROmegaRegular",
                  color: "#23273A",
                },
                "& .css-q0jhri-MuiInputBase-root-MuiInput-root": {
                  width: "100%",
                  border: "1px solid #EDEDED",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontFamily: "BROmegaRegular",
                  color: "#23273A",
                  "&:before": {
                    display: 'none'
                  }
                },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={2}
                >
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      First Name*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="Cameron"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Last Name*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="Williamson"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Gender *
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="Male"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Date Of Birth *
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder={format(dateOfBirth, 'MM-dd-yyyy')}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Mobile Number*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="123 5678 900"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Create profile for*
                    </Typography>
                    <NativeSelect
                      defaultValue={60}
                      inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                      }}
                    >
                      <option value={40}>Bride</option>
                      <option value={60}>Groom</option>
                    </NativeSelect>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Marital Status *
                    </Typography>
                    <NativeSelect
                      defaultValue={60}
                      inputProps={{
                        name: 'age',
                        id: 'uncontrolled-native',
                      }}
                    >
                      <option value={40}>Married</option>
                      <option value={60}>Unmarried</option>
                    </NativeSelect>
                  </Grid>
                </Grid>
              </Box>
            </Box>
            {/* update button */}
            <Box
              sx={{
                pt: "16px",
                textAlign: "end",
              }}
            >
              <Button
                sx={{
                  width: "126px",
                  p: "7px 8px",
                  background: "#EC3384",
                  color: "#fff",
                  fontFamily: "BROmegaSemiBold",
                  textTransform: "capitalize",
                  "&:hover": {
                    background: "linear-gradient(180deg, #fa4a6f 0%, #532b79 100%)",
                    color: "#fff ",
                  }
                }}
              >
                Update Now
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* Present Address*/}
        <Accordion
          sx={{
            mb: "25px !important",
            border: "1px solid #E9E9E9",
            background: "#fff",
            boxShadow: "none",
            borderRadius: "4px !Important",
            p: "18px 20px",
            "& .css-o4b71y-MuiAccordionSummary-content": {
              borderBottom: "1px solid #D6D6D6",
              m: "0px"
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontFamily: "BROmegaMedium",
                color: "#020203",
                pb: "16px",
              }}
            >
              Present Address
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "& .css-p1d8x5-MuiTypography-root": {
                  fontSize: "14px",
                  fontFamily: "BROmegaRegular",
                  mb: "8px"
                },
                "& input": {
                  width: "100%",
                  border: "1px solid #EDEDED",
                  padding: "8px 12px",
                  fontSize: "12px",
                  fontFamily: "BROmegaRegular",
                  color: "#23273A",
                },
                "& .css-q0jhri-MuiInputBase-root-MuiInput-root": {
                  width: "100%",
                  border: "1px solid #EDEDED",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontFamily: "BROmegaRegular",
                  color: "#23273A",
                  "&:before": {
                    display: 'none'
                  }
                },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={2}
                // sx={{
                //   '--Grid-borderWidth': '1px',
                //   borderTop: 'var(--Grid-borderWidth) solid',
                //   borderLeft: 'var(--Grid-borderWidth) solid',
                //   borderColor: 'divider',
                //   '& > div': {
                //     borderRight: 'var(--Grid-borderWidth) solid',
                //     borderBottom: 'var(--Grid-borderWidth) solid',
                //     borderColor: 'divider',
                //   },
                // }}
                >
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Country*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="Nepal"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      State*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="Deukhuri"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      City*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="Godawari"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Postal Code*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="4672"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
            {/* update button */}
            <Box
              sx={{
                pt: "16px",
                textAlign: "end",
              }}
            >
              <Button
                sx={{
                  width: "126px",
                  p: "7px 8px",
                  background: "#EC3384",
                  color: "#fff",
                  fontFamily: "BROmegaSemiBold",
                  textTransform: "capitalize",
                  "&:hover": {
                    background: "linear-gradient(180deg, #fa4a6f 0%, #532b79 100%)",
                    color: "#fff ",
                  }
                }}
              >
                Update Now
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        {/*Education Info*/}
        <Accordion
          sx={{
            mb: "25px !important",
            border: "1px solid #E9E9E9",
            background: "#fff",
            boxShadow: "none",
            borderRadius: "4px !Important",
            p: "18px 20px",
            "& .css-o4b71y-MuiAccordionSummary-content": {
              borderBottom: "1px solid #D6D6D6",
              m: "0px"
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontFamily: "BROmegaMedium",
                color: "#020203",
                pb: "16px",
              }}
            >
              Education Info
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Degree</TableCell>
                    <TableCell>Institution</TableCell>
                    <TableCell>Start</TableCell>
                    <TableCell>End</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Action</TableCell>
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
                    <TableCell align="right">
                      <IconButton aria-label="delete">
                        <DeleteOutlineIcon
                          sx={{
                            color: "#FF0000"
                          }}
                        />
                      </IconButton>
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
                    <TableCell align="right">
                      <IconButton aria-label="delete">
                        <DeleteOutlineIcon
                          sx={{
                            color: "#FF0000"
                          }}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            {/* update button */}
            <Box
              sx={{
                pt: "16px",
                textAlign: "end",
              }}
            >
              <Button
                sx={{
                  width: "126px",
                  p: "7px 8px",
                  mr: "14px",
                  background: "#EC3384",
                  color: "#fff",
                  fontFamily: "BROmegaSemiBold",
                  textTransform: "capitalize",
                  "&:hover": {
                    background: "linear-gradient(180deg, #fa4a6f 0%, #532b79 100%)",
                    color: "#fff ",
                  }
                }}
              >
                Add New
              </Button>
              <Button
                sx={{
                  width: "126px",
                  p: "7px 8px",
                  background: "#EC3384",
                  color: "#fff",
                  fontFamily: "BROmegaSemiBold",
                  textTransform: "capitalize",
                  "&:hover": {
                    background: "linear-gradient(180deg, #fa4a6f 0%, #532b79 100%)",
                    color: "#fff ",
                  }
                }}
              >
                Update Now
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* Physical Attributes*/}
        <Accordion
          sx={{
            mb: "25px !important",
            border: "1px solid #E9E9E9",
            background: "#fff",
            boxShadow: "none",
            borderRadius: "4px !Important",
            p: "18px 20px",
            "& .css-o4b71y-MuiAccordionSummary-content": {
              borderBottom: "1px solid #D6D6D6",
              m: "0px"
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontFamily: "BROmegaMedium",
                color: "#020203",
                pb: "16px",
              }}
            >
              Physical Attributes
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "& .css-p1d8x5-MuiTypography-root": {
                  fontSize: "14px",
                  fontFamily: "BROmegaRegular",
                  mb: "8px"
                },
                "& input": {
                  width: "100%",
                  border: "1px solid #EDEDED",
                  padding: "8px 12px",
                  fontSize: "12px",
                  fontFamily: "BROmegaRegular",
                  color: "#23273A",
                },
                "& .css-q0jhri-MuiInputBase-root-MuiInput-root": {
                  width: "100%",
                  border: "1px solid #EDEDED",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontFamily: "BROmegaRegular",
                  color: "#23273A",
                  "&:before": {
                    display: 'none'
                  }
                },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={2}
                >
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Height (In Feet)*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="6’ 2”"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Weight (In Kg)*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="65"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Eye color*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="Black"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Hair Color*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="Black"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
            {/* update button */}
            <Box
              sx={{
                pt: "16px",
                textAlign: "end",
              }}
            >
              <Button
                sx={{
                  width: "126px",
                  p: "7px 8px",
                  background: "#EC3384",
                  color: "#fff",
                  fontFamily: "BROmegaSemiBold",
                  textTransform: "capitalize",
                  "&:hover": {
                    background: "linear-gradient(180deg, #fa4a6f 0%, #532b79 100%)",
                    color: "#fff ",
                  }
                }}
              >
                Update Now
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* Language*/}
        <Accordion
          sx={{
            mb: "25px !important",
            border: "1px solid #E9E9E9",
            background: "#fff",
            boxShadow: "none",
            borderRadius: "4px !Important",
            p: "18px 20px",
            "& .css-o4b71y-MuiAccordionSummary-content": {
              borderBottom: "1px solid #D6D6D6",
              m: "0px"
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontFamily: "BROmegaMedium",
                color: "#020203",
                pb: "16px",
              }}
            >
              Language
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "& .css-p1d8x5-MuiTypography-root": {
                  fontSize: "14px",
                  fontFamily: "BROmegaRegular",
                  mb: "8px"
                },
                "& input": {
                  width: "100%",
                  border: "1px solid #EDEDED",
                  padding: "8px 12px",
                  fontSize: "12px",
                  fontFamily: "BROmegaRegular",
                  color: "#23273A",
                },
                "& .css-q0jhri-MuiInputBase-root-MuiInput-root": {
                  width: "100%",
                  border: "1px solid #EDEDED",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontFamily: "BROmegaRegular",
                  color: "#23273A",
                  "&:before": {
                    display: 'none'
                  }
                },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={2}
                >
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Mother_Tongue*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="Nepali"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Known Languages*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="English"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
            {/* update button */}
            <Box
              sx={{
                pt: "16px",
                textAlign: "end",
              }}
            >
              <Button
                sx={{
                  width: "126px",
                  p: "7px 8px",
                  background: "#EC3384",
                  color: "#fff",
                  fontFamily: "BROmegaSemiBold",
                  textTransform: "capitalize",
                  "&:hover": {
                    background: "linear-gradient(180deg, #fa4a6f 0%, #532b79 100%)",
                    color: "#fff ",
                  }
                }}
              >
                Update Now
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* Family Information*/}
        <Accordion
          sx={{
            mb: "25px !important",
            border: "1px solid #E9E9E9",
            background: "#fff",
            boxShadow: "none",
            borderRadius: "4px !Important",
            p: "18px 20px",
            "& .css-o4b71y-MuiAccordionSummary-content": {
              borderBottom: "1px solid #D6D6D6",
              m: "0px"
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontFamily: "BROmegaMedium",
                color: "#020203",
                pb: "16px",
              }}
            >
              Family Information
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "& .css-p1d8x5-MuiTypography-root": {
                  fontSize: "14px",
                  fontFamily: "BROmegaRegular",
                  mb: "8px"
                },
                "& input": {
                  width: "100%",
                  border: "1px solid #EDEDED",
                  padding: "8px 12px",
                  fontSize: "12px",
                  fontFamily: "BROmegaRegular",
                  color: "#23273A",
                },
                "& .css-q0jhri-MuiInputBase-root-MuiInput-root": {
                  width: "100%",
                  border: "1px solid #EDEDED",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontFamily: "BROmegaRegular",
                  color: "#23273A",
                  "&:before": {
                    display: 'none'
                  }
                },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={2}
                >
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Father*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="Yes"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Mather*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="Yes"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Brother*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="1"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Sister
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="1"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
            {/* update button */}
            <Box
              sx={{
                pt: "16px",
                textAlign: "end",
              }}
            >
              <Button
                sx={{
                  width: "126px",
                  p: "7px 8px",
                  background: "#EC3384",
                  color: "#fff",
                  fontFamily: "BROmegaSemiBold",
                  textTransform: "capitalize",
                  "&:hover": {
                    background: "linear-gradient(180deg, #fa4a6f 0%, #532b79 100%)",
                    color: "#fff ",
                  }
                }}
              >
                Update Now
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
        {/* Partner Expectation */}
        <Accordion
          sx={{
            mb: "25px !important",
            border: "1px solid #E9E9E9",
            background: "#fff",
            boxShadow: "none",
            borderRadius: "4px !Important",
            p: "18px 20px",
            "& .css-o4b71y-MuiAccordionSummary-content": {
              borderBottom: "1px solid #D6D6D6",
              m: "0px"
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={{
                fontSize: "22px",
                fontFamily: "BROmegaMedium",
                color: "#020203",
                pb: "16px",
              }}
            >
              Partner Expectation
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "& .css-p1d8x5-MuiTypography-root": {
                  fontSize: "14px",
                  fontFamily: "BROmegaRegular",
                  mb: "8px"
                },
                "& input": {
                  width: "100%",
                  border: "1px solid #EDEDED",
                  padding: "8px 12px",
                  fontSize: "12px",
                  fontFamily: "BROmegaRegular",
                  color: "#23273A",
                },
                "& .css-q0jhri-MuiInputBase-root-MuiInput-root": {
                  width: "100%",
                  border: "1px solid #EDEDED",
                  padding: "4px 12px",
                  fontSize: "12px",
                  fontFamily: "BROmegaRegular",
                  color: "#23273A",
                  "&:before": {
                    display: 'none'
                  }
                },
              }}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={2}
                >
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Residence Country*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="USA"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Min Height (In Feet)*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="4"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Marital Status*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="Unmarried"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Children Acceptable*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="No"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Religion*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="Islam"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Education*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="M.B.B.S"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.7)",
                        fontSize: "16px",
                        fontFamily: "BROmegaRegular",
                      }}
                    >
                      Smoking Acceptable*
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      placeholder="No"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>
            {/* update button */}
            <Box
              sx={{
                pt: "16px",
                textAlign: "end",
              }}
            >
              <Button
                sx={{
                  width: "126px",
                  p: "7px 8px",
                  background: "#EC3384",
                  color: "#fff",
                  fontFamily: "BROmegaSemiBold",
                  textTransform: "capitalize",
                  "&:hover": {
                    background: "linear-gradient(180deg, #fa4a6f 0%, #532b79 100%)",
                    color: "#fff ",
                  }
                }}
              >
                Update Now
              </Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box >
  );
};

export default MyProfile;

MyProfile.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
