import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import Select from 'ol/interaction/Select';
import { click } from 'ol/events/condition';
import { useSelector, useDispatch } from 'react-redux';
import selectFeature from '../../store/actions/selectFeature';

import OlMap from './OlMap';

const useStyles = makeStyles({
    mapa: {
        backgroundColor: '#00BFA5',
        boxSizing: 'border-box',
        borderRadius: '6px',
        overflow: 'hidden',
        border: 'solid 1px white',
        height: '99vh',
        width: '100%',
        margin: '0.5vh'
    },
    controles: {
        '& div': {
            backgroundColor: '#00BFA5',
        },
        '& button': {
            backgroundColor: '#00BFA5',
        }
    }
});

export default function Mapa() {
    const layers = useSelector(state => state.layers);
    const form = useSelector(state => state.data.form);
    ;
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        const mapa = OlMap({
            tile: layers.tile,
            vector: layers.vector,
            zoom: 12, 
            center: [-49.15815911402509, -25.589405115151322],
            projection: 'EPSG:4326',
            classes: classes.controles
        });

        let select = new Select({
            condition: click,
            layers: layer => layer.values_.selectable 
        });

        select.on('select', (event) => {
            if(event.selected.length > 0) {
                dispatch(selectFeature(Object.keys(form), event.selected[0].values_));
            } else {
                dispatch(selectFeature(Object.keys(form),'none'));
            }
        })

        mapa.addInteraction(select);
    }, [layers, classes]);

    return (
        <div id='mapa' className={classes.mapa}></div>
    );
}