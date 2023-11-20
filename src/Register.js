import React, { useState } from "react";
import {
  Button,
  TextField,
  Paper,
  Box,
  Grid,
  Typography,
  CssBaseline,
} from "@mui/material";
import { Link, Routes, Route } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Login from "./Login";
import axios from "axios";

// const defaultTheme = createTheme();

const RegistrationForm = () => {
  const [rotation, setRotation] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleTogglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword(
        (prevShowConfirmPassword) => !prevShowConfirmPassword
      );
    }
  };

  React.useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 50);

    return () => clearInterval(rotateInterval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.log("Passwords do not match");
      // You can also set an error state or display an error message to the user
      return;
    }

    try {
      // Make a POST request to your registration endpoint
      const response = await axios.post(
        "http://localhost:8080/user/insertUser",
        {
          emailAddress: formData.email,
          password: formData.password,
        }
      );

      // Handle the response, e.g., display a success message
      console.log("Registration successful:", response.data);

      // Clear the form fields after successful registration
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Redirect to login page or perform other actions after successful registration
      // history.push('/login');
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Registration failed:", error.message);
    }
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ backgroundColor: "#7ED957" }}
        >
          <Box
            sx={{
              my: 10,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 500,
                  fontSize: "3rem",
                  marginLeft: "-250px",
                }}
              >
                Welcome to
                <br />
                our App
              </Typography>
              <img
                src="./Logo.png"
                alt="Logo"
                style={{
                  width: "200px",
                  height: "auto",
                  position: "absolute",
                  top: 40,
                  left: 300,
                  zIndex: 2,
                  transform: `rotate(${rotation}deg)`,
                }}
              />
            </Box>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
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
                  value={formData.email}
                  onChange={handleChange}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    width: "500px",
                    "& .MuiOutlinedInput-root": { borderColor: "#00BF63" },
                  }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    width: "500px",
                    "&.Mui-focused": { borderColor: "#00BF63" },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={() =>
                            handleTogglePasswordVisibility("password")
                          }
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "10px",
                    width: "500px",
                    "&.Mui-focused": { borderColor: "#00BF63" },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={() =>
                            handleTogglePasswordVisibility("confirmPassword")
                          }
                        >
                          {showConfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid container justifyContent="center">
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 1,
                    mb: 1,
                    backgroundColor: "#00BF63",
                    color: "white",
                    width: "500px",
                    "&:hover": { backgroundColor: "#96BB7C" },
                  }}
                >
                  Register Account
                </Button>
              </Grid>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link
                    to="/"
                    variant="body2"
                    sx={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontFamily: "Poppins, sans-serif",
                      textDecorationColor: "white",
                    }}
                  >
                    {"Login"}
                  </Link>
                </Grid>
              </Grid>
              {/* Copyright component */}
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                sx={{ mt: 5 }}
              >
                {"Copyright © "}
                <Link color="inherit" href="https://mui.com/">
                  EthnoQuest
                </Link>{" "}
                {new Date().getFullYear()}
                {"."}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "55%",
          }}
        >
          <img
            src="./front.png"
            alt="front"
            style={{ width: "70%", height: "auto", marginLeft: "100px" }}
          />
        </div>
      </Grid>
      <Routes>
        <Route path="/Login" element={Login} />
      </Routes>
    </Box>
  );
};

export default RegistrationForm;
