/*---------------------------------*/
/*------------- Blipp -------------*/
/*---------------------------------*/

blipp = require('blippar').blipp;

blipp.getPeel()
     .setOrientation("portrait")
     .setType("fit");


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
                                     .setTranslation(sW/2, sH/2, 0)
                                     .setScale(sW, sH, 1)
                                     .setAlpha(0);
    
    scene.contagious = scene.getScreen().addSprite()
                                        .setTexture("marker-text.png")
                                        .setName("contagious")
                                        .setTranslation(sW/2, sH/2, 1)
                                        .setScale(mW, mH, 1)
                                        .setAlpha(0);
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