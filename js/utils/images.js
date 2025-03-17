// Image utility functions

/**
 * Generate a placeholder image for a map if the actual image is not available
 * @param {string} mapName - Map name to display in the placeholder
 * @param {string} currentLang - Current language code
 * @returns {string} - Data URL for the placeholder image
 */
function createMapPlaceholder(mapName, currentLang) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = 300;
  canvas.height = 200;
  
  // Draw gradient background
  const gradient = ctx.createLinearGradient(0, 0, 300, 200);
  gradient.addColorStop(0, '#17412b');
  gradient.addColorStop(1, '#30805a');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 300, 200);
  
  // Draw text with map name
  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(mapName, 150, 100);
  
  // Add "Squad Map" text in current language
  ctx.font = 'normal 16px Arial';
  ctx.fillText(currentLang === 'ru' ? 'Карта Squad' : 'Squad Map', 150, 130);
  
  return canvas.toDataURL('image/jpeg');
}

/**
 * Set the correct image path for each map and handle fallbacks
 * @param {Array} maps - Array of map objects
 * @param {string} currentLang - Current language code
 */
function setupMapImages(maps, currentLang) {
  maps.forEach(map => {
    // Extract the map base name without spaces and special characters
    const mapBaseName = map.name.replace(/[^a-zA-Z0-9]/g, '');
    
    // Set the image path based on the map name
    map.image = `img/maps/${mapBaseName}.jpg`;
    
    // Pre-load the image to check if it exists
    const img = new Image();
    img.onerror = function() {
      // If the image doesn't exist, use a data URL with the map name
      map.image = createMapPlaceholder(map.name, currentLang);
    };
    img.src = map.image;
  });
}

// Make functions available globally
window.createMapPlaceholder = createMapPlaceholder;
window.setupMapImages = setupMapImages;