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
              Sign-In to start shopping
            </Typography>
            <Grid container spacing={2}>
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
                <TextField
                  label="Password"
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
                  Login
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
