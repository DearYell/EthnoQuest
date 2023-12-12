import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  Typography,
  List,
  ListItemText as MuiListItemText,
  Badge, // Rename to avoid conflict
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
import CallIcon from '@mui/icons-material/Call';

import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from "@mui/icons-material/Search";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from "@mui/icons-material/Info";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';

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
        <AccountCircleIcon  />
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
          <AccountCircleIcon style={{ color: "lightgreen" }}/>
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
  const [searchBadgeId, setSearchBadgeId] = React.useState("");
  const [filteredBadge, setFilteredBadge] = React.useState([]);
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const [newBadgeData, setNewBadgeData] = React.useState({
    id: "",
    user: "",
    title: "",
    date: "",
    points: "",
  });
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [badge, setBadge] = useState([]);

  const getBadge = () => {
    axios.get('http://localhost:8080/badge/insertBadge')
      .then((response) => {
        console.log(response);
        const badgeData = response.data;
        setBadge(badgeData);
      })
      .catch((error) => {
        console.error('Error fetching badge:', error.message);
      });
  };

  const getAllBadge = () => {
    axios.get('http://localhost:8080/badge/getAllBadge')
      .then((response) => {
        console.log('Badge data:', response.data);
        const badgeData = response.data;
        setBadge(badgeData);
      })
      .catch((error) => {
        console.error('Error fetching all badges:', error.message);
      });
  };

  const removeBadge = (id) => {
    const confirmDeletion = window.confirm("Are you sure you want to delete this badge?");
    if (confirmDeletion) {
      axios
        .delete(`http://localhost:8080/badge/deleteBadge/${id}`)
        .then((response) => {
          console.log(`Badge with ID ${id} removed successfully`);
          // Update the state to reflect the changes
          setBadge((prevBadge) => prevBadge.filter((b) => b.id !== id));
        })
        .catch((error) => {
          console.error(`Error removing badge with ID ${id}:`, error.message);
        });
    }
  };

  const updateBadge = (id, updatedData) => {
    const updateUrl = `http://localhost:8080/badge/updatesBadge?id=${id}`;
    
    axios
      .put(updateUrl, updatedData)
      .then((response) => {
        console.log(`Badge with ID ${id} updated successfully`);
        // Additional actions after a successful update
        // For example, you might want to fetch updated data or update state
        getBadge(); // Fetch updated data after the update
      })
      .catch((error) => {
        console.error(`Error updating Badge with ID ${id}:`, error.message);
      });
  };

  // Function to handle badge search
    const handleSearchBadge = () => {
      const searchTerm = searchBadgeId.trim().toLowerCase();

      if (searchTerm === "id") {
        // If search term is empty, show all badges
        setFilteredBadge(badge);
      } else {
        // If search term is not empty, filter badges based on ID
        const filteredBadges = badge.filter((badge) =>
          String(badge.id).toLowerCase().includes(searchTerm)
        );
        setFilteredBadge(filteredBadges);
      }
    };

  // Call handleSearchBadge when searchBadgeId changes
  React.useEffect(() => {
    handleSearchBadge();
  }, [searchBadgeId, badge]);


  useEffect(() => {
    getAllBadge();
  }, []);

  useEffect(() => {
    console.log('Badge state:', badge);
  }, [badge]);

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
                label="Search Badge ID"
                variant="outlined"
                size="small"
                sx={{ width: "500px", minWidth: "300px" }}
                value={searchBadgeId}
                onChange={(e) => setSearchBadgeId(e.target.value)}
              />
            </Typography>
           
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
                <ListItemButton
                  sx={{ marginTop: '20px' }} // Adjusted the marginTop
                  onClick={() => {
                    setIsFormOpen(true);
                  }}
                >
                  <ListItemIcon>
                    <MilitaryTechIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Badge" />
                </ListItemButton>

                {isFormOpen && (
                  <Paper
                    elevation={3}
                    sx={{
                      width: '400px',
                      height: 'auto',
                      borderRadius: "15px",
                      display: "flex",
                      flexDirection: 'column',
                      alignItems: "center",
                      marginTop: "800px", // Adjusted marginTop for better visibility of form fields
                      marginLeft: "300px",
                      padding: "20px",
                      position: 'relative',
                    }}
                  >
                    {/* Badge Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    // Handle form submission here (e.g., make axios post request)
                    axios.post('http://localhost:8080/badge/insertBadge', newBadgeData)
                      .then(() => {
                        // Update the UI by fetching the updated data
                        getBadge();
                        // Reset form data
                        setNewBadgeData({
                          id: "",
                          user: "",
                          title: "",
                          date: "",
                          points: "",
                        });
                        // Close the form
                        setIsFormOpen(false);
                      })
                      .catch((error) => {
                        console.error('Error adding badge:', error.message);
                      });
                  }}
                >
                  {/* Form Fields */}
                  <TextField
                    label="Badge ID"
                    value={newBadgeData.id}
                    onChange={(e) => setNewBadgeData({ ...newBadgeData, id: e.target.value })}
                    required
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="User"
                    value={newBadgeData.user}
                    onChange={(e) => setNewBadgeData({ ...newBadgeData, user: e.target.value })}
                    required
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Title"
                    value={newBadgeData.title}
                    onChange={(e) => setNewBadgeData({ ...newBadgeData, title: e.target.value })}
                    required
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Date Earned"
                    value={newBadgeData.date}
                    onChange={(e) => setNewBadgeData({ ...newBadgeData, date: e.target.value })}
                    required
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Points"
                    value={newBadgeData.points}
                    onChange={(e) => setNewBadgeData({ ...newBadgeData, points: e.target.value })}
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
                    Add Badge
                  </Button>

                  {/* Cancel Button */}
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => {
                      // Reset form data
                      setNewBadgeData({
                        id: "",
                        user: "",
                        title: "",
                        date: "",
                        points: "",
                      });
                      // Close the form
                      setIsFormOpen(false);
                    }}
                    sx={{
                      marginTop: "15px",
                      background: 'linear-gradient(50deg, #9ADE7B, #7ED7C1)', // Set the background color to light green
                      width: 'calc(30% - 5px)', // Adjusted width to make it 30% of the full width with some margin in between
                      marginLeft: '5px', // Add spacing to the left
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
                {/* Other content within the Paper */}
                <TableContainer>
                  <Table>
                    <TableHead style={{ background: '#CDFAD5' }}>
                      <TableRow>
                        <TableCell>Badge ID</TableCell>
                        <TableCell>User</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Date Earned</TableCell>
                        <TableCell>Points</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                    {filteredBadge.map((badge) => (
                      <TableRow key={badge.id}>
                        <TableCell>{badge.id}</TableCell>
                        <TableCell>{badge.user}</TableCell>
                        <TableCell>{badge.title}</TableCell>
                        <TableCell>{badge.date}</TableCell>
                        <TableCell>{badge.points}</TableCell>
                        <TableCell>
                          <IconButton
                            sx={{
                              margin: "5px",
                              color: "red",
                            }}
                            onClick={() => {
                              const Id = window.prompt('Enter badge id entry to update:');
                              const newUser = window.prompt('Enter new user id:');
                              const newTitle = window.prompt('Enter new title:');
                              const newDate = window.prompt('Enter updated date:');
                              const newPoints = window.prompt('Enter updated points:');
                              
                              if (Id && newUser && newTitle && newDate && newPoints) {
                                updateBadge(Id, {
                                  user: newUser,
                                  title: newTitle,
                                  date: newDate,
                                  points: newPoints,
                                });
                              }
                            }}
                          >
                            <EditIcon />
                          </IconButton>

                          <IconButton
                            sx={{
                              margin: "5px",
                              color: "red",
                            }}
                            onClick={() => removeBadge(badge.id)}
                          >
                            <DeleteForeverIcon />
                          </IconButton>
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
    