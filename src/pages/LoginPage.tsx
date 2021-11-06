import React from 'react';
import styles from '../styles/LoginPage.module.css'
import SpotifyLogo from '../assets/Spotify_Logo.png'


const client_id = process.env.REACT_APP_CLIENT_ID

let url = 'https://accounts.spotify.com/authorize'
url += '?response_type=token'
url += '&client_id=' + encodeURIComponent(client_id || '')
url += '&scope=' + encodeURIComponent("user-read-private user-read-email")
url += '&redirect_uri=' + encodeURIComponent("http://localhost:3000/landingpage")
url += '&state=jahsyyteoisjkhfd'


function App() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={SpotifyLogo} alt="spotify logo" width="140px" />
      </div>
      <div className={styles.heading}>
        Jukebox
      </div>
      <div className={styles.subheading}>
        Save trending playlists locally
      </div>
      <a href={url} className={styles.loginbtn}>
        Login
      </a>
      <div>Login to access playlists</div>

    </div>
  );
}

export default App;

//https://accounts.spotify.com/authorize?response_type=token&client_id=5f2ed8b9afd149e196baace029ed072e&scope=user-read-private%20user-read-email&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flandingpage&state=jahsyyteoisjkhfd