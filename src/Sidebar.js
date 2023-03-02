import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import {useDataLayerValue} from './DataLayer';
function Sidebar() {
  const [{ playlists }, dispatch ] = useDataLayerValue();
  return (
   <div className="sidebar">
      <img className='sidebar__logo' src="https://static.observableusercontent.com/files/a3fce02ee517ac3dfcf9d6c7c24826e0abaa4bd34875aa8fb13b3552e9b87a675bdf873e7d44b90581de2787b0dd309ea51e94095b6543550c29d055349cff17" alt="" />

      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <strong className='sidebar__title'>PLAYLIST</strong>
      <hr />

      {playlists?.items?.map(playlist => (
        <SidebarOption title={playlist.name} />
      ))}
</div>
   
  )
}

export default Sidebar