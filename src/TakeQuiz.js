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

// Quiz component
const Quiz = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [countdown, setCountdown] = useState(30); // Initial countdown time (in seconds)
  const [questionNumber, setQuestionNumber] = useState(1); // Initial question number
  const totalQuestions = 5; // Set the total number of questions

  useEffect(() => {
    // Timer logic
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear the timer when the component unmounts or countdown reaches 0
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Handle the end of the countdown
    if (countdown === 0) {
      handleAutoSubmitOrMove();
    }
  }, [countdown]);

  const handleAnswerSelection = (value) => {
    setSelectedAnswer(value);
  };

  const handleSubmit = () => {
    handleAutoSubmitOrMove();
  };

  const handleAutoSubmitOrMove = () => {
    // Implement logic to auto-submit or move to the next question
    if (questionNumber < totalQuestions) {
      // Move to the next question
      setQuestionNumber((prevQuestionNumber) => prevQuestionNumber + 1);
      setSelectedAnswer(null); // Clear selected answer for the next question
      setCountdown(30); // Reset countdown for the next question
    } else {
      // Submit the quiz
      console.log("Quiz submitted!");
      // Implement logic to handle quiz submission
    }
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-question">
        Question {questionNumber} of {totalQuestions}
      </h2>
      <p>Time left: {countdown} seconds</p>
      <ul className="quiz-answer-choices">
        <li>
          <input
            type="radio"
            name="answer"
            value="A"
            checked={selectedAnswer === "A"}
            onChange={() => handleAnswerSelection("A")}
          />
          Cebu
        </li>
        <li>
          <input
            type="radio"
            name="answer"
            value="B"
            checked={selectedAnswer === "B"}
            onChange={() => handleAnswerSelection("B")}
          />
          Baguio
        </li>
        <li>
          <input
            type="radio"
            name="answer"
            value="C"
            checked={selectedAnswer === "C"}
            onChange={() => handleAnswerSelection("C")}
          />
          Manila
        </li>
        <li>
          <input
            type="radio"
            name="answer"
            value="D"
            checked={selectedAnswer === "D"}
            onChange={() => handleAnswerSelection("D")}
          />
          Iloilo
        </li>
      </ul>
      <button
        type="button"
        className="quiz-submit-button"
        onClick={handleSubmit}
      >
        Submit
      </button>
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
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>

    <ListItemButton component={Link} to="/QuizHistory">
      <ListItemIcon>
        <DashboardIcon style={{ color: "lightgreen" }} />
      </ListItemIcon>
      <ListItemText primary="Quiz" />
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
                  <Quiz />
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
