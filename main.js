function preload() {
    img = loadImage('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*')
  
  }
  
  function setup() {
  createCanvas(400, 400);
  }
  
  function draw() {
  image(img, 125, 125, 150 ,120);
    
    fill(0, 128, 0);
    stroke(0, 128,0);
    circle(350, 50, 70);
    
    circle(50, 50, 70);
    
    circle(50, 350, 70);
    
    circle(350,350, 70);}