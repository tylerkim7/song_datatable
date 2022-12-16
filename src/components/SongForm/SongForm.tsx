// Imports from React and packages
import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from '@mui/material';

// Local Imports
import { chooseAlbum, chooseSong, chooseArtist, chooseLyrics } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';



interface SongFormProps {
    id?:string;
    data?: {}
}

interface SongState {
    album_name: string;
    song_name: string;
    artist: string;
    lyrics: string;
}

export const SongForm = (props:SongFormProps) => {
    const dispatch = useDispatch();
    let { songData, getData } = useGetData();
    const store = useStore();
    const { register, handleSubmit } = useForm({ })

    const onSubmit = async (data:any, event: any) => {
        console.log(props.id)
        if (props.id!) {
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset()
        } else {
            dispatch(chooseAlbum(data.album_name))
            dispatch(chooseSong(data.song_name))
            dispatch(chooseArtist(data.artist))
            dispatch(chooseLyrics(data.lyrics))
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
                    <label htmlFor="album_name">Album Name</label>
                    <Input {...register('album_name')} name="album_name" placeholder='Album Name' />
                </div>
                <div>
                    <label htmlFor="song_name">Song Name</label>
                    <Input {...register('song_name')} name="song_name" placeholder="Song Name"/>
                </div>
                <div>
                    <label htmlFor="artist">Artist</label>
                    <Input {...register('artist')} name="artist" placeholder="Artist"/>
                </div>
                <div>
                    <label htmlFor="lyrics">Lyrics</label>
                    <Input {...register('lyrics')} name="lyrics" placeholder="Lyrics"/>
                </div>
                <Button type='submit' variant="contained">Submit</Button>
            </form>
        </div>
    )
}