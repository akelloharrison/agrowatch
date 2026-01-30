# AgroWatch

AgroWatch is a static web platform providing pest and disease early-warning dashboards for farmers, extension officers, offtakers, and administrators. It leverages satellite indicators, traditional indicators, and mock real-time sensor data to visualize agricultural risks and recommend actions.

## Features
- Role-based dashboards (Farmers, Extension Officers, Offtakers, Admin)
- Interactive map with pest risk zones and farm locations (Leaflet.js)
- Visual analytics (NDRE, Soil Moisture, Temperature) using Chart.js
- Responsive, agriculture-focused UI/UX
- No backend or database (static site)
- GitHub Pages compatible routing

## Tech Stack
- React, Tailwind CSS, Vite
- [Leaflet.js](https://leafletjs.com/) for maps
- [Chart.js](https://www.chartjs.org/) for charts

## Usage
1. Clone or fork this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. For GitHub Pages deployment:
   - Push to a repository named `agrowatch`.
   - Enable GitHub Pages (main branch, root).
   - Access at `https://<username>.github.io/agrowatch`.

## Folder Structure
```
/agrowatch
 ├── index.html
 ├── /farmers/index.html
 ├── /extension/index.html
 ├── /offtakers/index.html
 ├── /admin/index.html
 ├── /assets/
 │    ├── css/style.css
 │    ├── js/main.js
 │    ├── js/map.js
 │    ├── js/charts.js
 │    └── data/sample.geojson
 └── README.md
```

## License
MIT
