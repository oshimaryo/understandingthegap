/* This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this file,
   - You can obtain one at http://mozilla.org/MPL/2.0/.  */
var MEAN_SOLAR_DAYS = {
  "mercury": 175.900000,
  "venus": 116.700000,
  "earth": 1.00000,
  "mars": 1.020000,
  "jupitor": 0.410000,
  "saturn": 0.430000,
  "uranus": 0.650000,
  "neptune": 0.770000,
};

var _60X60X24 = 60*60*24;
var _60X60 = 60*60;
var TIMEDIF = 60*60*9;

var Main = {
  start: function() {
    Main.timeElements = {};
    for  (planet in MEAN_SOLAR_DAYS) {
      Main.timeElements[planet] = document.querySelector("#"+planet+" .time");
    }
    Main.update();
  },
  
  update: function() {
    var currentEarthTime = (new Date()).getTime();
    for  (planet in MEAN_SOLAR_DAYS) {
      Main.updatePlanet(planet, currentEarthTime);
    }
    setTimeout(Main.update, 20);
  },
  
  updatePlanet: function(planet, currentEarthTime) {
    var meanSolarDay = MEAN_SOLAR_DAYS[planet];
    var timeElement = Main.timeElements[planet];

    var currentTime = currentEarthTime / meanSolarDay;
    var currentSeconds = Math.round(currentTime/1000) + TIMEDIF;
    currentSeconds %= _60X60X24;
    var hours = Math.floor(currentSeconds / _60X60);
    currentSeconds = currentSeconds - hours * _60X60;
    var minutes = Math.floor(currentSeconds / 60);
    currentSeconds = currentSeconds - minutes * 60

    var timeString = Main.format(hours, minutes, currentSeconds);
    timeElement.textContent = timeString;
  },
  
  format: function(h, m, s) {
    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;
    return  h+":"+m+":"+s;
  }
};