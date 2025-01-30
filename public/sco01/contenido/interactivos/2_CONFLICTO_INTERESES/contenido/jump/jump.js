(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Clip_detector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		////////////////////////////////////////////////////////////////////////
		// No hay stop(), debido a que realiza estas condiciones cada medio segundo
		/////////////////////////////////////////////////////////////////////////
		
		var mi_nombre = window.location.href.split("/").pop().split(".").shift();
		//console.log("Nombre("+window.parent.detectaURL(mi_nombre) + ") && " + window.parent.detectaSensitiveArea() + " || " + window.parent.detectaShowArea());
		if(window.parent.detectaURL(mi_nombre) === true && (window.parent.detectaSensitiveArea()===true || window.parent.detectaShowArea()===true)){
			if(this.parent.currentFrame<=1){
				this.parent.play();
			}
		}else{
			this.parent.gotoAndStop(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(15));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AigD+IAAnwIB6AAIAABHQAfgzAZgQQAYgQAgAAQAtAAAqAZIgpBzQghgVgdAAQgbAAgTAPQgTAPgKAoQgMAoAAB+IAACZg");
	this.shape.setTransform(179.825,7.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AiBDlQg+gfggg7Qghg8AAhVQAAhCAhg9QAgg+A7ggQA7ggBJAAQBxAABIBJQBIBJAABwQAABwhJBLQhJBKhuAAQhEAAg+gfgAhWhxQgjAoAABJQAABKAjAnQAkAoAyAAQA0AAAjgoQAignAAhKQAAhJgigoQgjgng0AAQgyAAgkAng");
	this.shape_1.setTransform(128.225,8.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgVFKQgcgLgNgUQgOgSgFghQgEgXAAhGIAAjYIg9AAIAAhpIA9AAIAAhjICDhMIAACvIBaAAIAABpIhaAAIAADIQAAA9ADAKQACAKAJAHQAJAGAOAAQASAAAigNIAMBnQguATg6ABQgkgBgcgMg");
	this.shape_2.setTransform(82.875,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AipC/QhBhFAAh6QAAh6BBhEQBBhFBvAAQBaAAA2AnQA2AnAXBQIiCAYQgGgngXgUQgYgUglAAQgwAAgdAjQgdAhAABQQAABYAeAkQAdAlAxAAQAmAAAYgVQAYgWAJg0ICCAWQgUBZg6AuQg5AthgAAQhsAAhBhFg");
	this.shape_3.setTransform(40.825,8.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("Ai3CvQgxhEAAhnQAAh7BBhGQBBhGBjAAQBuAABABJQBABJgDCXIlJAAQACA6AeAhQAfAhAsAAQAfAAAVgRQAVgRALgmICDAWQgZBJg2AmQg3AlhSAAQiBAAg/hVgAhDh/QgcAfABA2IDDAAQgBg5gcgeQgcgegpAAQgqAAgcAgg");
	this.shape_4.setTransform(-13.7433,8.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgVFKQgcgLgNgUQgOgSgFghQgEgXAAhGIAAjYIg9AAIAAhpIA9AAIAAhjICDhMIAACvIBaAAIAABpIhaAAIAADIQAAA9ADAKQACAKAJAHQAJAGAOAAQASAAAigNIAMBnQguATg6ABQgkgBgcgMg");
	this.shape_5.setTransform(-55.875,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("Ai3CvQgxhEAAhnQAAh7BBhGQBBhGBjAAQBuAABABJQBABJgDCXIlJAAQACA6AeAhQAfAhAsAAQAfAAAVgRQAVgRALgmICDAWQgZBJg2AmQg3AlhSAAQiBAAg/hVgAhDh/QgcAfABA2IDDAAQgBg5gcgeQgcgegpAAQgqAAgcAgg");
	this.shape_6.setTransform(-99.0933,8.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AkfFXIAAqtID9AAQBVAAAuAMQA7ASAsAtQArAuAWBDQAXBBAABgQAABUgVA+QgaBKgwAvQgkAjg9AUQguAOhMAAgAiVDjIBoAAQA6AAAZgGQAigIAWgVQAWgTAOguQAOgvABhPQgBhQgOgqQgOgqgZgYQgZgZgngIQgcgHhVABIg/AAg");
	this.shape_7.setTransform(-159,-1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.8,-55.6,393.6,111.30000000000001);


// stage content:
(lib.jump = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
		
		if(window.parent){
			window.parent.seekVideo(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(1));

	// DETECTOR
	this.instance = new lib.Clip_detector();
	this.instance.parent = this;
	this.instance.setTransform(-227.95,61.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(87.3,293.8,-118.4,-176.70000000000002);
// library properties:
lib.properties = {
	id: '6DEB696041932341B2A2DB5342878E1C',
	width: 1024,
	height: 576,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6DEB696041932341B2A2DB5342878E1C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;