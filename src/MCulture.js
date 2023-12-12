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

const capitalsCulture = [
  {
    id: 1,
    name: 'Manila',
    country: 'Philippines',
    history: `Manila's culture is a vibrant fusion shaped by centuries of diverse influences, notably Spanish colonial heritage evident in landmarks like Intramuros. Its rich culinary scene blends Spanish, Chinese, and Malay flavors, celebrated through iconic dishes like adobo and sinigang. The city pulses with art, music, and entertainment, boasting galleries, live music venues, and a love for karaoke. Embracing the value of bayanihan, Manila exudes resilience, blending tradition with modernity, fostering a close-knit community amidst its bustling urban landscape.`,
    image: `${process.env.PUBLIC_URL}/Mcul.jpg`, // Image associated with Manila
  },
  // Add more capital histories with IDs, names, countries, histories, and images
  {
    id: 2,
    name: 'Jakarta',
    country: 'Indonesia',
    history: `Jakarta's culture is a dynamic blend influenced by a mosaic of traditions stemming from Malay, Chinese, Arab, and Dutch origins. Its diversity shines through in the culinary delights, arts, and festivals, embracing Betawi, Javanese, Sundanese, and various regional cultures. This bustling metropolis is a canvas for traditional and contemporary arts, fostering creativity in galleries, theaters, and cultural events. Amidst the urban landscape, Jakarta proudly exhibits religious harmony, symbolized by the coexistence of mosques, churches, temples, and shrines, reflecting its embrace of both tradition and modernity.`,
    image: `${process.env.PUBLIC_URL}/Jcul.png`, // Image associated with Jakarta
  },
  {
    id: 3,
    name: 'London',
    country: 'United Kingdom',
    history: `London's culture is an eclectic tapestry woven from centuries of history and diverse influences. Its dynamic vibe resonates through iconic landmarks like the Tower of London and the modernity of the Shard. The city's diverse communities contribute to its vibrant arts scene, from the classical performances at the Royal Opera House to the urban creativity of Shoreditch's street art. London's cultural fusion extends to its cuisine, embracing global flavors in its restaurants and markets, celebrating a rich heritage that reflects the city's ever-evolving spirit.`,
    image: `${process.env.PUBLIC_URL}/Lcul.jpg`, // Image associated with Jakarta
  },
  {
    id: 4,
    name: 'Tokyo',
    country: 'Japan',
    history: `Tokyo's culture is an intricate blend of tradition and innovation, where ancient customs coexist with cutting-edge technology. The city pulsates with energy, from the serene tranquility of ancient shrines like Meiji Jingu to the neon-lit streets of Akihabara's tech district. Its diverse neighborhoods offer glimpses of Japan's rich heritage, showcased in Kabuki theater performances and tea ceremonies, while embracing the futuristic allure of robot restaurants and manga cafes. Tokyo's culinary scene mirrors its diversity, boasting Michelin-starred sushi establishments alongside bustling street food stalls, ensuring a sensory journey through the city's multifaceted culture.`,
    image: `${process.env.PUBLIC_URL}/Tcul.jpg`, // Image associated with Jakarta
  },
  {
    id: 5,
    name: 'Ottawo',
    country: 'Canada',
    history: `Ottawa's culture mirrors Canada's diverse mosaic, blending Indigenous roots with a rich tapestry of immigrant traditions. The city celebrates its heritage through museums like the Canadian Museum of History, showcasing Indigenous artifacts and national history. Ottawa's cultural scene thrives with festivals such as Winterlude, highlighting winter sports, and the vibrant Ottawa International Animation Festival, embracing artistry and innovation. Its dynamic culinary landscape features farm-to-table dining and global cuisine, reflecting the city's fusion of traditions amidst a backdrop of natural beauty and historic landmarks.`,
    image: `${process.env.PUBLIC_URL}/Ocul.jpg`, // Image associated with Jakarta
  },
  {
    id: 6,
    name: 'Beijing',
    country: 'China',
    history: `
    Beijing's culture is a vibrant amalgamation of ancient traditions and modern dynamism. The city resonates with historical landmarks like the Forbidden City and the Great Wall, showcasing centuries of Chinese heritage. Its art scene flourishes in galleries and performances, honoring classical Chinese opera and showcasing contemporary artistic expressions. Beijing's cuisine, from aromatic Peking duck to flavorful street foods in hutongs, reflects a rich culinary legacy that harmonizes tradition with the evolving tastes of a bustling metropolis.`,
    image: `${process.env.PUBLIC_URL}/Bcul.jpg`, // Image associated with Jakarta
  },
  {
    id: 7,
    name: 'Seoul',
    country: 'South Korea',
    history: `
    Seoul's culture is a captivating blend of ancient customs and technological innovation. From the serene beauty of palaces like Gyeongbokgung to the bustling streets of Gangnam, the city embodies Korea's rich history and modern progress. Its dynamic art scene thrives in galleries, traditional performances, and the energetic K-pop industry, showcasing the nation's creative prowess. Seoul's culinary diversity, offering traditional dishes like kimchi and bibimbap alongside trendy cafes and street food delights, reflects a city embracing its cultural heritage while embracing contemporary influences.`,
    image: `${process.env.PUBLIC_URL}/Scul.jpg`, // Image associated with Jakarta
  },
  {
    id: 8,
    name: 'Bangkok',
    country: 'Thailand',
    history: `
    Bangkok's culture is an immersive experience blending ancient traditions with a vibrant modern spirit. The city's iconic temples like Wat Pho and the Grand Palace resonate with centuries of Thai history and artistry. Its dynamic street life, bustling markets, and lively festivals, such as Songkran, encapsulate Thailand's celebratory spirit and warm hospitality. Bangkok's culinary scene, from aromatic street food stalls to high-end restaurants, showcases a diverse range of flavors, ensuring a delicious exploration of Thai cuisine amidst the city's bustling energy.`,
    image: `${process.env.PUBLIC_URL}/Bkcul.jpg`, // Image associated with Jakarta
  },
  {
    id: 9,
    name: 'Bern',
    country: 'Switzerland',
    history: `Bern's culture is a captivating tapestry woven from its medieval roots and contemporary charm. The UNESCO-listed Old Town, with its cobbled streets and medieval architecture, echoes the city's rich history. Cultural institutions like the Zentrum Paul Klee honor artistic legacies, while the Gurtenfestival celebrates modern music against the backdrop of Gurten Hill. Bern's penchant for quality of life intertwines with a love for arts, gastronomy, and nature, making it a city where tradition meets a progressive and vibrant spirit.`,
    image: `${process.env.PUBLIC_URL}/bncul.jpg`, // Image associated with Jakarta
  },
  {
    id: 10,
    name: 'Brussels',
    country: 'Belgium',
    history: `
    Brussels epitomizes a cultural crossroads, blending its historical heritage with a dynamic cosmopolitan flair. Its medieval Grand Place and ornate Art Nouveau buildings encapsulate the city's rich history. Cultural diversity thrives in its array of museums, from the Magritte Museum to the Atomium, celebrating art, history, and innovation. Brussels' gastronomy, renowned for its chocolates, waffles, and culinary delights, embodies a fusion of traditions, reflecting the city's status as a global hub and the heart of European diplomacy.`,
    image: `${process.env.PUBLIC_URL}/bscul.jpg`, // Image associated with Jakarta
  },
  {
    id: 11,
    name: 'Havana',
    country: 'Cuba',
    history: `Havana's culture dances to the rhythm of its rich history and vibrant traditions. From the colorful colonial buildings in Old Havana to the vibrant Malecón, the city resonates with a nostalgic charm. The pulse of Cuban music, salsa, and Afro-Cuban beats fills the streets, inviting spontaneous dances and lively celebrations. Havana's artistic soul shines in its galleries and street murals, reflecting the city's passionate spirit and creative energy.`,
    image: `${process.env.PUBLIC_URL}/hcul.jpg`, // Image associated with Jakarta
  },
  {
    id: 12,
    name: 'Madrid',
    country: 'Spain',
    history: `Madrid's culture is a passionate fusion of heritage and modernity. The city's historic landmarks like the Prado Museum and Plaza Mayor stand alongside contemporary architectural wonders, embodying its diverse cultural essence. Flamenco resonates through the streets, captivating audiences with its heartfelt rhythms and intricate footwork, while the city's devotion to football unites locals in fervent support. Madrid's culinary scene, from traditional tapas bars to avant-garde gastronomy, mirrors its eclectic spirit, inviting residents and visitors alike to savor its vibrant and multifaceted culture.`,
    image: `${process.env.PUBLIC_URL}/mdcul.jpg`, // Image associated with Jakarta
  },
  // Add other capital histories here
];

export default function MCulture() {
  const { id } = useParams();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const selectedCapital = capitalsCulture.find(capital => capital.id === parseInt(id));

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
    <ListItemButton component={Link} to={`/MHistory/${id}`}>
      <ListItemIcon>
        <HistoryEduIcon  />
      </ListItemIcon >
      <ListItemText primary="History" />
    </ListItemButton>
    <ListItemButton component={Link} to={`/MTradition/${id}`}>
      <ListItemIcon>
        <AutoStoriesIcon />
      </ListItemIcon>
      <ListItemText primary="Tradition" />
    </ListItemButton>
    <ListItemButton  component={Link} to={`/MCulture/${id}`}>
      <ListItemIcon>
        <InfoIcon style={{ color: 'lightgreen' }}/>
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
