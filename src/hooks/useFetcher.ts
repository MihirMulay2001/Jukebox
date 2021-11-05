import {useState, useEffect} from 'react'
import axios from 'axios'


const useFetcher = (url:string) => {
    const uri = 'https://api.spotify.com/v1/playlists'
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        setLoading(true)
        const fetchData = async() => {
            try{
                const response = await axios.get(uri)
                setData(response.data)
            }catch(error){
                setError('error occured')
            }
            setLoading(false)
        }
        fetchData()
    },[url])
    return {data, loading,error}
}

export default useFetcher