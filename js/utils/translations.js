// Translation utility functions

/**
 * Get a translated string with parameter substitution
 * @param {string} key - The translation key
 * @param {Object} params - Parameters to substitute in the translation
 * @returns {string} - The translated string with parameters substituted
 */
function getTranslation(key, params = {}) {
  const currentLang = document.documentElement.lang || 'ru';
  let text = translations[currentLang][key] || translations.en[key] || key;
  
  // Replace parameters in the translation
  for (const param in params) {
    text = text.replace(`{${param}}`, params[param]);
  }
  
  return text;
}

window.getTranslation = getTranslation;