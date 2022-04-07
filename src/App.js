import React from "react";
import { Typography, AppBar, Button, Card, CardActions, CardMedia, CardContent, CssBaseline, Grid, Toolbar, Container } from '@mui/material';  
import { PhotoCamera } from '@mui/icons-material'; 

import useStyles from './styles'; 

const App = () => {
  const classes = useStyles();
   

  const cards = [1,2,3,4,5,6,7,8,9];

  return (
    <>
      <CssBaseline /> 
      <AppBar position="relative">
        <Toolbar >
          <PhotoCamera  className={classes.icon}/>
          <Typography variant="h6">
            Photo Album 
          </Typography>
        </Toolbar>
      </AppBar>
      <main> 
        <div className={classes.container}>
          <Container maxWidth="sm">
              <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                Photo Album  
              </Typography>
               <Typography variant="h5" align="center" color="textSecondary" paragraph>
                     Hello this is a material ui course taken by azeez so am testing some features out and its amazing to use 
              </Typography>
              <div className={classes.buttons}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                     <Button variant="outlined" color="primary" >
                      fetch advice
                    </Button>
                  </Grid>
                </Grid>
              </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom  variant="h5">
                            Heading
                        </Typography>
                        <Typography gutterBottom  variant="h6">
                          this is a section that you can subscribe to 
                        </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">view</Button>
                      <Button size="small" color="primary">edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom> Amazing</Typography>
          {/* <Typography variant="h2" align="center" gutterBottom> {advice}</Typography> */}
          <Typography variant="subtitle1" align="center" color="textPrimary"> Great! using material ui make things easier and faster</Typography>
      </footer>
    </>
  ) 
};

// 07033727296
// 07032426120
export default App; 



// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://weatherapi-com.p.rapidapi.com/current.json',
//   params: {q: '<REQUIRED>'},
//   headers: {
//     'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
//     'X-RapidAPI-Key': '3ab31d47c0mshe0042f0e0c9e263p104007jsn5d4c5f179d52'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });