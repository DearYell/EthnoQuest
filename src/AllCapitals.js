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
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Paper from "@mui/material/Paper";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";

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
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>

    <ListItemButton component={Link} to="/AllCapitals">
      <ListItemIcon>
        <LocationOnIcon style={{ color: "lightgreen" }} />
      </ListItemIcon>
      <ListItemText primary="All Capitals" />
    </ListItemButton>

    <ListItemButton component={Link} to="/MyProfile">
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="My Profiles" />
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

const capitalImages = [
  { id: 1, name: "Manila", imagePath: "Manila.png" },
  { id: 2, name: "Jakarta", imagePath: "Jakarta.png" },
  { id: 3, name: "London", imagePath: "London.png" },
  { id: 4, name: "Tokyo", imagePath: "Tokyo.png" },
  { id: 5, name: "Ottawa", imagePath: "Ottawa.png" },
  { id: 6, name: "Beijing", imagePath: "Beijing.png" },
  { id: 7, name: "Seoul", imagePath: "Seoul.png" },
  { id: 8, name: "Bangkok", imagePath: "Bangkok.png" },
  { id: 9, name: "Bern", imagePath: "Bern.png" },
  { id: 10, name: "Brussels", imagePath: "Brussels.png" },
  { id: 11, name: "Havana", imagePath: "Havana.png" },
  { id: 12, name: "Madrid", imagePath: "Madrid.png" },
  // Add more capitals and their respective image paths here
];

export default function AllCapitals() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const renderCapitalImages = () => {
    return capitalImages.map(({ id, name, imagePath }, index) => {
      const row = Math.floor(index / 6); // Assuming 6 images per row
      const col = index % 6;
      const top = 80 + row * 220; // Adjust top position based on row
      const left = 50 + col * 160; // Adjust left position based on column

      return (
        <div
          key={id}
          style={{
            marginTop: "50px",
            position: "absolute",
            top: `${top}px`, // Interpolate top value
            left: `${left}px`, // Interpolate left value
          }}
        >
          <Link to={`/MHistory/${id}`} style={{ textDecoration: "none" }}>
            <img
              src={imagePath}
              alt={name}
              style={{ width: "125px", height: "140px" }}
            />
          </Link>
        </div>
      );
    });
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
              backgroundImage:
                "linear-gradient(180deg, rgba(49, 210, 55, 0.47) 24.13%, rgba(6, 222, 196, 0.54) 74.13%)",
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
            <Grid container spacing={1.5} justifyContent="center">
              <Grid item xs={7}>
                <Paper
                  elevation={3}
                  sx={{
                    width: "1030px",
                    height: "600px",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "80px",
                    marginLeft: "20px",
                    position: "relative",
                  }}
                >
                  <div
                    style={{ position: "absolute", top: "40px", left: "20px" }}
                  >
                    <Typography
                      align="left"
                      sx={{
                        color: "#fff",
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: "bold",
                      }}
                      style={{ fontWeight: "bold", fontSize: "1.2em" }}
                    >
                      Capitals
                    </Typography>
                  </div>
                  {renderCapitalImages()}
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
        position: "fixed",
        top: "10px",
        left: "calc(100% - 90px)" /* Adjusted value */,
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
    <Typography variant="body2" color="textSecondary" align="center" {...props}>
      <Link color="inherit" href="https://mui.com/">
        {/* MUI link */}
      </Link>
    </Typography>
  );
}
