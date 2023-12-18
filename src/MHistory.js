import React, { useState, useEffect } from 'react';
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
import { Link, useParams } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"; 
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Paper from '@mui/material/Paper';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from "@mui/icons-material/Info";
import axios from 'axios';

const LogoListItem = (
  <ListItemButton>
    <ListItemIcon>
      <img src="/Logo.png" alt="Logo" style={{ maxHeight: "40px" }} />
    </ListItemIcon>
    <MuiListItemText primary="EthnoQuest" />
  </ListItemButton>
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

const capitalsHistory = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/PanaMa.jpg`, // Image associated with Manila
  },
  // Add more capital histories with IDs, names, countries, histories, and images
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/JaPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/LoPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 4,
    image: `${process.env.PUBLIC_URL}/ToPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 5,
    image: `${process.env.PUBLIC_URL}/OtPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 6,
    image: `${process.env.PUBLIC_URL}/BePano.jpg`, // Image associated with Jakarta
  },
  {
    id: 7,
    image: `${process.env.PUBLIC_URL}/SeuPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 8,
    image: `${process.env.PUBLIC_URL}/BapaNo.jpg`, // Image associated with Jakarta
  },
  {
    id: 9,
    image: `${process.env.PUBLIC_URL}/BerPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 10,
    image: `${process.env.PUBLIC_URL}/BruPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 11,
    image: `${process.env.PUBLIC_URL}/HaPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 12,
    image: `${process.env.PUBLIC_URL}/MaPano.jpg`, // Image associated with Jakarta
  },
  // Add other capital histories here
];

export default function MHistory() {
  const { id } = useParams();
  const [open, setOpen] = React.useState(true);
  const [historyData, setHistoryData] = useState({});
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const selectedCapital = capitalsHistory.find(capital => capital.id === parseInt(id));

  if (!selectedCapital) {
    return (
      <div>
        <Typography variant="h4">Capital Not Found</Typography>
        <Typography variant="body1">Sorry, the capital with ID {id} was not found.</Typography>
      </div>
    );
  }

  
  const fetchHistoryData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/history/getHistoryById/${id}`);
      setHistoryData(response.data);
    } catch (error) {
      console.error('Error fetching history:', error.message);
    }
  };

  // Fetch data immediately when the component is rendered
  // and avoid using useEffect
  if (id) {
    fetchHistoryData();
  }

 

  const mainListItems = (
    <React.Fragment>
      {LogoListItem}
      <ListItemButton>
        <ListItemIcon>
          <HistoryEduIcon  style={{ color: 'lightgreen' }}/>
        </ListItemIcon >
        <ListItemText primary="History" />
      </ListItemButton>
      <ListItemButton component={Link} to={`/MTradition/${id}`}>
        <ListItemIcon>
          <AutoStoriesIcon/>
        </ListItemIcon>
        <ListItemText primary="Tradition" />
      </ListItemButton>
      <ListItemButton  component={Link} to={`/MCulture/${id}`}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Culture" />
      </ListItemButton>
      <ListItemButton component={Link} to={`/MHoliday/${id}`}>
        <ListItemIcon>
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Holidays" />
      </ListItemButton>
      <ListItemButton component={Link} to="/AllCapitals">
      <ListItemIcon>
        <LocationOnIcon />
      </ListItemIcon>
      <ListItemText primary="All Capitals" />
    </ListItemButton>
    </React.Fragment>
  );

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
            overflow: "hidden",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
         
          <Grid container spacing={1.5} justifyContent="center">
          <Grid item xs={7}>
            <Paper
              elevation={3}
              sx={{
                width: '1000px', 
                height: '600px',
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                flexDirection: 'column',
                marginTop: "80px",
                marginLeft: "20px",
                position: 'relative',
              }}
            >
               <div style={{ position: "absolute", top: "20px", left: "20px" }}>
                  <Typography
                    align="left"
                    sx={{
                      color: "#fff",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "bold",
                    }}
                    style={{
                      fontWeight: "bold",
                      fontSize: "1em",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    {historyData.name}
                  </Typography>
                </div>

                <div style={{ position: "absolute", top: "40px", left: "20px" }}>
                  <Typography
                    align="left"
                    sx={{
                      color: "#6082B6",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "bold",
                    }}
                    style={{ fontSize: "1em", color: "#808080" }}
                  >
                    {historyData.cname}
                  </Typography>
                </div>

                <div style={{ marginTop: "50px", position: "absolute", top: "50px", left: "55px" }}>
                  <img
                    src={selectedCapital.image}
                    alt={selectedCapital.name}
                    style={{ width: "890px", height: "200px" }}
                  />
                </div>

                <div style={{ position: "absolute", top: "330px", left: "35px", padding: "25px" }}>
                  <Typography
                    align="left"
                    sx={{
                      color: "#6082B6",
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: "bold",
                    }}
                    style={{ fontSize: "1.1em", color: "#000000" }}
                  >
                    {historyData.hname}
                  </Typography>
                </div>

              {/* Other content within the Paper */}
              
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
