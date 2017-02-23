/*---------------------------------*/
/*------------- Blipp -------------*/
/*---------------------------------*/

blipp = require('blippar').blipp;

blipp.getPeel()
     .setOrientation("portrait")
     .setType("fit")
     .hideUiComponents("blippShareButton", "likeButton", "peelCloseButton");


/*-------------------------------------*/
/*----------- Scene Create ------------*/
/*-------------------------------------*/

var scene = blipp.addScene("default");
var transitionT = 100; // .1 second

/*------------------*/
/* Size of a marker */
/*------------------*/
var mW = blipp.getMarker().getWidth();
var mH = blipp.getMarker().getHeight();

/*-------------*/
/* Screen Size */
/*-------------*/
var sW = blipp.getScreenWidth();
var sH = blipp.getScreenHeight();

scene.onCreate = function() {
    scene.smileyMask = scene.addSprite()
                          .setTexture("smiley-face.png")
                          .setName("smileyMask")
                          .setTranslation(0, 0, 1)
                          .setScale(mW * 1.5, mH * 1.5, 1);
    
    scene.whiteBG = scene.getScreen().addSprite()
                                     .setColor('#ffffffff')
                                     .setName("whiteBG")
                                     .setTranslation(0, 0, 0)
                                     .setScale(sW, sH, 1)
                                     .setAlpha(0);
    
    scene.contagious = scene.getScreen().addSprite()
                                        .setTexture("marker-text.png")
                                        .setName("contagious")
                                        .setTranslation(0, 0, 0.5)
                                        .setScale(mW * 0.9, mH * 0.9, 1)
                                        .setAlpha(0);
    
    scene.closeButton = scene.getScreen().addSprite()
                                        .setTexture("closebutton.png")
                                        .setName("closeButton")
                                        .setTranslation(sW - 30, sH - 30, 0.5)
                                        .setScale(1, 1, 1)
                                        .setAlpha(1);
    
    closeButton.on('touchEnd', function(id, x, y) {
		blipp.close();
	});
}

/*-----------------------------------*/
/*----------- Scene Show ------------*/
/*-----------------------------------*/

scene.onShow = function() {
}

scene.onTrack = function () { 
	// Show the smiley mask
	scene.smileyMask.animate().alpha(1).duration(transitionT);
    scene.whiteBG.animate().alpha(0).duration(transitionT);
    scene.contagious.animate().alpha(0).duration(transitionT);
}

scene.onTrackLost = function () { 
	// Hide the smiley mask
	scene.smileyMask.animate().alpha(0).duration(transitionT);
    scene.whiteBG.animate().alpha(1).duration(transitionT);
    scene.contagious.animate().alpha(1).duration(transitionT);
}