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
  const languageBtns = document.querySelectorAll('.lang-btn');
  const randomMapLimitInput = document.getElementById('randomMapLimit');
  const mapFilterModal = document.getElementById('mapFilterModal');
  const mapFilterContainer = document.getElementById('mapFilterContainer');
  const confirmMapFilterBtn = document.getElementById('confirmMapFilter');
  const cancelMapFilterBtn = document.getElementById('cancelMapFilter');
  const selectAllMapsBtn = document.getElementById('selectAllMaps');
  const deselectAllMapsBtn = document.getElementById('deselectAllMaps');
  const openMapFilterModalBtn = document.getElementById('openMapFilterModal');

  // App State
  let state = {
    team1Name: '',
    team2Name: '',
    finalMapCount: 3,
    currentTurn: '',
    mapsPool: [],
    selectedLayers: [],
    bannedMaps: [],
    mapToBeRemoved: null,
    gameInProgress: false,
    currentLang: 'ru', // Default language
    randomMapLimit: 6, // Default random map limit

  };


  // Event Listeners
  startSelectionBtn.addEventListener('click', startMapSelection);
  newSelectionBtn.addEventListener('click', resetAndStartNewSelection);
  confirmBanBtn.addEventListener('click', confirmMapBan);
  cancelBanBtn.addEventListener('click', cancelMapBan);
  confirmMapFilterBtn.addEventListener('click', confirmMapFilter);
  cancelMapFilterBtn.addEventListener('click', () => {
    mapFilterModal.classList.remove('active');
  });
  selectAllMapsBtn.addEventListener('click', () => {
    mapFilterContainer.querySelectorAll('.map-card').forEach(card => card.classList.add('selected'));
  });
  deselectAllMapsBtn.addEventListener('click', () => {
    mapFilterContainer.querySelectorAll('.map-card').forEach(card => card.classList.remove('selected'));
  });
  openMapFilterModalBtn.addEventListener('click', openMapFilterModal);
  
  // Language switcher
  languageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchLanguage(btn.getAttribute('data-lang'));
    });
  });

  // Initialize language based on browser or system settings
  function initLanguage() {
    let detectedLang = 'ru'; // Default to Russian
    
    // Try to detect browser language
    if (navigator.language) {
      const browserLang = navigator.language.substring(0, 2).toLowerCase();
      if (browserLang === 'en') {
        detectedLang = 'en';
      }
    }
    
    switchLanguage(detectedLang);
  }

  // Switch between languages
  function switchLanguage(lang) {
    state.currentLang = lang;
    document.documentElement.lang = lang;
    
    // Update active button
    languageBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Apply translations
    applyTranslations();

    // Update select options for the team to ban first
    updateSelectOptions(lang);
    
    // If game is in progress, update dynamic text
    if (state.gameInProgress) {
      updatePhaseInfo();
      // Re-render maps to update the banned text
      renderMaps();
    } else {
      // Update teamTurn and phaseDescription when the game is not in progress
      teamTurnDisplay.textContent = getTranslation('selectionComplete');
      phaseDescription.textContent = getTranslation('selectedMapsDescription', { count: state.finalMapCount });
    }
  }

  // Update select options when language changes
  function updateSelectOptions(lang) {
    // Get all option elements in firstBanSelect
    const options = firstBanSelect.querySelectorAll('option');
    
    // Update text for each option based on language
    if (options.length >= 2) {
      options[0].textContent = getTranslation('team1DefaultName');
      options[1].textContent = getTranslation('team2DefaultName');
    }
  }

  function startMapSelection() {
    // Get inputs based on current language
    state.team1Name = getTeamName('team1');
    state.team2Name = getTeamName('team2');
    
    state.finalMapCount = parseInt(finalMapCountInput.value) || 3;
    state.randomMapLimit = parseInt(randomMapLimitInput.value) || 6;
    
    // Get selected map types
    const selectedTypes = Array.from(mapTypeCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    
    // Filter maps based on selected types and selected maps
    state.mapsPool = state.selectedLayers.filter(map => selectedTypes.includes(map.type));
    
    // Limit the number of maps in the pool based on random map limit
    if (state.mapsPool.length > state.randomMapLimit) {
      state.mapsPool = state.mapsPool.sort(() => 0.5 - Math.random()).slice(0, state.randomMapLimit);
    }
    
    if (state.mapsPool.length <= state.finalMapCount) {
      alert(getTranslation('notEnoughMaps'));
      return;
    }

    // Set current turn based on selection
    state.currentTurn = firstBanSelect.value === 'team1' ? state.team1Name : state.team2Name;
    
    // Reset other state variables
    state.selectedLayers = [...state.mapsPool];
    state.bannedMaps = [];
    state.gameInProgress = true;
    
    // Update UI
    setupContainer.classList.add('hidden');
    selectionPhase.classList.remove('hidden');
    mapsContainer.classList.remove('hidden');
    finalMapsSection.classList.add('hidden');
    
    updatePhaseInfo();
    renderMaps();
  }

  function getTeamName(team) {
    const input = document.getElementById(team);
    return input ? input.value.trim() || getTranslation(`${team}DefaultName`) : getTranslation(`${team}DefaultName`);
  }

  function resetAndStartNewSelection() {
    // Reset state but keep language preference
    const currentLang = state.currentLang;
    state = {
      team1Name: '',
      team2Name: '',
      finalMapCount: 3,
      currentTurn: '',
      mapsPool: [],
      selectedLayers: [],
      bannedMaps: [],
      mapToBeRemoved: null,
      gameInProgress: false,
      currentLang: currentLang
    };
    
    // Reset UI
    document.querySelectorAll('.team-input').forEach(input => input.value = '');
    finalMapCountInput.value = '3';
    firstBanSelect.value = 'team1';
    mapTypeCheckboxes.forEach(checkbox => checkbox.checked = true);
    
    selectionPhase.classList.add('hidden');
    finalMapsSection.classList.add('hidden');
    setupContainer.classList.remove('hidden');
    confirmationModal.classList.remove('active');
  }

  function updatePhaseInfo() {
    // Update team turn display with translation
    teamTurnDisplay.textContent = getTranslation('teamTurn', { team: state.currentTurn });

    const remainingMaps = state.selectedLayers.length;
    const mapsToRemove = remainingMaps - state.finalMapCount;

    if (mapsToRemove <= 0) {
      finishMapSelection();
      return;
    }

    // Update phase description with translation
    phaseDescription.textContent = getTranslation('phaseDescription', { count: state.finalMapCount });

    // Update map counter with translation
    mapCounter.textContent = getTranslation('mapCounter', { 
      remaining: remainingMaps, 
      toRemove: mapsToRemove 
    });
  }

  function renderMaps() {
    // Clear previous maps
    mapsContainer.innerHTML = '';
    
    // Render each map
    state.selectedLayers.forEach(map => {
      const mapCard = document.createElement('div');
      mapCard.className = 'map-card';
      mapCard.dataset.mapId = map.id;
      
      // Add banned text for appropriate language
      const bannedText = state.currentLang === 'ru' ? 'ЗАБАНЕНО' : 'BANNED';
      mapCard.setAttribute('data-banned-text', bannedText);
      
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
    
    // Set confirmation message with translation
    confirmationMessage.innerHTML = getTranslation('confirmBanMessage', {
      team: state.currentTurn,
      mapName: `<br><strong>${map.name}`,
      mapType: map.type,
      mapVersion: `${map.version}</strong>`
    });
    
    confirmationModal.classList.add('active');
  }

  function confirmMapBan() {
    if (!state.mapToBeRemoved) return;
    
    // Add to banned maps
    state.bannedMaps.push(state.mapToBeRemoved);
    
    // Remove from selected maps
    state.selectedLayers = state.selectedLayers.filter(map => map.id !== state.mapToBeRemoved.id);
    
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
    // Update UI to show final maps with translations
    teamTurnDisplay.textContent = getTranslation('selectionComplete');
    phaseDescription.textContent = getTranslation('selectedMapsDescription', { count: state.finalMapCount });
    mapCounter.textContent = '';

    // Hide the maps selection container and show only the final maps section
    mapsContainer.classList.add('hidden');
    finalMapsSection.classList.remove('hidden');
    finalMapsContainer.innerHTML = '';


    // Render final maps
    state.selectedLayers.forEach(map => {
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

  function openMapFilterModal() {
    console.log("Opening map filter modal...");
    // Render maps in the modal
    mapFilterContainer.innerHTML = '';

    maps.forEach(mapName => {
      const mapCard = document.createElement('div');
      mapCard.className = 'map-card';
      mapCard.dataset.mapName = mapName;

      // Create map image
      const img = document.createElement('img');
      img.src = `assets/images/maps/${mapName}.jpg`;
      img.alt = mapName;
      mapCard.appendChild(img);

      // Create map info
      const mapInfo = document.createElement('div');
      mapInfo.className = 'map-info';

      const mapNameDiv = document.createElement('div');
      mapNameDiv.className = 'map-name';
      mapNameDiv.textContent = mapName;
      mapInfo.appendChild(mapNameDiv);

      mapCard.appendChild(mapInfo);

      // Add click event to select/deselect map
      mapCard.addEventListener('click', () => {
        mapCard.classList.toggle('selected');
        console.log(`Toggled selection for map: ${mapName}`);
      });

      mapFilterContainer.appendChild(mapCard);
    });

    mapFilterModal.classList.add('active');
  }

  function confirmMapFilter() {
    console.log("Confirming map filter...");
    // Get selected maps
    const selectedMapCards = mapFilterContainer.querySelectorAll('.map-card.selected');
    const selectedMaps = Array.from(selectedMapCards).map(card => card.dataset.mapName);

    console.log("Selected maps:", selectedMaps);

    // Update state with selected maps
    state.selectedLayers = squadLayers.filter(map => selectedMaps.includes(map.name));
    console.log(state)

    // Close modal
    mapFilterModal.classList.remove('active');

    // Update UI
    renderMaps();
  }

  function applyTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        el.textContent = getTranslation(key);
    });

    const placeholders = document.querySelectorAll('[data-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-placeholder');
        el.placeholder = getTranslation(key);
    });
  }

  // Close modal when clicking outside of it
  window.addEventListener('click', (event) => {
    if (event.target === mapFilterModal) {
      mapFilterModal.classList.remove('active');
    }
  });

  // Initialize
  initLanguage();
  applyTranslations();
  setupMapImages(squadLayers, state.currentLang);
});