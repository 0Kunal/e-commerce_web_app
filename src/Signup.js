import React from 'react';
import {TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
  },
  formControl: {
    margin: '10px',
    minWidth: 800,
  },
  submitButton: {
    margin: '20px',
    backgroundColor: 'teal',
    color: 'white',
    '&:hover': {
      backgroundColor: 'deepskyblue',
    },
  },
});

const Signup = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: '',
    dob: '',
    gender: '',
    city: '',
    country: '',
    subscription: false,
  });
  
  const handelChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  }

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h3" component="h2" color="limegreen">Sign Up now to start shopping</Typography>

        <TextField label="Name" name="name" value={state.name} onChange={handelChange} className={classes.formControl} />
        <TextField label="Date of Birth" name="dob" type="date" value={state.dob} onChange={handelChange} className={classes.formControl} inputLabelProps={{shrink: true}} />

        <FormControl className={classes.formControl}>
          <InputLabel>Gender</InputLabel>
          <Select value={state.gender} onChange={handelChange} inputProps={{name: 'gender'}}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'male'}>Male</MenuItem>
            <MenuItem value={'female'}>Female</MenuItem>
            <MenuItem value={'other'}>Other</MenuItem>
          </Select>
        </FormControl>

        <TextField label='City' name='city' value={state.city} onChange={handelChange} className={classes.formControl} />
        <TextField label='Country' name='country' value={state.country} onChange={handelChange} className={classes.formControl} />
        <TextField label="Set password" name="password" className={classes.formControl} />
        <TextField label="Confirm Password" name="confrm_password" className={classes.formControl} />

        <TextField label="Pin Code" name="pinCode" className={classes.formControl} />
        <TextField label="Landmark" name="landmark" className={classes.formControl} />
        <TextField label="Address" name="address" className={classes.formControl} />
        <TextField label="House Floor/Number" name="house" className={classes.formControl} />

        <Button type="submit" className={classes.submitButton}>Submit</Button>
      </form>
    </>
  )
}

export default Signup