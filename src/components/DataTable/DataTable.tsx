// React Imports
import React, { useState } from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@mui/material';

// Local Imports
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { SongForm } from '../SongForm/SongForm';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'album_name',
        headerName: 'Album',
        width: 150,
        editable: true,
    },
    {
        field: 'song_name',
        headerName: 'Song',
        width: 150,
        editable: true,
    },
    {
        field: 'artist',
        headerName: 'Artist',
        width: 150,
        editable: true,
    },
    {
        field: 'lyrics',
        headerName: 'Lyrics',
        width: 160,
        editable: true,
    },
];


interface gridData {
    data: {
        id?:string;
    }
}

export const DataTable = () => {
    let { songData, getData } = useGetData();
    let [open, setOpen] = useState(false)
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => {
        setOpen(true)
    }

    let handleClose = () => {
        setOpen(false)
    }

    let deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    console.log(gridData)
    const MyAuth = localStorage.getItem('myAuth')
    console.log(MyAuth)
    if (MyAuth == "true"){

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={songData}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
                {...songData}
            />
            <Button variant="contained" onClick={handleOpen}>Update</Button>
            <Button variant='contained' color='error' onClick={deleteData}>Delete</Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update a Song</DialogTitle>
            <DialogContent>
                <DialogContentText>Song id: {gridData[0]}</DialogContentText>
                    <SongForm id={`${gridData[0]}`} />
            </DialogContent>
            <DialogActions>
                <Button onClick = {handleClose} variant="contained" color="primary">Done</Button>
                <Button onClick = {handleClose} variant="contained" color="error">Cancel</Button>
            </DialogActions>
            </Dialog>
        </div>
    )
    } else {
        return (
            <div>
                <h1>Please Sign In to View Your Song Collection</h1>
            </div>
        )
    }
}