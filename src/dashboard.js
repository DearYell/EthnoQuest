import React, { useState, useEffect } from "react";
import { Button, Typography, List, ListItemText as MuiListItemText } from "@material-ui/core";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from "@mui/material/Divider";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined";



const LogoListItem = (
  <ListItemButton>
    <ListItemIcon>
      <img src="./Logo.png" alt="Logo" style={{ maxHeight: "40px" }} />
    </ListItemIcon>
    <MuiListItemText primary="EthnoQuest" />
  </ListItemButton>
);

export const mainListItems = (
  <React.Fragment>
    {LogoListItem}
    <ListItemButton component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon  style={{ color: "lightgreen" }}/>
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>

    <ListItemButton component={Link} to="/AllCapitals">
      <ListItemIcon>
        <LocationOnIcon />
      </ListItemIcon>
      <ListItemText primary="All Capitals" />
    </ListItemButton>

    <ListItemButton component={Link} to="/UserProfile">
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="My Profiles" />
    </ListItemButton>

    <ListItemButton component={Link} to="/QuizHistory">
      <ListItemIcon>
        <HistoryToggleOffOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Quiz History" />
    </ListItemButton>

    <ListItemButton component={Link} to="/Settings">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>

    <ListItemButton component={Link} to="/AboutUs">
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary="About Us" />
    </ListItemButton>

    <ListItemButton component={Link} to="/ContactUs">
      <ListItemIcon>
        <CallIcon />
      </ListItemIcon>
      <ListItemText primary="Contact Us" />
    </ListItemButton>

    <ListItemButton component={Link} to="/Login">
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>

      <ListItemText primary="Log Out" />
    </ListItemButton>
  </React.Fragment>
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
      overflowX: "auto",
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

const defaultTheme = createTheme();

export default function AllCapitals() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
              backgroundColor: "white", // Set background color to white
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
            <IconButton color="inherit">
              <SearchIcon sx={{ color: "black" }} />
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
              <TextField
                label="Search capital around the world"
                variant="outlined"
                size="small"
                sx={{ width: "500px", minWidth: "300px" }} // Adjusted width
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
          <Divider />
          <List component="nav">{mainListItems}</List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: "white", // Set background color to white
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
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
            backgroundImage: "linear-gradient(180deg, rgba(49, 210, 55, 0.47) 24.13%, rgba(6, 222, 196, 0.54) 74.13%)",
            // backdropFilter: "blur(4px)",
            overflow: "hidden",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Typography variant="h4" align="center" sx={{ color: "#fff", marginTop: "30px" }}>
            Welcome to My App!
          </Typography> */}
          <Grid container spacing={3} sx={{ height: "200px", width: "200px" }}>
              <Grid item xs={3} sx={{ display: "flex", justifyContent: "center", margin: "200px", } }>
                <Box // Edit here for the MainDash Content
                  sx={{
                    position: "absolute",
                    bottom: "280px",
                    left: "320px",
                    backgroundColor: "black",
                    padding: "20px",
                    borderRadius: "1px",
                    border: "15px solid white",
                    width: "50%",
                    maxWidth: "500px",
                  }}
                >
                  <Typography variant="h1" color="textPrimary">
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
                        bottom: "200px",
                        left: "300px",
                        padding: "20px",
                        borderRadius: "15px",
                        width: "100%",
                        maxWidth: "370px",
                      }}
                    >
                      <Typography variant="h5" color="textPrimary">
                        <b>QUIZZES</b>
                      </Typography>
                      
                    </Box>


                    <Box // Button See all
                      sx={{
                        position: "absolute",
                        bottom: "200px",
                        left: "660px",
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
                        height: "80px", 
                        position: "absolute",
                        bottom: "25px",
                        left: "320px",
                        backgroundColor: "white",
                        borderRadius: "15px",
                        width: "50%",
                        maxWidth: "250px",
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
                              sx={{ width: 70, height: 70, marginRight: 1 }}
                            />
                          </ListItemAvatar>
                          <MuiListItemText
                            primary={
                              <Typography color="textPrimary" sx={{ fontSize: "7px" }}>
                                  <b>Canberra</b>
                                </Typography>
                            }
                            secondary={
                              <Typography color="Gray" sx={{ fontSize: "7px" }}>
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
                                    <Typography color="white" sx={{ fontSize: "7px" }}>
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
                            height: "80px",
                            position: "absolute",
                            bottom: "120px",
                            left: "320px",
                            backgroundColor: "white",
                            borderRadius: "15px",
                            width: "100%",
                            maxWidth: "250px",
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
                                  sx={{ width: 70, height: 70, marginRight: 1 }}
                                />
                              </ListItemAvatar>
                              <MuiListItemText
                                primary={
                                  <Typography color="textPrimary" sx={{ fontSize: "7px" }}>
                                    <b>Manila</b>
                                  </Typography>
                                }
                                secondary={
                                  <Typography color="Gray" sx={{ fontSize: "7px" }}>
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
                                      <Typography color="white" sx={{ fontSize: "7px" }}>
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
                            height: "80px",
                            position: "absolute",
                            bottom: "25px",
                            left: "580px",
                            backgroundColor: "white",
                            borderRadius: "15px",
                            width: "100%",
                            maxWidth: "250px",
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
                                  sx={{ width: 70, height: 70, marginRight: 1 }}
                                />
                              </ListItemAvatar>
                              <MuiListItemText
                                primary={
                                  <Typography color="textPrimary" sx={{ fontSize: "2px" }}>
                                    <b>United Kingdom</b>
                                  </Typography>
                                }
                                secondary={
                                  <Typography color="Gray" sx={{ fontSize: "7px" }}>
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
                                      <Typography color="white" sx={{ fontSize: "7px" }}>
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
                            height: "80px",
                            position: "absolute",
                            bottom: "120px",
                            left: "580px",
                            backgroundColor: "white",
                            borderRadius: "15px",
                            width: "100%",
                            maxWidth: "250px",
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
                                  sx={{ width: 70, height: 70, marginRight: 1 }}
                                />
                              </ListItemAvatar>
                              <MuiListItemText
                                primary={
                                  <Typography color="textPrimary" sx={{ fontSize: "7px" }}>
                                    <b>Rome</b>
                                  </Typography>
                                }
                                secondary={
                                  <Typography color="Gray" sx={{ fontSize: "7px" }}>
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
                                      <Typography color="white" sx={{ fontSize: "7px" }}>
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
                        bottom: "440px",
                        left: "850px",
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
                        bottom: "440px",
                        left: "1050px",
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
                        bottom: "-50px",
                        left: "850px",
                        backgroundColor: "white",
                        borderRadius: "12px",
                        width: "100%",
                        maxWidth: "370px", // Adjusted maxWidth to make it smaller
                      }}
                    >
                      <List>
                        {capitals.map((capital, index) => (
                          <ListItem key={index}>
                            <ListItemAvatar>
                              <Avatar
                                alt={`Avatar ${index + 1}`}
                                src={process.env.PUBLIC_URL + `/${capital.country}.jpg`}
                                sx={{ width: 50, height: 50, marginRight: 1 }}
                              />
                            </ListItemAvatar>
                            <MuiListItemText
                              primary={<Typography variant="body2">{capital.city}</Typography>}
                              secondary={<Typography variant="body2">{capital.country}</Typography>}
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
