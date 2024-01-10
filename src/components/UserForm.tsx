import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
const UserForm = () => {
  const [gender, setGender] = useState("Male");
  const [profileType, setProfileType] = useState("Groom");
  const [country, setCountry] = useState("Bangladesh");

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box component="form" sx={{}} noValidate autoComplete="on">
      <Grid
        container
        spacing="20px"
        sx={{
          "& label": {
            fontSize: "14px",
            color: "#7B7D89",
          },
          "& input": {
            fontSize: "14px",
            color: "#23273A",
            padding: "8px 14px",
            fontFamily: "BROmegaRegular",
          },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            pt: "0",
          }}
        >
          <InputLabel htmlFor="inputFirstName">Create profile for</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            value={profileType}
            defaultValue="Self"
            onChange={(event) => setProfileType(event.target.value as string)}
            fullWidth
            sx={{
              marginTop: "6px",
              "& .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                { padding: "7px 14px" },
            }}
          >
            <MenuItem value={30}>Bride</MenuItem>
            <MenuItem value={10}>Groom</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <InputLabel htmlFor="inputFirstName">First Name</InputLabel>
          <TextField
            id="outlined-basic"
            size="small"
            variant="outlined"
            placeholder="Cameron"
            fullWidth
            sx={{ marginTop: "6px" }}
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel htmlFor="inputLastName">Last Name</InputLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Williamson"
            sx={{ marginTop: "6px" }} // Adjust the margin as needed
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            fullWidth
            placeholder="kenzi.lawson@example.com"
            sx={{ marginTop: "6px" }} // Adjust the margin as needed
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor="email">Mobile Number</InputLabel>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            fullWidth
            placeholder="123 5678 900"
            sx={{ marginTop: "6px" }} // Adjust the margin as needed
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            pt: "0",
          }}
        >
          <InputLabel htmlFor="inputGender">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            value={gender}
            defaultValue="Male"
            onChange={(event) => setGender(event.target.value as string)}
            fullWidth
            sx={{
              marginTop: "6px",
              "& .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                { padding: "6.5px 14px" },
            }}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </Select>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            pt: "0",
          }}
        >
          <InputLabel htmlFor="inputGender">Country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            size="small"
            value={country}
            defaultValue="Self"
            onChange={(event) => setCountry(event.target.value as string)}
            fullWidth
            sx={{
              marginTop: "6px",
              "& .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                { padding: "7px 14px" },
            }}
          >
            <MenuItem value={30}>Bangladesh</MenuItem>
            <MenuItem value={10}>Nepal</MenuItem>
            <MenuItem value={20}>Pakistan</MenuItem>
            <MenuItem value={20}>Sri Lanka</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <InputLabel htmlFor="inputYourPass">Create Your Password</InputLabel>
          <OutlinedInput
            // id="outlined-adornment-password"
            id="outlined-adornment-weight"
            sx={{ marginTop: "6px" }}
            placeholder="********"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item xs={6}>
          <InputLabel htmlFor="inputConfirmPass">
            Confirm Your Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            sx={{ marginTop: "6px" }}
            placeholder="********"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={1}>
              <Checkbox
                sx={{
                  p: "0",

                  fontFamily: "BROmegaRegular",
                  "& svg": {
                    fontSize: "20px",
                  },
                }}
              />
            </Grid>
            <Grid item xs={11}>
              <Typography
                component="span"
                sx={{
                  color: "#7B7D89",
                  fontSize: "14px",
                  fontFamily: "BROmegaRegular",
                  ml: "-8px",
                  "& span": {
                    color: "#000",
                    fontSize: "14px",
                    fontFamily: "BROmegaRegular",
                  },
                }}
              >
                I have read and accept the{" "}
                <Typography component="span">Terms & Conditions</Typography> and{" "}
                <Typography component="span">Privacy Policy.</Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            className="primary-btn"
            fullWidth
            sx={{
              p: "14.63px 12px",
              mt: "10px",
            }}
          >
            Create Account
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserForm;
