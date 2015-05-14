// Indexed by object set ID

//add by xudong
//initialLoc : [x<=3,y<=9]
//instruction : if initialLoc[0] == 3, can not be down

// BLOCK 1
var sunGlasses1 = {
	url: 'stimuli/sunGlasses.png', name: "sunGlasses1", width: 130, height: 65,
	instruction: "sunGlasses1 right", initialLoc : [1,5], critical : "target",
	scriptedInstruction: "move the glasses one space to the right"}
var sunGlasses2 = {
    url: 'stimuli/sunGlasses.png', name: "sunGlasses2", width: 130, height: 65,
    instruction: "sunGlasses2 right", initialLoc: [2, 5], critical: "target",
    scriptedInstruction: "move the glasses one space to the right"}
var sunGlasses3 = {
    url: 'stimuli/sunGlasses.png', name: "sunGlasses3", width: 130, height: 65,
    instruction: "sunGlasses3 right", initialLoc: [3, 5], critical: "target",
    scriptedInstruction: "move the glasses one space to the right"}


// BLOCK 2
var middleBlock1 = {
	url: 'stimuli/middleBlock.png', name: "middleBlock1", width: 80, height: 80,
	instruction: "middleBlock left", initialLoc: [1, 5],
	scriptedInstruction: "move the bottom block one space to the left", critical: "target"
}
var middleBlock2 = {
    url: 'stimuli/middleBlock.png', name: "middleBlock2", width: 80, height: 80,
    instruction: "middleBlock left", initialLoc: [2, 5],
    scriptedInstruction: "move the bottom block one space to the left", critical: "target"
}
var middleBlock3 = {
    url: 'stimuli/middleBlock.png', name: "middleBlock3", width: 80, height: 80,
    instruction: "middleBlock left", initialLoc: [3, 5],
    scriptedInstruction: "move the bottom block one space to the left", critical: "target"
}


// BLOCK 3
var cassetteTape1 = {
	url: 'stimuli/cassetteTape.jpg', name: "cassetteTape1",  width: 87.5, height: 55,
	instruction: "cassetteTape down", initialLoc: [1,5], critical : "target",
	scriptedInstruction: "move the tape down by one space",
}
var cassetteTape2 = {
    url: 'stimuli/cassetteTape.jpg', name: "cassetteTape2", width: 87.5, height: 55,
    instruction: "cassetteTape down", initialLoc: [2, 5], critical: "target",
    scriptedInstruction: "move the tape down by one space",
}
var cassetteTape3 = {
    url: 'stimuli/cassetteTape.jpg', name: "cassetteTape3", width: 87.5, height: 55,
    instruction: "cassetteTape down", initialLoc: [3, 5], critical: "target",
    scriptedInstruction: "move the tape down by one space",
}


// BLOCK 4

var mediumMeasuringCup1 = {
	url: 'stimuli/mediumMeasuringCup.png', name: "mediumMeasuringCup1", width : 110, height: 87,
	instruction: "mediumMeasuringCup down", initialLoc : [1,5], critical : "target",
	scriptedInstruction: "move the large measuring cup down one space"}
var mediumMeasuringCup2 = {
    url: 'stimuli/mediumMeasuringCup.png', name: "mediumMeasuringCup2", width: 110, height: 87,
    instruction: "mediumMeasuringCup down", initialLoc: [2, 5], critical: "target",
    scriptedInstruction: "move the large measuring cup down one space"
}
var mediumMeasuringCup3 = {
    url: 'stimuli/mediumMeasuringCup.png', name: "mediumMeasuringCup3", width : 110, height: 87,
    instruction: "mediumMeasuringCup down", initialLoc : [3, 5], critical : "target",
    scriptedInstruction: "move the large measuring cup down one space"}

// BLOCK 5

var roundBrush1 = {
	url: 'stimuli/roundBrush.png', name: "roundBrush1", width: 104, height: 130,
	instruction: "roundBrush left", initialLoc: [1,5], critical : "target",
	scriptedInstruction: "move the brush one space to the left", }
