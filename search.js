// Filter vehicles 
function filterVehicles(keyword, category, city, priceRange) {
  let results = [];
  vehiclesData.forEach((section) => {
    section.vehicles.forEach((vehicle) => {
      results.push({ ...vehicle, category: section.category });
    });
  });
  // filter by category 
  if (category) {
    results = results.filter(v => v.category === category);
  }
// Filter by keyword 
  if (keyword) {
    const searchTerm = keyword.toLowerCase();
    results = results.filter(v => 
      v.name.toLowerCase().includes(searchTerm)
    );
  }
// Filter by city
  if (city) {
    results = results.filter(v => v.location === city);
  }
// Filter by price range
  if (priceRange && priceRange !== "All Prices") {
    results = results.filter(v => {
      const price = v.price;
      if (priceRange === "Under 5 Lacs") return price < 500000;
      if (priceRange === "5 - 10 Lacs") return price >= 500000 && price < 1000000;
      if (priceRange === "10 - 15 Lacs") return price >= 1000000 && price < 1500000;
      if (priceRange === "15 - 20 Lacs") return price >= 1500000 && price < 2000000;
      if (priceRange === "20 - 30 Lacs") return price >= 2000000 && price < 3000000;
      if (priceRange === "30 - 50 Lacs") return price >= 3000000 && price < 5000000;
      if (priceRange === "50 Lacs - 1 Crore") return price >= 5000000 && price < 10000000;
      if (priceRange === "Above 1 Crore") return price >= 10000000;
      return true;
    });
  }
 return results;
}// Render search result
function renderSearchResults(vehicles) {
  const container = document.getElementById("search-results");
  const infoContainer = document.getElementById("results-info");
  if (!container || !infoContainer) return;
  if (vehicles.length === 0) {
    infoContainer.innerHTML = `
      <div class="alert alert-warning">
        <i class="fas fa-exclamation-triangle"></i> 
        No vehicles found matching your criteria. Try adjusting your filters.
      </div>
    `;
    container.innerHTML = "";
    return;
  }
infoContainer.innerHTML = `
    <div class="d-flex align-items-center gap-2">
      <i class="fas fa-check-circle text-success"></i>
      <span class="text-muted">Found <strong>${vehicles.length}</strong> vehicle(s)</span>
    </div>
  `;
let html = "";
  vehicles.forEach((vehicle) => {
    const badgeClass = vehicle.status === "NEW" ? "bg-success" : "bg-warning";
    html += `
      <div class="col-lg-3 col-md-6">
        <div class="card vehicle-card border-0 shadow-sm h-100">
          <img src="${vehicle.image}" class="card-img-top" alt="${vehicle.name}">
          <div class="card-body">
            <span class="badge ${badgeClass} mb-2">${vehicle.status}</span>
            <h5 class="card-title fw-semibold">${vehicle.name}</h5>
            <p class="text-danger fs-4 fw-bold mb-2">PKR ${vehicle.price.toLocaleString()}</p>
            <p class="text-muted small mb-3">
              <i class="fas fa-calendar"></i> ${vehicle.year} | 
              <i class="fas fa-cog"></i> ${vehicle.engine} | 
              <i class="fas fa-map-marker-alt"></i> ${vehicle.location}
            </p>
            <a href="details.html?id=${vehicle.id}" class="btn btn-danger w-100">View Details</a>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}
function performSearch() {
  const keyword = document.getElementById("keyword-input").value;
  const city = document.getElementById("city-filter").value;
  const priceRange = document.getElementById("price-filter").value;
  const category = getUrlParameter("category");
const results = filterVehicles(keyword, category, city, priceRange);
  renderSearchResults(results);
  const heading = document.getElementById("search-heading");
  if (heading) {
    if (category) {
      heading.textContent = `Search Results - ${category}`;
    } else if (keyword) {
      heading.textContent = `Search Results for "${keyword}"`;
    } else {
      heading.textContent = "All Vehicles";
    }
  }
}
// Initialize search page
window.onload = function() {
  renderCities('city-filter');
  renderPriceRanges('price-filter');
  renderNavbar();
  renderFooter();
  renderFloatingWhatsApp();
  const urlCategory = getUrlParameter("category");
  const urlKeyword = getUrlParameter("keyword");
  const urlCity = getUrlParameter("city");
  const urlPrice = getUrlParameter("price");
if (urlKeyword) document.getElementById("keyword-input").value = urlKeyword;
  if (urlCity) document.getElementById("city-filter").value = urlCity;
  if (urlPrice) document.getElementById("price-filter").value = urlPrice;
  performSearch();
// Add event listener 
  const searchBtn = document.getElementById("search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", performSearch);
  }
  const keywordInput = document.getElementById("keyword-input");
  if (keywordInput) {
    keywordInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        performSearch();
      }
    });
  }
};