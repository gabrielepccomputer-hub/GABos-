var allDesktops = desktops();
for (var i in allDesktops) {
    var d = allDesktops[i];
    d.wallpaperPlugin = "org.kde.image";
}

// Rimuoviamo il pannello standard e creiamo quelli GAB OS
var panels = panels();
for (var i in panels) { panels[i].remove(); }

// 1. BARRA ALTO (Orologio, Rete, Bluetooth)
var topPanel = new Panel();
topPanel.location = "top";
topPanel.height = 30;
topPanel.addWidget("org.kde.plasma.kickoff"); // Menu GAB OS
topPanel.addWidget("org.kde.plasma.panelspacer"); // Spazio vuoto
topPanel.addWidget("org.kde.plasma.systemtray"); // Bluetooth, Rete, Volume
topPanel.addWidget("org.kde.plasma.digitalclock"); // Orario

// 2. DASH BASSO (Dock animata per le App)
var bottomDock = new Panel();
bottomDock.location = "bottom";
bottomDock.height = 60; // Più alta e "cicciotta"
bottomDock.alignment = "center";
bottomDock.minimumWidth = 500;
bottomDock.maximumWidth = 800;
bottomDock.offset = 10; // Effetto flottante (staccata dal bordo)
bottomDock.addWidget("org.kde.plasma.icontasks"); // Le tue APP animate qui
