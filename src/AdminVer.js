import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard.js";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        EthnoQuest
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function AdminVerification() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 50); // Adjust the rotation speed by changing the interval

    return () => clearInterval(rotateInterval);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
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
              <Box sx={{ display: "flex", alignItems: "center", mb: 10 }}>
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
                  Admin
                  <br />
                  Verification
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
              <Typography
                component="h1"
                variant="h5"
                sx={{
                  color: "white",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 100,
                  fontSize: "1.1rem",
                  marginLeft: "-210px",
                }}
              >
                An email with a six-digit verification
                <br />
                code has been sent to your email
              </Typography>
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
                    id="Verification Code"
                    label="Enter Verification Code"
                    name="Verification Code"
                    autoComplete="Verification Code"
                    autoFocus
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      width: "500px",
                      "& .MuiOutlinedInput-root": { borderColor: "#00BF63" },
                    }}
                  />
                </Grid>
                <Grid container justifyContent="center">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 1,
                      mb: 1,
                      backgroundColor: "#00BF63",
                      color: "white",
                      width: "500px",
                      "&:hover": { backgroundColor: "#96BB7C" },
                    }}
                    component={Link}
                    to="/dashboard"
                  >
                    Login as Admin
                  </Button>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
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
      </Box>
    </ThemeProvider>
  );
}
