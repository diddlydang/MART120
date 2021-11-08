var headX = 250;
var headY = 170;
var headDirection = 7;

var bodyX = 180;
var bodyY = 275;
var bodyDirection = 3;

var armX = 130;
var armY = 275;
var armDirection = 5;

var hairX = 180;
var hairY = 80;
var hairDirection = 3;

var mouthX = 250
var mouthY = 170
var mouthDirection = 1

var size = 22;
var count = 0;
var sizeDirection = 2;

var armyX = 320
var armyY = 275
var armyDirection = 2




function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(230,230,250);
  textSize(25)
  text("My Self in 2D!", 10,70);
  
    //hair
  fill(81,69,29)
  rect(hairX,hairY,200,250)
  hairY+=hairDirection
  if(hairY >=0 || hairY <= 100)
    {
      hairDirection *= -1;
    }
  
  //head
  fill(255,249,215);
  ellipse(headX,headY,175)
  headX+=headDirection
  if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
  
  //body
  fill(179,139,86)
  rect(bodyX,bodyY,150,130)
  //arms
  fill(179,139,86)
  rect(armX,armY,50,130)
  fill(179,139,86)
  rect(armyX,armyY,50,130)
  armX+=armDirection
  if(armX <=100 || armX >=300)
  { 
      armDirection *= -1
  }
   armyX+=armyY+=armyDirection
  if(armX <= 100 || armX >= 300)
    {
      armyDirection *= -1
    }

  
  
//eyes
  strokeWeight(10);
    fill(0);
    point(200,130);
    point(285,130);
  
 // nose
    point(245,160);
  
//mouth
    fill(0);
    circle(mouthX,mouthY,50);
    mouthY += mouthDirection;
    if(mouthY <= 150 || mouthY >= 200 )
    {
      mouthDirection *= -1
    }
  
   fill(120);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Ireland Bowden",130,500 );
  
    }