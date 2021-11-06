import * as React from 'react'
import styles from '../../styles/Prelogin.module.css'

const client_id = process.env.REACT_APP_CLIENT_ID


let url = 'https://accounts.spotify.com/authorize'
url += '?response_type=token'
url += '&client_id=' + encodeURIComponent(client_id || '')
url += '&scope=' + encodeURIComponent("user-read-private user-read-email")
url += '&redirect_uri=' + encodeURIComponent("http://localhost:3000/landingpage")
url += '&state=jahsyyteoisjkhfd'


function PreLogin() {
    return (
        <div className={styles.container}>
            <h2>Login to access featured playlists</h2>
            <a href={url} className={styles.loginbtn}>
                Login
            </a>

        </div>
    )
}

export default PreLogin
