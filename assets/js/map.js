// AgroWatch Map JS
// Uses Leaflet.js to render interactive map with risk zones and farm markers

document.addEventListener('DOMContentLoaded', function() {
  if (!document.getElementById('map')) return;
  // Load Leaflet CSS/JS dynamically if not present
  if (!window.L) {
    const leafletCSS = document.createElement('link');
    leafletCSS.rel = 'stylesheet';
    leafletCSS.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(leafletCSS);
    const leafletJS = document.createElement('script');
    leafletJS.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    leafletJS.onload = initMap;
    document.body.appendChild(leafletJS);
  } else {
    initMap();
  }
});

function initMap() {
  const map = L.map('map').setView([0.35, 32.58], 7); // Uganda center
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  fetch('../assets/data/sample.geojson')
    .then(res => res.json())
    .then(data => {
      L.geoJSON(data, {
        style: feature => riskStyle(feature.properties.risk),
        onEachFeature: (feature, layer) => {
          if (feature.geometry.type === 'Point') {
            layer.bindPopup(`<b>Farm:</b> ${feature.properties.name}<br><b>Pest:</b> ${feature.properties.pest}<br><b>Risk:</b> ${feature.properties.risk}<br><b>Action:</b> ${feature.properties.action}`);
          } else {
            layer.bindPopup(`<b>Zone:</b> ${feature.properties.zone}<br><b>Pest:</b> ${feature.properties.pest}<br><b>Risk:</b> ${feature.properties.risk}<br><b>Action:</b> ${feature.properties.action}`);
          }
        },
        pointToLayer: (feature, latlng) => L.marker(latlng)
      }).addTo(map);
    });
}

function riskStyle(risk) {
  switch (risk) {
    case 'Very High': return { color: '#b71c1c', fillColor: '#ffebee', fillOpacity: 0.7, weight: 2 };
    case 'High': return { color: '#e65100', fillColor: '#fff3e0', fillOpacity: 0.7, weight: 2 };
    case 'Medium': return { color: '#fbc02d', fillColor: '#fffde7', fillOpacity: 0.7, weight: 2 };
    default: return { color: '#388e3c', fillColor: '#e8f5e9', fillOpacity: 0.7, weight: 2 };
  }
}
