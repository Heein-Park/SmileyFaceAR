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

var mW = blipp.getMarker().getWidth();
var mH = blipp.getMarker().getHeight();

var sW = blipp.getScreenWidth() * 1.003;
var sH = blipp.getScreenHeight() * 1.003;

scene.on('create', fucntion() {
    var smileyMask = scene.addSprite("smiley-face.png")
                          .setName("smiley-face")
                          .setScale(markerW, markerH, 1);
    });


/*-----------------------------------*/
/*----------- Scene Show ------------*/
/*-----------------------------------*/

scene.on('show', fucntion() {
            console.log("Hello! World!");
         });