var roundBrush2 = {
    url: 'stimuli/roundBrush.png', name: "roundBrush2", width: 104, height: 130,
    instruction: "roundBrush left", initialLoc: [2, 5], critical: "target",
    scriptedInstruction: "move the brush one space to the left",
}
var roundBrush3 = {
    url: 'stimuli/roundBrush.png', name: "roundBrush3", width: 104, height: 130,
    instruction: "roundBrush left", initialLoc: [3, 5], critical: "target",
    scriptedInstruction: "move the brush one space to the left",
}

// BLOCK 6

var boardEraser1 = {
	url: 'stimuli/boardEraser.png', name: "boardEraser1", width:130, height: 71,
	instruction: "boardEraser up", initialLoc: [2,5],critical : "target",
    scriptedInstruction: "move the eraser up by one space", }
var boardEraser2 = {
    url: 'stimuli/boardEraser.png', name: "boardEraser2", width: 130, height: 71,
    instruction: "boardEraser up", initialLoc: [2, 5], critical: "target",
    scriptedInstruction: "move the eraser up by one space",
}
var boardEraser3 = {
    url: 'stimuli/boardEraser.png', name: "boardEraser3", width:130, height: 71,
    instruction: "boardEraser up", initialLoc: [2,5],critical : "target",
    scriptedInstruction: "move the eraser up by one space", }

// BLOCK 7

var mediumCandle = {
	url: 'stimuli/mediumCandle.png', name: "mediumCandle", width: 107, height: 130,
	instruction: "mediumCandle down", initialLoc: [1,5],critical : "target",
	scriptedInstruction: "move the small candle down by one space"}
var smallCandle = {
	url: 'stimuli/smallCandle.png', name: "smallCandle", width:100, height: 83,
	instruction: "", initialLoc: [3,1],critical : "distractor",}
var flower = {
	url: 'stimuli/flower.png', name: "flower", width: 130, height: 97.5,
	instruction: "", initialLoc: [3,4],critical : "distractor",}
var largeCandle = {
	url: 'stimuli/largeCandle.png', name: "largeCandle", width:114, height: 130,
	instruction: "", initialLoc: [2,6],critical : "filler",}
var pandaToy = {
	url: 'stimuli/pandaToy.png', name: "pandaToy", width: 104, height:130,
	instruction: "pandaToy down", initialLoc: [1,3],critical : "filler",}
var handcuffs = {
	url: 'stimuli/handcuffs.png', name:'handcuffs', width: 130, height: 73,
	instruction: "handcuffs down", initialLoc: [2,3],critical : "filler",}
var magnet = {
	url: 'stimuli/magnet.png', name: 'magnet', width: 130, height: 108,
	instruction: "magnet down", initialLoc: [1,7],critical : "filler",
	scriptedInstruction: "move the magnet down by one space"}



// BLOCK 8
var computerMouse = {
	url: 'stimuli/computerMouse.png', name: "computerMouse", width:130, height: 112,
	instruction: "computerMouse up", initialLoc: [3,5],critical : "target",
	scriptedInstruction: "move the mouse up by one space", }
var toyMouse = {
	url: 'stimuli/toyMouse.png', name: "toyMouse", width:130, height: 109,
	instruction: "", initialLoc: [3,1],critical : "distractor",}
var camera = {
	url: 'stimuli/camera.png', name: "camera", width:130, height: 100,
	instruction: "", initialLoc: [2,4],critical : "distractor",}
var piano = {
	url: 'stimuli/piano.png', name: 'piano', width: 102, height: 130,
	instruction: "piano left", initialLoc: [2,2],critical : "filler",}
var comb = {
	url: 'stimuli/comb.png', name: 'comb', width: 130, height: 80,
	instruction: "comb up", initialLoc: [2,4],critical : "filler",}
