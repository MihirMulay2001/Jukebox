import axios from 'axios'
import { useEffect, useState } from 'react'
import { featuredPlaylist } from 'types'

const useFetcher = (url:string) => {
    const [data, setData] = useState<featuredPlaylist>({} as featuredPlaylist)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const access_token = window.location.hash.substring(1).split("&")[0].split("=")[1]
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