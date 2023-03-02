import React from 'react';
import './Footer.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { Grid, Slider } from "@material-ui/core";
import VolumeDownIcon from '@mui/icons-material/VolumeDown'
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay'


function Footer() {
  return (
    <div className='footer'>
     <div className="footer__left">
        <img className='footer__albumLogo' src="https://www.gannett-cdn.com/presto/2021/07/23/USAT/d71e6ac9-78e5-4433-a4a3-4686065b7a30-LNX_INDUSTRY_BABY_FINAL_4K.jpg?crop=4095,2304,x0,y409&width=3200&height=1801&format=pjpg&auto=webp" alt="" />
       <div className='footer__songInfo'>
          <h4>Industry Baby</h4>
          <p>Lil Nas X</p>
       </div>
     </div>

     <div className="footer__center">
      <ShuffleIcon className='footer__green' />
      <SkipPreviousIcon className='footer__icon' />
      <PlayCircleIcon fontSize='large' className='footer__icon' />
      <SkipNextIcon className='footer__icon' />
      <CompareArrowsIcon className='footer__green' />
     </div>

     <div className="footer__right">
       <Grid container spacing={2}>
         <Grid item>
           <PlaylistPlayIcon/>
         </Grid>
         <Grid item>
          <VolumeDownIcon />
         </Grid>
         <Grid item xs>
           <Slider />
         </Grid>
       </Grid>
     </div>
    </div>
  );
}

export default Footer