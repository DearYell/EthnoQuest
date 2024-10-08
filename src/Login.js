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
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
// import AdminVerification from "./AdminVer.js";
// import LoginForm from "./Register.js";
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
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 50);

    return () => clearInterval(rotateInterval);
  }, []);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const checkIsAdmin = async (email) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/admin/loginAdmin",
        {
          emailAddress: email,
        }
      );

      const isAdmin = response.data;

      return isAdmin;
    } catch (error) {
      console.error("Error checking admin status:", error.message);
      return false; // Assume not an admin in case of an error
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        emailAddress,
        password,
      });

      const userData = response.data;

      const isAdmin = await checkIsAdmin(emailAddress);

      if (isAdmin) {
        navigate("/dashboardAdmin");
        window.alert("Login successful for admin user.");
        console.log(userData);
      } else {
        navigate("/dashboard");
        window.alert("Login successful for non-admin user.");
        console.log(userData);
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      window.alert("Login failed. Please check your credentials.");
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
                    marginTop: "5px",
                    marginLeft: "30px",
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
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "10px",
                      width: "500px",
                      "& .MuiOutlinedInput-root": { borderColor: "#00BF63" },
                    }}
                  />
                  <TextField
                    margin="dense"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  {/* {passwordError && (
                    <Typography variant="body2" color="error">
                      {passwordError}
                    </Typography>
                  )} */}
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
                    type="button"
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
                    onClick={handleSubmit}
                  >
                    Login as User
                  </Button>
                  <Button
                    type="button"
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
                    component={Link} to='/dashboardAdmin'
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
