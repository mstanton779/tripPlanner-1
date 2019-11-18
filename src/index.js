console.log('hello world')
//const mapboxgl = require("mapbox-gl");
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')
const markerBuilder = require('./marker')

// mapboxgl.accessToken = 'pk.eyJ1Ijoidmp0NCIsImEiOiJjazM0bml0MHAwOGppM25tdDBja2R3MDhoIn0.Nxdu6Q1_riKYKWWKEHlyAQ';
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v11'
// });

mapboxgl.accessToken =
    'pk.eyJ1Ijoidmp0NCIsImEiOiJjazM0bml0MHAwOGppM25tdDBja2R3MDhoIn0.Nxdu6Q1_riKYKWWKEHlyAQ'
const map = new mapboxgl.Map({
    container: 'map',
    center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
})
// const markerDomEl = document.createElement('div')
// markerDomEl.style.width = '32px'
// markerDomEl.style.height = '39px'
// markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'

// new mapboxgl.Marker(markerDomEl).setLngLat([-87.6354, 41.8885]).addTo(map)
const marker = markerBuilder(-87.6354, 41.88, 'restaurant')
const otherMarker = markerBuilder(-87.6354, 41.8567, '')
console.log('hi', marker)
marker.addTo(map)
otherMarker.addTo(map)
