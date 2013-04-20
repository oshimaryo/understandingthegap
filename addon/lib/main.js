var data = require("self").data;
var pageMod = require("page-mod");
pageMod.PageMod({
  include: "*",
  contentScriptWhen: 'ready',
  contentScriptFile: [data.url("jquery-1.9.1.min.js"), data.url("all.js"), data.url("fillgaps.js")],
  contentScriptOptions: {
    dataurl: data.url(""),
    planets: ["earth", "moon", "mercury", "venus", "mars", "jupiter", "saturn", "uranus", "neptune"],
  }
});