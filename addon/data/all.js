var planets = (function(){

    var UNK = null;

    var mercury = {
	A_AXIS_RADIUS                   : 2439.70000,
	B_AXIS_RADIUS                   : 2439.70000,
	BOND_ALBEDO                     : UNK,
	C_AXIS_RADIUS                   : 2439.70000,
	FLATTENING                      : 0.000000,
	MAGNETIC_MOMENT                 : 5500000000000.000000,
	MASS                            : 330220000000000000000000.000000,
	MASS_DENSITY                    : 5.430000,
	EQUATORIAL_RADIUS               : 2439.700000,
	MEAN_RADIUS                     : 2439.700000,
	SURFACE_GRAVITY                 : 3.700000,
	REVOLUTION_PERIOD               : 87.970000,
	POLE_RIGHT_ASCENSION            : 291.000000,
	POLE_DECLINATION                : 61.400000,
	SIDEREAL_ROTATION_PERIOD        : 58.600000,
	MEAN_SOLAR_DAY                  : 175.900000,
	OBLIQUITY                       : 0.000000,
	ORBITAL_ECCENTRICITY            : 0.200000,
	ORBITAL_INCLINATION             : 7.000000,
	ORBITAL_SEMIMAJOR_AXIS          : 57909036.000000,
	ASCENDING_NODE_LONGITUDE        : 48.300000,
	PERIAPSIS_ARGUMENT_ANGLE        : 29.100000
    };

    var venus = {
	A_AXIS_RADIUS                   : 6051.900000,
        B_AXIS_RADIUS                   : 6051.900000,
	BOND_ALBEDO                     : UNK,
        C_AXIS_RADIUS                   : 6051.900000,
        FLATTENING                      : 0.000000,
        MAGNETIC_MOMENT                 : 80000000000.000000,
        MASS                       : 4869000000000000115343360.000000,
        MASS_DENSITY                    : 5.240000,
        MINIMUM_SURFACE_PRESSURE        : UNK,
        MAXIMUM_SURFACE_PRESSURE        : UNK,
        MEAN_SURFACE_PRESSURE           : UNK,
        MINIMUM_SURFACE_TEMPERATURE     : UNK,
        MAXIMUM_SURFACE_TEMPERATURE     : UNK,
        MEAN_SURFACE_TEMPERATURE        : UNK,
        EQUATORIAL_RADIUS               : 6051.900000,
        MEAN_RADIUS                     : 6051.900000,
        SURFACE_GRAVITY                 : 8.860000,
        REVOLUTION_PERIOD               : 224.700000,
        POLE_RIGHT_ASCENSION            : 272.800000,
        POLE_DECLINATION                : 67.200000,
        SIDEREAL_ROTATION_PERIOD        : 243.000000,
        MEAN_SOLAR_DAY                  : 116.700000,
        OBLIQUITY                       : 177.300000,
        ORBITAL_ECCENTRICITY            : 0.006800,
        ORBITAL_INCLINATION             : 3.400000,
        ORBITAL_SEMIMAJOR_AXIS          : 108208717.000000,
        ASCENDING_NODE_LONGITUDE        : 76.700000,
        PERIAPSIS_ARGUMENT_ANGLE        : 55.200000
    };

    var earth = {
	A_AXIS_RADIUS                   : 6378.140000,
	B_AXIS_RADIUS                   : 6378.140000,
	C_AXIS_RADIUS                   : 6356.750000,
	FLATTENING                      : 0.003300,
	MAGNETIC_MOMENT                 : 8000000000000000.000000,
	MASS                           : 5974200000000000270532608.000000,
	MASS_DENSITY                    : 5.520000,
	EQUATORIAL_RADIUS               : 6378.140000,
	MEAN_RADIUS                     : 6371.000000,
	SURFACE_GRAVITY                 : 9.820000,
	REVOLUTION_PERIOD               : 365.200000,
	POLE_RIGHT_ASCENSION            : -0.070000,
	POLE_DECLINATION                : 89.940000,
	SIDEREAL_ROTATION_PERIOD        : 0.997000,
	MEAN_SOLAR_DAY                  : 1.000000,
	OBLIQUITY                       : 23.500000,
	ORBITAL_ECCENTRICITY            : 0.017000,
	ORBITAL_INCLINATION             : 0.001400,
	ORBITAL_SEMIMAJOR_AXIS          : 149595611.000000,
	ASCENDING_NODE_LONGITUDE        : 350.500000,
	PERIAPSIS_ARGUMENT_ANGLE        : 112.300000
    };

    var mars = {
	A_AXIS_RADIUS                   : 3397.000000,
	B_AXIS_RADIUS                   : 3397.000000,
	C_AXIS_RADIUS                   : 3375.000000,
	FLATTENING                      : 0.006500,
	MAGNETIC_MOMENT                 : 1200000000000.000000,
	MASS                            : 641910000000000065536000.000000,
	MASS_DENSITY                    : 3.940000,
	MAXIMUM_SURFACE_PRESSURE        : 0.010000,
	MINIMUM_SURFACE_TEMPERATURE     : 148.000000,
	MAXIMUM_SURFACE_TEMPERATURE     : 310.000000,
	MEAN_SURFACE_TEMPERATURE        : 220.000000,
	EQUATORIAL_RADIUS               : 3397.000000,
	MEAN_RADIUS                     : 3390.000000,
	SURFACE_GRAVITY                 : 3.720000,
	REVOLUTION_PERIOD               : 687.000000,
	POLE_RIGHT_ASCENSION            : 317.600000,
	POLE_DECLINATION                : 52.900000,
	SIDEREAL_ROTATION_PERIOD        : 1.020000,
	MEAN_SOLAR_DAY                  : 1.020000,
	OBLIQUITY                       : 25.200000,
	ORBITAL_ECCENTRICITY            : 0.093000,
	ORBITAL_INCLINATION             : 1.800000,
	ORBITAL_SEMIMAJOR_AXIS          : 227955604.000000,
	ASCENDING_NODE_LONGITUDE        : 49.600000,
	PERIAPSIS_ARGUMENT_ANGLE        : 286.400000
    };

    var jupiter = {
	A_AXIS_RADIUS                   : 71492.000000,
	B_AXIS_RADIUS                   : 71492.000000,
	C_AXIS_RADIUS                   : 66854.000000,
	FLATTENING                      : 0.006500,
	MAGNETIC_MOMENT                 : 155000000000000000000.000000,
	MASS                   : 1898799999999999953652202602496.00000,
	MASS_DENSITY                    : 1.330000,
	EQUATORIAL_RADIUS               : 71492.000000,
	MEAN_RADIUS                     : 69911.000000,
	SURFACE_GRAVITY                 : 25.900000,
	REVOLUTION_PERIOD               : 4333.000000,
	POLE_RIGHT_ASCENSION            : 268.000000,
	POLE_DECLINATION                : 64.500000,
	SIDEREAL_ROTATION_PERIOD        : 0.410000,
	MEAN_SOLAR_DAY                  : 0.410000,
	OBLIQUITY                       : 3.100000,
	ORBITAL_ECCENTRICITY            : 0.048000,
	ORBITAL_INCLINATION             : 1.300000,
	ORBITAL_SEMIMAJOR_AXIS          : 778376719.000000,
	ASCENDING_NODE_LONGITUDE        : 100.500000,
	PERIAPSIS_ARGUMENT_ANGLE        : 275.200000
    };

    var saturn = {
	A_AXIS_RADIUS                   : 60268.000000,
	B_AXIS_RADIUS                   : 60268.000000,
	BOND_ALBEDO                     : UNK,
	C_AXIS_RADIUS                   : 54364.000000,
	FLATTENING                      : 0.009800,
	MAGNETIC_MOMENT                 : 4600000000000000000.000000,
	MASS                            : 568499999999999982677524480.0,
	MASS_DENSITY                    : 0.700000,
	MINIMUM_SURFACE_TEMPERATURE     : UNK,
	MAXIMUM_SURFACE_TEMPERATURE     : UNK,
	MEAN_SURFACE_TEMPERATURE        : UNK,
	EQUATORIAL_RADIUS               : 60268.000000,
	MEAN_RADIUS                     : 58232.000000,
	SURFACE_GRAVITY                 : 11.200000,
	REVOLUTION_PERIOD               : 10728.100000,
	POLE_RIGHT_ASCENSION            : 40.100000,
	POLE_DECLINATION                : 83.500000,
	TARGET_PARAMETER_UNCERTAINTY    :  UNK,
	SIDEREAL_ROTATION_PERIOD        : 0.430000,
	MEAN_SOLAR_DAY                  : 0.430000,
	TARGET_PARAMETER_UNCERTAINTY    :  UNK,
	OBLIQUITY                       : 26.700000,
	ORBITAL_ECCENTRICITY            : 0.055000,
	ORBITAL_INCLINATION             : 2.500000,
	ORBITAL_SEMIMAJOR_AXIS          : 1424238900.000000,
	ASCENDING_NODE_LONGITUDE        : 113.700000,
	PERIAPSIS_ARGUMENT_ANGLE        : 338.500000
    };
    var uranus = {
	A_AXIS_RADIUS                   : 25559.000000,
	B_AXIS_RADIUS                   : 25559.000000,
	BOND_ALBEDO                     :  UNK,
	C_AXIS_RADIUS                   : 24973.000000,
	FLATTENING                      : 0.002300,
	MAGNETIC_MOMENT                 : 390000000000000000.000000,
	MASS                            : 86624999999999997405822976.000000,
	MASS_DENSITY                    : 1.300000,
	MINIMUM_SURFACE_TEMPERATURE     :  UNK,
	MAXIMUM_SURFACE_TEMPERATURE     :  UNK,
	MEAN_SURFACE_TEMPERATURE        :  UNK,
	EQUATORIAL_RADIUS               : 25559.000000,
	MEAN_RADIUS                     : 25362.000000,
	SURFACE_GRAVITY                 : 8.990000,
	REVOLUTION_PERIOD               : 30634.700000,
	POLE_RIGHT_ASCENSION            : 257.300000,
	POLE_DECLINATION                : -15.100000,
	SIDEREAL_ROTATION_PERIOD        : 0.650000,
	MEAN_SOLAR_DAY                  : 0.650000,
	OBLIQUITY                       : 97.900000,
	ORBITAL_ECCENTRICITY            : 0.047000,
	ORBITAL_INCLINATION             : 0.770000,
	ORBITAL_SEMIMAJOR_AXIS          : 2866434330.000000,
	ASCENDING_NODE_LONGITUDE        : 74.000000,
	PERIAPSIS_ARGUMENT_ANGLE        : 94.900000
    };

    var neptune = {
	A_AXIS_RADIUS                   : 25269.000000,
	B_AXIS_RADIUS                   : 25269.000000,
	C_AXIS_RADIUS                   : 24800.000000,
	FLATTENING                      : 0.019000,
	MASS                            : 102779999999999998028677120.000000,
	MASS_DENSITY                    : 1.760000,
	EQUATORIAL_RADIUS               : 25269.000000,
	MEAN_RADIUS                     : 25112.000000,
	SURFACE_GRAVITY                 : 10.870000,
	REVOLUTION_PERIOD               : 60090.700000,
	POLE_RIGHT_ASCENSION            : 295.200000,
	POLE_DECLINATION                : 40.600000,
	SIDEREAL_ROTATION_PERIOD        : 0.770000,
	MEAN_SOLAR_DAY                  : 0.770000,
	OBLIQUITY                       : 29.500000,
	ORBITAL_ECCENTRICITY            : 0.010000,
	ORBITAL_INCLINATION             : 1.800000,
	ORBITAL_SEMIMAJOR_AXIS          : 4491647640.000000,
	ASCENDING_NODE_LONGITUDE        : 131.800000,
	PERIAPSIS_ARGUMENT_ANGLE        : 276.900000
    };

    return {
	PLANETS: {
	    MERCURY: mercury,
	    VENUS: venus,
	    EARTH: earth,
	    MARS: mars,
	    JUPITER: jupiter,
	    SATURN: saturn,
	    URANUS: uranus,
	    NEPTUNE: neptune
	},
	SATELITE: {
	}
    };
})();

