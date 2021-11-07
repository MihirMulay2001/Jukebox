import Loading from 'components/loading/Loading'
import useFetcher from 'hooks/useFetcher'
import * as React from 'react'
import { useDrop } from 'react-dnd'
import styles from '../../styles/Pane.module.css'
import Playlist from './Playlist'
import PreLogin from 'components/Prelogin/PreLogin'
import { featuredPlaylist, personalPlaylist } from 'types'


export default function LeftPane(props: any) {
    const modifyPlaylists = props.modifyPlaylists
    const [playlistType, setPlaylistType] = React.useState('Featured')
    const featuredPlaylists = useFetcher<featuredPlaylist>('https://api.spotify.com/v1/browse/featured-playlists?country=IN')
    const personalPlaylists = useFetcher<personalPlaylist>('https://api.spotify.com/v1/me/playlists')

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
    const handleChange = (event: any) => {
        event.preventDefault();
        setPlaylistType(prevState => prevState === 'Featured' ? 'Personal' : 'Featured')
    }


    if (featuredPlaylists.loading || personalPlaylists.loading) return <div className={styles.container}><Loading /></div>
    if (featuredPlaylists.error || personalPlaylists.error) return <div ref={drop} className={styles.containerPre}><PreLogin /></div>


    return (
        <div ref={drop} className={styles.container}>
            <select className={styles.selector} name="playlistType" value={playlistType} onChange={handleChange}>
                <option value="Featured">Featured</option>
                <option value="Personal">Personal</option>
            </select>
            <Playlist
                data={playlistType === 'Featured'
                    ? featuredPlaylists.data.playlists.items
                    : personalPlaylists.data.items}
                type={playlistType}
            />
        </div>
    )
}
