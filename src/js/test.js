requirejs.config({
    name: "main.js",
    out: "btg.min.js",
    baseUrl: "js",
    paths: {
	"jquery": "jquery-1.9.1.min"
    },
    shim: {
	"jquery": {
            exports: "jQuery"
        }
    }
});

require(["setting"], function(setting){
    var s = setting.new();
    s.apply();
});