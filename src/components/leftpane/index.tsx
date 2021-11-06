import * as React from 'react'
import { useDrop } from 'react-dnd'
import styles from '../../styles/Pane.module.css'
import Card from './Card'


export default function LeftPane(props: any) {
    const modifyPlaylists = props.modifyPlaylists
    const data = props.data
    //eslint-disable-next-line 
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'saved-playlist',
        drop: (item: any) => {
            modifyPlaylists("DELETE", item.playlist)

        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    return (
        <div ref={drop} className={styles.container}>
            <h1>Featured playlists </h1>
            <div className={styles.playlists}>
                {
                    data.map((item: any) => <Card key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}