var key = {
	url: 'stimuli/key.png', name: 'key', width: 88, height: 130,
	instruction: "", initialLoc: [2,9],critical : "filler",}
var castIronPan = {
	url: 'stimuli/castIronPan.png', name: 'castIronPan', width: 130, height: 62,
	instruction: "castIronPan up", initialLoc: [2,5],critical : "filler"}

var criticalItems = [
    {
        instructions: [sunGlasses1.instruction, sunGlasses2.instruction,
		               sunGlasses3.instruction],
		criticalInstruction: "sunGlasses",
		objectSet: 1,
		target: sunGlasses1,
		distractor: sunGlasses2,
		alt: sunGlasses3,
		otherObjects: []
	},
	//{
	//	instructions: [airplane.instruction, sunGlasses.instruction, 
	//	               barrel.instruction, saxophone.instruction],
	//	criticalInstruction: "sunGlasses",
	//	objectSet: 1,
	//	target: sunGlasses,
	//	distractor: glassesCase,
	//	alt: soccerBall,
	//	otherObjects: [saxophone, airplane, barrel, watch]
	//},
    //{
	//	instructions: [binoculars.instruction, wrench.instruction, 
	//	               middleBlock.instruction, coffeeMug.instruction],
	//	criticalInstruction: "middleBlock",
	//	objectSet: 2,
	//	target: middleBlock,
	//	distractor: bottomBlock,
	//	alt: stapler,
	//	otherObjects: [binoculars, wrench, topBlock, coffeeMug]
	//},{
	//	instructions: [scissors.instruction, knife.instruction,
	//	                barOfSoap.instruction, cassetteTape.instruction],
	//	criticalInstruction: "cassetteTape",
	//	objectSet: 3,
	//	target: cassetteTape,
	//	distractor: rollOfTape,
	//	alt: battery,
	//	otherObjects: [scissors, butterfly, barOfSoap, knife]
	//},{
	//	instructions: [carrot.instruction, mediumMeasuringCup.instruction,
	//	               waterBottle.instruction, chair.instruction],
	//	criticalInstruction: "mediumMeasuringCup",
	//	objectSet: 4,
	//	target: mediumMeasuringCup,
	//	distractor: largeMeasuringCup,
	//	alt: umbrella,
	//	otherObjects: [chair, smallMeasuringCup, carrot, waterBottle]
	//},{
	//	instructions: [basketball.instruction, roundBrush.instruction, headphones.instruction, 
	//	                book.instruction], 
	//	criticalInstruction: "roundBrush",
	//	target: roundBrush,
	//	objectSet: 5,
	//	distractor: hairBrush,
	//	alt: skate,
	//	otherObjects: [basketball, dalmatian, headphones, book, ring]
	//},{
	//	instructions: [banana.instruction, dollar.instruction, 
	//	               boardEraser.instruction, feather.instruction], 		
	//	criticalInstruction: "boardEraser",
	//	objectSet: 6,
	//	target: boardEraser,
	//	distractor: pencilEraser,
	//	alt: brain,
	//	otherObjects: [dollar, feather, tennisBall, banana]
	//},{
	//	instructions: [magnet.instruction, handcuffs.instruction, 
	//	               pandaToy.instruction, mediumCandle.instruction], 
	//	criticalInstruction: "mediumCandle",
	//	objectSet: 7,
	//	target: mediumCandle,
	//	distractor: smallCandle,
	//	alt: flower,
	//	otherObjects: [pandaToy, largeCandle, handcuffs, magnet]
	//},{
	//	instructions: [comb.instruction, computerMouse.instruction, 
	//	               castIronPan.instruction, piano.instruction], 
	//	criticalInstruction: "computerMouse",
	//	objectSet: 8,
	//	target: computerMouse,
	//	distractor: toyMouse,
	//	alt: camera,
	//	otherObjects: [piano , comb, key, castIronPan]
	//}
]


module.exports = {criticalItems: criticalItems}
