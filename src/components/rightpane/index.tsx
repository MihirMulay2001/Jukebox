import Card from 'components/Card/Card'
import React from 'react'
import useDnd from '../../hooks/useDnd'
import { useDrop } from 'react-dnd'
import { playlistType } from 'types'


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
    return (
        <div ref={drop} style={{ width: '100%', height: '100%' }}>
            hello
            {
                playlists.map(playlist => <Card key={playlist.id} item={playlist} />)
            }
        </div>
    )
}
