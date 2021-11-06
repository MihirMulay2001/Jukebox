import Card from 'components/Card/Card'
import * as React from 'react'
import useDnd from '../../hooks/useDnd'
import { useDrop } from 'react-dnd'
import styles from '../../styles/Pane.module.css'

export default function RightPane() {
    const { playlists, modifyPlaylists } = useDnd()
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'playlist',
        drop: (item: any) => {
            modifyPlaylists("SET", item.playlist)
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const clearStorage = (event: any) => {
        event.preventDefault();
        modifyPlaylists("DELETE_ALL");
    }

    return (
        <div ref={drop} className={styles.container}>
            <div className={styles.heading}>
                <h1>Saved playlists</h1>
                <button className={styles.clearbtn} onClick={clearStorage}>Clear Lists</button>
            </div>
            <div className={styles.playlists}>
                {
                    playlists.map(playlist => <Card key={playlist.id} item={playlist} />)
                }
            </div>
        </div>
    )
}
