import React from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Register = () => {
  return (
    <Box padding={2}>
      <Grid container borderRadius={3} overflow={"hidden"}>
        <Grid item xs={12} sm={7} sx={{ backgroundColor: "blue" }}>
          <img
            src="https://www.hktechit.com/wp-content/uploads/2020/01/Custom-ECommerce-Website-Development-vector-image.png"
            alt="login"
            objectFit="cover"
            style={{ maxWidth: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={5} sx={{ backgroundColor: "whitesmoke" }}>
          <Box padding={2}>
            <Typography variant="h4" gutterBottom textAlign={"center"}>
              Register Here
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <RadioGroup
                  row
                  sx={{ alignItems: "center" }}
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <Typography variant="h6" marginRight={2}>
                    Gender
                  </Typography>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xs={12}>
                <DatePicker
                  label="Date of Birth"
                  inputFormat="dd/MM/yyyy"
                  size="small"
                  slotProps={{
                    textField: {
                      size: "small",
                      fullWidth: true,
                      required: true,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  rows={4}
                  label="Address"
                  size="small"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="City"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="pincode"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={6} textAlign={"end"}>
                <Button variant="contained" color="error">
                  Reset
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="contained" color="success">
                  Register
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Register;
