// translations.js - Contains text translations for the application

const translations = {
    ru: {
        teamTurn: "{team} выбирает карту для бана",
        phaseDescription: "Каждая команда по очереди банит карты, пока не останется {count} карт.",
        mapCounter: "Осталось {remaining} карт, нужно забанить еще {toRemove}",
        selectionComplete: "Выбор карт завершен!",
        selectedMapsDescription: "Следующие {count} карт были выбраны для турнира:",
        confirmBanMessage: "{team}, вы уверены, что хотите забанить карту {mapName} ({mapType} {mapVersion})?"
    },
    en: {
        teamTurn: "{team}'s Turn to Ban",
        phaseDescription: "Each team takes turns banning maps until {count} remain.",
        mapCounter: "{remaining} maps remaining, {toRemove} more to ban",
        selectionComplete: "Map Selection Complete!",
        selectedMapsDescription: "The following {count} maps have been selected for the tournament:",
        confirmBanMessage: "{team}, are you sure you want to ban {mapName} ({mapType} {mapVersion})?"
    }
};

function getTranslation(key, params = {}) {
    const currentLang = document.documentElement.lang || 'ru';
    let text = translations[currentLang][key] || translations.en[key] || key;
    
    // Replace parameters in the translation
    for (const param in params) {
        text = text.replace(`{${param}}`, params[param]);
    }
    
    return text;
}