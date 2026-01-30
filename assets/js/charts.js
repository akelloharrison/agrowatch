// AgroWatch Charts JS
// Uses Chart.js to render NDRE, Soil Moisture, and Temperature charts

document.addEventListener('DOMContentLoaded', function() {
  if (typeof Chart === 'undefined') {
    const chartJS = document.createElement('script');
    chartJS.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    chartJS.onload = renderCharts;
    document.body.appendChild(chartJS);
  } else {
    renderCharts();
  }
});

function renderCharts() {
  // NDRE Chart
  if (document.getElementById('ndreChart')) {
    new Chart(document.getElementById('ndreChart').getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
          label: 'NDRE',
          data: [0.68, 0.72, 0.70, 0.69, 0.73, 0.71, 0.72],
          borderColor: '#388e3c',
          backgroundColor: 'rgba(56,142,60,0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } } }
    });
  }
  // Soil Moisture Chart
  if (document.getElementById('soilChart')) {
    new Chart(document.getElementById('soilChart').getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4'],
        datasets: [{
          label: 'Soil Moisture (%)',
          data: [18, 22, 15, 12],
          backgroundColor: ['#388e3c', '#fbc02d', '#e65100', '#b71c1c']
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } } }
    });
  }
  // Temperature Chart
  if (document.getElementById('tempChart')) {
    new Chart(document.getElementById('tempChart').getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['Normal', 'High', 'Very High'],
        datasets: [{
          label: 'Temperature Risk',
          data: [60, 30, 10],
          backgroundColor: ['#388e3c', '#e65100', '#b71c1c']
        }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
  }
}
