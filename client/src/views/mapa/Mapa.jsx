import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import OlMap from './OlMap';

const useStyles = makeStyles({
    mapa: {
        backgroundColor: '#00BFA5',
        boxSizing: 'border-box',
        borderRadius: '6px',
        overflow: 'hidden',
        border: 'solid 1px white',
        height: '99vh',
        margin: '0.5vh'
    },
    controles: {
        '& div': {
            backgroundColor: '#00BFA5'
        },
        '& button': {
            backgroundColor: '#00BFA5'
        }
    }
});

export default function Mapa() {
    const tileLayers = useSelector(state => state.data.tileLayers);

    const classes = useStyles();

    useEffect(() => {
        const mapa = OlMap({
            urlLayers: tileLayers, 
            zoom: 12, 
            center: [-49.15815911402509, -25.589405115151322],
            projection: 'EPSG:4326',
            classes: classes.controles
        });

        mapa.on('singleclick', e => {
            console.log(e.coordinate)
        })

    }, []);

    return (
        <div id='mapa' className={classes.mapa}></div>
    );
}