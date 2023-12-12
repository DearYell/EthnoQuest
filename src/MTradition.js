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

const capitalsTradition = [
  {
    id: 1,
    name: 'Manila',
    country: 'Philippines',
    history: `Feast of Black Nazarene: This is one of the most famous religious processions in the Philippines.
    Thousands of people gather in Quaipo, Manila, to celebrate the figure of Christ, a statue built more than two centuries ago
    Aliwan Fiesta: Started in 2003, this has become one of the most popular celebrations in the Philippines.
    It’s an annual event that brings together different cultures across the country, showcasing their dances, traditions, art, and culture
    Santo Niño: Manila has many religious festivals, and the celebration of Santo Niño is one of them.
    Filipinos decorate their streets with striking colors and decorations, dancers, and music.
    Buling-Buling in Pandacan: This is one of the most popular dance celebrations in the area and has become the official dance of Manila.`,
    image: `${process.env.PUBLIC_URL}/Mtrad.jpg`, // Image associated with Manila
  },
  // Add more capital histories with IDs, names, countries, histories, and images
  {
    id: 2,
    name: 'Jakarta',
    country: 'Indonesia',
    history: `Betawi Heritage Parade: Celebrating Jakarta's indigenous Betawi culture, this parade honors the city's local traditions. Vibrant processions wind through the streets, showcasing Betawi music, dances like Tanjidor and Ondel-ondel performances, accompanied by local culinary delights. Families adorned in traditional attire participate, highlighting the unique heritage of Jakarta.
    \n\nAncient Harbor Day: Inspired by Jakarta's maritime history, this annual event commemorates the city's role as a bustling port. The day begins with a ceremonial boat procession along the historic waterfront, followed by cultural exhibitions, showcasing traditional boat-making techniques, seafaring songs, and street performances. It's a tribute to Jakarta's past as a vital trade hub, fostering appreciation for its maritime legacy.`,
    image: `${process.env.PUBLIC_URL}/Jtrad.jpeg`, // Image associated with Jakarta
  },
  {
    id: 3,
    name: 'London',
    country: 'United Kingdom',
    history: `Thames Unity Festival: Celebrating London's diverse communities and its iconic river, the Thames Unity Festival is an annual event promoting cultural harmony. Held along the banks of the Thames, it brings together various ethnic groups, showcasing their unique traditions through music, dance, and art. The festival features a colorful flotilla parade on the river, where boats adorned with cultural symbols sail side by side, symbolizing unity in diversity. Food stalls offer an array of international cuisines, encouraging cultural exchange and fostering a sense of togetherness among Londoners.`,
    image: `${process.env.PUBLIC_URL}/Ltrad.jpg`, // Image associated with Jakarta
  },
  {
    id: 4,
    name: 'Tokyo',
    country: 'Japan',
    history: `Hanami Matsuri: The Hanami Matsuri, or Cherry Blossom Festival, is a cherished tradition in Tokyo, celebrating the ephemeral beauty of cherry blossoms. During springtime, families and friends gather in parks, especially Ueno and Yoyogi, for picnics under the blooming trees. The festival includes traditional tea ceremonies, kimono-clad performances, and music celebrating nature's renewal. As the delicate blossoms symbolize transience, the festival embodies appreciation for fleeting moments and the beauty they bring, fostering a sense of togetherness amidst Tokyo's bustling lifestyle.`,
    image: `${process.env.PUBLIC_URL}/Ttrad.jpg`, // Image associated with Jakarta
  },
  {
    id: 5,
    name: 'Ottawo',
    country: 'Canada',
    history: `Winter Luminescence Gala: Embracing Ottawa's wintry landscape, the Winter Luminescence Gala is an annual celebration held during the peak of the season. Illuminating the city's iconic landmarks along the Rideau Canal, the event combines art, technology, and community spirit. Residents create dazzling light installations along the canal, transforming it into a mesmerizing spectacle. The gala features ice sculpting competitions, live music performances, and a vibrant night market showcasing local artisans' crafts and delicacies. It's a time for Ottawans to revel in the magic of winter, fostering a sense of warmth and connection within the cold embrace of the season.`,
    image: `${process.env.PUBLIC_URL}/Otrad.jpeg`, // Image associated with Jakarta
  },
  {
    id: 6,
    name: 'Beijing',
    country: 'China',
    history: `
    Dragon's Lantern Festival: Held annually in Beijing, the Dragon's Lantern Festival marks the end of the Chinese New Year celebrations. Families and communities come together in parks and squares, crafting intricate lanterns in the shape of dragons, a symbol of strength and prosperity. The festival kicks off with a grand procession featuring dragon dancers, martial arts performances, and traditional Chinese music. The evening culminates in a spectacular display as the sky fills with glowing dragon-shaped lanterns, symbolizing unity and good fortune for the year ahead. It's a cherished tradition fostering community spirit and celebrating Beijing's rich cultural heritage.`,
    image: `${process.env.PUBLIC_URL}/Btrad.jpg`, // Image associated with Jakarta
  },
  {
    id: 7,
    name: 'Seoul',
    country: 'South Korea',
    history: `Seoul Lantern Walk: The Seoul Lantern Walk is an annual event held along the Cheonggyecheon Stream, celebrating the city's cultural heritage and unity. During the evening, locals and visitors alike gather to walk along the stream adorned with thousands of colorful lanterns, each representing a wish or hope. The event includes traditional performances, showcasing dance, music, and artistic displays that highlight Korea's history and contemporary culture. The culmination of the walk is a release of floating lanterns onto the stream, symbolizing collective aspirations for peace, prosperity, and harmony in Seoul.`,
    image: `${process.env.PUBLIC_URL}/Strad.jpg`, // Image associated with Jakarta
  },
  {
    id: 8,
    name: 'Bangkok',
    country: 'Thailand',
    history: `Songkran Water Festival: Celebrated annually in Bangkok, the Songkran Water Festival is a vibrant and joyous occasion marking the Thai New Year. Families and friends gather in the streets armed with water guns and bowls of scented water to splash and sprinkle on each other, symbolizing purification and renewal. The festival also involves lively street parades with traditional Thai music, dance performances, and colorful processions of floats adorned with flowers and symbols of good luck. It's a time when the city comes alive with laughter, water fights, and a sense of camaraderie, fostering a spirit of unity and fresh beginnings.`,
    image: `${process.env.PUBLIC_URL}/Bktrad.jpg`, // Image associated with Jakarta
  },
  {
    id: 9,
    name: 'Bern',
    country: 'Switzerland',
    history: `Bärengraben Celebration: The Bärengraben Celebration, inspired by Bern's historical bear pits, commemorates the city's connection to bears. Each year, during late summer, locals and tourists gather in the Bear Park for a day-long festival. The event includes bear-themed parades, folk music, and dance performances representing Bern's rich heritage. Visitors can enjoy honey-based treats and witness traditional craftsmen demonstrating their skills. The celebration culminates in a symbolic "bear release," where a wooden bear sculpture is floated down the Aare River, symbolizing the city's harmony with nature and its historical ties to the bear, an emblem of Bern.`,
    image: `${process.env.PUBLIC_URL}/bntrad.jpg`, // Image associated with Jakarta
  },
  {
    id: 10,
    name: 'Brussels',
    country: 'Belgium',
    history: `Grand Floral Parade: The Grand Flower Parade in Brussels is an annual celebration of floral artistry and cultural diversity. Held in early spring, the city streets transform into a colorful tapestry of flowers, showcasing elaborate floats adorned with intricate floral designs. Local communities and international participants come together, displaying their floral craftsmanship, while traditional music and dance performances enliven the procession. The parade culminates in the central square, where a grand floral carpet is unveiled, featuring intricate designs made entirely of vibrant blossoms, celebrating Brussels' horticultural heritage and artistic flair.`,
    image: `${process.env.PUBLIC_URL}/bstrad.jpg`, // Image associated with Jakarta
  },
  {
    id: 11,
    name: 'Havana',
    country: 'Cuba',
    history: `Rhythms of Havana Festival: The Rhythms of Havana Festival is an annual celebration paying homage to Cuba's rich musical heritage and vibrant culture. Held in the heart of Havana, it gathers musicians, dancers, and artisans from across the country for a week-long extravaganza. The streets come alive with colorful parades showcasing traditional Cuban music genres like salsa, son, and rumba. The festival features dance workshops, live performances in historic squares, and art exhibitions portraying Cuba's diverse artistic expressions. It's a time when Havana pulsates with the infectious rhythms of its music, inviting locals and visitors to immerse themselves in the island's joyful spirit and artistic legacy.`,
    image: `${process.env.PUBLIC_URL}/htrad.jpg`, // Image associated with Jakarta
  },
  {
    id: 12,
    name: 'Madrid',
    country: 'Spain',
    history: `Madrid Flamenco Fiesta: The Madrid Flamenco Fiesta is an annual celebration of the city's passionate flamenco heritage. Held in iconic squares like Plaza Mayor, it's a vibrant gathering showcasing flamenco music, dance, and culture. Local flamenco artists, dressed in traditional attire, perform captivating dances accompanied by soulful guitar melodies, capturing the essence of Andalusian folklore. The festival includes workshops where attendees can learn basic flamenco steps and immerse themselves in the art form. It's a spirited event that honors Madrid's deep connection to flamenco, inviting everyone to experience the fervor and emotion of this captivating Spanish tradition.`,
    image: `${process.env.PUBLIC_URL}/mdtrad.jpg`, // Image associated with Jakarta
  },
  // Add other capital histories here
];

export default function MTradition() {
  const { id } = useParams();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const selectedCapital = capitalsTradition.find(capital => capital.id === parseInt(id));

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
        <AutoStoriesIcon style={{ color: 'lightgreen' }}/>
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
