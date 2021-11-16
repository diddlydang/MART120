  var x = 50;
    var y = 50;
    var diameter = 25;
    var mousex = 0;
    var mousey = 0;

//enemy

    var headX = 250;
    var headY = 170;
    var headDirection = 3;

//enemy 2

    var enemyX = 250
    var enemyY = 170
    var enemyDirection = 1

    function setup() 
    {
      createCanvas(500, 600);
    }



    function draw() 
    {
      background(204,204,255);
      fill(35, 21, 81);
      circle(x, y, diameter);
      
       //head
      fill(0);
      ellipse(headX,headY,40)
      headX+=headDirection
  if(headX >= 418 || headX <= 82)
    {
        headDirection *= -1;
    }
      
      //enemy 2
    fill(51,153,255);
    circle(enemyX,enemyY,50);
    enemyY += enemyDirection;
    if(enemyY <= 100 || enemyY >= 400 )
    {
      enemyDirection *= -1
    }
      
      
      
       //border
      
    rect(0,0,width,10);

    rect(0,0,10,height);
    
    rect(0, height-10,width, 10);
   
    rect(width-10,0,10,height-50);
      
    // exit message
    textSize(35);
    text("EXIT", width-150,height-50)
    

      if (keyIsDown(83)) 
      {
        y += 10;
      } 
      else if (keyIsDown(87)) 
      {
        y -= 10;
      }

      if (y >= 600) 
      {
        y = 50;
      }
      ellipse(mousex, mousey, 15, 20)
     
    }

   
    function keyPressed() 
    {
      if (key == 'd') 
      {
        x += 10;
      } 
      else if (key == 'a') 
      {
        x -= 10;
      }
    }

    function mouseClicked() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    
    }
