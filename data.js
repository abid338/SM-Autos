const BRAND_NAME = "SM-Autos";
const BRAND_TAGLINE = "Pakistan's #1 platform for buying and selling vehicles. Find your dream car or bike today!";
const BRAND_YEAR = "2026";

//  NAVBAR DATA
const navbarMenuItems = [
  {
    text: "New Bikes",
    href: "search.html?category=New Bikes",
    active: false,
    type: "link",
  },
  {
    text: "Used Bikes",
    href: "search.html?category=Used Bikes",
    active: false,
    type: "link",
  },
  {
    text: "New Cars",
    href: "search.html?category=New Cars",
    active: false,
    type: "link",
  },
  {
    text: "Used Cars",
    href: "search.html?category=Used Cars",
    active: false,
    type: "link",
  },
];

// NAVBAR HTML
function getNavbarHTML() {
  return `
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top shadow">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center gap-2 fs-3 fw-bold" href="index.html">
          <div class="logo rounded-circle d-flex align-items-center justify-content-center fs-4">
            <i class="fas fa-car"></i>
          </div>
          ${BRAND_NAME}
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto" id="navbar-menu">
            <!-- Menu will be rendered by renderNavbarMenu() -->
          </ul>
        </div>
      </div>
    </nav>
  `;
}

// NAVBAR RENDER FUNCTIONS
function renderNavbar() {
  const container = document.getElementById("navbar-container");
  if (!container) return;

  container.innerHTML = getNavbarHTML();
  renderNavbarMenu();
}

function renderNavbarMenu() {
  const container = document.getElementById("navbar-menu");
  if (!container) return;
  let html = "";
  navbarMenuItems.forEach((link) => {
    if (link.type === "dropdown") {
      html += `
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fw-medium" 
             href="${link.href}" 
             role="button" 
             data-bs-toggle="dropdown">
            ${link.text}
          </a>
          <ul class="dropdown-menu">
      `;
      link.items.forEach((item) => {
        html += `<li><a class="dropdown-item" href="${item.href}">${item.text}</a></li>`;
      });
      html += `
          </ul>
        </li>
      `;
    } else if (link.type === "link") {
      html += `
        <li class="nav-item">
          <a class="nav-link fw-medium" href="${link.href}">
            ${link.icon ? `<i class="${link.icon}"></i>` : ""} ${link.text}
          </a>
        </li>
      `;
    }
  });
  container.innerHTML = html;
}

// HERO SECTION DATA
const cities = [
  "All Cities",
  "Lahore",
  "Karachi",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Peshawar",
  "Sialkot",
  "Gujranwala",
];
const priceRanges = [
  "All Prices",
  "Under 5 Lacs",
  "5 - 10 Lacs",
  "10 - 15 Lacs",
  "15 - 20 Lacs",
  "20 - 30 Lacs",
  "30 - 50 Lacs",
  "50 Lacs - 1 Crore",
  "Above 1 Crore",
];

// HERO SECTION RENDER FUNCTIONS
function renderCities(selectId) {
  const container = document.getElementById(selectId);
  if (!container) return;

  let html = "";
  cities.forEach((city, index) => {
    html += `<option value="${index === 0 ? "" : city}">${city}</option>`;
  });
  container.innerHTML = html;
}

function renderPriceRanges(selectId) {
  const container = document.getElementById(selectId);
  if (!container) return;

  let html = "";
  priceRanges.forEach((range, index) => {
    html += `<option value="${index === 0 ? "" : range}">${range}</option>`;
  });
  container.innerHTML = html;
}

