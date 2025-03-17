// Constants defining translations for the app
const translations = {
    ru: {
        teamTurn: "{team} выбирает карту для бана",
        phaseDescription: "Каждая команда по очереди банит карты, пока не останется {count} карт.",
        mapCounter: "Осталось {remaining} карт, нужно забанить еще {toRemove}",
        selectionComplete: "Выбор карт завершен!",
        selectedMapsDescription: "Следующие {count} карт были выбраны для турнира:",
        confirmBanMessage: "{team}, вы уверены, что хотите забанить карту {mapName} ({mapType} {mapVersion})?",
        notEnoughMaps: "Недостаточно карт выбрано. Пожалуйста, выберите больше типов карт или уменьшите количество финальных карт."
    },
    en: {
        teamTurn: "{team}'s Turn to Ban",
        phaseDescription: "Each team takes turns banning maps until {count} remain.",
        mapCounter: "{remaining} maps remaining, {toRemove} more to ban",
        selectionComplete: "Map Selection Complete!",
        selectedMapsDescription: "The following {count} maps have been selected for the tournament:",
        confirmBanMessage: "{team}, are you sure you want to ban {mapName} ({mapType} {mapVersion})?",
        notEnoughMaps: "Not enough maps selected. Please select more map types or decrease the final map count."
    }
};