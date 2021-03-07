const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint
var bg,monster


function preload(){
bg=loadImage("bg.png")
monster=loadImage("Monster-01.png")
}

function setup(){
   createCanvas(1224,1000)
   engine=Engine.create()
    world=engine.world


     ground=new Ground(500,900,3000,20)
     box1 = new box(1000,800,75,75)
     box2 = new box(1000,800,75,75)
     box3 = new box(1000,800,75,75)
     box4= new box(1000,800,75,75)
     box5 = new box(1000,800,75,75)
     box6 = new box(1000,800,75,75)
     box7 = new box(1000,800,75,75)
     box8 = new box(1000,800,75,75)
     superman=new paper(500,200,300)
     rope1=new Rope(superman.body,{x:500,y:100})
}

function draw(){
 background(bg) 
 Engine.update(engine)
 text(mouseX+","+mouseY,mouseX,mouseY)

 ground.display()
 rope1.display()
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
 superman.display()



 }
 function mouseDragged(){
    Matter.Body.setPosition(superman.body,{x:mouseX,y:mouseY})
}