//  VEHICLE DATA
const vehiclesData = [
  {
    category: "New Bikes",
    icon: "fa-motorcycle",
    vehicles: [
      {
        id: "new-bike-1",
        name: "Honda CD 70",
        price: 140000,
        year: 2024,
        engine: "70cc",
        location: "Lahore",
        image:
          "https://blog-cdn.el.olx.com.pk/wp-content/uploads/2024/08/09184355/Honda-70-2025-Vs-Honda-70-2024-Model-1-1024x576.jpg",
        status: "NEW",
        description:
          "Brand new Honda CD 70 with fuel efficiency and reliable performance. Perfect for daily commute.",
        mileage: "60-70 km/l",
        transmission: "Manual",
        color: "Red",
      },
      {
        id: "new-bike-2",
        name: "Honda CG 125",
        price: 285000,
        year: 2024,
        engine: "125cc",
        location: "Islamabad",
        image:
          "https://cache3.pakwheels.com/system/bike_model_pictures/1379/original/1.jpg?1665656987",
        status: "NEW",
        description:
          "Powerful 125cc engine with smooth performance and comfortable riding experience.",
        mileage: "45-50 km/l",
        transmission: "Manual",
        color: "Black",
      },
      {
        id: "new-bike-3",
        name: "Yamaha YBR 125",
        price: 315000,
        year: 2024,
        engine: "125cc",
        location: "Peshawar",
        image:
          "https://cache4.pakwheels.com/system/bike_model_pictures/3497/original/2.png?1753961831",
        status: "NEW",
        description:
          "Stylish Yamaha YBR 125 with excellent build quality and modern features.",
        mileage: "40-45 km/l",
        transmission: "Manual",
        color: "Blue",
      },
      {
        id: "new-bike-4",
        name: "Suzuki GS 150",
        price: 375000,
        year: 2024,
        engine: "150cc",
        location: "Lahore",
        image: "https://i.ytimg.com/vi/CNq3ncmiSIM/maxresdefault.jpg",
        status: "NEW",
        description:
          "High performance Suzuki GS 150 with sporty design and powerful engine.",
        mileage: "35-40 km/l",
        transmission: "Manual",
        color: "Red",
      },
    ],
  },
  {
    category: "Used Bikes",
    icon: "fa-motorcycle",
    vehicles: [
      {
        id: "used-bike-1",
        name: "Honda CD 70",
        price: 95000,
        year: 2021,
        engine: "70cc",
        location: "Karachi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgsAgLXRcgzHrEdOERgg2Hs8JC87Ql3iCunQ&s",
        status: "USED",
        description:
          "Well maintained Honda CD 70 in excellent condition. Single owner.",
        mileage: "60-70 km/l",
        transmission: "Manual",
        color: "Black",
      },
      {
        id: "used-bike-2",
        name: "Honda CG 125",
        price: 195000,
        year: 2022,
        engine: "125cc",
        location: "Faisalabad",
        image:
          "https://cache1.pakwheels.com/ad_pictures/1292/honda-cg-150-2025-129232695.webp",
        status: "USED",
        description:
          "Excellent condition Honda CG 125. Regularly serviced and maintained.",
        mileage: "45-50 km/l",
        transmission: "Manual",
        color: "Red",
      },
      {
        id: "used-bike-3",
        name: "Yamaha YBR 125",
        price: 215000,
        year: 2022,
        engine: "125cc",
        location: "Lahore",
        image:
          "https://cache2.pakwheels.com/ad_pictures/1344/tn_yamaha-ybr-125-2017-134472200.webp",
        status: "USED",
        description:
          "Yamaha YBR 125 in great condition. Well maintained with complete documents.",
        mileage: "40-45 km/l",
        transmission: "Manual",
        color: "Blue",
      },
      {
        id: "used-bike-4",
        name: "Suzuki GS 150",
        price: 265000,
        year: 2022,
        engine: "150cc",
        location: "Gujranwala",
        image:
          "https://suzukipakistan.com/media/products/Motorcycles/GR150/bikesResize-2.png",
        status: "USED",
        description:
          "Suzuki GS 150 in perfect condition. All original parts and documents available.",
        mileage: "35-40 km/l",
        transmission: "Manual",
        color: "Black",
      },
    ],
  },
  {
    category: "New Cars",
    icon: "fa-car",
    vehicles: [
      {
        id: "new-car-1",
        name: "Toyota Corolla GLi",
        price: 5950000,
        year: 2024,
        engine: "1300cc",
        location: "Lahore",
        image:
          "https://cache1.pakwheels.com/system/car_generation_pictures/5361/original/Corolla-X-Cars-Cropped-Pictures-for-Website.jpg?1606903674",
        status: "NEW",
        description:
          "Brand new Toyota Corolla GLi with automatic transmission and modern features.",
        mileage: "12-14 km/l",
        transmission: "Automatic",
        color: "White",
      },
      {
        id: "new-car-2",
        name: "Toyota Yaris",
        price: 4899000,
        year: 2024,
        engine: "1300cc",
        location: "Multan",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_8KqGLKLtrjOwx0doPh9foHveqi9ho-htBQ&s",
        status: "NEW",
        description:
          "Compact and fuel-efficient Toyota Yaris with modern safety features.",
        mileage: "14-16 km/l",
        transmission: "Automatic",
        color: "Silver",
      },
      {
        id: "new-car-3",
        name: "Honda Civic",
        price: 8699000,
        year: 2024,
        engine: "1500cc",
        location: "Islamabad",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRMOYCn40eFFMMIkKsv-EHxptjFaqKbjV0qg&s",
        status: "NEW",
        description:
          "Premium Honda Civic with turbocharged engine and luxury features.",
        mileage: "11-13 km/l",
        transmission: "CVT",
        color: "Black",
      },
      {
        id: "new-car-4",
        name: "Suzuki Alto",
        price: 2399000,
        year: 2024,
        engine: "660cc",
        location: "Lahore",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmk0IZMGUQHoOspQsaROBeB-gqZcPeRdcV1Q&s",
        status: "NEW",
        description:
          "Affordable and fuel-efficient Suzuki Alto, perfect for city driving.",
        mileage: "18-20 km/l",
        transmission: "Manual",
        color: "White",
      },
    ],
  },
  {
    category: "Used Cars",
    icon: "fa-car",
    vehicles: [
      {
        id: "used-car-1",
        name: "Toyota Corolla GLi",
        price: 4250000,
        year: 2021,
        engine: "1300cc",
        location: "Karachi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTLoqlM4pnuioXdjSGYFTYL5IQGPZTFcm1A&s",
        status: "USED",
        description:
          "Well maintained Toyota Corolla GLi. First owner, accident-free.",
        mileage: "12-14 km/l",
        transmission: "Automatic",
        color: "Silver",
      },
      {
        id: "used-car-2",
        name: "Toyota Yaris",
        price: 3650000,
        year: 2022,
        engine: "1300cc",
        location: "Faisalabad",
        image:
          "https://cache2.pakwheels.com/ad_pictures/1338/tn_toyota-yaris-gli-cvt-1-3-2025-133803027.webp",
        status: "USED",
        description:
          "Toyota Yaris in excellent condition with complete service history.",
        mileage: "14-16 km/l",
        transmission: "Automatic",
        color: "Red",
      },
      {
        id: "used-car-3",
        name: "Honda Civic",
        price: 6250000,
        year: 2022,
        engine: "1500cc",
        location: "Lahore",
        image:
          "https://cache3.pakwheels.com/ad_pictures/1331/tn_honda-civic-turbo-1-5-vtec-cvt-2016-133109132.webp",
        status: "USED",
        description:
          "Honda Civic Turbo in pristine condition. All original parts and documents.",
        mileage: "11-13 km/l",
        transmission: "CVT",
        color: "White",
      },
      {
        id: "used-car-4",
        name: "Suzuki Alto",
        price: 1750000,
        year: 2022,
        engine: "660cc",
        location: "Karachi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL_Qovz-wTAVrKWOgOID_Sb8zC8ThASuk-WQ&s",
        status: "USED",
        description:
          "Suzuki Alto in good condition. Perfect for daily use with low mileage.",
        mileage: "18-20 km/l",
        transmission: "Manual",
        color: "Blue",
      },
    ],
  },
];

