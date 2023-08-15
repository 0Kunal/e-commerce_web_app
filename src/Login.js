import React from 'react';
import {Button, TextField, Grid, Typography} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  left: {
    backgroundColor: 'green',
    color: 'white',
    padding: '40px',
  },
  right: {
    backgroundColor: 'white',
    padding: '40px',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '2rem',
    paddingBottom: '10px',
  },
  form: {
    marginTop: '40px',
  },
  input: {
    marginBottom: '20px',
  },
  button: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  googleButton: {
    backgroundColor: 'brown',
    color: 'white',
    '&:hover': {
      backgroundColor: 'red',
    },
  },
});

const Login = () => {

  const classes = useStyles();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    console.log('Login with email and password');
  };

  const handleGoogleSigninClick = () => {
    console.log("Sign in with Google");
  }

  return (
    <>
      <Grid container classname={classes.root}>
        <Grid item xs={12} sm={6} className={classes.left}>
          <Typography variant="h4" align="center">
            A picture will go here
          </Typography>
          <Typography variant="h6" align="center">
            A Picture will ho here
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.right}>
          <Typography  variant="h4" className={classes.logo}>
            Sign in to continue shopping
          </Typography>
          <form classname={classes.form} noValidate>
            <TextField className={classes.input} label="Email" type="email" value={email} onChange={handleEmailChange} fullWidth required />
            <TextField className={classes.input} label="Password" type="password" value={password} onChange={handlePasswordChange} fullWidth required />
            <Button className={classes.button} variant="contained" color="primary" onClick={handleLoginClick} fullWidth>Log In</Button>
            <Typography variant="body2" align="center">
              Forgot Password?
            </Typography>
            <Button className={`${classes.button} ${classes.googleButton}`} variant="contained" onClick={handleGoogleSigninClick} fullWidth>Sign In With Google</Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default Login