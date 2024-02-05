// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Typography, Avatar } from '@mui/material';
import Paper from '@mui/material/Paper';
// import { makeStyles } from '@mui/styles';
import ComponentGrid from './componentgrid';
import alpha from '../assets/images/alpha.png';


const HomePage = () => {
    return (
      <Container maxWidth="sm" sx={{ backgroundColor: '#f5f5f5' }}> 
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={6} md={3}> 
            <div  style={{ marginTop: '20px' }}>
            <Avatar alt="Alpha" src={alpha} sx={{ width: '100px', height: '20px', }} />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={9} container justifyContent="flex-end">
            <div  style={{ marginTop: '20px' }}>
            <Button variant="contained" color="primary">
              SYNC
            </Button>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="center">
            {/* Text */}
            <Grid item xs={12} sm={6}>
            <div style={{ marginTop: '40px' }}> {/* Adjust margin top as needed */}
                <Typography variant="subtitle1" gutterBottom>
                  Hello, Yakubu odili ojo
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                  Win at work today!
                </Typography>
              </div>
            </Grid>
            
            {/* Avatar */}
            <Grid item xs={12} sm={6} container justifyContent="flex-end">
            <div style={{ marginTop: '40px' }}>
                <Avatar alt="Dummy Profile" src="/dummy-profile.jpg" sx={{ width: 80, height: 80 }} /> {/* Adjust width and height as needed */}
              </div>        
            </Grid>
          </Grid>
        </Grid>
            <ComponentGrid />
      </Container>
    );
  };
  
  export default HomePage;



// const HomePage = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="path/to/profile-picture.jpg" alt="Profile" className="App-profile-image" />
//         <div className="App-text-container">
//           <h1>Welcome to My App</h1>
//           <h2>This is some intro text</h2>
//         </div>
//         <button className="App-sync-button">
//           <img src="path/to/sync-icon.png" alt="Sync" className="App-sync-icon" />
//         </button>
//       </header>
//     </div>
//   );
// };

// export default HomePage;