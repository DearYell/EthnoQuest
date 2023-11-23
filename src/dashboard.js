import React, { useState, useEffect } from "react";
import {
  Button,
  Typography,
  List,
  ListItemText as MuiListItemText,
} from "@material-ui/core";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CompassCalibrationIcon from "@mui/icons-material/CompassCalibration";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Avatar from "@mui/material/Avatar";
import { ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";


const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [rotation, setRotation] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 20);

    return () => clearInterval(rotateInterval);
  }, []);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonStyles = (buttonName) => {
    return {
      marginLeft: "10px",
      color: activeButton === buttonName ? "lightgreen" : "black",
    };
  };

  const LogoListItem = (
    <ListItemButton>
      <ListItemIcon>
        <img
          src="./Logo.png"
          alt="Logo"
          style={{
            maxHeight: "40px",
            marginTop: "10px",
            marginLeft: "10px",
            transform: `rotate(${rotation}deg)`,
          }}
        />
      </ListItemIcon>
      <MuiListItemText
        primary="EthnoQuest"
        style={{ marginLeft: "5px", color: "lightgreen" }}
      />
    </ListItemButton>
  );

  const mainListItems = (
    <div
      className="button"
      style={{
        marginTop: "20px",
        marginLeft: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Button
        startIcon={<DashboardIcon style={buttonStyles("dashboard")} />}
        onClick={() => handleButtonClick("dashboard")}
        style={{ color: "black" }}
      >
        Dashboard
      </Button>
      <Button
        startIcon={
          <CompassCalibrationIcon style={buttonStyles("allCapitals")} />
        }
        onClick={() => handleButtonClick("allCapitals")}
        style={{ color: "black", marginTop: "10px" }}
      >
        All Capitals
      </Button>
      <Button
        startIcon={<AccountCircleIcon style={buttonStyles("myProfiles")} />}
        onClick={() => handleButtonClick("myProfiles")}
        style={{ color: "black", marginTop: "10px" }}
      >
        My Profiles
      </Button>
      <Button
        startIcon={<SettingsIcon style={buttonStyles("settings")} />}
        onClick={() => handleButtonClick("settings")}
        style={{ color: "black", marginTop: "10px" }}
      >
        Settings
      </Button>
      <Button
        startIcon={<LogoutIcon style={buttonStyles("logOut")} />}
        onClick={() => handleButtonClick("logOut")}
        style={{ color: "black", marginTop: "10px" }}
      >
        Log Out
      </Button>
    </div>
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: 240,
      width: `calc(100% - 240px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: 240,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      }),
    },
  }));

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
              backgroundColor: "white",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              component="div"
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                marginLeft: "8px",
              }}
            >
              <SearchIcon style={{ marginTop: "10px", marginLeft: "100px" }} />
              <TextField
                label="Search capital around the world"
                variant="outlined"
                size="small"
                sx={{ width: "500px", minWidth: "300px" }}
              />
            </Typography>

            <IconButton color="inherit">
              <ProfileCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <List component="nav">
            {LogoListItem}
            {mainListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: "white",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Toolbar />
          <Container
            maxWidth="auto"
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                "linear-gradient(180deg, rgba(49, 210, 55, 0.47) 24.13%, rgba(6, 222, 196, 0.54) 74.13%)",
              backdropFilter: "blur(4px)",
              overflow: "hidden",
              backgroundSize: "cover",
            }}
          > 
            
            <Grid container spacing={3} sx={{ height: "600px", width: "600px" }}>
              <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                <Box // Edit here for the MainDash Content
                  sx={{
                    position: "absolute",
                    bottom: "400px",
                    left: "320px",
                    backgroundColor: "black",
                    padding: "20px",
                    borderRadius: "1px",
                    border: "15px solid white",
                    width: "100%",
                    maxWidth: "750px",
                  }}
                >
                  <Typography variant="h6" color="textPrimary">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                  </Typography>
                  <Button
                    variant="contained"
                    color="white"
                    style={{ marginRight: "10px" }}
                  >
                    Take a quiz
                  </Button>
                  <Button variant="contained" color="white">
                    Learn More
                  </Button>
                </Box>

                <Box //quizzes
                      sx={{
                        position: "absolute",
                        bottom: "310px",
                        left: "300px",
                        padding: "20px",
                        borderRadius: "15px",
                        width: "100%",
                        maxWidth: "370px",
                      }}
                    >
                      <Typography variant="h4" color="textPrimary">
                        <b>QUIZZES</b>
                      </Typography>
                      
                    </Box>

                    <Box // Button See all
                      sx={{
                        position: "absolute",
                        bottom: "320px",
                        left: "912px",
                        padding: "20px",
                        borderRadius: "15px",
                        width: "100%",
                        maxWidth: "370px",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="white"
                        style={{ marginLeft: "50px", marginRight: "50px" }}
                      >
                        See all
                      </Button>
                    </Box>


                    <Box // Box 1
                      sx={{
                        height: "130px", 
                        position: "absolute",
                        bottom: "25px",
                        left: "320px",
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "15px",
                        width: "50%",
                        maxWidth: "370px",
                        display: "flex", // Use flex display
                        flexDirection: "row", // Set the direction to row
                        alignItems: "center", // Align items to the center
                        justifyContent: "space-between", // Updated to "space-between" for spacing between text and button
                      }}
                    >
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar
                              alt=""
                              src="Australia.jpg"
                              sx={{ width: 100, height: 100, marginRight: 6 }}
                            />
                          </ListItemAvatar>
                          <MuiListItemText
                            primary={
                              <Typography variant="h5" color="textPrimary">
                                <b>Canberra</b>
                              </Typography>
                            }
                            secondary={
                              <Typography variant="h6" color="Gray">
                                Australia
                                <IconButton
                                    style={{
                                      display: "flex",  
                                      color: "green",
                                    }}
                                    onClick={() => {
                                      // Handle click event for the specific item
                                      console.log("Clicked > for Australia, Canberra");
                                    }}
                                  >
                                    <Typography variant="h6" color="white">
                                      &gt; View quiz
                                    </Typography>
                                  </IconButton>
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>
                    </Box>

                    
                    <Box // Box 2
                      sx={{
                        height: "130px",
                        position: "absolute",
                        bottom: "180px",
                        left: "320px",
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "15px",
                        width: "100%",
                        maxWidth: "370px",
                        display: "flex", // Use flex display
                        flexDirection: "row", // Set the direction to row
                        alignItems: "center", // Align items to the center
                        justifyContent: "space-between", // Updated to "space-between" for spacing between text and button
                      }}
                    >
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar
                              alt=""
                              src="Philippines.jpg"
                              sx={{ width: 100, height: 100, marginRight: 6 }}
                            />
                          </ListItemAvatar>
                          <MuiListItemText
                            primary={
                              <Typography variant="h5" color="textPrimary">
                                <b>Manila</b>
                              </Typography>
                            }
                            secondary={
                              <Typography variant="h6" color="Gray">
                                Philippines
                                <IconButton
                                    style={{
                                      display: "flex",  
                                      color: "green",
                                    }}
                                    onClick={() => {
                                      // Handle click event for the specific item
                                      console.log("Clicked > for Philippines, Manila");
                                    }}
                                  >
                                    <Typography variant="h6" color="white">
                                      &gt; View quiz
                                    </Typography>
                                  </IconButton>
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>
                    </Box>

                    <Box // Box 3
                      sx={{
                        height: "130px",
                        position: "absolute",
                        bottom: "25px",
                        left: "700px",
                        backgroundColor: "white",
                        padding: "20px",
                        borderRadius: "15px",
                        width: "100%",
                        maxWidth: "370px",
                        display: "flex", // Use flex display
                        flexDirection: "row", // Set the direction to row
                        alignItems: "center", // Align items to the center
                        justifyContent: "space-between", // Updated to "space-between" for spacing between text and button
                      }}
                    >
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar
                              alt="Avatar 3"
                              src="UK.jpg"
                              sx={{ width: 100, height: 100, marginRight: 6 }}
                            />
                          </ListItemAvatar>
                          <MuiListItemText
                            primary={
                              <Typography variant="h7" color="textPrimary">
                                <b>United Kingdom</b>
                              </Typography>
                            }
                            secondary={
                              <Typography variant="h6" color="Gray">
                                London
                                <IconButton
                                    style={{
                                      display: "flex",  
                                      color: "green",
                                    }}
                                    onClick={() => {
                                      // Handle click event for the specific item
                                      console.log("Clicked > for London, United Kingdom");
                                    }}
                                  >
                                    <Typography variant="h6" color="white">
                                      &gt; View quiz
                                    </Typography>
                                  </IconButton>
                              </Typography>
                            }
                          />
                        </ListItem>
                      </List>
                    </Box>

                    
                     <Box // Box 4
            sx={{
              height: "130px",
              position: "absolute",
              bottom: "180px",
              left: "700px",
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "15px",
              width: "100%",
              maxWidth: "370px",
              display: "flex", // Use flex display
              flexDirection: "row", // Set the direction to row
              alignItems: "center", // Align items to the center
              justifyContent: "space-between", // Updated to "space-between" for spacing between text and button
            }}
          >
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt=""
                    src="italy.jpg"
                    sx={{ width: 100, height: 100, marginRight: 6 }}
                  />
                </ListItemAvatar>
                <MuiListItemText
                  primary={
                    <Typography variant="h5" color="textPrimary">
                      <b>Rome</b>
                    </Typography>
                  }
                  secondary={
                    <Typography variant="h6" color="Gray">
                      Italy<br></br>
                      <IconButton
                        style={{
                          display: "flex",  
                          color: "green",
                        }}
                        onClick={() => {
                          // Handle click event for the specific item
                          console.log("Clicked > for Rome, Italy");
                        }}
                      >
                        <Typography variant="h6" color="white">
                          &gt; View quiz
                        </Typography>
                      </IconButton>
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>

                    <Box //Capitals
                      sx={{
                        position: "absolute",
                        bottom: "640px",
                        left: "1180px",
                        padding: "20px",
                        borderRadius: "15px",
                        width: "100%",
                        maxWidth: "370px",
                      }}
                    >
                      <Typography variant="h4" color="white">
                        <b>Capitals</b>
                      </Typography>
                      
                    </Box>

                    <Box // Button @Capital See all
                      sx={{
                        position: "absolute",
                        bottom: "640px",
                        left: "1440px",
                        padding: "20px",
                        borderRadius: "15px",
                        width: "100%",
                        maxWidth: "370px",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="white"
                        style={{ marginLeft: "50px", marginRight: "50px" }}
                      >
                        See all
                      </Button>
                    </Box>

                    <Box // List of Capitals
                          sx={{
                            position: "absolute",
                            bottom: "25px",
                            left: "1200px",
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "12px",
                            width: "100%",
                            maxWidth: "400px",
                          }}
                        >
                          <List>
                            {capitals.map((capital, index) => (
                              <ListItem key={index}>
                                <ListItemAvatar>
                                  <Avatar
                                    alt={`Avatar ${index + 1}`}
                                    src={process.env.PUBLIC_URL + `/${capital.country}.jpg`}
                                    sx={{ width: 65, height: 65, marginRight: 5 }}
                                  />
                                </ListItemAvatar>
                                <MuiListItemText
                                  primary={capital.city}
                                  secondary={capital.country}
                                />
                                <IconButton
                                  style={{
                                    backgroundColor: "green",
                                    borderRadius: "50%",
                                    width: "20px",
                                    height: "20px",
                                  }}
                                  onClick={() => {
                                    // Handle click event for the specific item
                                    console.log(`Clicked > for ${capital.city}, ${capital.country}`);
                                  }}
                                >
                                  <Typography variant="h6" color="white">
                                    &gt;
                                  </Typography>
                                </IconButton>
                              </ListItem>
                            ))}
                          </List>
                        </Box>


              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const capitals = [
  { city: "Manila", country: "Philippines" },
  { city: "Jakarta", country: "Indonesia" },
  { city: "Bangkok", country: "Thailand" },
  { city: "Hanoi", country: "Vietnam" },
  { city: "Paris", country: "France" },
  { city: "Tokyo", country: "Japan" },
  { city: "Moscow", country: "Russia" },
];

function ProfileCircle() {
  const profileImgUrl = "dummy.jpeg";

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        left: "calc(100% - 90px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={profileImgUrl}
        alt=""
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link color="inherit" href="https://mui.com/">
        {/* MUI link */}
      </Link>
    </Typography>
  );
}
