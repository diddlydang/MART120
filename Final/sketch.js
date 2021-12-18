//character variables
var characterX = 100;
var characterY = 100;
//keys?
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//shape variables
var shapeX = 30;
var shapeY = 50;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var mouseShapeX;
var mouseShapeY;

function setup() {
    createCanvas(500, 600);

    for (var i = 0; i < 50; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 3);
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(500);
        diameters[i] = getRandomNumber(10);
    }

    createCharacter(200,350);
}

function draw() {
    background(204,204,255);
    stroke(0);
    fill(0);

    // call createBorders function
    createBorders(10);

    // exit message
    textSize(24);
    text("EXIT", width-100, height-50)

    //createCharacter(200,350);
    drawCharacter();
    characterMovement();


    // enemy
    fill(35, 21, 78);
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 4);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 6);




        
        shapeXs[i] += shapeXSpeeds[i];
        shapeYs[i] += shapeYSpeeds[i];
        
        if (shapeXs[i] > width) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = width;
        }
        if (shapeYs[i] > height) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = height;
        }
    }
}

function characterMovement() {
    if (keyIsDown(w)) {
        characterY -= 10;
    }
    if (keyIsDown(s)) {
        characterY += 10;
    }
    if (keyIsDown(a)) {
        characterX -= 10;
        console.log("movement: " + characterX);
    }
    if (keyIsDown(d)) {
        characterX += 10;
    }
}

function createCharacter(x, y) {
    characterX = x;
    characterY = y;
}

function drawCharacter() {
    fill(189, 107, 237);
    circle(characterX, characterY, 40);
}

function createBorders(thickness) {
    
    rect(0,0,width,thickness);

    rect(0,0,thickness,height);
  
    rect(0,height-thickness,width,thickness);
  
    rect(width-thickness,0,thickness,height-70);
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}