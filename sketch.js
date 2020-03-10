let offset = 1
let offset2 = 1

function setup() {
  createCanvas(600, 600);
  
 
 
}

function draw() {
  
  background("#edf4f5");
  
  
  noStroke();
  fill("#afd7db");
  rect(0, 390, 600, 300);
  fill("#ffd952");
  ellipse(50, 50, 60, 60);
  
  

  //backmountain
  fill("#ebeced");
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

  
  
  
  //forwardmountain
//   fill("#000000");
//   noStroke();
  
//   noiseStep = 1 + offset2;
//   translate(0,100);
//   beginShape();
  
//   vertex(-1, 340);
  
//   for(let x = 1; x < width;x+=6){
//   noiseStep += 0.05;
//   let y = map(noise(noiseStep), 0, 200, 0, 400);
//   vertex(x,y);
//   }
  
//   vertex(width + 1, 340);
//   endShape(); 
  
//   offset2 += 0.005;

  
}
