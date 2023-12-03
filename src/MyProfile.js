import * as React from "react";
import {
  Typography,
  List,
  ListItemText as MuiListItemText, // Rename to avoid conflict
} from "@material-ui/core"; // Import all components from material-ui/core
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider"; // Import the Divider component
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';

const LogoListItem = (
  <ListItemButton>
    <ListItemIcon>
      <img
        src="./Logo.png"
        alt="Logo"
        style={{
          maxHeight: "40px",
          animation: "logoRotation 5s infinite linear", // Added rotation animation
        }}
      />
      <style>{`
        @keyframes logoRotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </ListItemIcon>
    <ListItemText primary="EthnoQuest" /> 
  </ListItemButton>
);

export const mainListItems = (
  <React.Fragment>
    {LogoListItem}
    <ListItemButton component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>

    <ListItemButton component={Link} to="/AllCapitals">
      <ListItemIcon>
        <LocationOnIcon />
      </ListItemIcon> 
      <ListItemText primary="All Capitals" />
    </ListItemButton>

    <ListItemButton component={Link} to="/MyProfile">
      <ListItemIcon>
        <AccountCircleIcon  style={{ color: 'lightgreen' }}/>
      </ListItemIcon>
      <ListItemText primary="My Profiles" />
    </ListItemButton>

    <ListItemButton component={Link} to="/Settings">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
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

const defaultTheme = createTheme();

export default function MyProfile() {
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
                pr: "25px",
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
             
              <IconButton color="inherit" sx={{ marginLeft: "auto" }}>
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
          backgroundColor: "white",
          flexGrow: 1,
          height: "100vh",
          width: "100v", // Changed to vw for full viewport width
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
                overflow: "hidden",
                backgroundSize: "cover",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid container spacing={1.5} justifyContent="center">
              <Grid item xs={7}>
                {/* Add Quiz History link */}
                        <Link to="/QuizHistory" style={{ textDecoration: "none" }}>
                          <div
                            sx={{
                              color: "#fff",
                              padding: "10px",
                              fontSize: "1em",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center", // Added justifyContent
                              backgroundColor: "green",
                              borderRadius: "15px",
                              marginTop: "10px",
                            }}
                          >
                            <Typography
                              variant="body1"
                              color="inherit"
                              sx={{
                                marginLeft: "5px",
                                textAlign: "center",
                                width: "100%",
                              }}
                            >
                              Quiz History
                            </Typography>
                          </div>
                        </Link>

                          <Paper
                        elevation={3}
                        sx={{
                          // padding: "20px",
                          width: '850px', 
                          height: '600px',
                          borderRadius: "15px",
                          display: "flex",
                          alignItems: "center",
                          flexDirection: 'column',
                          marginTop: "80px",
                          marginLeft: "95px",
                          position: 'relative',
                        }}
                        >
                      <div style={{ position: 'absolute', top: '30px', left: '20px' }}>
                        <Typography
                          align="left"
                          sx={{
                            color: "#fff",
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: "bold",
                          }}
                          style={{ fontWeight: "bold", fontSize: "1.2em" }}
                        >
                          Achievements
                        </Typography>

                        
                    </div>
                    {/* Other content within the Paper */}

                    <div style={{ marginTop: '50px', position: 'absolute', top: '80px', left: '50px' }}>
                     <img src="ActiveLearner.png" alt="Actives" style={{ width: '180px', height: '140px' }} />
                    </div>

                    <div style={{ marginTop: '50px', position: 'absolute', top: '80px', left: '250px' }}>
                     <img src="TestAcer.png" alt="Test" style={{ width: '150px', height: '140px' }} />
                    </div>

                    <div style={{ marginTop: '50px', position: 'absolute', top: '80px', left: '400px' }}>
                     <img src="CommitedLearner.png" alt="Commit" style={{ width: '230px', height: '140px' }} />
                    </div>

                    <div style={{ marginTop: '50px', position: 'absolute', top: '80px', left: '590px' }}>
                    <img src="NightOwl.png" alt="Owl" style={{ width: '220px', height: '140px' }} />
                  </div>

                  <div style={{ marginTop: '50px', position: 'absolute', top: '300px', left: '50px' }}>
                  <img src="EarlyBird.png" alt="Bird" style={{ width: '190px', height: '140px' }} />
                  </div>

                  <div style={{ marginTop: '50px', position: 'absolute', top: '300px', left: '220px' }}>
                  <img src="Streaker.png" alt="Streaker" style={{ width: '220px', height: '140px' }} />
                  </div>

                  <div style={{ marginTop: '50px', position: 'absolute', top: '300px', left: '415px' }}>
                  <img src="SetBuilder.png" alt="Set" style={{ width: '215px', height: '140px' }} />
                  </div>

                    
                  </Paper>
                </Grid>
              </Grid>
              <Copyright sx={{ pt: 4 }} />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
  

  function ProfileCircle() {
    const profileImgUrl = "profilesample.jpg";
  
    return (
      <div
        style={{
          position: 'fixed',
          top: '10px',
          left: 'calc(100% - 90px)', /* Adjusted value */
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={profileImgUrl}
          alt=""
          style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
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
