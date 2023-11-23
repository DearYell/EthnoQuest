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

export default function AdminDashboard() {
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

  const CenterBox = styled(Box)({
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "20px",
    position: "absolute",
    top: "15%",
    left: "17%",
    width: "900px", // Adjust the width
    height: "300px", // Adjust the height
  });

  const CenterBox2 = styled(Box)({
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "20px",
    position: "absolute",
    top: "58%",
    left: "17%",
    width: "900px", // Adjust the width
    height: "300px", // Adjust the height
  });

  const RightRectangle = styled(Box)({
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "20px",
    position: "absolute",
    top: "15%",
    right: "3%", // Adjust the distance from the right edge
    width: "400px", // Adjust the width
    height: "650px", // Adjust the height
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          backgroundImage: "linear-gradient(90deg, #0097b2, #7ed957)",
          minHeight: "100vh", // Set to 100vh for full viewport height
        }}
      >
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

        {/* Center Boxes */}
        <CenterBox>
          {/* Add any other content inside the centered box */}
        </CenterBox>
        <CenterBox2>
          {/* Add any other content inside the centered box */}
        </CenterBox2>
        <RightRectangle>
          {/* Add any other content inside the right rectangle */}
        </RightRectangle>
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
  const profileImgUrl = "profilesample.jpg";

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
