import React from 'react'
import Card from '../Card/Card'
import styles from '../../styles/Pane.module.css'

export default function LeftPane(props: any) {
    const data = props.data
    return (
        <div className={styles.container}>
            <h1>Featured playlists </h1>
            <div className={styles.playlists}>
                {
                    data.map((item: any) => <Card key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}
