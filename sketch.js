const Engine = Matter.Engine ;
 const World = Matter.World ;
  const Bodies = Matter.Bodies ; 
  var engine , world ;
  var RECTANGLE1,RECTANGLE2;
  
 
   function setup() {
     createCanvas(800,800);

      engine = Engine.create();
      world = engine.world ;
      Ball=new circle(50,370,20)
      sling1=new SlingShot(Ball.body,{x:100,y:400})
RECTANGLE1=Bodies.rectangle(400,700,100,10)
RECTANGLE2=Bodies.rectangle(600,300,100,10)
    } 

      function draw() {
        background("white");
        Engine.update(engine)
        rectMode(CENTER)
      Ball1.display() 
      sling1.display()
      push()
      fill("red")
      rect(RECTANGLE1.position.x,RECTANGLE1.position.y,100,10)
      rect(RECTANGLE2.position.x,RECTANGLE2.position.y,100,10)
     pop ()
}
function mouseDragged(){
  Matter.Body.setPosition(Ball.body,{x:mouseX,y:mouseY})
}

function mouseRealesed(){
  Ball.fly()
}