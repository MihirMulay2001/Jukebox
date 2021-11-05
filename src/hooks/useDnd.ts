import { useState, useEffect } from "react";
import { playlistType } from "types";



const useDnd = () => {
    const [playlists, setPlaylists] = useState<playlistType[]>([])
    const modifyPlaylist = (type :string, item : playlistType) => {
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
        localStorage.forEach((element : any) => {
            console.log(element);
            localPlaylist.push(element)
        })
    }, [])
    return {playlists, modifyPlaylist}
}

export default useDnd