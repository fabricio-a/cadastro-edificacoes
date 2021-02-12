import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileArcGISRest from 'ol/source/TileArcGISRest';
import GeoJSON from 'ol/format/GeoJSON'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import OSM from 'ol/source/OSM';
import { Zoom, ScaleLine } from 'ol/control';

function vectorLayer(url) {
    return new VectorLayer({
        source: new VectorSource({
          format: new GeoJSON({
              options: {
                  dataProjection: 'EPSG:4326'
              }
          }),
          url: url,
        })
    })
}

function tileLayer(layer) {
    return new TileLayer({
        source: new TileArcGISRest({
            url: layer.url,
            params: {
                'LAYERS':'show:'+layer.camadas.toString()
            }
        }),
        zIndex: layer.zIndex
    });
}

export default function OlMap(mapa) {
    const layers = [
        ...mapa.tile.map(tile => tileLayer(tile)),
        ...mapa.vector.map(vector => vectorLayer(vector.url))
    ];

    return new Map({
        layers: [
            new TileLayer({
                source: new OSM()
            }),
            ...layers
        ],

        target: document.getElementById('mapa'),

        view: new View({
            center: mapa.center,
            zoom: mapa.zoom,
            projection: mapa.projection
        }),

        controls: [
            new Zoom({
                duration: 900,
                className: mapa.classes + ' ol-zoom'
            }),
            new ScaleLine({
                units: 'metric',
                className: mapa.classes + ' ol-scale-line'
            })
        ]

    });
}