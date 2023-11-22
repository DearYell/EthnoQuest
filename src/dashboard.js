import React, { useState } from "react";
import {
  Button,
  Typography,
  // Card,
  // CardContent,
  List,
  // ListItem,
  ListItemText as MuiListItemText, // Rename to avoid conflict
} from "@material-ui/core"; // Import all components from material-ui/core
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
// import Divider from "@mui/material/Divider"; // Import the Divider component
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
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CompassCalibrationIcon from "@mui/icons-material/CompassCalibration";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./index.css";
// import { lightGreen } from "@mui/material/colors";

export default function Dashboard() {
  const [rotation, setRotation] = React.useState(0);
  const [open, setOpen] = React.useState(true);
  const [activeButton, setActiveButton] = useState(null);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const defaultTheme = createTheme();

  React.useEffect(() => {
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
                sx={{ width: "70%" }}
              />
            </Typography>
            <IconButton color="inherit">
              <ProfileCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          {/* <Toolbar
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
          </Toolbar> */}
          {/* <Divider /> */}
          <List component="nav">
            {LogoListItem}
            {mainListItems}
          </List>
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <img
                src="./dash.png"
                alt="Main"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

function ProfileCircle() {
  const profileImgUrl = "./profilesample.jpg";

  return (
    <div
      style={{ borderRadius: "50%", overflow: "hidden", marginRight: "8px" }}
    >
      <img
        src={profileImgUrl}
        alt=""
        style={{ width: "32px", height: "32px", objectFit: "cover" }}
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
