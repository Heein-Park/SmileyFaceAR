/*---------------------------------*/
/*------------- Blipp -------------*/
/*---------------------------------*/

var blipp = require('blippar').blipp;

var mW = blipp.getMarker().getWidth();
var mH = blipp.getMarker().getHeight();

var sW = blipp.getScreenWidth() * 1.003;
var sH = blipp.getScreenHeight() * 1.003;

blipp.getPeel()
     .setOrientation("portrait")
     .setType("fit");


/*-------------------------------------*/
/*----------- Scene Create ------------*/
/*-------------------------------------*/

var scene = blipp.addScene("default");

scene.on('create', createSmiley);

fucntion createSmiley() {
    var smileyMask = scene.addpSprite("smiley-face.png")
                          .setName("smiley-face")
                          .setScale(markerW, markerH, 1);
    
    return smileyMask;
}

/*-----------------------------------*/
/*----------- Scene Show ------------*/
/*-----------------------------------*/

scene.on('show', fucntion() {
            console.log("Hello! World!");
         });