import * as React from 'react'
import LeftPane from '../components/leftpane'
import RightPane from '../components/rightpane'
import useFetcher from '../hooks/useFetcher'
import { useParams } from 'react-router-dom'
import styles from '../styles/LandingPage.module.css'
import SpotifyLogo from '../assets/Spotify_Logo.png'




function LandingPage() {
    const params = useParams()
    console.log(params);
    const access_token = window.location.hash.substring(1).split("&")[0].split("=")[1]
    const { data, loading, error } = useFetcher('https://api.spotify.com/v1/browse/featured-playlists?country=IN', access_token)
    if (loading) return <div>Loading</div>
    if (error) return <div>error</div>
    console.log(data);

    return (
        <>
            <div className={styles.container}>
                <img className={styles.spotifylogo} src={SpotifyLogo} alt="spotify logo" width="140px" />
                <div className={styles.leftpane}>
                    <LeftPane data={data.playlists.items} />
                </div>
                <div className={styles.rightpane}>
                    <RightPane />
                </div>
            </div>
        </>
    )
}
export default LandingPage