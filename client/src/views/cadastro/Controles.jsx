import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    controles: {
        backgroundColor: '#00BFA5',
        borderRadius: '6px',
        border: 'solid 1px white',
        color: 'white',
        padding: '0.5vh',
        margin: '0.5vh',
        boxSizing: 'border-box',
    },

    formControl: {
        minWidth: 250
    } 
});

export default function Cadastro() {
    const cadastro = useSelector(state => state.data);
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Grid
            container
            direction='row'
            justify='space-evenly'
            alignItems='center'
            className={classes.controles}
        >
            <TextField 
                variant='outlined' size='small'
                label='Pesquisar Inscrição'
            />

            <IconButton>
                <SearchIcon></SearchIcon>
            </IconButton>

        </Grid>
    );
}