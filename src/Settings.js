import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import {
  Typography,
  List,
  ListItemText as MuiListItemText,
  styled,
  createTheme,
  Menu,
  ThemeProvider,
} from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
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
import HistoryToggleOffOutlinedIcon from "@mui/icons-material/HistoryToggleOffOutlined";
import { Button, Select, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PublicIcon from "@mui/icons-material/Public";
import { FormControl, InputLabel, Input } from '@mui/material';
import {Switch, FormControlLabel,Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import Slider from '@mui/material/Slider';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import Avatar from '@mui/material/Avatar';





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
        <LocationOnIcon />
      </ListItemIcon>
      <ListItemText primary="All Capitals" />
    </ListItemButton>

    <ListItemButton component={Link} to="/UserProfile">
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="My Profiles" />
    </ListItemButton>

    <ListItemButton component={Link} to="/QuizHistory">
      <ListItemIcon>
        <HistoryToggleOffOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Quiz History" />
    </ListItemButton>

    <ListItemButton component={Link} to="/Settings">
      <ListItemIcon>
        <SettingsIcon style={{ color: "lightgreen" }} />
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
      overflowX: "auto",
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

export default function AllCapitals() {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [anchorEl, setAnchorEl] = useState(null);
  const [timeSettingsDialogOpen, setTimeSettingsDialogOpen] = useState(false);
  const [setTimeAutomatically, setSetTimeAutomatically] = useState(false);
  const [showTimeAndDate, setShowTimeAndDate] = useState(false);
  const [searchFieldOpen, setSearchFieldOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (language) => {
    setAnchorEl(null);
    if (language) {
      setSelectedLanguage(language);
    }
  };

  const handleSetTimeAutomaticallyChange = () => {
    setSetTimeAutomatically(!setTimeAutomatically);
  };

  const handleShowTimeAndDateChange = () => {
    setShowTimeAndDate(!showTimeAndDate);
  };

  const handleOpen = () => {
    // Only open the dialog if it's not already open
    if (!timeSettingsDialogOpen) {
      setTimeSettingsDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    // Only close the dialog if it's currently open
    if (timeSettingsDialogOpen) {
      setTimeSettingsDialogOpen(false);
    }
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const styles = {
    toolbar: {
      pr: '26px',
      backgroundColor: 'white',
    },
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={drawerOpen}>
          <Toolbar sx={styles.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(drawerOpen && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <IconButton color="inherit" sx={{ marginLeft: drawerOpen ? '240px' : '5px' }}>
              <SearchIcon sx={{ color: 'black' }} />
            </IconButton>
            <Typography
              component="div"
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                marginLeft: '8px',
              }}
            >
              <TextField
                label="Search capital around the world"
                variant="outlined"
                size="small"
                sx={{
                  width: '500px',
                  minWidth: '300px',
                  marginLeft: drawerOpen ? '0' : '8px',
                  transition: 'margin 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
                }}
              />
            </Typography>

            <IconButton color="inherit">
              <ProfileCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={drawerOpen}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
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
            backgroundColor: 'white',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="auto">
            <Grid container spacing={3} sx={{ height: '200px', width: '200px' }}>
              <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', margin: '200px' }}>
                <Box
                  sx={{
                    position: 'absolute',
                    backgroundColor: 'lightgrey',
                    bottom: '350px',
                    left: '280px',
                    padding: '20px',
                    width: '50%',
                    height: '200px',
                    maxWidth: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '15px',
                    '@media (max-width: 600px)': {
                      width: '90%',
                    },
                  }}
                >
                  <InputLabel htmlFor="language" sx={{ display: 'flex', alignItems: 'center' }}>
                    <LanguageIcon style={{ color: 'black', fontSize: '4rem', marginRight: '6px' }} />
                    <Typography variant="h4" color="textPrimary" sx={{ marginLeft: 1 }}>
                      Language
                    </Typography>
                  </InputLabel>
                  <Button
                    aria-controls="language-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                    sx={{
                      marginTop: 2,
                      padding: 1,
                      fontSize: '30px',
                      borderRadius: '30px',
                      width: '200px',
                      height: '100px',
                      boxSizing: 'border-box',
                    }}
                  >
                    {selectedLanguage}
                  </Button>
                  <Menu
                    id="language-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => handleClose()}
                  >
                    <MenuItem onClick={() => handleClose('English')}>English</MenuItem>
                    <MenuItem onClick={() => handleClose('Spanish')}>Spanish</MenuItem>
                    <MenuItem onClick={() => handleClose('French')}>French</MenuItem>
                    <MenuItem onClick={() => handleClose('German')}>German</MenuItem>
                    <MenuItem onClick={() => handleClose('Italian')}>Italian</MenuItem>
                    <MenuItem onClick={() => handleClose('Japanese')}>Japanese</MenuItem>
                  </Menu>
                </Box>

                <Box
                    // Small box down
                    sx={{
                      position: "absolute",
                    backgroundColor: "lightgreen",
                    bottom: "350px",
                    left: "610px", // Increased by 50px
                    padding: "20px",
                    width: "50%", // Set width to 50% of the container
                    height: "90px",
                    maxWidth: "90px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    justifyContent: "center",
                    "@media (max-width: 600px)": {
                      width: "90%",
                      },
                    }}
                  >
                    <CalendarMonthIcon style={{ color: 'white', fontSize: '5rem' }}  />
                  </Box>

                  <Box
                    // Small box up
                    sx={{
                      position: "absolute",
                    backgroundColor: "lightgrey",
                    bottom: "460px",
                    left: "610px", // Increased by 50px
                    padding: "20px",
                    width: "50%", // Set width to 50% of the container
                    height: "90px",
                    maxWidth: "90px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "15px",
                    justifyContent: "center",
                    "@media (max-width: 600px)": {
                      width: "90%",
                      },
                    }}
                  >
                    <PublicIcon style={{ color: 'black', fontSize: '5rem' }} />
                  </Box>

                  <Box
                      // Long box down
                      sx={{
                        position: 'absolute',
                        backgroundColor: 'lightgrey',
                        bottom: '350px',
                        left: '710px', // Increased by 50px
                        padding: '20px',
                        width: '50%',
                        height: '90px',
                        maxWidth: '200px',
                        borderRadius: "15px",
                        '@media (max-width: 600px)': {
                          width: '90%',
                        },
                        cursor: 'pointer',
                      }}
                      onClick={handleOpen}
                    >
                      <Typography variant="h5" color="textPrimary">
                        Date and Time
                      </Typography>
                      <Dialog open={timeSettingsDialogOpen} onClose={handleCloseDialog}>
                        <DialogTitle>Date and Time Settings</DialogTitle>
                        <DialogContent>
                          <Box>
                            {/* Set Time Automatically */}
                            <FormControlLabel
                              control={<Switch checked={setTimeAutomatically} onChange={handleSetTimeAutomaticallyChange} />}
                              label="Set Time Automatically"
                            />
                          </Box>

                          <Box mt={2}>
                            {/* Show time and date */}
                            <FormControlLabel
                              control={<Switch checked={showTimeAndDate} onChange={handleShowTimeAndDateChange} />}
                              label="Show time and date"
                            />
                          </Box>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={handleCloseDialog}>Close</Button>
                        </DialogActions>
                      </Dialog>
                    </Box>

                    <Box
                        // long box up
                        sx={{
                          position: 'absolute',
                          backgroundColor: 'lightgrey',
                          bottom: '460px',
                          left: '710px',
                          padding: '20px',
                          width: '50%',
                          height: '90px',
                          maxWidth: '200px',
                          borderRadius: "15px",
                          '@media (max-width: 600px)': {
                            width: '90%',
                          },
                        }}
                      >
                        {/* New dropdown list for countries */}
                        <FormControl sx={{ width: '100%' }}>
                          <InputLabel htmlFor="country">Select Country</InputLabel>
                          <Select
                            value={selectedCountry}
                            onChange={handleCountryChange}
                            label="Select Country"
                            variant="outlined"  // Added variant to outline the select box
                          >
                            {/* Options for the dropdown */}
                            <MenuItem value="USA">United States</MenuItem>
                            <MenuItem value="UK">United Kingdom</MenuItem>
                            {/* Add more countries as needed */}
                          </Select>
                        </FormControl>
                      </Box>

                      <Box
                        sx={{
                            position: "absolute",
                            backgroundColor: "lightgrey",
                            bottom: "350px",
                            left: "1040px",
                            padding: "20px",
                            width: "50%",
                            height: "90px",
                            maxWidth: "200px",
                            borderRadius: "15px",
                            "@media (max-width: 600px)": {
                                width: "90%",
                            },
                        }}
                    >
                        <Typography style={{ fontSize: "20px", color: "textPrimary" }}>
                            <b>Delete account</b>
                        </Typography>
                        <Typography style={{ fontSize: "10px", color: "textSecondary" }}>
                            Be careful - this will delete all your data and cannot be undone
                        </Typography>
                    </Box>

                    <Box
                          sx={{
                              position: "absolute",
                              backgroundColor: "lightgreen",
                              bottom: "350px",
                              left: "940px",
                              padding: "20px",
                              width: "50%",
                              height: "90px",
                              maxWidth: "90px",
                              borderRadius: "15px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              "@media (max-width: 600px)": {
                                  width: "90%",
                              },
                          }}
                      >
                          <CloseIcon style={{ color: 'white', fontSize: '5rem' }} />
                      </Box>

                      <Box
                            sx={{
                                position: "absolute",
                                backgroundColor: "lightgrey",
                                bottom: "460px",
                                left: "940px",
                                padding: "20px",
                                width: "50%",
                                height: "90px",
                                maxWidth: "300px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "15px",
                                justifyContent: "space-between",
                                "@media (max-width: 600px)": {
                                    width: "90%",
                                },
                            }}
                        >
                            <TextFormatIcon style={{ color: 'black', fontSize: '4rem' }} />
                            <Typography color="textPrimary">Text Size</Typography>
                            <Slider
                                defaultValue={50}
                                aria-label="Text Size Slider"
                                style={{ width: "60%", marginLeft: "8px",  color :'white'}}
                            />
                        </Box>

                        <Box
                          sx={{
                              position: "absolute",
                              backgroundColor: "lightgrey",
                              bottom: "100px",
                              left: "540px",
                              padding: "20px",
                              width: "50%",
                              height: "200px",
                              maxWidth: "440px",
                              display: "flex",
                              flexDirection: "row", // Set to row to align items horizontally
                              alignItems: "center",
                              borderRadius: "15px",
                              justifyContent: "space-between", // Space between for even distribution
                              "@media (max-width: 600px)": {
                                  width: "90%",
                              },
                          }}
                      >
                          <div>
                              <ProfileCircle /> {/* Use the ProfileCircle component */}
                              <Avatar
                                  alt="Profile"
                                  src="profilesample.jpg"
                                  sx={{ width: 100, height: 100, marginBottom: '16px', marginLeft: '25px' }}
                              />
                              <Typography variant="h5" color="textPrimary" sx={{ marginBottom: '16px' }}>
                                  Profile Picture
                              </Typography>
                          </div>
                          <Button variant="contained" color="primary">
                              Upload your own photo
                          </Button>
                      </Box>


        
            </Grid>
            </Grid>
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
