import React from 'react'
import { useDrag } from 'react-dnd'

function Card(props: any) {
    const playlist = props.item
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'playlist',
        item: {
            playlist: playlist
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <div ref={drag} style={{ border: isDragging ? "5px solid black" : "0px" }}>
            {playlist.id}
            {playlist.name}
        </div>
    )
}

export default Card
