import axios from 'axios'
import { useEffect, useState } from 'react'

//fetches data from spotify api

const useFetcher = <Type>(url:string) => {
    const [data, setData] = useState<Type>({} as Type)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const access_token = window.location.hash.substring(1).split("&")[0].split("=")[1]
    console.log(window.location.hash);
    
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