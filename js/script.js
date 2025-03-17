// script.js - Main logic for the Squad Map Selection
document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const setupContainer = document.getElementById('setupContainer');
  const selectionPhase = document.getElementById('selectionPhase');
  const startSelectionBtn = document.getElementById('startSelection');
  const startSelectionBtnEn = document.getElementById('startSelection-en');
  const team1Input = document.getElementById('team1');
  const team1InputEn = document.getElementById('team1-en');
  const team2Input = document.getElementById('team2');
  const team2InputEn = document.getElementById('team2-en');
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
  const newSelectionBtnEn = document.getElementById('newSelection-en');
  const confirmationModal = document.getElementById('confirmationModal');
  const confirmationMessage = document.getElementById('confirmationMessage');
  const confirmBanBtn = document.getElementById('confirmBan');
  const confirmBanBtnEn = document.getElementById('confirmBan-en');
  const cancelBanBtn = document.getElementById('cancelBan');
  const cancelBanBtnEn = document.getElementById('cancelBan-en');
  const languageBtns = document.querySelectorAll('.lang-btn');
  const randomMapLimitInput = document.getElementById('randomMapLimit');

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
    gameInProgress: false,
    currentLang: 'ru', // Default language
    randomMapLimit: 6, // Default random map limit
    availableMaps: [
      'Harju', 'Anvil', 'AlBasrah', 'Belaya', 'Chora', 'Fallujah', 'FoolsRoad', 'GooseBay', 'Gorodok', 'Kamdesh',
      'Kohat', 'Kokan', 'Lashkar', 'Logar', 'Manicouagan', 'Mestia', 'Mutaha', 'Narva', 'PacificProvingGrounds',
      'Skorpo', 'Sumari', 'Tallil', 'Yehorivka', 'BlackCoast', 'Sanxian_Islands'
    ]
  };

  // Event Listeners
  startSelectionBtn.addEventListener('click', startMapSelection);
  startSelectionBtnEn.addEventListener('click', startMapSelection);
  newSelectionBtn.addEventListener('click', resetAndStartNewSelection);
  newSelectionBtnEn.addEventListener('click', resetAndStartNewSelection);
  confirmBanBtn.addEventListener('click', confirmMapBan);
  confirmBanBtnEn.addEventListener('click', confirmMapBan);
  cancelBanBtn.addEventListener('click', cancelMapBan);
  cancelBanBtnEn.addEventListener('click', cancelMapBan);
  
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
    
    // Hide all language elements
    document.querySelectorAll('.lang-ru, .lang-en').forEach(el => {
      el.classList.add('hidden');
    });
    
    // Show current language elements
    document.querySelectorAll(`.lang-${lang}`).forEach(el => {
      el.classList.remove('hidden');
    });
    
    // Update active button
    languageBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
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
      if (lang === 'ru') {
        options[0].textContent = 'Команда 1';
        options[1].textContent = 'Команда 2';
      } else {
        options[0].textContent = 'Team 1';
        options[1].textContent = 'Team 2';
      }
    }
  }

  function startMapSelection() {
    // Get inputs based on current language
    if (state.currentLang === 'ru') {
      state.team1Name = team1Input.value.trim() || 'Команда 1';
      state.team2Name = team2Input.value.trim() || 'Команда 2';
    } else {
      state.team1Name = team1InputEn.value.trim() || 'Team 1';
      state.team2Name = team2InputEn.value.trim() || 'Team 2';
    }
    
    state.finalMapCount = parseInt(finalMapCountInput.value) || 3;
    state.randomMapLimit = parseInt(randomMapLimitInput.value) || 6;
    
    // Get selected map types
    const selectedTypes = Array.from(mapTypeCheckboxes)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    
    // Get selected maps for the pool
    const selectedMaps = Array.from(document.querySelectorAll('.map-filter input[type="checkbox"]'))
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);
    
    // Filter maps based on selected types and selected maps
    state.mapsPool = squadMaps.filter(map => selectedTypes.includes(map.type) && selectedMaps.includes(map.name));
    
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
    state.selectedMaps = [...state.mapsPool];
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

  function resetAndStartNewSelection() {
    // Reset state but keep language preference
    const currentLang = state.currentLang;
    state = {
      team1Name: '',
      team2Name: '',
      finalMapCount: 3,
      currentTurn: '',
      mapsPool: [],
      selectedMaps: [],
      bannedMaps: [],
      mapToBeRemoved: null,
      gameInProgress: false,
      currentLang: currentLang
    };
    
    // Reset UI
    team1Input.value = '';
    team1InputEn.value = '';
    team2Input.value = '';
    team2InputEn.value = '';
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

    const remainingMaps = state.selectedMaps.length;
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
    state.selectedMaps.forEach(map => {
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
    // Update UI to show final maps with translations
    teamTurnDisplay.textContent = getTranslation('selectionComplete');
    phaseDescription.textContent = getTranslation('selectedMapsDescription', { count: state.finalMapCount });
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

  // Initialize
  initLanguage();
  setupMapImages(squadMaps, state.currentLang);
});