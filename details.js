// Find vehicle by ID
function findVehicleById(vehicleId) {
  for (const section of vehiclesData) {
    for (const vehicle of section.vehicles) {
      if (vehicle.id === vehicleId) {
        return { ...vehicle, category: section.category };
      }
    }
  }
  return null;
}

// Render vehicle details
function renderVehicleDetails(vehicle) {
  const container = document.getElementById("vehicle-details");
  if (!container || !vehicle) {
    container.innerHTML = `
      <div class="alert alert-danger text-center">
        <i class="fas fa-exclamation-circle"></i>
        <h4 class="mt-3">Vehicle Not Found</h4>
        <p>The vehicle you're looking for doesn't exist or has been removed.</p>
        <a href="index.html" class="btn btn-danger mt-3">
          <i class="fas fa-home"></i> Back to Home
        </a>
      </div>
    `;
    return;
  }

  // breadcrumb
  const breadcrumb = document.getElementById("breadcrumb-title");
  if (breadcrumb) {
    breadcrumb.textContent = vehicle.name;
  }

  // page title — BRAND_NAME from data.js
  document.title = `${vehicle.name} - ${BRAND_NAME}`;

  const badgeClass = vehicle.status === "NEW" ? "bg-success" : "bg-warning";
  const html = `
    <div class="row g-4">
      <!-- Vehicle Image -->
      <div class="col-lg-6">
        <div class="card border-0 shadow-sm">
          <img src="${vehicle.image}" class="card-img-top rounded" alt="${vehicle.name}" style="max-height: 400px; object-fit: cover;">
          <div class="card-body">
            <span class="badge ${badgeClass} mb-2">${vehicle.status}</span>
            <p class="text-muted small mb-0">
              <i class="fas fa-map-marker-alt"></i> ${vehicle.location}
            </p>
          </div>
        </div>
      </div>

      <!-- Vehicle Info -->
      <div class="col-lg-6">
        <div class="card border-0 shadow-sm h-100">
          <div class="card-body">
            <h2 class="fw-bold mb-3">${vehicle.name}</h2>
            <h3 class="text-danger fw-bold mb-4">PKR ${vehicle.price.toLocaleString()}</h3>
            <h5 class="fw-semibold mb-3">Description</h5>
            <p class="text-muted mb-4">${vehicle.description}</p>

            <h5 class="fw-semibold mb-3">Specifications</h5>
            <div class="row g-3 mb-4">
              <div class="col-6">
                <div class="d-flex align-items-center gap-2">
                  <i class="fas fa-calender text-danger"></i>
                  <div>
                    <small class="text-muted d-block">Year</small>
                    <strong>${vehicle.year}</strong>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center gap-2">
                  <i class="fas fa-cog text-danger"></i>
                  <div>
                    <small class="text-muted d-block">Engine</small>
                    <strong>${vehicle.engine}</strong>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center gap-2">
                  <i class="fas fa-gas-pump text-danger"></i>
                  <div>
                    <small class="text-muted d-block">Mileage</small>
                    <strong>${vehicle.mileage}</strong>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center gap-2">
                  <i class="fas fa-palette text-danger"></i>
                  <div>
                    <small class="text-muted d-block">Color</small>
                    <strong>${vehicle.color}</strong>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center gap-2">
                  <i class="fas fa-exchange-alt text-danger"></i>
                  <div>
                    <small class="text-muted d-block">Transmission</small>
                    <strong>${vehicle.transmission}</strong>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="d-flex align-items-center gap-2">
                  <i class="fas fa-tag text-danger"></i>
                  <div>
                    <small class="text-muted d-block">Category</small>
                    <strong>${vehicle.category}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-grid gap-2">
              <a href="https://wa.me/${contactInfo.whatsapp}?text=Aoa!, I'm interested in ${encodeURIComponent(vehicle.name)} - PKR ${vehicle.price.toLocaleString()}" 
                 target="_blank"
                 class="btn btn-success btn-lg">
                <i class="fab fa-whatsapp"></i> Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Info -->
    <div class="row mt-4">
      <div class="col-12">
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <h5 class="fw-semibold mb-3">Additional Information</h5>
            <div class="row">
              <div class="col-md-4">
                <p class="mb-2">
                  <i class="fas fa-check-circle text-success"></i>
                  <strong>Condition:</strong> ${vehicle.status === "NEW" ? "Brand New" : "Used - Excellent"}
                </p>
              </div>
              <div class="col-md-4">
                <p class="mb-2">
                  <i class="fas fa-check-circle text-success"></i>
                  <strong>Registration:</strong> ${vehicle.location}
                </p>
              </div>
              <div class="col-md-4">
                <p class="mb-2">
                  <i class="fas fa-check-circle text-success"></i>
                  <strong>Documents:</strong> Complete
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  container.innerHTML = html;
}

// Find related vehicles
function findRelatedVehicles(currentVehicle, limit = 4) {
  const related = [];
  for (const section of vehiclesData) {
    if (section.category === currentVehicle.category) {
      for (const vehicle of section.vehicles) {
        if (vehicle.id !== currentVehicle.id) {
          related.push({ ...vehicle, category: section.category });
          if (related.length >= limit) break;
        }
      }
    }
    if (related.length >= limit) break;
  }
  return related;
}

// Render related vehicles
function renderRelatedVehicles(vehicles) {
  const container = document.getElementById("related-vehicles");
  if (!container) return;
  if (vehicles.length === 0) {
    container.innerHTML = `
      <div class="col-12">
        <p class="text-muted text-center">No related vehicles found.</p>
      </div>
    `;
    return;
  }
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
            <p class="text-danger fs-5 fw-bold mb-2">PKR ${vehicle.price.toLocaleString()}</p>
            <p class="text-muted small mb-3">
              <i class="fas fa-calendar"></i> ${vehicle.year} | 
              <i class="fas fa-cog"></i> ${vehicle.engine}
            </p>
            <a href="details.html?id=${vehicle.id}" class="btn btn-danger w-100">View Details</a>
          </div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

// Initialize details page
window.onload = function () {
  renderNavbar();
  renderFooter();
  renderFloatingWhatsApp();

  const vehicleId = getUrlParameter("id");
  if (!vehicleId) {
    const container = document.getElementById("vehicle-details");
    container.innerHTML = `
      <div class="alert alert-warning text-center">
        <i class="fas fa-exclamation-triangle"></i>
        <h4 class="mt-3">No Vehicle Selected</h4>
        <p>Please select a vehicle to view its details.</p>
        <a href="index.html" class="btn btn-danger mt-3">
          <i class="fas fa-home"></i> Back to Home
        </a>
      </div>
    `;
    return;
  }

  const vehicle = findVehicleById(vehicleId);
  renderVehicleDetails(vehicle);

  if (vehicle) {
    const relatedVehicles = findRelatedVehicles(vehicle);
    renderRelatedVehicles(relatedVehicles);
  }
};