// AgroWatch Main JS
// Handles navigation, summary cards, recommendations, and last update

document.addEventListener('DOMContentLoaded', function() {
  // Highlight active nav link
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    if (window.location.pathname.endsWith(link.getAttribute('href').replace('/agrowatch', ''))) {
      link.classList.add('active');
    }
  });

  // Mock summary cards and recommendations for dashboards
  if (document.getElementById('summary-cards')) {
    renderSummaryCards();
    renderRecommendations();
    setLastUpdate();
  }
});

function renderSummaryCards() {
  const cards = [
    { title: 'Pest Risk', value: 'High', class: 'high' },
    { title: 'NDVI', value: '0.72', class: 'medium' },
    { title: 'Soil Moisture', value: 'Low', class: 'low' },
    { title: 'Temperature', value: 'Very High', class: 'very-high' }
  ];
  const container = document.getElementById('summary-cards');
  container.innerHTML = cards.map(card =>
    `<div class="summary-card ${card.class}">
      <div class="card-title">${card.title}</div>
      <div class="card-value">${card.value}</div>
    </div>`
  ).join('');
}

function renderRecommendations() {
  const recs = [
    'Scout fields for pest hotspots',
    'Irrigate dry zones',
    'Monitor temperature-sensitive crops',
    'Apply recommended pesticides if needed'
  ];
  const container = document.getElementById('recommendations');
  container.innerHTML = `<h2>Action Recommendations</h2><ul>${recs.map(r => `<li>${r}</li>`).join('')}</ul>`;
}

function setLastUpdate() {
  const el = document.getElementById('last-update');
  if (el) {
    const now = new Date();
    el.textContent = now.toLocaleString();
  }
}
