let offset = 1
let offset2 = 1
let cloudmove = 0

function setup() {
  createCanvas(600, 600);
  
}

function draw() {
  
  background("#d4e5ff");
  
  noStroke();

  //ocean
  fill("#568bd1");
  rect(0, 390, 600, 300);

  //front ocean
  fill("#5c95e0")
  rect(0, 500, 600, 100);


  //sun
  fill("#ffd952");
  ellipse(60, 60, 80, 80);
  fill("#ffb700");
  ellipse(60, 60, 60, 60);


  //mountain
  fill("#b9bec4");
  noStroke();
  
  noiseStep = 1 + offset;
  translate(0,100);
  beginShape();
  
  vertex(-1, 340);
  
  for(let x = 1; x < width;x+=6){
  noiseStep += 0.05;
  let y = map(noise(noiseStep), 0, 1, 0, 200);
  vertex(x,y);
  }
  
  vertex(width + 1, 340);
  endShape(); 
  
  offset += 0.005;
  
  //boat
  fill("#bf845c");
  rect(0 + mouseX, 310, 5, 50);
  fill("#fffdf5");
  triangle(-30 + mouseX, 330, 40 + mouseX, 330, 0 + mouseX, 310);
  fill("#876b55");
  rect(-30 + mouseX, 350, 70, 10);
  rect(-25 + mouseX, 360, 60, 10);

  //island
  fill("#527a41");
  rect(0,400, 150, 20);
  fill("#5e4630");
  rect(0, 420, 300, 100);
  fill("#527a41");
  rect(150,420, 150, 20);


  //dock
  fill("#b0794f");
  rect(300, 440, 200, 12);
  rect(340, 450, 20, 50);
  rect(420, 450, 20, 50);


  //clouds
  translate(cloudmove, 100);
  cloudmove ++;

  fill('white');
  noStroke();
  ellipse(100, 100, 50, 40);
  ellipse(80, 110, 60, 30);
  ellipse(130, 80, 40, 30);
  ellipse(140, 100, 60, 40);

  if (cloudmove + 30 > width){
    cloudmove = -200;
  }

  translate(cloudmove, 60);
  cloudmove ++;

  fill('white');
  noStroke();
  ellipse(100, 100, 50, 40);
  ellipse(80, 110, 60, 30);
  ellipse(130, 80, 40, 30);
  ellipse(140, 100, 60, 40);

  if (cloudmove + 10 > width){
    cloudmove = -500;
  }
  
  




  
}
