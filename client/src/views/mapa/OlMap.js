import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileArcGISRest from 'ol/source/TileArcGISRest';
import OSM from 'ol/source/OSM';
import { Zoom, ScaleLine } from 'ol/control';

export default function OlMap(map) {
    const layers = map.urlLayers.map(layer => {
        return new TileLayer({
            source: new TileArcGISRest({
                url: layer.url,
                params: {
                    'LAYERS':'show:'+layer.camadas.toString()
                }
            }),
            zIndex: layer.zIndex
        });
    });

    return new Map({
        layers: [
            new TileLayer({
                source: new OSM()
            }),
            ...layers
        ],

        target: document.getElementById('mapa'),

        view: new View({
            center: map.center,
            zoom: map.zoom,
            projection: map.projection
        }),

        controls: [
            new Zoom({
                duration: 500,
                className: 'ol-zoom'
            }),
            new ScaleLine({
                units: 'metric',
                className: 'ol-scale-line'
            })
        ]

    });
}