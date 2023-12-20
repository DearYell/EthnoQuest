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
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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
import TextField from "@mui/material/TextField";
import AddIcon from '@mui/icons-material/Add';
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
  <ListItemButton component={Link} to="/dashboardAdmin">
      <ListItemIcon>
        <DashboardIcon style={{ color: "lightgreen" }} />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to="/AdminAddItems">
      <ListItemIcon>
        <HistoryToggleOffOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Quizzes" />
    </ListItemButton>
<ListItemButton component={Link} to={`/AdminHistory`}>
        <ListItemIcon>
          <HistoryEduIcon />
        </ListItemIcon >
        <ListItemText primary="History" />
      </ListItemButton>
      <ListItemButton component={Link} to={`/AdminTradition`}>
        <ListItemIcon>
          <AutoStoriesIcon />
        </ListItemIcon>
        <ListItemText primary="Tradition" />
      </ListItemButton>
      <ListItemButton  component={Link} to={`/AdminCulture`}>
        <ListItemIcon>
          <InfoIcon  />
        </ListItemIcon>
        <ListItemText primary="Culture" />
      </ListItemButton>
      <ListItemButton component={Link} to={`/AdminHoliday`}>
        <ListItemIcon>
          <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Holidays" />
      </ListItemButton>
      <ListItemButton component={Link} to={`/MyProfile`}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="MyProfile" />
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
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [country, setCountry] = useState([]);

  const [newCountryData, setNewCountryData] = React.useState({
    countryName: "",
    capital: "",
    question: "",
    answer: "",
  });
  
  const [isUpdateFormOpen, setIsUpdateFormOpen] = React.useState(false);
  const [updateData, setUpdateData] = React.useState({
    newCountryname: '',
    newCapital: '',
    newQuestion: '',
    newAnswer: '',
  });
  
  const handleSubmitUpdate = (id) => {
    if (updateData.newCountryname && updateData.newCapital && updateData.newQuestion && updateData.newAnswer) {
      updateCountry(id, {
        countryName: updateData.newCountryname,
        capital: updateData.newCapital,
        question: updateData.newQuestion,
        answer: updateData.newAnswer,
      });
      setIsUpdateFormOpen(false);
      setUpdateData({
        newCountryname: '',
        newCapital: '',
        newQuestion: '',
        newAnswer: '',
      });
    }
  };
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

  const updateCountry = (countryid, updatedData) => {
    const updateUrl = `http://localhost:8080/country/updateCountry?countryid=${countryid}`;
    
    axios
      .put(updateUrl, updatedData)
      .then((response) => {
        console.log(`Culture with ID ${countryid} updated successfully`);
        // Additional actions after a successful update
        // For example, you might want to fetch updated data or update state
        getCountry(); // Fetch updated data after the update
      })
      .catch((error) => {
        console.error(`Error updating item with ID ${countryid}:`, error.message);
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
                  sx={{ marginTop: '60px' }} // Adjusted the marginTop
                  onClick={() => {
                    setIsFormOpen(true);
                  }}
                >
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Culture Trivia" />
            </ListItemButton>

                {isFormOpen && (
                  <Paper
                    elevation={3}
                    sx={{
                      width: '500px',
                      height: 'auto',
                      borderRadius: "15px",
                      display: "flex",
                      flexDirection: 'column',
                      alignItems: "center",
                      marginTop: "900px", // Adjusted marginTop for better visibility of form fields
                      marginBottom: "300px",
                      marginLeft: "300px",
                      padding: "20px",
                      position: 'relative',
                    }}
                  >
                    {/* Insert Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission here (e.g., make axios post request)
                    axios.post('http://localhost:8080/country/insertCountry', newCountryData)
                      .then(() => {
                        // Update the UI by fetching the updated data
                        getCountry();
                        // Reset form data
                        setNewCountryData({
                          countryName: "",
                          capital: "",
                          question: "",
                          answer: "",

                        });
                        // Close the form
                        setIsFormOpen(false);
                      })
                      .catch((error) => {
                        console.error('Error adding new country:', error.message);
                      });
                  }}
                >
                  {/* Form Fields */}
                  <TextField
                    label="Country"
                    value={newCountryData.countryName}
                    onChange={(e) => setNewCountryData({ ...newCountryData, countryName: e.target.value })}
                    required
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Capital"
                    value={newCountryData.capital}
                    onChange={(e) => setNewCountryData({ ...newCountryData, capital: e.target.value })}
                    required
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Question"
                    value={newCountryData.question}
                    onChange={(e) => setNewCountryData({ ...newCountryData, question: e.target.value })}
                    required
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Answer"
                    value={newCountryData.answer}
                    onChange={(e) => setNewCountryData({ ...newCountryData, answer: e.target.value })}
                    required
                    fullWidth
                    margin="normal"
                  />
                  

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{
                      marginTop: "15px",
                      background: 'linear-gradient(50deg, #9ADE7B, #7ED7C1)', // Set the background color to light green
                      width: 'calc(35% - 5px)', // Adjusted width to make it 35% of the full width with some margin in between
                      marginLeft: '50px', // Center the button
                      marginRight: '15px', // Add spacing to the right
                    }}
                  >
                    Insert
                  </Button>

                  {/* Cancel Button */}
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => {
                      // Reset form data
                      setNewCountryData({
                        countryName: "",
                        capital: "",
                        question: "",
                        answer: "",
                      });
                      // Close the form
                      setIsFormOpen(false);
                    }}
                    sx={{
                      marginTop: "15px",
                      background: 'linear-gradient(50deg, #9ADE7B, #7ED7C1)',
                      width: 'calc(30% - 5px)',
                      marginLeft: '5px',
                    }}
                  >
                    Cancel
                  </Button>
                </form>
                </Paper>
                )}
                {/* Update form */}

                {isUpdateFormOpen && (
                          <Paper
                            elevation={3}
                            sx={{
                              width: '500px',
                              height: 'auto',
                              borderRadius: "15px",
                              display: "flex",
                              flexDirection: 'column',
                              alignItems: "center",
                              marginTop: "900px", // Adjusted marginTop for better visibility of form fields
                              marginBottom: "300px",
                              marginLeft: "300px",
                              padding: "20px",
                              position: 'relative',
                            }}
                          >
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                // Handle form submission here (e.g., make axios put request)
                                handleSubmitUpdate(updateData.countryid);
                             }}
                            >
                              {/* Form Fields */}

                              <TextField
                                label="New Country"
                                value={updateData.newCountryname}
                                onChange={(e) => setUpdateData({ ...updateData, newCountryname: e.target.value })}
                                required
                                fullWidth
                                margin="normal"
                              />
                              <TextField
                                label="New Capital"
                                value={updateData.newCapital}
                                onChange={(e) => setUpdateData({ ...updateData, newCapital: e.target.value })}
                                required
                                fullWidth
                                margin="normal"
                              />
                              <TextField
                                label="New Question"
                                value={updateData.newQuestion}
                                onChange={(e) => setUpdateData({ ...updateData, newQuestion: e.target.value })}
                                required
                                fullWidth
                                margin="normal"
                              />
                              <TextField
                                label="New Answer"
                                value={updateData.newAnswer}
                                onChange={(e) => setUpdateData({ ...updateData, newAnswer: e.target.value })}
                                required
                                fullWidth
                                margin="normal"
                              />
                              {/* Submit Button */}
                              <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{
                                  marginTop: "15px",
                                  background: 'linear-gradient(50deg, #9ADE7B, #7ED7C1)', // Set the background color to light green
                                  width: 'calc(35% - 5px)', // Adjusted width to make it 35% of the full width with some margin in between
                                  marginLeft: '50px', // Center the button
                                  marginRight: '15px', // Add spacing to the right
                                }}
                              >
                                Update
                              </Button>
                              {/* Cancel Button */}
                              <Button
                                variant="contained"
                                color="primary"
                                fullWidth
                                onClick={() => {
                                  // Reset form data
                                  setUpdateData({
                                    id: '',
                                    newCountryname: '',
                                    newCapital: '',
                                    newQuestion: '',
                                    newAnswer: '',
                                  });
                                  // Close the form
                                  setIsUpdateFormOpen(false);
                                }}
                                sx={{
                                  marginTop: "15px",
                                  background: 'linear-gradient(50deg, #9ADE7B, #7ED7C1)',
                                  width: 'calc(30% - 5px)',
                                  marginLeft: '5px',
                                }}
                              >
                                Cancel
                              </Button>
                            </form>
                          </Paper>
                        )}
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
                            <TableCell>Capital Name</TableCell>
                            <TableCell>Question</TableCell>
                            <TableCell>Answer</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {country.map((country) => (
                            <TableRow key={country.countryid}>
                              <TableCell>{country.countryid}</TableCell>
                              <TableCell>{country.countryName}</TableCell>
                              <TableCell>{country.capital}</TableCell>
                              <TableCell>{country.question}</TableCell>
                              <TableCell>{country.answer}</TableCell>
                              <TableCell>
                                <Button
                                  variant="outlined"
                                  sx={{
                                    margin: "5px",
                                    color: "green",
                                    borderColor: "green",
                                  }}
                                  onClick={() => {
                                    setIsUpdateFormOpen(true);
                                    setUpdateData({
                                      countryid: country.countryid, // Include the ID in the updateData state
                                      newCountryname: country.countryName,
                                      newCapital: country.capital,
                                      newQuestion: country.question,
                                      newAnswer: country.answer,
                                    });
                                  }}
                                >
                                  Edit Country
                                </Button>
                              

                                <Button
                                  variant="outlined"
                                  sx={{
                                    margin: "5px",
                                    color: "green",
                                    borderColor: "green",
                                  }}
                                  onClick={() =>
                                    deleteCountry(country.countryid)
                                  }
                                >
                                  Delete Country
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
          </Container>
          <Copyright sx={{ pt: 4 }} />
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
