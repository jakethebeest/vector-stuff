let t;
function setup() {
  createCanvas(4000, 2000);
  t=new vectorthing(250,250);
  angleMode(DEGREES);
  
  noLoop();

}
let q=3;
function draw() {
background(0,255,255);
  t.srotate(90);
    triforce(t,200,3);
  if(t.n[1]!=0){
    t.display();
}
  
}
let p=0;

function mousePressed(){
 q++; 
  print(q);
}

