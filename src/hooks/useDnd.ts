import { useState, useEffect } from "react";
import { playlistType } from "types";



const useDnd = () => {
    const [playlists, setPlaylists] = useState<playlistType[]>([])
    const modifyPlaylists = (type :string, item : playlistType = {} as playlistType) => {
        if(type === 'DELETE')
        {
            setPlaylists(prevState => {
                const localPlaylists = prevState
                const newLocalPlaylists = localPlaylists.filter( (playlistItem :playlistType) => playlistItem.id !== item.id)
                localStorage.setItem('localPlaylists',JSON.stringify(newLocalPlaylists) )
                return [...localPlaylists]
            })
        }
        else if(type === "SET" )
        {
            setPlaylists(prevState => {
                const localPlaylists :playlistType[] =  [...prevState, item]
                localStorage.setItem('localPlaylists', JSON.stringify(localPlaylists))
                return [...localPlaylists]
            })
        }
        else if (type==="DELETE_ALL")
        {
            localStorage.clear();
            setPlaylists([])
        }
    }
    useEffect(() => {
        const localPlaylists = localStorage.getItem('localPlaylists')
        const localPlaylistsJson = localPlaylists ?  JSON.parse(localPlaylists) : ''
        if(localPlaylists)
            setPlaylists(localPlaylistsJson)
        console.log('jello');
        
    }, [])
    return {playlists, modifyPlaylists}
}

export default useDnd