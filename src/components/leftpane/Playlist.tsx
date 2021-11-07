import React from 'react'
import Card from './Card'
import styles from '../../styles/Pane.module.css'
import { playlistType } from 'types'

function Playlist(props: any) {
    const data: playlistType[] = props.data
    const playlisttype: string = props.type
    return (
        <>
            <h1>{playlisttype} playlists </h1>
            <div className={styles.playlists}>
                {
                    data.length > 0
                        ? data.map((item: playlistType) => <Card key={item.id} item={item} />)
                        : "No playlists available"
                }
            </div>
        </>
    )
}

export default Playlist
