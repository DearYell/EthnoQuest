import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './Register.js'
import AdminVerification from './AdminVer.js'



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        EthnoQuest
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const defaultTheme = createTheme();

export default function SignInSide() {
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
    <ThemeProvider theme={defaultTheme}>
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
                sx={{ backgroundColor: 'white',  borderRadius: '10px', width: '500px', '& .MuiOutlinedInput-root': {borderColor: '#00BF63'} }}
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
                sx={{ backgroundColor: 'white',  borderRadius: '10px', width: '500px', '&.Mui-focused': { borderColor: '#00BF63' } }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" sx={{ '&.Mui-checked': { color: '#00BF63' } }} />}
                label="Remember me"
                sx={{ alignSelf: 'flex-end', marginLeft: '33px', marginRight: 'auto' }}
              />
              </Grid>
              <Grid container justifyContent="center">
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 1, mb: 1, backgroundColor: '#00BF63', color: 'white', width: '500px', '&:hover': { backgroundColor: '#96BB7C' } }}
              >
                Login as User
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 1, backgroundColor: '#00BF63', color: 'white', width: '500px', '&:hover': { backgroundColor: '#96BB7C' } }}
                component={Link}
                to="/AdminVer"
              >
                Login as Admin
                {/* <AdminVerification /> */}
              </Button>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item>
                <Link to="/Register" variant="body2" sx={{ color: 'white', fontSize: '1.1rem', fontFamily: 'Poppins, sans-serif', textDecorationColor: 'white'}}>
                  {"Register"}
                </Link>
                </Grid>
              </Grid>
              <Routes >
              <Route path="/Register" element={LoginForm}/>
              <Route path="/AdminVer" element={<AdminVerification />} />
            </Routes>
              <Copyright sx={{ mt: 10 }} />
            </Box>
          </Box>
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '55%' }}>
          <img src="./front.png" alt="front" style={{ width: '70%', height: 'auto', marginLeft: '100px'  }} />
        </div>
      </Grid>
      </Box>
    </ThemeProvider>
  );
}
