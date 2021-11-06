import React from 'react'
import { useDrag } from 'react-dnd'
import styles from '../../styles/Card.module.css'

function Card(props: any) {
    const playlist = props.item
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'featured-playlist',
        item: {
            playlist: playlist
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <div className={styles.card} ref={drag} style={{ border: isDragging ? "3px solid black" : "0px" }}>
            <div className={styles.img}>
                <img
                    src={playlist.images[0].url}
                    alt="playlist cover"
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.description}>
                {playlist.description}
            </div>
        </div>
    )
}

export default Card
