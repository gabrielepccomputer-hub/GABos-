var allPanels = panels();
for (var i in allPanels) { allPanels[i].remove(); }

// DASH BASSA: Fluttuante, Super Animata, Centrata
var dock = new Panel();
dock.location = "bottom";
dock.height = 76; // Bella cicciotta per le animazioni
dock.alignment = "center";
dock.lengthMode = "fit"; 
dock.floating = true; // Staccata dal bordo

var taskManager = dock.addWidget("org.kde.plasma.icontasks");
taskManager.currentConfigGroup = ["General"];
// Aggiungiamo le app: Terminale, Browser, Impostazioni, Esplora File
taskManager.writeConfig("launchers", "applications:org.kde.konsole.desktop,applications:firefox-esr.desktop,applications:systemsettings.desktop,applications:org.kde.dolphin.desktop");
taskManager.writeConfig("showOnlyCurrentScreen", true);
taskManager.writeConfig("wheelEnabled", true);

// BARRA ALTO: Pulita e Galattica
var topBar = new Panel();
topBar.location = "top";
topBar.height = 30;
topBar.backgroundHints = 2; // Trasparente
topBar.addWidget("org.kde.plasma.kickoff");
topBar.addWidget("org.kde.plasma.panelspacer");
topBar.addWidget("org.kde.plasma.systemtray");
topBar.addWidget("org.kde.plasma.digitalclock");
