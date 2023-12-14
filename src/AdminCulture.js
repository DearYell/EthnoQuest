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
  import { Link, useNavigate } from "react-router-dom";
  import MenuIcon from "@mui/icons-material/Menu";
  import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
  import SearchIcon from "@mui/icons-material/Search";
  import TextField from "@mui/material/TextField";
  import ListItemButton from "@mui/material/ListItemButton";
  import ListItemIcon from "@mui/material/ListItemIcon";
  import ListItemText from "@mui/material/ListItemText";
  import DashboardIcon from "@mui/icons-material/Dashboard";
  import Paper from '@mui/material/Paper';
  import AddIcon from '@mui/icons-material/Add';
  import AccountCircleIcon from '@mui/icons-material/AccountCircle';
  import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
  import AutoStoriesIcon from '@mui/icons-material/AutoStories';
  import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
  import TableCell from '@mui/material/TableCell';
  import Button from '@mui/material/Button';
  import TableContainer from '@mui/material/TableContainer';
  import Table from '@mui/material/Table';
  import TableHead from '@mui/material/TableHead';
  import TableRow from '@mui/material/TableRow';
  import TableBody from '@mui/material/TableBody';
  import axios from 'axios';
  import React, { useState, useEffect } from 'react';
  import ModeIcon from '@mui/icons-material/Mode';
  import DeleteIcon from '@mui/icons-material/Delete';
  import LogoutIcon from "@mui/icons-material/Logout";