// FOOTER DATA
const contactInfo = {
  phoneFormatted: "+92 309 6527842",
  whatsapp: "923096527842",
  email: "abid6527842@gmail.com",
  location: "Lahore, Punjab, Pakistan",
};

const footerLinks = [
  { text: "New Bikes", href: "search.html?category=New Bikes" },
  { text: "Used Bikes", href: "search.html?category=Used Bikes" },
  { text: "New Cars", href: "search.html?category=New Cars" },
  { text: "Used Cars", href: "search.html?category=Used Cars" },
];

const socialLinks = [
  { icon: "fab fa-youtube", href: "#" },
  { icon: "fab fa-instagram", href: "#" },
  { icon: "fab fa-facebook-f", href: "#" },
  { icon: "fab fa-tiktok", href: "#" },
];

// FOOTER HTML TEMPLATE
function getFooterHTML() {
  return `
    <footer class="bg-dark text-white py-5 mt-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-3">
            <h5 class="fw-bold mb-3">
              <a href="index.html" class="text-white text-decoration-none">${BRAND_NAME}</a>
            </h5>
            <p class="text-white-50">${BRAND_TAGLINE}</p>
          </div>
          
          <div class="col-lg-3">
            <h5 class="fw-bold mb-3">Contact Us</h5>
            <div id="contact-info">
              <!-- Contact info will be rendered by renderContactInfo() -->
            </div>
          </div>
          
          <div class="col-lg-3">
            <h5 class="fw-bold mb-3">Quick Links</h5>
            <ul class="list-unstyled" id="footer-links">
              <!-- Links will be rendered by renderFooterLinks() -->
            </ul>
          </div>
          
          <div class="col-lg-3">
            <h5 class="fw-bold mb-3">Follow Us</h5>
            <div class="social-links" id="social-links">
              <!-- Social links will be rendered by renderSocialLinks() -->
            </div>
          </div>
        </div>
        <hr class="my-4 bg-white opacity-25" />
        <div class="text-center text-white-50">
          <p class="mb-0">&copy; ${BRAND_YEAR} ${BRAND_NAME}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  `;
}

