import React, { useState } from "react";
import {
  Typography,
  List,
  ListItemText as MuiListItemText,
} from "@material-ui/core";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Paper from "@mui/material/Paper";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";
import "./QuizCustomize.css";
import { useNavigate } from "react-router-dom";

// Quiz component
// QuizCustomize.jsx

const QuizCustomize = () => {
  const [totalItems, setTotalItems] = useState(null);
  const [timePerQuestion, setTimePerQuestion] = useState(null);
  const navigate = useNavigate();

  const handleTotalItemsChange = (value) => {
    setTotalItems(value);
  };

  const handleTimePerQuestionChange = (value) => {
    setTimePerQuestion(value);
  };

  const handleStartQuiz = () => {
    // Validate that both totalItems and timePerQuestion are selected
    if (totalItems !== null && timePerQuestion !== null) {
      // Navigate to the Quiz page with selected customization options
      navigate(
        `/quiz?totalItems=${totalItems}&timePerQuestion=${timePerQuestion}`
      );
    } else {
      // Display an error message or provide feedback to the user
      alert("Please select both Total Items and Time Per Question.");
    }
  };

  return (
    <div className="container">
      <h2 className="title">Total Items</h2>
      <div className="options">
        {[5, 10, 15].map((value) => (
          <label key={value} className="option">
            <input
              type="radio"
              name="totalItems"
              value={value}
              checked={totalItems === value}
              onChange={() => handleTotalItemsChange(value)}
            />
            {value}
          </label>
        ))}
      </div>

      <h2 className="title">Time Per Question (seconds)</h2>
      <div className="options">
        {[10, 15, 30].map((value) => (
          <label key={value} className="option">
            <input
              type="radio"
              name="timePerQuestion"
              value={value}
              checked={timePerQuestion === value}
              onChange={() => handleTimePerQuestionChange(value)}
            />
            {value}
          </label>
        ))}
      </div>

      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

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
        <DashboardIcon style={{ color: "lightgreen" }} />
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

export default function Settings() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [quizzes, setQuizzes] = useState([]);

  const retakeQuiz = (quizId) => {
    // Implement logic to retake the quiz
    console.log(`Retaking quiz with ID ${quizId}`);
  };

  const removeQuiz = (quizId) => {
    // Implement logic to remove the quiz
    console.log(`Removing quiz with ID ${quizId}`);
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
              backgroundImage:
                "linear-gradient(180deg, rgba(49, 210, 55, 0.47) 24.13%, rgba(6, 222, 196, 0.54) 74.13%)",
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
                    width: "850px",
                    height: "600px",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    marginTop: "80px",
                    marginLeft: "95px",
                    position: "relative",
                  }}
                >
                  {/* Integration of the Quiz component */}
                  <QuizCustomize />
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
