const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js')

const markerBuilder = (lat, long, type) => {
    const markerDomEl = document.createElement('div')
    markerDomEl.style.width = '32px'
    markerDomEl.style.height = '39px'
    console.log('outside')
    if (type === 'restaurant') {
        console.log('markerDomEl', markerDomEl)
        markerDomEl.style.backgroundImage =
            'url(http://i.imgur.com/cqR6pUI.png)'
    } else if (type === 'hotel') {
        markerDomEl.style.backgroundImage =
            'url(http://i.imgur.com/D9574Cu.png)'
    } else {
        markerDomEl.style.backgroundImage =
            'url(http://i.imgur.com/WbMOfMl.png)'
    }
    return new mapboxgl.Marker(markerDomEl).setLngLat([lat, long])
    // .addTo(map)
}
module.exports = markerBuilder
