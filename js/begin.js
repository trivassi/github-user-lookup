var h = $(document).height(),
    w = $(document).width(),
    cw = w,
    ch = h,
    maxorbit = 255, // distance from center
    centery = ch/2,
    centerx = cw/2;

var stars = [],
    collapse = false, // if hovered
    expanse = false; // if clicked

var canvas = $('<canvas/>').attr({width: cw, height: ch}).appendTo('body '),
context = canvas.get(0).getContext("2d");

context.globalCompositeOperation = "multiply";

function setDPI(canvas, dpi) {
    // Set up CSS size if it's not set up already
    if (!canvas.get(0).style.width)
        canvas.get(0).style.width = canvas.get(0).width + 'px';
    if (!canvas.get(0).style.height)
        canvas.get(0).style.height = canvas.get(0).height + 'px';

    var scaleFactor = dpi / 96;
    canvas.get(0).width = Math.ceil(canvas.get(0).width * scaleFactor);
    canvas.get(0).height = Math.ceil(canvas.get(0).height * scaleFactor);
    var ctx = canvas.get(0).getContext('2d');
    ctx.scale(scaleFactor, scaleFactor);
}

setDPI(canvas, 192);

var star = function(){

	// Get a weighted random number, so that the majority of stars will form in the center of the orbit
	var rands = [];
	rands.push(Math.random() * (maxorbit/2) + 1);
	rands.push(Math.random() * (maxorbit/2) + maxorbit);

	this.orbital = (rands.reduce(function(p, c) {
		return p + c;
	}, 0) / rands.length);
	// Done getting that random number, it's stored in this.orbital

	this.x = centerx; // All of these stars are at the center x position at all times
	this.y = centery + this.orbital; // Set Y position starting at the center y + the position in the orbit

	this.speed = (Math.floor(Math.random() * 1.5) + 0.5)*Math.PI/180; // The rate at which this star will orbit
	this.rotation = (Math.floor(Math.random() * 360) + 1)*Math.PI/180; // Starting rotation.  If not random, all stars will be generated in a single line.

	this.id = stars.length;  // This will be used when expansion takes place.

	this.collapseBonus = this.orbital - (maxorbit * 0.7); // This "bonus" is used to randomly place some stars outside of the blackhole on hover
	if(this.collapseBonus < 0){ // if the collapse "bonus" is negative
		this.collapseBonus = 0; // set it to 0, this way no stars will go inside the blackhole
	}

	stars.push(this);
	this.color = 'rgba(255,255,255,'+ (1 - ((this.orbital) / 255)) +')'; // Color the star white, but make it more transparent the further out it is generated
};
star.prototype.draw = function(){
	// the stars are not actually moving on the X axis in my code.  I'm simply rotating the canvas context for each star individually so that they all get rotated with the use of less complex math in each frame.

	if(expanse === false){
		this.rotation += this.speed;
		if(collapse === false){ // not hovered
			if(this.y > centery + this.orbital){
				this.y-= 2;
			}
			if(this.y < centery + this.orbital -4){
				this.y+= 2;
			}
		} else { // on hover
			if(this.y > centery + (maxorbit/2) + this.collapseBonus){
				this.y-= 2;
			}
			if(this.y < centery + (maxorbit/2) + this.collapseBonus -4){
				this.y+= 2;
			}
		}
	} else {
		this.rotation += this.speed / 2;
		if(this.y > centery + (this.id%100)*-10){
			this.y-= 4;
		}
	}

	context.save();
		context.fillStyle = this.color;
		context.translate(centerx, centery);
		context.rotate(this.rotation);
		context.translate(-centerx, -centery);
		context.fillRect(this.x, this.y, 1, 1);
		context.fill();
	context.restore();
};


$('.centerHover').on('click',function(){
	collapse = false;
	expanse = true;

	$(this).addClass('open');
});
$('.centerHover').on('mouseover',function(){
	if(expanse === false){
		collapse = true;
	}
});
$('.centerHover').on('mouseout',function(){
	if(expanse === false){
		collapse = false;
	}
});


window.requestFrame = (function(){
	return  window.requestAnimationFrame       ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
		function( callback ){
		window.setTimeout(callback, 1000 / 60);
	};
})();

function loop(){
	context.fillStyle = 'rgba(25,25,25,0.1)'; // somewhat clear the context, this way there will be trails behind the stars
	context.fillRect(0, 0, cw, ch);

	for(var i = 0; i < stars.length; i++){  // For each star
		if(stars[i] != stars){
			stars[i].draw(); // Draw it
		}
	}

	requestFrame(loop);
}

function init(time){
	context.fillStyle = 'rgba(25,25,25,1)';  // Initial clear of the canvas, to avoid an issue where it all gets too dark
	context.fillRect(0, 0, cw, ch);
	for(var i = 0; i < 2500; i++){  // create 2500 stars
		new star();
	}
	loop();
}
init();
