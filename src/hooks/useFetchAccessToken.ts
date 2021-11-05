import {useState, useEffect} from 'react'


const client_id = process.env.REACT_APP_CLIENT_ID
const client_secret = process.env.REACT_APP_CLIENT_SECRET
const AuthToken : string = `${btoa(`${client_id}:${client_secret}`)}`


const useFetchAccessToken = (url:string) => {
    console.log(AuthToken);
    
    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        setLoading(true)
        const fetchData = async() => {
            try{
                const response : any = await fetch('',
                {
                    mode: 'no-cors',
                    headers: {
                        "Content-Type" : "application/json"
                    }
                })
                console.log(response);
                
                const dataJson = response.json()
                console.log(dataJson);
                
                setData(dataJson)
            }catch(error){
                setError('error occured')
                console.log(error);
                
            }
            setLoading(false)
        }
        fetchData()
    },[url])
    return {data, loading,error}
}

export default useFetchAccessToken

