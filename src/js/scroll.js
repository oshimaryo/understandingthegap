define(["jquery", "planets"], function($, db){

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
		    console.log(self.ratio * amount);
		    var top = self.previousScrollTop + amount * self.ratio;
		    self.$window.scrollTop(top);
		    self.previousScrollTop = self.$window.scrollTop();
		});
	    },
	    setPlanet: function(planet){
		this.planet = planet;
		this.ratio = db.PLANETS.EARTH.SURFACE_GRAVITY / planet.SURFACE_GRAVITY;
	    }
	};
    })();

    return {
	Scroll: scroll,
	new: function(planet){
	    return new scroll(planet);
	}
    };
    
});