// View layer
var view = new ol.View({
    center: ol.proj.fromLonLat([20.5094, 54.7067]),
    zoom: 11
    })

// Basemap layer
var basemaplayer = new ol.layer.Tile({
    source: new ol.source.OSM()
    })

// Layers array
var layerArray = [basemaplayer]

// Initiating map
var map = new ol.Map({
    target: 'map',
    view: view,
    layers: layerArray    
});
