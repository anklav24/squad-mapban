// script.js - Main logic for the Squad Map Selection

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const setupContainer = document.getElementById('setupContainer');
  const selectionPhase = document.getElementById('selectionPhase');
  const startSelectionBtn = document.getElementById('startSelection');
  const team1Input = document.getElementById('team1');
  const team2Input = document.getElementById('team2');
  const finalMapCountInput = document.getElementById('finalMapCount');
  const firstBanSelect = document.getElementById('firstBan');
  const mapTypeCheckboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');
  const mapsContainer = document.getElementById('mapsContainer');
  const teamTurnDisplay = document.getElementById('teamTurn');
  const phaseDescription = document.getElementById('phaseDescription');
  const mapCounter = document.getElementById('mapCounter');
  const finalMapsSection = document.getElementById('finalMapsSection');
  const finalMapsContainer = document.getElementById('finalMapsContainer');
  const newSelectionBtn = document.getElementById('newSelection');
  const confirmationModal = document.getElementById('confirmationModal');
  const confirmationMessage = document.getElementById('confirmationMessage');
  const confirmBanBtn = document.getElementById('confirmBan');
  const cancelBanBtn = document.getElementById('cancelBan');

  // App State
  let state = {
    team1Name: '',
    team2Name: '',
    finalMapCount: 3,
    currentTurn: '',
    mapsPool: [],
    selectedMaps: [],
    bannedMaps: [],
    mapToBeRemoved: null,
    gameInProgress: false
  };

  // Event Listeners
  startSelectionBtn.addEventListener('click', startMapSelection);
  newSelectionBtn.addEventListener('click', resetAndStartNewSelection);
  confirmBanBtn.addEventListener('click', confirmMapBan);
  cancelBanBtn.addEventListener('click', cancelMapBan);

  // Functions
  function startMapSelection() {
    // Get and validate inputs
    state.team1Name = team1Input.value.trim() || 'Team 1';
    state.team2Name = team2Input.value.trim() || 'Team 2';
    state.finalMapCount = parseInt(finalMapCountInput.value) || 3;
    
    // Get selected map types
    const selectedTypes = Array.from(mapTypeCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    
    // Filter maps based on selected types
    state.mapsPool = squadMaps.filter(map => selectedTypes.includes(map.type));
    
    if (state.mapsPool.length <= state.finalMapCount) {
      alert('Not enough maps selected. Please select more map types or decrease the final map count.');
      return;
    }
    
    // Set current turn based on selection
    state.currentTurn = firstBanSelect.value === 'team1' ? state.team1Name : state.team2Name;
    
    // Reset other state variables
    state.selectedMaps = [...state.mapsPool];
    state.bannedMaps = [];
    state.gameInProgress = true;
    
    // Update UI
    setupContainer.classList.add('hidden');
    selectionPhase.classList.remove('hidden');
    finalMapsSection.classList.add('hidden');
    
    updatePhaseInfo();
    renderMaps();
  }

  function resetAndStartNewSelection() {
    // Reset state
    state = {
      team1Name: '',
      team2Name: '',
      finalMapCount: 3,
      currentTurn: '',
      mapsPool: [],
      selectedMaps: [],
      bannedMaps: [],
      mapToBeRemoved: null,
      gameInProgress: false
    };
    
    // Reset UI
    team1Input.value = '';
    team2Input.value = '';
    finalMapCountInput.value = '3';
    firstBanSelect.value = 'team1';
    mapTypeCheckboxes.forEach(checkbox => checkbox.checked = true);
    
    selectionPhase.classList.add('hidden');
    finalMapsSection.classList.add('hidden');
    setupContainer.classList.remove('hidden');
    confirmationModal.classList.remove('active');
  }

  function updatePhaseInfo() {
    teamTurnDisplay.textContent = `${state.currentTurn}'s Turn to Ban`;
    
    const remainingMaps = state.selectedMaps.length;
    const mapsToRemove = remainingMaps - state.finalMapCount;
    
    if (mapsToRemove <= 0) {
      finishMapSelection();
      return;
    }
    
    phaseDescription.textContent = `Each team takes turns banning maps until ${state.finalMapCount} remain.`;
    mapCounter.textContent = `${remainingMaps} maps remaining, ${mapsToRemove} more to ban`;
  }

  function renderMaps() {
    // Clear previous maps
    mapsContainer.innerHTML = '';
    
    // Render each map
    state.selectedMaps.forEach(map => {
      const mapCard = document.createElement('div');
      mapCard.className = 'map-card';
      mapCard.dataset.mapId = map.id;
      
      // Create map image
      const img = document.createElement('img');
      img.src = map.image;
      img.alt = `${map.name} ${map.type}`;
      mapCard.appendChild(img);
      
      // Create map info
      const mapInfo = document.createElement('div');
      mapInfo.className = 'map-info';
      
      const mapName = document.createElement('div');
      mapName.className = 'map-name';
      mapName.textContent = map.name;
      mapInfo.appendChild(mapName);
      
      const mapType = document.createElement('div');
      mapType.className = 'map-type';
      mapType.textContent = `${map.type} ${map.version}`;
      mapInfo.appendChild(mapType);
      
      mapCard.appendChild(mapInfo);
      
      // Add click event
      mapCard.addEventListener('click', () => promptMapBan(map));
      
      mapsContainer.appendChild(mapCard);
    });
  }

  function promptMapBan(map) {
    if (!state.gameInProgress) return;
    
    state.mapToBeRemoved = map;
    confirmationMessage.textContent = `${state.currentTurn}, are you sure you want to ban ${map.name} (${map.type} ${map.version})?`;
    confirmationModal.classList.add('active');
  }

  function confirmMapBan() {
    if (!state.mapToBeRemoved) return;
    
    // Add to banned maps
    state.bannedMaps.push(state.mapToBeRemoved);
    
    // Remove from selected maps
    state.selectedMaps = state.selectedMaps.filter(map => map.id !== state.mapToBeRemoved.id);
    
    // Switch turn
    state.currentTurn = state.currentTurn === state.team1Name ? state.team2Name : state.team1Name;
    
    // Reset map to be removed
    state.mapToBeRemoved = null;
    
    // Close modal
    confirmationModal.classList.remove('active');
    
    // Update UI
    updatePhaseInfo();
    renderMaps();
  }

  function cancelMapBan() {
    state.mapToBeRemoved = null;
    confirmationModal.classList.remove('active');
  }

  function finishMapSelection() {
    // Update UI to show final maps
    teamTurnDisplay.textContent = 'Map Selection Complete!';
    phaseDescription.textContent = `The following ${state.finalMapCount} maps have been selected for the tournament:`;
    mapCounter.textContent = '';
    
    // Hide the maps selection container and show only the final maps section
    mapsContainer.classList.add('hidden');
    finalMapsSection.classList.remove('hidden');
    finalMapsContainer.innerHTML = '';
    
    // Render final maps
    state.selectedMaps.forEach(map => {
      const mapCard = document.createElement('div');
      mapCard.className = 'map-card final-map-card';
      
      // Create map image
      const img = document.createElement('img');
      img.src = map.image;
      img.alt = `${map.name} ${map.type}`;
      mapCard.appendChild(img);
      
      // Create map info
      const mapInfo = document.createElement('div');
      mapInfo.className = 'map-info';
      
      const mapName = document.createElement('div');
      mapName.className = 'map-name';
      mapName.textContent = map.name;
      mapInfo.appendChild(mapName);
      
      const mapType = document.createElement('div');
      mapType.className = 'map-type';
      mapType.textContent = `${map.type} ${map.version}`;
      mapInfo.appendChild(mapType);
      
      mapCard.appendChild(mapInfo);
      
      finalMapsContainer.appendChild(mapCard);
    });
    
    state.gameInProgress = false;
  }

  // Create directory for map images if needed
  function createMapImagesDirectory() {
    try {
      // In a real environment, this would create the directory
      // For this static demo, we'll just handle the image loading
      console.log('Map images directory check completed');
    } catch (e) {
      console.error('Error checking directory:', e);
    }
  }

  // Generate a placeholder image for a specific map
  function createMapPlaceholder(mapName) {
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
    
    // Add "Squad Map" text
    ctx.font = 'normal 16px Arial';
    ctx.fillText('Squad Map', 150, 130);
    
    return canvas.toDataURL('image/jpeg');
  }

  // Setup map images and fallbacks
  function setupMapImages() {
    // Create maps directory
    createMapImagesDirectory();
    
    // Add error handler for all map images
    squadMaps.forEach(map => {
      // Extract the map base name without spaces
      const mapBaseName = map.name.replace(/\s+/g, '');
      
      // Set the image path based on the map name
      map.image = `img/maps/${mapBaseName}.jpg`;
      
      // Pre-load the image to check if it exists
      const img = new Image();
      img.onerror = function() {
        // If the image doesn't exist, use a data URL with the map name
        map.image = createMapPlaceholder(map.name);
      };
      img.src = map.image;
    });
  }

  // Initialize
  setupMapImages();
});