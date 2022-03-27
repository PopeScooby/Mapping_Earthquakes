// Add console.log to check to see if our code is working.
console.log("working");

// // Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// We create the light view tile layer that will be an option for our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_Map
});
// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_Map
});
// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};
// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})
// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Accessing the airport GeoJSON URL
let earthquakes = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Grabbing our GeoJSON data.
d3.json(earthquakes).then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});

// , {
//   style: myStyle,
//   onEachFeature: function(airport, layer) {
//     layer.bindPopup("<h3>Airline:" + airport.properties.airline + "</h3><hr><h3>Destination:" + airport.properties.dst + "</h3>")
//   }
// }
// 
// // Grabbing our GeoJSON data.
// d3.json(torontoData).then(function(data) {
//     console.log(data.features);

//     // Creating a GeoJSON layer with the retrieved data.
//     data.features.forEach(airport => {
//       console.log(airport.properties.id)
      
//       L.geoJSON(airport)
//         .bindPopup("<h2>Airport Code: " + airport.properties.id + "</h2><hr><h3>" + "Airport Name:" + airport.properties.name + "</h3>")
//         .addTo(map);
//     });
    
// });