import InfoIcon from "@mui/icons-material/Info";
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
  
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
  
  export default function AdminCulture() {
    const [open, setOpen] = React.useState(true);
    const [isFormOpen, setIsFormOpen] = React.useState(false);
    const toggleDrawer = () => {
      setOpen(!open);
    };
  
    const [culture, setCulture] = useState([]);

    const [newCultureData, setNewCultureData] = React.useState({
      name: "",
      cname: "",
      culture: "",
    });

    const [deletionId, setDeletionId] = React.useState(null);
    const confirmDeletion = (id) => {
      setDeletionId(id); // Set the deletion ID to prompt confirmation form
    };
  
    const cancelDeletion = () => {
      setDeletionId(null); // Reset the deletion ID to hide the confirmation form
    };
  
    const handleSubmit = (id) => {
      removeCulture(id); // Perform deletion or other actions here
      cancelDeletion(); // Reset the deletion ID to hide the form
    };

  const [isUpdateFormOpen, setIsUpdateFormOpen] = React.useState(false);
  const [updateData, setUpdateData] = React.useState({
    newName: '',
    newCname: '',
    newCulture: '',
  });
  
  const handleSubmitUpdate = (id) => {
    if (updateData.newName && updateData.newCname && updateData.newCulture) {
      updateCulture(id, {
        name: updateData.newName,
        cname: updateData.newCname,
        culture: updateData.newCulture,
      });
      setIsUpdateFormOpen(false);
      setUpdateData({
        newName: '',
        newCname: '',
        newCulture: '',
      });
    }
  };
  
    const getCulture = () => {
      axios.get('http://localhost:8080/culture/insertCulture')
        .then((response) => {
          const cultureData = response.data;
          setCulture(cultureData);
        })
        .catch((error) => {
          console.error('Error fetching history:', error.message);
        });
    };
        
    const getAllCulture = () => {
      axios.get('http://localhost:8080/culture/getAllCulture')
        .then((response) => {
          console.log('Culture data:', response.data);
          const cultureData = response.data;
          setCulture(cultureData);
        })
        .catch((error) => {
          console.error('Error fetching all culture trivias:', error.message);
        });
    };
    const updateCulture = (id, updatedData) => {
      const updateUrl = `http://localhost:8080/culture/updatesCulture?id=${id}`;
      
      axios
        .put(updateUrl, updatedData)
        .then((response) => {
          console.log(`Culture with ID ${id} updated successfully`);
          // Additional actions after a successful update
          // For example, you might want to fetch updated data or update state
          getCulture(); // Fetch updated data after the update
        })
        .catch((error) => {
          console.error(`Error updating culture with ID ${id}:`, error.message);
        });
    };
    
    const removeCulture = (id) => {
        axios
          .delete(`http://localhost:8080/culture/deleteCulture/${id}`)
          .then((response) => {
            console.log(`Culture with ID ${id} removed successfully`);
            // Update the state to reflect the changes
            setCulture((prevCulture) => prevCulture.filter((c) => c.id !== id));
          })
          .catch((error) => {
            console.error(`Error removing culture with ID ${id}:`, error.message);
          });

    };
    
    
    useEffect(() => {
      getAllCulture();
    }, []);
    
    useEffect(() => {
      console.log('Culture state:', culture);
    }, [culture]);
  
    const mainListItems = (
      <React.Fragment>
        {LogoListItem}
        <ListItemButton component={Link} to="/dashboardAdmin">
      <ListItemIcon>
        <DashboardIcon  />
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
          <InfoIcon  style={{ color: "lightgreen" }}/>
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
                    axios.post('http://localhost:8080/culture/insertCulture', newCultureData)
                      .then(() => {
                        // Update the UI by fetching the updated data
                        getCulture();
                        // Reset form data
                        setNewCultureData({
                          name: "",
                          cname: "",
                          culture: "",
                        });
                        // Close the form
                        setIsFormOpen(false);
                      })
                      .catch((error) => {
                        console.error('Error adding new culture trivia:', error.message);
                      });
                  }}
                >
                  {/* Form Fields */}
                  <TextField
                    label="Capital"
                    value={newCultureData.name}
                    onChange={(e) => setNewCultureData({ ...newCultureData, name: e.target.value })}
                    required
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Country"
                    value={newCultureData.cname}
                    onChange={(e) => setNewCultureData({ ...newCultureData, cname: e.target.value })}
                    required
                    fullWidth
                    margin="normal"
                  />
                  <TextField
                    label="Culture"
                    value={newCultureData.culture}
                    onChange={(e) => setNewCultureData({ ...newCultureData, culture: e.target.value })}
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
                    Post Trivia
                  </Button>

                  {/* Cancel Button */}
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => {
                      // Reset form data
                      setNewCultureData({
                        name: "",
                        cname: "",
                        culture: "",
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
                                handleSubmitUpdate(updateData.id);
                             }}
                            >
                              {/* Form Fields */}

                              <TextField
                                label="New Capital"
                                value={updateData.newName}
                                onChange={(e) => setUpdateData({ ...updateData, newName: e.target.value })}
                                required
                                fullWidth
                                margin="normal"
                              />
                              <TextField
                                label="New Country"
                                value={updateData.newCname}
                                onChange={(e) => setUpdateData({ ...updateData, newCname: e.target.value })}
                                required
                                fullWidth
                                margin="normal"
                              />
                              <TextField
                                label="New Culture"
                                value={updateData.newCulture}
                                onChange={(e) => setUpdateData({ ...updateData, newCulture: e.target.value })}
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
                                Update History
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
                                    newName: '',
                                    newCname: '',
                                    newCulture: '',
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
                  width: '1140px', 
                  height: '600px',
                  borderRadius: "15px",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: 'column',
                  marginTop: "2px",
                  marginLeft: "2px",
                  position: 'relative',
                }}
              >
                <TableContainer>
                      <Table>
                        <TableHead>
                        <TableRow>
                        <TableCell>
                          <Typography variant="subtitle1"><b>ID</b></Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1"><b>Capital</b></Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1"><b>Country</b></Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1"><b>Culture</b></Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle1"><b>Action</b></Typography>
                        </TableCell>
                      </TableRow>
  
                        </TableHead>
                        <TableBody>
                        {culture.map((culture) => (
                          <TableRow key={culture.id}>
                            {/* <TableCell>{history.id}</TableCell> */}
                            <TableCell>{culture.id}</TableCell>
                            <TableCell>{culture.name}</TableCell>
                            <TableCell>{culture.cname}</TableCell>
                            <TableCell>{culture.culture}</TableCell>
                            <TableCell>
                            {deletionId === culture.id ? (
                          <form onSubmit={() => handleSubmit(culture.id)}>
                            <Button type="submit" variant="contained" color="secondary" 
                      sx={{
                      marginTop: "15px",
                      background: 'linear-gradient(50deg, #9ADE7B, #7ED7C1)',
                      width: 'calc(30% - 5px)',
                      marginLeft: '5px',
                    }}>
                              Confirm
                            </Button>
                            <Button variant="contained" onClick={cancelDeletion} 
                      sx={{
                      marginTop: "15px",
                      background: 'linear-gradient(50deg, #9ADE7B, #7ED7C1)',
                      width: 'calc(30% - 5px)',
                      marginLeft: '5px',
                    }}>
                              Cancel
                            </Button>
                          </form>
                        ) : (
                          <ListItemButton
                            onClick={() => confirmDeletion(culture.id)}
                            sx={{ color: 'red' }}
                          >
                            <ListItemIcon>
                              <DeleteIcon />
                            </ListItemIcon>
                            <ListItemText primary="Remove" />
                          </ListItemButton>
                        )}
  
                  <ListItemButton
                      sx={{ marginTop: '20px' }}
                      onClick={() => {
                        setIsUpdateFormOpen(true);
                        setUpdateData({
                          id: culture.id, // Include the ID in the updateData state
                          newName: culture.name,
                          newCname: culture.cname,
                          newCulture: culture.culture,
                        });
                      }}
                    >
                      <ListItemIcon>
                        <ModeIcon />
                      </ListItemIcon>
                      <ListItemText primary="Update" />
                    </ListItemButton>
  
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
  