var cursor = (function(){
    var Cursor = function(planet){
    };
    Cursor.prototype = (function(){

	var setCursor = function(){
	    if(this.visibility){

	    }else{
	    }
	};
	
	return {
	    toggle: function(){
		this.visibility = !(this.visibility);
		setCursor.call(this);
	    },
	    setPlanet: function(){
	    }
	};
    });

    return {
	Cursor: Cursor,
	new: function(){
	    new Cursor();
	}
    };
    
})(planets);

var scroll = (function($, db){

    var scroll = function(planet){
	this.planet = this.setPlanet(planet);
	this.previousScrolltop = 0;
	this.$window = $(window);
	this.amount = 0;
    };

    scroll.prototype = (function(){
	return {
	    apply: function(){
		var self = this;
		this.$window.scroll(function(e){
		    var amount = parseInt(self.$window.scrollTop()) - self.previousScrollTop;
		    var top = self.previousScrollTop + amount * self.ratio * self.ratio * self.ratio;
		    self.$window.scrollTop(top);
		    self.previousScrollTop = self.$window.scrollTop();
		});
	    },
	    setPlanet: function(planet){
		this.planet = planet;
		this.ratio = db.PLANETS.EARTH.SURFACE_GRAVITY / planet.SURFACE_GRAVITY;
		console.log("gravity ratio = " + this.ratio);
	    }
	};
    })();

    return {
	Scroll: scroll,
	new: function(planet){
	    return new scroll(planet);
	}
    };
    
})(window.jQuery, planets);

var setting = (function(db, cursor, scroll){

    var selectPlanetData = function(name){
	return db.PLANETS[name] || db.PLANETS.EARTH;
    };

    var Setting = function(){
	this.setDefault();
	this.cursor = new cursor.Cursor(this.planet);
	this.scroll = scroll.new(this.planet);
    };

    Setting.prototype = (function(){
	return {
	    setPlanet: function(name){
		name = name.toUpperCase();
		this.planet = selectPlanetData(name);
		console.log("chnage to " + name);
		console.log(this.planet.SURFACE_GRAVITY);
//		this.cursor.setPlanet(this.planet);
		this.scroll.setPlanet(this.planet);
	    },
	    setDefault: function(){
		this.planet = selectPlanetData("EARTH");
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
    
})(planets, cursor, scroll);