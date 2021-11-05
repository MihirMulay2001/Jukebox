import React from 'react'
import LeftPane from '../components/leftpane'
import RightPane from '../components/rightpane'
import useFetcher from '../hooks/useFetcher'
import { useParams } from 'react-router-dom'
import styles from '../styles/LandingPage.module.css'

const sampleData = [{
    id: '213214124',
    name: 'wow'
}, {
    id: '98938483',
    name: 'wow'
}, {
    id: '3784923',
    name: 'wow'
},
]




function LandingPage() {
    const params = useParams()
    console.log(params);
    const access_token = window.location.hash.substring(1).split("&")[0].split("=")[1]
    const { data, loading, error } = useFetcher('https://api.spotify.com/v1/browse/featured-playlists', access_token)
    if (loading) return <div>Loading</div>
    if (error) return <div>error</div>
    console.log(data);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.leftpane}>
                    <LeftPane data={sampleData} />
                </div>
                <div className={styles.leftpane}>
                    <RightPane />
                </div>
            </div>
        </>
    )
}
export default LandingPage