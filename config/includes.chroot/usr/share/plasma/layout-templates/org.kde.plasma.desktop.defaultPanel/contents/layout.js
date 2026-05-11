var allPanels = panels();
for (var i in allPanels) { allPanels[i].remove(); }

var topBar = new Panel();
topBar.location = "top";
topBar.height = 28;
topBar.addWidget("org.kde.plasma.kickoff");
topBar.addWidget("org.kde.plasma.panelspacer");
topBar.addWidget("org.kde.plasma.systemtray");
topBar.addWidget("org.kde.plasma.digitalclock");

var dock = new Panel();
dock.location = "bottom";
dock.height = 74;
dock.alignment = "center";
dock.lengthMode = "fit"; 
dock.floating = true;
var taskManager = dock.addWidget("org.kde.plasma.icontasks");
