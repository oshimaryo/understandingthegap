var data = require("self").data;
var pageMod = require("page-mod");
pageMod.PageMod({
  include: "*",
  contentScriptWhen: 'ready',
  contentScriptFile: data.url("fillgaps.js"),
  contentScriptOptions: {
    dataurl: data.url(""),
    planets: ["earth", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune"],
  }
});