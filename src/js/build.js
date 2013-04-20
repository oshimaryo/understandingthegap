({
    name: "main.js",
    out: "btg.min.js",
    baseUrl: ".",
    paths: {
	"jquery": "jquery-1.9.1.min"
    },
    shim: {
	"jquery": {
            exports: "jQuery"
        }
    }
})