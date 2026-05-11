var allPanels = panels();
for (var i in allPanels) { allPanels[i].remove(); }

// Barra Superiore (Sottile, Mac-style)
var topBar = new Panel();
topBar.location = "top";
topBar.height = 26;
topBar.backgroundHints = 2;
topBar.addWidget("org.kde.plasma.kickoff");
topBar.addWidget("org.kde.plasma.panelspacer");
topBar.addWidget("org.kde.plasma.systemtray");
topBar.addWidget("org.kde.plasma.digitalclock");

// DASH BASSA (Animata, Fluttuante, Icone Grandi)
var dock = new Panel();
dock.location = "bottom";
dock.height = 72;
dock.alignment = "center";
dock.lengthMode = "fit"; 
dock.floating = true;
dock.backgroundHints = 2;

var taskManager = dock.addWidget("org.kde.plasma.icontasks");
taskManager.currentConfigGroup = ["General"];
taskManager.writeConfig("launchers", "applications:org.kde.konsole.desktop,applications:firefox-esr.desktop,applications:systemsettings.desktop");
