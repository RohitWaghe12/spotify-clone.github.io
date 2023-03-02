import React, { useEffect } from 'react';
import './Login.css';
import { getTokenFromUrl, loginUrl } from './spotify';


function Login() {


  return (
    <div className='login'>
      <img src="https://static.observableusercontent.com/files/a3fce02ee517ac3dfcf9d6c7c24826e0abaa4bd34875aa8fb13b3552e9b87a675bdf873e7d44b90581de2787b0dd309ea51e94095b6543550c29d055349cff17" alt="logo" />
      <a href={loginUrl}>Login With Spotify</a>
    </div>
  );
}

export default Login