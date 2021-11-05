import React from 'react'
import LeftPane from '../components/leftpane'
import RightPane from '../components/rightpane'
import useFetcher from '../hooks/useFetcher'
import { useParams } from 'react-router-dom'


function LandingPage() {
    const params = useParams()
    console.log(params);
    const access_token = window.location.hash.substring(1).split("&")[0].split("=")[1]
    const { data, loading, error } = useFetcher('https://api.spotify.com/v1/api/token', access_token)
    if (loading) return <div>Loading</div>
    if (error) return <div>error</div>
    console.log(data);

    return (
        <>
            <LeftPane />
            <RightPane />
        </>
    )
}
export default LandingPage