// FOOTER RENDER FUNCTIONS
function renderFooter() {
  const container = document.getElementById("footer-container");
  if (!container) return;

  container.innerHTML = getFooterHTML();
  renderContactInfo();
  renderFooterLinks();
  renderSocialLinks();
}

function renderContactInfo() {
  const container = document.getElementById("contact-info");
  if (!container) return;

  let html = `
    <div class="contact-item mb-3">
      <i class="fas fa-phone-alt text-danger me-2"></i>
      <a href="tel:${contactInfo.phoneFormatted}" class="text-white-50 text-decoration-none">
        ${contactInfo.phoneFormatted}
      </a>
    </div>
    <div class="contact-item mb-3">
      <i class="fas fa-envelope text-danger me-2"></i>
      <a href="mailto:${contactInfo.email}" class="text-white-50 text-decoration-none">
        ${contactInfo.email}
      </a>
    </div>
    <div class="contact-item mb-3">
      <i class="fas fa-map-marker-alt text-danger me-2"></i>
      <span class="text-white-50">${contactInfo.location}</span>
    </div>
  `;
  container.innerHTML = html;
}

function renderFooterLinks() {
  const container = document.getElementById("footer-links");
  if (!container) return;

  let html = "";
  footerLinks.forEach((link) => {
    html += `
      <li class="mb-2">
        <a href="${link.href}" class="text-white-50 text-decoration-none">${link.text}</a>
      </li>
    `;
  });
  container.innerHTML = html;
}

function renderSocialLinks() {
  const container = document.getElementById("social-links");
  if (!container) return;
  let html = "";
  socialLinks.forEach((social) => {
    html += `
      <a href="${social.href}" class="text-white text-decoration-none rounded-circle">
        <i class="${social.icon}"></i>
      </a>
    `;
  });
  container.innerHTML = html;
}

// FLOATING WHATSAPP BUTTON
function getFloatingWhatsAppHTML() {
  return `
    <a href="https://wa.me/${contactInfo.whatsapp}" 
       class="whatsapp-float" 
       target="_blank"
       title="Chat on WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </a>
  `;
}

function renderFloatingWhatsApp() {
  const container = document.getElementById("floating-whatsapp");
  if (!container) return;
  container.innerHTML = getFloatingWhatsAppHTML();
}

// Get URL parameter for search
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}