import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Typography,
  List,
  ListItemText as MuiListItemText,
  Country, // Rename to avoid conflict
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

import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import HomeIcon from "@mui/icons-material/Home";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined";

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
        <AccountCircleIcon style={{ color: "lightgreen" }} />
      </ListItemIcon>
      <ListItemText primary="Quizzes" />
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

  const [country, setCountry] = useState([]);

  const getCountry = () => {
    axios
      .get("http://localhost:8080/country/insertCountry")
      .then((response) => {
        console.log(response);
        const countryData = response.data;
        setCountry(countryData);
      })
      .catch((error) => {
        console.error("Error fetching country:", error.message);
      });
  };

  const getAllCountries = () => {
    axios
      .get("http://localhost:8080/country/getAllCountries")
      .then((response) => {
        console.log("Country data:", response.data);
        const countryData = response.data;
        setCountry(countryData);
      })
      .catch((error) => {
        console.error("Error fetching all countries:", error.message);
      });
  };

  const deleteCountry = (id) => {
    const confirmDeletion = window.confirm(
      "Are you sure you want to delete this country?"
    );
    if (confirmDeletion) {
      axios
        .delete(`http://localhost:8080/country/deleteCountry/${id}`)
        .then((response) => {
          console.log(`Country with ID ${id} removed successfully`);
          // Update the state to reflect the changes
          setCountry((prevCountry) => prevCountry.filter((b) => b.id !== id));
        })
        .catch((error) => {
          console.error(`Error removing country with ID ${id}:`, error.message);
        });
    }
  };

  const updateCountry = (id, updatedData) => {
    const updateUrl = `http://localhost:8080/country/updateCountry?countryid=${id}`;

    axios
      .put(updateUrl, updatedData)
      .then((response) => {
        console.log(`Badge with ID ${id} updated successfully`);
        // Additional actions after a successful update
        // For example, you might want to fetch updated data or update state
        getCountry(); // Fetch updated data after the update
      })
      .catch((error) => {
        console.error(`Error updating Badge with ID ${id}:`, error.message);
      });
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    console.log("Country state:", country);
  }, [country]);

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
                <ListItemButton
                  sx={{ marginTop: "50px" }}
                  onClick={() => {
                    const newCountry = window.prompt("Enter Country Name:");
                    if (newCountry) {
                      axios
                        .post("http://localhost:8080/country/insertCountry", {
                          countryName: newCountry,
                        })
                        .then(() => {
                          // Update the UI by fetching the updated data
                          getCountry();
                        })
                        .catch((error) => {
                          console.error("Error adding country:", error.message);
                        });
                    }
                  }}
                >
                  <ListItemIcon>
                    <MilitaryTechIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Country" />
                </ListItemButton>

                <Paper
                  elevation={3}
                  sx={{
                    // padding: "20px",
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
                  {/* Other content within the Paper */}
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Country ID</TableCell>
                          <TableCell>Country Name</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {country.map((country) => (
                          <TableRow key={country.countryid}>
                            <TableCell>{country.countryid}</TableCell>
                            <TableCell>{country.countryName}</TableCell>
                            <TableCell>
                              <Button
                                variant="outlined"
                                sx={{
                                  margin: "5px",
                                  color: "green",
                                  borderColor: "green",
                                }}
                                onClick={() => {
                                  const Id = window.prompt(
                                    "Enter country id entry to update:"
                                  );
                                  const newCountry = window.prompt(
                                    "Enter new country name:"
                                  );
                                  if (Id && newCountry) {
                                    updateCountry(Id, {
                                      countryName: newCountry,
                                    });
                                  }
                                }}
                              >
                                Edit Quiz
                              </Button>

                              <Button
                                variant="outlined"
                                sx={{
                                  margin: "5px",
                                  color: "green",
                                  borderColor: "green",
                                }}
                                onClick={() => deleteCountry(country.countryid)}
                              >
                                Delete Quiz
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
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
      <Typography
        variant="body2"
        color="textSecondary" // Update this line
        align="center"
        {...props}
      >
        <Link color="inherit" href="https://mui.com/">
          {/* MUI link */}
        </Link>
      </Typography>
    );
  }
}
