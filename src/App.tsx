import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import LandingPage from 'pages/LandingPage';
//import { useNavigate } from 'react-router-dom'


function App() {
    // const access_token = window.location.hash
    // console.log('access token', access_token);
    // const navigate = useNavigate()
    // if (access_token.length > 1) {
    //     navigate(`/landingpage#${access_token}`)
    // }
    return (
        <Routes >
            <Route path="/" element={<LoginPage />} />
            <Route path="/landingpage" element={<LandingPage />} />
        </Routes>
    )
}

export default App
