class box{
    constructor(x,y,w,h){
        var options={
        restitution:0.5,
        density:1,
        friction:0.5
    }
    this.bodies=Bodies.rectangle(x,y,w,h,options)
    this.w=w
    this.h=h
    World.add(world,this.bodies)
    }
display(){
var pos=this.bodies.position
var angle=this.bodies.angle
push()
translate(pos.x,pos.y)
rotate(angle)
rectMode(CENTER)
fill("red")
rect(0,0,this.w,this.h)
pop()
}
}