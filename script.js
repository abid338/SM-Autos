// Render all vehicles on main page
function renderAllVehicles() {
  const container = document.getElementById("vehicles-container");
  if (!container) return;

  let html = "";

  vehiclesData.forEach((section) => {
    html += `
      <div class="mb-5">
        <div class="d-flex align-items-center gap-3 mb-4">
          <i class="fas ${section.icon} fs-1 text-red"></i>
          <h2 class="section-title mb-0">${section.category}</h2>
        </div>
        <div class="row g-4">
    `;

    section.vehicles.forEach((vehicle) => {
      const badgeClass = vehicle.status === "NEW" ? "bg-success" : "bg-warning";
      html += `
        <div class="col-lg-3 col-md-6">
          <div class="vehicle-card card h-100">
            <div class="card-img-wrapper">
              <img src="${vehicle.image}" class="card-img-top" alt="${vehicle.name}">
              <span class="card-badge badge ${badgeClass}">${vehicle.status}</span>
            </div>
            <div class="card-body">
              <h5 class="car-title">${vehicle.name}</h5>
              <p class="car-price">PKR ${vehicle.price.toLocaleString()}</p>
              <p class="car-meta">
                <span><i class="fas fa-calendar"></i> ${vehicle.year}</span>
                <span><i class="fas fa-cog"></i> ${vehicle.engine}</span>
                <span><i class="fas fa-map-marker-alt"></i> ${vehicle.location}</span>
              </p>
              <a href="details.html?id=${vehicle.id}" class="btn btn-primary-brand w-100">View Details</a>
            </div>
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Hero search
function setupHeroSearch() {
  const searchBtn = document.querySelector('.search-btn');
  const keywordInput = document.querySelector('#hero-keyword');
  const citySelect = document.getElementById('city-select');
  const priceSelect = document.getElementById('price-select');

  if (!searchBtn || !keywordInput) return;

  function performSearch() {
    const keyword = keywordInput.value.trim();
    const city = citySelect.value;
    const price = priceSelect.value;

    const params = [];
    if (keyword) params.push(`keyword=${encodeURIComponent(keyword)}`);
    if (city)    params.push(`city=${encodeURIComponent(city)}`);
    if (price)   params.push(`price=${encodeURIComponent(price)}`);

    window.location.href = 'search.html?' + params.join('&');
  }

  searchBtn.addEventListener('click', performSearch);
  keywordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') performSearch();
  });
}

// Initialize main page
window.onload = function () {
  document.title = `${BRAND_NAME} - Buy & Sell Vehicles`; 
  renderNavbar();
  renderFooter();
  renderFloatingWhatsApp();
  renderCities('city-select');
  renderPriceRanges('price-select');
  renderAllVehicles();
  setupHeroSearch();
};