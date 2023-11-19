import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import AdminVerification from "./AdminVer.js";
import LoginForm from "./Register.js";
import axios from "axios";

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

function SignInSide() {
  const [rotation, setRotation] = React.useState(0);
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // const history = useHistory();

  React.useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 50);

    return () => clearInterval(rotateInterval);
  }, []);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      // Make a POST request to your login endpoint
      const response = await axios.post("http://localhost:8080/user/login", {
        emailAddress: data.get("email"),
        password: data.get("password"),
      });

      // Handle the response, e.g., redirect or update state
      console.log("Login successful:", response.data);

      // Example: Redirect to a new page after successful login
      // history.push('/dashboard');
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Login failed:", error.message);
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
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
                    autoComplete="current-password"
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
                            onClick={handleTogglePasswordVisibility}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="remember"
                        color="primary"
                        sx={{ "&.Mui-checked": { color: "#00BF63" } }}
                      />
                    }
                    label="Remember me"
                    sx={{
                      alignSelf: "flex-end",
                      marginLeft: "33px",
                      marginRight: "auto",
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
                    Login as User
                  </Button>
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
                    to="/AdminVer"
                  >
                    Login as Admin
                  </Button>
                </Grid>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Link
                      to="/Register"
                      variant="body2"
                      sx={{
                        color: "white",
                        fontSize: "1.1rem",
                        fontFamily: "Poppins, sans-serif",
                        textDecorationColor: "white",
                      }}
                    >
                      {"Register"}
                    </Link>
                  </Grid>
                </Grid>
                <Routes>
                  <Route path="/Register" element={LoginForm} />
                  <Route path="/AdminVer" element={<AdminVerification />} />
                </Routes>
                <Copyright sx={{ mt: 10 }} />
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

export default SignInSide;
