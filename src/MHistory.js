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
    name: 'Manila',
    country: 'Philippines',
    history: `The capital of the Philippines, dates back to the year 900 AD as recorded in the Laguna Copperplate Inscription. By the thirteenth century, the city consisted of a fortified settlement and trading quarter near the mouth of the Pasig River. In the late 16th century, Manila was a walled Muslim settlement whose ruler levied customs duties on all commerce passing up the Pasig River. Spanish conquistadors under the leadership of Miguel Lópezde Legazpi, the first Spanish governor-general of the Philippines, entered the mouth of the river in 1571. They destroyed the settlement and founded the fortress city of Intramuros in its place2. Manila became the capital of the new colony.`,
    image: `${process.env.PUBLIC_URL}/PanaMa.jpg`, // Image associated with Manila
  },
  // Add more capital histories with IDs, names, countries, histories, and images
  {
    id: 2,
    name: 'Jakarta',
    country: 'Indonesia',
    history: `Originally founded as a small harbor town in the 4th century, Jakarta grew into prominence as a trading port under the name Sunda Kelapa. It was later renamed Jayakarta when it was established as a fortified settlement by the Dutch in the 16th century. In the 20th century, it became the capital of the Dutch East Indies and eventually the capital of independent Indonesia in 1949, taking on its current name, Jakarta. Over time, it has evolved into a bustling metropolis, facing challenges like rapid urbanization and infrastructural development.`,
    image: `${process.env.PUBLIC_URL}/JaPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 3,
    name: 'London',
    country: 'United Kingdom',
    history: `London boasts a history dating back over two millennia, initially established by the Romans as "Londinium" around 50 AD. It served as a vital hub for trade and governance in Roman Britain. Following periods of invasions, upheavals, and growth, London became the capital of England in the 12th century, gaining prominence as a center of culture, commerce, and political power. The city has weathered significant events such as the Great Fire of 1666, World War II bombings, and continued expansion, evolving into a global financial and cultural epicenter, blending rich historical landmarks with modern innovation.`,
    image: `${process.env.PUBLIC_URL}/LoPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 4,
    name: 'Tokyo',
    country: 'Japan',
    history: `Tokyo, originally known as Edo, started as a small fishing village in the 12th century. Its fortunes changed in 1603 when Tokugawa Ieyasu established the Tokugawa shogunate, making Edo the de facto capital. Over the centuries, the city grew both in size and importance. In 1868, with the end of the shogunate, Emperor Meiji moved the imperial capital to Edo, renaming it Tokyo, meaning "Eastern Capital." Since then, Tokyo has played a crucial role in Japan's modernization, becoming a global economic and technological powerhouse.`,
    image: `${process.env.PUBLIC_URL}/ToPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 5,
    name: 'Ottawo',
    country: 'Canada',
    history: `Originally a site for indigenous peoples, Ottawa gained significance in the early 19th century as a strategic point in the fur trade. Established as Bytown in 1826 during the construction of the Rideau Canal, it was later renamed Ottawa in 1855 and became the capital of Canada in 1857 due to its central location between English-speaking and French-speaking regions. Over time, it has evolved into a vibrant, multicultural city, hosting key governmental institutions and cultural landmarks, while preserving its historical roots.`,
    image: `${process.env.PUBLIC_URL}/OtPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 6,
    name: 'Beijing',
    country: 'China',
    history: `
    Beijing, one of China's oldest cities, traces its history back over three millennia. Initially known as Ji, it became a political and cultural center during the Zhou Dynasty around the 11th century BC. Renamed Yanjing during the Jin Dynasty and later to Dadu during the Yuan Dynasty, it was finally named Beijing, meaning "Northern Capital," when it became the capital of the Ming Dynasty in 1421. Through various dynasties, Beijing flourished as a center of imperial power, culture, and trade, witnessing both periods of splendor and challenges, and today stands as the capital of modern China, blending its rich heritage with rapid urbanization and modernization.`,
    image: `${process.env.PUBLIC_URL}/BePano.jpg`, // Image associated with Jakarta
  },
  {
    id: 7,
    name: 'Seoul',
    country: 'South Korea',
    history: `Seoul, South Korea's capital, has a history spanning more than 2,000 years. Founded in 18 BCE as Wiryeseong, it became the capital of the Baekje Kingdom and was known as Hanseong during the Joseon Dynasty. It endured invasions, occupations, and wars, including the Korean War in the 20th century, which left a significant impact on its development. Through resilience and rapid reconstruction, Seoul emerged as a global city, blending modernity with its deep cultural heritage, becoming a dynamic hub for technology, entertainment, and commerce.`,
    image: `${process.env.PUBLIC_URL}/SeuPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 8,
    name: 'Bangkok',
    country: 'Thailand',
    history: `Bangkok, Thailand's vibrant capital, was established in 1782 by King Rama I as the royal capital of the Kingdom of Siam. Initially named Krung Thep, it grew from a small trading post into a bustling city along the Chao Phraya River. Over the centuries, Bangkok has experienced periods of modernization, including the late 19th-century transformations under King Rama V and rapid urban development in the 20th century. Today, it stands as a thriving metropolis, blending ancient temples, palaces, and traditions with modern skyscrapers, a vibrant culture, and a dynamic economy.`,
    image: `${process.env.PUBLIC_URL}/BapaNo.jpg`, // Image associated with Jakarta
  },
  {
    id: 9,
    name: 'Bern',
    country: 'Switzerland',
    history: `Bern, the capital of Switzerland, has roots tracing back to the 12th century when it was founded by Duke Berthold V of Zähringen. Established in 1191, it grew strategically as a fortified city along the Aare River. In the 15th century, it joined the Swiss Confederation, solidifying its position as an influential city-state. Over the years, Bern has preserved its medieval charm, seen through its well-preserved old town, while evolving into a modern administrative center and a UNESCO World Heritage Site, renowned for its historical significance and political importance within Switzerland.`,
    image: `${process.env.PUBLIC_URL}/BerPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 10,
    name: 'Brussels',
    country: 'Belgium',
    history: `Brussels, the capital of Belgium, has a history that dates back to the 10th century when it was a small fortress town. It gained prominence in the late Middle Ages as a center for trade, art, and culture. In the 19th century, it became the capital of an independent Belgium and later the de facto capital of the European Union in the 20th century. Today, Brussels is a vibrant cosmopolitan city, blending its historical heritage seen in its stunning architecture with its modern role as an international hub for politics and diplomacy.`,
    image: `${process.env.PUBLIC_URL}/BruPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 11,
    name: 'Havana',
    country: 'Cuba',
    history: `Havana, the capital of Cuba, was founded by the Spanish in the early 16th century and quickly became a crucial hub for Spanish colonial activities in the Caribbean. Throughout the centuries, it served as a key port for trade, particularly during the height of the sugar and slave trades. In the 20th century, Havana experienced a period of rapid growth and became a cultural hotspot known for its lively music, art, and nightlife. Over time, it became a symbol of both the opulence of pre-revolutionary Cuba and the resilience of its people in the face of political and economic changes.`,
    image: `${process.env.PUBLIC_URL}/HaPano.jpg`, // Image associated with Jakarta
  },
  {
    id: 12,
    name: 'Madrid',
    country: 'Spain',
    history: `Madrid, Spain's capital, has roots tracing back to the 9th century when it was established as a fortress under Arab rule. Later reclaimed by Christians in the 11th century, it steadily grew into a significant city. Becoming the capital in the 16th century during the Habsburg dynasty, Madrid continued to expand, especially during the Bourbon reign in the 18th century. Today, it stands as a vibrant metropolis blending its historical legacy, seen in its architecture and museums, with its modern status as a major European cultural and economic center.`,
    image: `${process.env.PUBLIC_URL}/MaPano.jpg`, // Image associated with Jakarta
  },
  // Add other capital histories here
];

export default function MHistory() {
  const { id } = useParams();
  const [open, setOpen] = React.useState(true);
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
                    {selectedCapital.name}
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
                    {selectedCapital.country}
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
                    {selectedCapital.history}
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
