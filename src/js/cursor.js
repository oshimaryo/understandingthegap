define(["jquery"], function($){

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
	    }
	};
    });

    return {
	Cursor: Cursor
    };
    
});