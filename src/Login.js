import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState(null);

  const validateSignIn = () => {
    setEmailError('');
    setPasswordError('');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError('Invalid email address');
      return false;
    }

    if (!password) {
      setPasswordError('Password is required');
      return false;
    }

    return true;
  };

  const validateRegistration = () => {
    setEmailError('');
    setPasswordError('');

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setEmailError('Invalid email address');
      return false;
    }

    if (!password) {
      setPasswordError('Password is required');
      return false;
    }

    if (password.length < 6) {
      // Example minimum length
      setPasswordError('Password must be at least 6 characters long');
      return false;
    }

    return true;
  };

  const signIn = (e) => {
    e.preventDefault();

    if (!validateSignIn()) return;

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate('/account');
      })
      .catch((error) => {
        // Handle specific sign-in errors
        if (error.code === 'auth/wrong-password') {
          setError('Incorrect password');
        } else if (error.code === 'auth/user-not-found') {
          setError('No user found with this email');
        } else if (error.code === 'auth/invalid-email') {
          setError('Invalid email address');
        } else {
          setError('Error signing in');
        }
      });
  };

  const register = (e) => {
    e.preventDefault();

    if (!validateRegistration()) return;

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigate('/account');
      })
      .catch((error) => {
        // Handle different types of errors here
        if (error.code === 'auth/email-already-in-use') {
          setError('Email already in use');
        } else if (error.code === 'auth/weak-password') {
          setError('Password is too weak');
        } else {
          setError('Error registering');
        }
      });
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '100vh' }}>
      <Grid
        container
        sx={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Grid
          item
          xs={12}
          sm={8}
          md={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Link to='/' style={{ textDecoration: 'none' }}></Link>
          <Card className='login__container'>
            <CardContent>
              <Typography variant='h5' component='h1'>
                Login
              </Typography>

              <form>
                <TextField
                  label='E-mail'
                  type='email'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!emailError}
                  helperText={emailError}
                />

                <TextField
                  label='Password'
                  type='password'
                  variant='outlined'
                  fullWidth
                  margin='normal'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!passwordError}
                  helperText={passwordError}
                />

                <Button
                  type='submit'
                  variant='contained'
                  color='primary'
                  size='large'
                  fullWidth
                  onClick={signIn}
                  className='login__signInButton'
                  style={{ marginTop: '20px' }}>
                  Log In
                </Button>
              </form>

              <Typography
                variant='body2'
                color='textSecondary'
                style={{ marginTop: '15px' }}>
                By signing in you agree to the Triumph Website Conditions of Use
                & Sale. Please see our Privacy Notice, our Cookies Notice, and
                our Interest-Based Ads Notice.
              </Typography>

              <Button
                variant='outlined'
                fullWidth
                onClick={register}
                size='large'
                className='login__registerButton'
                style={{ marginTop: '15px' }}>
                Create your Account
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {error && (
        <Snackbar
          open={true}
          autoHideDuration={6000}
          onClose={() => setError(null)}
          anchorOrigin={{ vertical: 'left', horizontal: 'center' }}
          sx={{
            position: 'fixed',
            top: '16px', // Adjust for desired spacing from the top
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1300, // Ensure Snackbar is above other content
          }}>
          <Alert
            onClose={() => setError(null)}
            severity='error'
            sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
}

export default Login;
