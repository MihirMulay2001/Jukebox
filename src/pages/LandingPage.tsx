import useDnd from 'hooks/useDnd'
import * as React from 'react'
import SpotifyLogo from '../assets/Spotify_Logo.png'
import LeftPane from '../components/leftpane'
import RightPane from '../components/rightpane'
import styles from '../styles/LandingPage.module.css'


function LandingPage() {
    const { playlists, modifyPlaylists } = useDnd()

    return (
        <>
            <div className={styles.container}>
                <img className={styles.spotifylogo} src={SpotifyLogo} alt="spotify logo" width="140px" />
                <div className={styles.leftpane}>
                    <LeftPane modifyPlaylists={modifyPlaylists} />
                </div>
                <div className={styles.rightpane}>
                    <RightPane
                        playlists={playlists}
                        modifyPlaylists={modifyPlaylists}
                    />
                </div>
            </div>
        </>
    )
}
export default LandingPage