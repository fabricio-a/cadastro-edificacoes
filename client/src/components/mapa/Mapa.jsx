import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import OlMap from './OlMap'

export default function Mapa() {
    const cadastro = useSelector(state => state.data)

    useEffect(() => {
        const mapa = OlMap({
            urlLayers: cadastro.tileLayers, 
            zoom: 11.7, 
            center: [-49.15815911402509, -25.589405115151322],
            projection: 'EPSG:4326'
        })
    }, [])

    return (
        <div id='mapa' className='mapa'></div>
    )
}