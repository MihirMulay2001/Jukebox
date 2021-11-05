import { useState, useEffect } from "react";
import { playlistType } from "types";



const useDnd = () => {
    const [playlists, setPlaylists] = useState<playlistType[]>([])
    const modifyPlaylists = (type :string, item : playlistType) => {
        if(type === 'DELETE')
        {
            localStorage.removeItem(item.id)
            setPlaylists(prevState => {
                const newState = prevState.filter( playlistItem => playlistItem.id !== item.id)
                return newState
            })
        }
        else if(type === "SET" )
        {
            localStorage.setItem(item.id, JSON.stringify(item))
            setPlaylists(prevState => [...prevState, item])
        }
    }
    useEffect(() => {
        let localPlaylist : playlistType[] = []
        let values : playlistType[] = []
        let keys = Object.keys(localStorage)
        let i = keys.length

    while ( i-- ) {
        console.log(localStorage.getItem(keys[i]));
    }
    setPlaylists(values)
        
    }, [])
    return {playlists, modifyPlaylists}
}

export default useDnd