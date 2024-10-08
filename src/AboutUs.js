import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Link, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";



function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          EthnoQuest
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const cards = [
  {
    id: 1,
    title: 'Deriel Magallanes',
    description: 'Strength is not just visible; sometimes, it is the quiet battles waged within',
    image: `${process.env.PUBLIC_URL}/Deriel.png`,
  },
  {
    id: 2,
    title: 'Nichole Cuizon',
    description: '"Be the change that you wish to see in the world." - Mahatma Gandhi',
    image: `${process.env.PUBLIC_URL}/Nichole.jpg`,
  },
  {
    id: 3,
    title: 'Janicka Algonas',
    description: '"This to shall pass"',
    image: `${process.env.PUBLIC_URL}/Janicka.png`,
  },
  {
    id: 4,
    title: 'Mark Edwin Huyo-a',
    description: '"Time is gold"',
    image: `${process.env.PUBLIC_URL}/Mark.png`,
  },
  {
    id: 5,
    title: 'Nathaniel Edryd Negapatan',
    description: '"Exert, Achieve, Succeed"',
    image: `${process.env.PUBLIC_URL}/Nathan.png`,  },
];

const defaultTheme = createTheme();

export default function AboutUs() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="absolute" sx={{ backgroundColor: '#7ED957' }}>
        <Toolbar>
          <Typography variant="h5" color="inherit" noWrap>
            About Us
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 1,
          }}
        >
          
          <Container maxWidth="sm" sx={{ mt: 10, mb: 2,}}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              EthnoQuest Team
            </Typography>
            <Typography variant="h7" align="center" color="text.secondary" paragraph>
            Behind EthnoQuest's vibrant interface and captivating content is a team of dedicated developers, content creators, and cultural experts. 
            Their collective efforts drive the platform's growth and ensure an enriching experience for our users.
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4} justifyContent="center">
            {cards.map((card, index) => (
              <Grid item key={card.id} xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '20px' }}>
                  <CardMedia
                    component="div"
                    sx={{
                      // Increase aspect ratio for larger image
                      pt: '100%', // You can adjust this value for image size
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1, padding: '30px' }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  {/* <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
      
        {/* <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography> */}
        <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" sx={{
                      mt: 1,
                      mb: 1,
                      backgroundColor: "#00BF63",
                      color: "white",
                      width: "100px",
                      "&:hover": { backgroundColor: "#96BB7C" },
                    }}component={Link}
                    to="/dashboard">Dashboard</Button>
            </Stack>
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}
