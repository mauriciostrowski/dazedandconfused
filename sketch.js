var r;
var g;
var b;
var a;

var smileH = 100;

function setup() {
  createCanvas(400, 400);
}

function draw(){
  background(255, 204, 0);
  r = random(255); // r is a random number between 0 - 255
  g = random(100,200); // g is a random number betwen 100 - 200
  b = random(100); // b is a random number between 0 - 100
  a = random(200,255); // a is a random number between 200 - 255
  ellipse (90, 100,60,60);
  ellipse (320,100,60,60);
  noStroke("0");
  fill ("black")
  //mouth
  arc(width/2,height/2, 300, smileH, 0, radians(180),PIE);
  noStroke();
noStroke();
  fill(r, g, b, a);
}

function mousePressed(){
  if (smileH >= 275){
    smileH = 100;
  }else{
    smileH = smileH + 50;
  }
}