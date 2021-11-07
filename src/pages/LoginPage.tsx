import * as React from 'react';
import { Link } from 'react-router-dom';
import PlaylistImage1 from '../assets/playlist-image1.png';
import PlaylistImage2 from '../assets/playlist-image2.png';
import SpotifyLogo from '../assets/Spotify_Logo.png';
import styles from '../styles/LoginPage.module.css';



function App() {
  return (
    <div className={styles.container}>
      <img className={styles.image1} src={PlaylistImage1} alt="playlist " />
      <img className={styles.image2} src={PlaylistImage2} alt="playlist " />
      <div className={styles.logo}>
        <img src={SpotifyLogo} alt="spotify logo" width="140px" />
      </div>
      <div className={styles.heading}>
        Jukebox
      </div>
      <div className={styles.subheading}>
        Save trending playlists locally
      </div>
      <Link to="/landingpage" className={styles.loginbtn}>
        View Playlists
      </Link>
    </div>
  );
}

export default App;