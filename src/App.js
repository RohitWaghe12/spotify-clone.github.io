import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl, loginUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  const [token , setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const token = hash.access_token;
  
    if(token) {
      dispatch({
        type: "SET_Token",
        token: token,
      })
      setToken(token);
      spotify.setAccessToken(token);
      spotify.getMe().then((user) => {
         dispatch({
           type: "SET_USER",
           user:user,
         });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch ({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('9fdddd14d38f4a9a8c73349922a50afc').then(response => 
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
        )

    }

    // console.log("I HAVE A TOKEN 👍", token);
  }, []);

    // console.log("🤴", user);
    // console.log("🤷‍♂️", token);
     
  return (
    <div className="App">
    {
      token ?<Player spotify={spotify}/> : <Login/>
     }
        
    </div>
  );
}

export default App;
