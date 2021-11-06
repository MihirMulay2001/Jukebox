import Loading from 'components/loading/Loading'
import PreLogin from 'components/Prelogin/PreLogin'
import useDnd from 'hooks/useDnd'
import * as React from 'react'
import SpotifyLogo from '../assets/Spotify_Logo.png'
import LeftPane from '../components/leftpane'
import RightPane from '../components/rightpane'
import useFetcher from '../hooks/useFetcher'
import styles from '../styles/LandingPage.module.css'


function LandingPage() {
    const { playlists, modifyPlaylists } = useDnd()
    const { data, loading, error } = useFetcher('https://api.spotify.com/v1/browse/featured-playlists?country=IN')
    if (loading) return <Loading />

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