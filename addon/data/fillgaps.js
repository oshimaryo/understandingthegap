function createPlanet(value, imgsrc) {
  var planet = document.createElement("option");
  planet.setAttribute("value", value);
  planet.setAttribute("style", "background:url("+imgsrc+") no-repeat; height: 16px; width: 16px;");
  return planet;
}

function getIcon(dir, src) {
  return dir+"16/"+src+".jpg";
}

var toolbar = document.createElement("div");
toolbar.setAttribute("style", "text-align: right;");
var planets = document.createElement("select");
planets.setAttribute("name", "planets");
var dataurl = self.options.dataurl
for (var i = 0, n = self.options.planets.length; i < n; i++) {
  var planetname = self.options.planets[i];
  var planet = createPlanet(planetname, getIcon(dataurl, planetname));
  planets.appendChild(planet);
}
planets.firstChild.setAttribute("selected", "selected");
planets.setAttribute("style", "background:url("+getIcon(dataurl, self.options.planets[0])+") no-repeat; width: 37px;");
toolbar.appendChild(planets);
var rootElement = document.body;
rootElement.insertBefore(toolbar, rootElement.firstChild);

planets.addEventListener("change", function(e) {
  var planetname = planets.value;
  var icon = getIcon(dataurl, planetname);
  planets.style.backgroundImage = "url("+icon+")";
}, false);