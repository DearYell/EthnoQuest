import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login.js'
 
const defaultTheme = createTheme();
 
const LoginForm = () => {
  const [rotation, setRotation] = useState(0);
 
  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 50);
 
    return () => clearInterval(rotateInterval);
  }, []);
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
 
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ backgroundColor: '#7ED957' }}>
          <Box
            sx={{
              my: 10,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Typography component="h1" variant="h5" sx={{ color: 'white', fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '3rem', marginLeft: '-250px' }}>
                Welcome to<br />our App
              </Typography>
              <img src="./Logo.png" alt="Logo" style={{ width: '200px', height: 'auto', position: 'absolute', top: 40, left: 300, zIndex: 2, transform: `rotate(${rotation}deg)`, }} />
            </Box>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Grid container justifyContent="center">
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  sx={{ backgroundColor: 'white', borderRadius: '10px', width: '500px', '& .MuiOutlinedInput-root': { borderColor: '#00BF63' } }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{ backgroundColor: 'white', borderRadius: '10px', width: '500px', '&.Mui-focused': { borderColor: '#00BF63' } }}
                />
 
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="Confirm Password"
                  label="Confirm Password"
                  type="password"
                  id="confirmpassword"
                  autoComplete="current-password"
                  sx={{ backgroundColor: 'white', borderRadius: '10px', width: '500px', '&.Mui-focused': { borderColor: '#00BF63' } }}
                />
              </Grid>
              <Grid container justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 1, mb: 1, backgroundColor: '#00BF63', color: 'white', width: '500px', '&:hover': { backgroundColor: '#96BB7C' } }}
                >
                  Register Account
                </Button>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link to="/Login" variant="body2" sx={{ color: 'white', fontSize: '1.1rem', fontFamily: 'Poppins, sans-serif', textDecorationColor: 'white' }}>
                    {"Login"}
                  </Link>
                </Grid>
              </Grid>
              {/* Copyright component */}
              <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                  EthnoQuest
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '55%' }}>
          <img src="./front.png" alt="front" style={{ width: '70%', height: 'auto', marginLeft: '100px' }} />
        </div>
      </Grid>
      <Routes >
              <Route path="/Login" element={Login}/>
            </Routes>
    </Box>
  );
};
 
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
  if (formData.password !== formData.confirmPassword) {
    console.log('Passwords do not match');
    // You can also set an error state or display an error message to the user
    return;
  }
 
  // Reset any previous error messages
  // (this assumes you have an error state, you can add it to your component state if needed)
  // setError('');
 
  console.log('Form submitted:', formData);
  // Add your registration logic here
  };
};
 
 
 
const CombinedForm = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <LoginForm />
        <RegistrationForm />
      </div>
    </ThemeProvider>
  );
};
 
export default CombinedForm;