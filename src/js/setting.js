define(["planets", "cursor", "scroll"], function(db, cursur, scroll){

    var selectPlanetData = function(name){
	return db.PLANETS[name] || db.PLANETS.EARTH;
    };

    var Setting = function(){
	this.setDefault();
	this.cursor = new cursur.Cursor(this.planet);
	this.scroll = scroll.new(this.planet);
    };

    Setting.prototype = (function(){
	return {
	    setPlanet: function(name){
		this.planet = selectPlanetData(name);
		this.cursor.setPlanet(this.planet);
		this.scroll.setPlanet(this.planet);
	    },
	    setDefault: function(){
//		this.planet = selectPlanetData("EARTH");
		this.planet = selectPlanetData("JUPITOR");
	    },
	    apply: function(){
		console.log("apply");
		this.scroll.apply();
	    }
	};
    })();

    return {
	Setting: Setting,
	new: function(){
	    return new Setting();
	}
    };
    
});