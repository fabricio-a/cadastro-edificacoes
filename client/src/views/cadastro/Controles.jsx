import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import LayersIcon from '@material-ui/icons/Layers';
import StreetviewIcon from '@material-ui/icons/Streetview';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import Draggable from 'react-draggable';

const useStyles = makeStyles({
    controles: {
        backgroundColor: '#00BFA5',
        borderRadius: '6px',
        border: 'solid 1px white',
        color: 'white',
        padding: '5px',
        margin: '0.5vh',
        boxSizing: 'border-box',
        height: '10vh'
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
            <IconButton>
                <LayersIcon></LayersIcon>
            </IconButton>

            <Draggable>
                <IconButton>
                    <StreetviewIcon></StreetviewIcon>
                </IconButton>
            </Draggable>
        </Grid>
    );
}