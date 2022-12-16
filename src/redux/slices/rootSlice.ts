import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        album_name: 'Lost',
        song_name: "Without Me",
        artist: 'MitiS',
        lyrics: 'lyrics',
    },
    reducers: {
        chooseAlbum: (state, action) => { state.album_name = action.payload},
        chooseSong: (state, action) => { state.song_name = action.payload},
        chooseArtist: (state, action) => { state.artist = action.payload},
        chooseLyrics: (state, action) => { state.lyrics = action.payload},

    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseAlbum, chooseSong, chooseArtist, chooseLyrics } = rootSlice.actions;