import * as React from 'react'
import LeftPane from '../components/leftpane'
import RightPane from '../components/rightpane'
import useFetcher from '../hooks/useFetcher'
import styles from '../styles/LandingPage.module.css'
import SpotifyLogo from '../assets/Spotify_Logo.png'
import PreLogin from 'components/Prelogin/PreLogin'
import useDnd from 'hooks/useDnd'


function LandingPage() {
    const { playlists, modifyPlaylists } = useDnd()
    const { data, loading, error } = useFetcher('https://api.spotify.com/v1/browse/featured-playlists?country=IN')
    if (loading) return <div>Loading</div>

    return (
        <>
            <div className={styles.container}>
                <img className={styles.spotifylogo} src={SpotifyLogo} alt="spotify logo" width="140px" />
                <div className={styles.leftpane}>
                    {!error ?
                        <LeftPane data={data.playlists.items} modifyPlaylists={modifyPlaylists} />
                        : <PreLogin />
                    }
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