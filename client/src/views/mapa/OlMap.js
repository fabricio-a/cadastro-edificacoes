import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import TileArcGISRest from 'ol/source/TileArcGISRest';
import GeoJSON from 'ol/format/GeoJSON'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import OSM from 'ol/source/OSM';
import { Zoom, ScaleLine } from 'ol/control';
import {Fill, Stroke, Style, Text} from 'ol/style';

function initialStyle(feature) {
    if(feature.values_.hasOwnProperty('UNIDADE')) {
        return new Style({
            stroke: new Stroke({
                color: 'rgb(0,255,0)',
                width: 1
            })
        })
    }

    return new Style({
        stroke: new Stroke({
            color: 'rgb(255,255,255)',
            width: 1
        })
    })
}

function vectorLayer(vector) {
    return new VectorLayer({
        minZoom: vector.minZoom,
        source: new VectorSource({
          format: new GeoJSON({
              options: {
                  dataProjection: 'EPSG:4326'
              }
          }),
          url: vector.url,
        }),
        style: (feature) => {
            return initialStyle(feature);
        }
    })
}

function tileLayer(layer) {
    return new TileLayer({
        maxZoom: layer.maxZoom,
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
        ...mapa.vector.map(vector => vectorLayer(vector))
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