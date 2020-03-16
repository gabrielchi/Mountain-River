let offset = 1
let offset2 = 1
let cloudmove = 0

function setup() {
  createCanvas(600, 600);
  
 
 
}

function draw() {
  
  background("#def0ff");
  
  
  noStroke();
  fill("#84c2f5");
  rect(0, 390, 600, 300);
  fill("#ffd952");
  ellipse(60, 60, 80, 80);


  //backmountain
  fill("#969592");
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
  rect(300, 310, 5, 50);
  fill("#fffdf5");
  triangle(340, 330, 270, 330, 302, 310);
  fill("#bf845c");
  arc(305, 350, 50, 50, PI, TWO_PI);


    
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
