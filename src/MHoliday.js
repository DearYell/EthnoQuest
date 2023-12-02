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

const capitalsHoliday = [
  {
    id: 1,
    name: 'Manila',
    country: 'Philippines',
    history: `One of the significant holidays in Manila is the Araw ng Maynila or Manila Day, celebrated annually on June 24th. This holiday commemorates the founding of the city of Manila on June 24, 1571, by Spanish conquistador Miguel López de Legazpi.

    During this day, various events and activities take place across the city, including parades, cultural performances, historical exhibitions, and street festivals. It's a time for locals to celebrate Manila's rich history, culture, and contributions to the Philippines. Many take part in community gatherings, while others engage in volunteer work or enjoy special discounts and promotions offered by local establishments.`,
    image: `${process.env.PUBLIC_URL}/Pf.jpg`, // Image associated with Manila
  },
  // Add more capital histories with IDs, names, countries, histories, and images
  {
    id: 2,
    name: 'Jakarta',
    country: 'Indonesia',
    history: `Betawi Heritage Parade: Celebrating Jakarta's indigenous Betawi culture, this parade honors the city's local traditions. Vibrant processions wind through the streets, showcasing Betawi music, dances like Tanjidor and Ondel-ondel performances, accompanied by local culinary delights. Families adorned in traditional attire participate, highlighting the unique heritage of Jakarta.
    \n\nAncient Harbor Day: Inspired by Jakarta's maritime history, this annual event commemorates the city's role as a bustling port. The day begins with a ceremonial boat procession along the historic waterfront, followed by cultural exhibitions, showcasing traditional boat-making techniques, seafaring songs, and street performances. It's a tribute to Jakarta's past as a vital trade hub, fostering appreciation for its maritime legacy.`,
    image: `${process.env.PUBLIC_URL}/Jf.jpg`, // Image associated with Jakarta
  },
  {
    id: 3,
    name: 'London',
    country: 'United Kingdom',
    history: `London hosts various events and celebrations throughout the year, but one prominent occasion is the Notting Hill Carnival, held annually on the last weekend of August, including the August Bank Holiday Monday. This vibrant celebration showcases Caribbean culture, music, and traditions, attracting millions of visitors from around the world.

    The Notting Hill Carnival features colorful parades with dancers in elaborate costumes, lively music including calypso, soca, and reggae, along with delicious Caribbean cuisine. Streets in Notting Hill are filled with revelers, creating a jubilant atmosphere as they celebrate the diversity and heritage of London's Caribbean communities.
    
    This event has become a significant part of London's cultural calendar, highlighting the city's cosmopolitan identity and fostering unity among its residents and visitors through music, dance, and joyful festivities.`,
    image: `${process.env.PUBLIC_URL}/Lf.png`, // Image associated with Jakarta
  },
  {
    id: 4,
    name: 'Tokyo',
    country: 'Japan',
    history: `One of the iconic festivals in Tokyo is the Kanda Matsuri, held biennially in mid-May in odd-numbered years. It's one of Tokyo's most grand and lively Shinto festivals, dating back to the Edo period.

    During the Kanda Matsuri, vibrant processions featuring beautifully adorned floats, portable shrines (mikoshi), and participants in traditional costumes parade through the streets around the Kanda Myojin Shrine and the neighboring areas of Akihabara and Kanda. The procession is accompanied by music, performances, and ceremonial rituals, showcasing the city's rich cultural heritage.
    
    It's a time when Tokyoites come together to celebrate their history, traditions, and spirituality, honoring the Shinto deity enshrined at Kanda Myojin. The festival's energy, colors, and traditional elements offer both locals and tourists a glimpse into Tokyo's deep-rooted cultural legacy.`,
    image: `${process.env.PUBLIC_URL}/Tf.jpg`, // Image associated with Jakarta
  },
  {
    id: 5,
    name: 'Ottawo',
    country: 'Canada',
    history: `Winter Luminescence Gala: Embracing Ottawa's wintry landscape, the Winter Luminescence Gala is an annual celebration held during the peak of the season. Illuminating the city's iconic landmarks along the Rideau Canal, the event combines art, technology, and community spirit. Residents create dazzling light installations along the canal, transforming it into a mesmerizing spectacle. The gala features ice sculpting competitions, live music performances, and a vibrant night market showcasing local artisans' crafts and delicacies. It's a time for Ottawans to revel in the magic of winter, fostering a sense of warmth and connection within the cold embrace of the season.`,
    image: `${process.env.PUBLIC_URL}/Of.png`, // Image associated with Jakarta
  },
  {
    id: 6,
    name: 'Beijing',
    country: 'China',
    history: `
    
One of the notable holidays in Beijing is the Mid-Autumn Festival, also known as the Moon Festival, celebrated on the 15th day of the 8th month in the lunar calendar, typically falling in September.

During the Mid-Autumn Festival, families gather to appreciate the full moon, a symbol of unity and togetherness. Traditionally, people enjoy mooncakes, round pastries filled with various sweet fillings, and sip tea while admiring the moon. In parks and public spaces, lantern displays and cultural performances take place, adding to the festive atmosphere.

The holiday also involves various customs like dragon and lion dances, storytelling, and playing traditional games. It's a time for people to reunite with loved ones, express gratitude, and celebrate the harvest season while cherishing the beauty of the moonlit night.`,
    image: `${process.env.PUBLIC_URL}/Bf.jpg`, // Image associated with Jakarta
  },
  {
    id: 7,
    name: 'Seoul',
    country: 'South Korea',
    history: `
    Seoul celebrates a range of holidays, but one significant festival is Chuseok, also known as Korean Thanksgiving Day, celebrated on the 15th day of the 8th month in the lunar calendar, typically in September or October.
    
    Chuseok is a time for family gatherings, ancestral rituals, and expressing gratitude for the harvest. Families travel from across the country to be together, sharing traditional foods like songpyeon (rice cakes), performing ancestral rites, and visiting ancestral gravesites.
    
    During Chuseok, Seoul's streets are adorned with vibrant lanterns, and various cultural events take place across the city, including folk games, traditional performances, and cultural exhibitions. The holiday carries a sense of unity, as people come together to honor their heritage, strengthen family bonds, and celebrate Korean traditions.`,
    image: `${process.env.PUBLIC_URL}/Sf.jpg`, // Image associated with Jakarta
  },
  {
    id: 8,
    name: 'Bangkok',
    country: 'Thailand',
    history: `One of the significant holidays in Bangkok and throughout Thailand is Songkran, the Thai New Year, celebrated in mid-April. Songkran marks the beginning of the traditional Thai calendar and is known for its exuberant water festival.

    During Songkran, people engage in friendly water fights, splashing water on each other as a symbol of cleansing and renewal. Bangkok's streets turn into lively water battlegrounds, with locals and tourists alike participating in the joyful festivities. The celebration extends beyond water fights to include religious ceremonies at temples, merit-making activities, and paying respect to elders by pouring scented water over their hands.
    
    It's a time of vibrant energy, joyous celebrations, and cultural traditions, emphasizing the importance of cleansing away the old year's misfortunes and welcoming the new year with fresh beginnings.`,
    image: `${process.env.PUBLIC_URL}/Bkf.jpg`, // Image associated with Jakarta
  },
  {
    id: 9,
    name: 'Bern',
    country: 'Switzerland',
    history: `One of the prominent holidays in Bern is the Zibelemärit, or Onion Market, celebrated on the fourth Monday of November. This unique and colorful festival dates back to the 15th century and is a cherished tradition in Bern.

    During the Zibelemärit, the city's streets come alive with stalls selling various types of onions, garlic, and intricate onion braids. Locals and visitors dress in traditional attire, and the market is filled with lively activities, including street performances, folk music, and food stalls offering onion-based delicacies.
    
    The festival's highlight is the onion market parade, featuring creatively crafted onion displays, intricate vegetable sculptures, and artistic arrangements. It's a festive day that brings the community together to celebrate Bern's agricultural heritage, culinary traditions, and vibrant cultural spirit.`,
    image: `${process.env.PUBLIC_URL}/bnf.png`, // Image associated with Jakarta
  },
  {
    id: 10,
    name: 'Brussels',
    country: 'Belgium',
    history: `One of the significant holidays in Brussels is the National Day of Belgium, celebrated on July 21st. This commemorates the day when the country's first king took the oath of allegiance in 1831.

    On National Day, Brussels bursts into vibrant celebrations with parades, concerts, and various cultural events across the city. Festivities kick off with a military parade in the city center, showcasing Belgium's armed forces. There are also fireworks displays, street parties, and live music performances, attracting locals and visitors alike.
    
    The celebration extends beyond Brussels, encompassing various regions of Belgium, but the capital particularly hosts grand ceremonies and events, emphasizing the country's unity, cultural diversity, and national pride. It's a time for Belgians to come together, celebrate their heritage, and enjoy the festive atmosphere in Brussels.`,
    image: `${process.env.PUBLIC_URL}/bsf.png`, // Image associated with Jakarta
  },
  {
    id: 11,
    name: 'Havana',
    country: 'Cuba',
    history: `
    One of the notable holidays in Havana is the Day of the Revolution, celebrated on January 1st to commemorate the Cuban Revolution of 1959.
    
    On this day, Havana and the entire country come alive with various events, including parades, marches, and cultural activities. The celebrations often start with a large gathering at Plaza de la Revolución, where speeches are made, and people pay tribute to national heroes and revolutionary leaders.
    
    The streets of Havana are filled with music, dancing, and displays of national pride, showcasing Cuba's rich cultural heritage. It's a time when Cubans reflect on their history, celebrate their revolutionary spirit, and reaffirm their commitment to the ideals of the revolution.`,
    image: `${process.env.PUBLIC_URL}/Hf.jpg`, // Image associated with Jakarta
  },
  {
    id: 12,
    name: 'Madrid',
    country: 'Spain',
    history: `
    One of the significant holidays in Madrid is the Feast of San Isidro, celebrated on May 15th in honor of Madrid's patron saint, San Isidro Labrador.
    
    During the Feast of San Isidro, the city erupts in festivities featuring concerts, traditional dances, street performances, and religious processions. Locals dress in traditional attire, and the city's plazas and streets host various cultural events, including chotis dances, folk music, and bullfighting exhibitions.
    
    A highlight of the celebration is the pilgrimage to San Isidro's hermitage, where people gather to pay homage to the saint, offer prayers, and partake in the blessing of the water from the saint's well. The Feast of San Isidro is a time when Madrileños come together to celebrate their patron saint, cultural heritage, and the vibrant spirit of Madrid.`,
    image: `${process.env.PUBLIC_URL}/mdf.jpg`, // Image associated with Jakarta
  },
  // Add other capital histories here
];

export default function MHoliday() {
  const { id } = useParams();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const selectedCapital = capitalsHoliday.find(capital => capital.id === parseInt(id));

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
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Culture" />
    </ListItemButton>
    <ListItemButton component={Link} to={`/MHoliday/${id}`}>
      <ListItemIcon>
        <CalendarMonthIcon style={{ color: 'lightgreen' }}/>
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
