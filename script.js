// Initialize Leaflet map (Ottawa, ON)
document.addEventListener("DOMContentLoaded", () => {
  const mapEl = document.getElementById("map");
  if (mapEl) {
    const map = L.map(mapEl, { scrollWheelZoom: false }).setView([45.4215, -75.6972], 11);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);
    L.marker([45.4215, -75.6972]).addTo(map).bindPopup("📍 Ottawa, Ontario, Canada").openPopup();
  }

  
  const row = document.querySelector(".skills__row");
  const clone = document.querySelector(".skills__row--clone");
  if (row && clone) {
    clone.innerHTML = row.innerHTML; 
  }
});
