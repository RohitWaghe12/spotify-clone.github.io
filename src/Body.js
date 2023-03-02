import PlayCircle from '@mui/icons-material/PlayCircle';
import React from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';

function Body( {spotify} ) {

  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src="https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly.png" alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div> 

      <div className='body__songs'>
        <div className="body__icon">
          <PlayCircle className='body__shuffle' />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />   
        </div>
         {discover_weekly?.tracks.item.map((item) => (
          <SongRow track={item.track} />
         ))} 
      </div>

    </div>

     
  )
}

export default Body