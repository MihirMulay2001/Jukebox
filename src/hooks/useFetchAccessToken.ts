import {useState, useEffect} from 'react'
import axios from 'axios'


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
                const response : any = await fetch('https://accounts.spotify.com/en/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3Fresponse_type%3Dtoken%26client_id%3D5f2ed8b9afd149e196baace029ed072e%26redirect_uri%3Dlocalhost%253A3000%252F%26state%3Db0e9cd20efa1990ea30469896c4ac888e58e520fd4fb4084582e01cc64726647',
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


//https://accounts.spotify.com/en/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3Fresponse_type%3Dtoken%26client_id%3D5f2ed8b9afd149e196baace029ed072e%26redirect_uri%3Dlocalhost%253A3000%252F%26state%3Db0e9cd20efa1990ea30469896c4ac888e58e520fd4fb4084582e01cc64726647



//'Authorization': `Basic ${ btoa(`${process.env.REACT_APP_CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`)}`,
// auth: {
//     'username': `${client_id}`,
//     'password': `${client_secret}`
// }

//https://accounts.spotify.com/authorize?response_type=token&client_id=5f2ed8b9afd149e196baace029ed072e&scope=user-read-private%20user-read-email&redirect_uri=localhost%3A8000&state=jahsyyteoisjkhfd

//https://accounts.spotify.com/authorize?response_type=token&client_id=5f2ed8b9afd149e196baace029ed072e&scope=user-read-private%20user-read-email&redirect_uri=localhost%3A8000&state=jahsyyteoisjkhfd

//https://accounts.spotify.com/authorize?response_type=token&client_id=5f2ed8b9afd149e196baace029ed072e&scope=user-read-private%20user-read-email&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flandingpage&state=8ujshdjfks09wiue

/*
const BASE64_ENCODED_AUTH_CODE = "NWYyZWQ4YjlhZmQxNDllMTk2YmFhY2UwMjllZDA3MmU6OTVlOTVjZjNmZGY4NDZjYmJiMTY5OGM2OGYyOTg4NDg=";
            const headers = {
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${BASE64_ENCODED_AUTH_CODE}`
                }
            };
            const data = {
                "grant_type": 'client_credentials',
            };

            try {
                const response = await axios.post(
                'https://accounts.spotify.com/api/token',
                JSON.stringify(data),
                headers
                );
                console.log(response.data.access_token);
                return response.data.access_token;
            } catch (error) {
                console.log(error);
            }


  axios({
                    method: 'GET',
                    url: url,
                    withCredentials: false,
                    params: {
                        response_type: 'token',
                        client_id: client_id,
                        redirect_uri: 'localhost:3000/',
                        state: process.env.REACT_APP_CODE_CHALLENGE,
                    }
                })

            */

                //BQAodmcynmK7Lb4PGRN39BkBIuNg2mxKyCmJ0bXbpxJBA6RL30PCf7ejSOyeHOIyu89Nrt6eS8xFTC4Mnwi7J41C27VN6biD-Fhm1FkhHHC_srSW87QRPHKDdl-XkycS6kCTo726Yyf5rWJY2X5EUf6NImQ-HctNigNXuMEu3Id-rRc