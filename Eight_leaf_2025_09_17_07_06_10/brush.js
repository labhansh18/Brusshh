let brushSize = 10; 
let direction = 1; // 1 = growing, -1 = shrinking

function setup() {
  createCanvas(400, 400);
    background(0);
}

function draw() {
   background(220);

}
 function mouseDragged(){
   stroke('red')
   
 for (let i = 0; i < 5; i++) {
    ellipse(mouseX, mouseY, brushSize - i*3, brushSize - i*3);
  }
     brushSize += direction;

  // reverse direction when too big or too small
  if (brushSize > 50 || brushSize < 5) {
    direction *= -1;
  }
 }