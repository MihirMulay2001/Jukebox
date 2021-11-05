import {useState, useEffect} from 'react'
import axios from 'axios'


const useFetcher = (url:string, access_token : string | string[]) => {
    //const uri = 'https://api.spotify.com/v1/playlists'
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        const fetchData = async() => {
            try{
                const response = await axios.get(url,{
                    headers: {
                        'Authorization' : `Bearer ${access_token}`
                    }
                })
                setData(response.data)
            }catch(error){
                setError('error occured')
            }
            setLoading(false)
        }
        fetchData()
    },[url, access_token])
    return {data, loading,error}
}

export default useFetcher