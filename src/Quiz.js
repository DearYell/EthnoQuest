import React, { useState, useEffect } from "react";
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
import { Link, useParams } from "react-router-dom";
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
import axios from "axios";
import LinearProgress from "@mui/material/LinearProgress";
import DarkMode from "./components/DarkMode";

// Quiz component

const Quiz = () => {
  const [quizData, setQuizData] = useState({
    questions: [],
    choices: [],
  });
  const [selectedChoice, setSelectedChoice] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const { totalItems, timePerQuestion } = useParams();

  useEffect(() => {
    // Fetch quiz data from the backend based on totalItems and timePerQuestion
    QuizData();
  }, [totalItems, timePerQuestion]);

  const QuizData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/quiz/questions?totalItems=${totalItems}&timePerQuestion=${timePerQuestion}`
      );
      console.log(response.data); // Log the data

      // Ensure the response data is an object with 'questions' and 'choices' properties
      const { questions, choices } = response.data || {};

      setQuizData({
        questions: questions || [],
        choices: choices || [],
      });
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);
  };

  const handleNextQuestion = () => {
    // Implement logic to move to the next question
    if (quizData.questions && questionIndex < quizData.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
      setSelectedChoice("");
    } else {
      // Quiz is complete, handle submission or navigate to another page
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Implement logic to handle quiz submission
    console.log(`Selected Choice: ${selectedChoice}`);
  };

  // Auto-advance to the next question after the specified time
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleNextQuestion();
    }, timePerQuestion * 1000); // Convert seconds to milliseconds

    return () => clearTimeout(timeoutId); // Cleanup on component unmount
  }, [questionIndex, timePerQuestion]);

  const currentQuestion =
    quizData.questions && quizData.questions.length > 0
      ? quizData.questions[questionIndex].question
      : "";
  const currentChoices =
    quizData.choices && quizData.choices.length > 0
      ? quizData.choices[questionIndex]
      : [];

  return (
    <div className="question-box">
      <h2 className="question-text">{currentQuestion}</h2>
      <ul className="answer-options">
        {currentChoices.map((choice, index) => (
          <li key={index}>
            <input
              type="radio"
              name="choice"
              value={choice.answer}
              checked={selectedChoice === choice.answer}
              onChange={() => handleChoiceSelect(choice.answer)}
            />
            {choice.answer}
          </li>
        ))}
      </ul>
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

    <ListItemButton component={Link} to="/Quiz">
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
    <div>
      <DarkMode />
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
              width: "100v",
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
                    {/* Integration of the Quiz component with props */}
                    <Quiz />
                  </Paper>
                </Grid>
              </Grid>
              <Copyright sx={{ pt: 4 }} />
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
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
