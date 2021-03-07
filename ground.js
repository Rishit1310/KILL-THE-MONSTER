class Ground{
    constructor(x,y,w,h){
        var options={
        isStatic:true
    }
    this.bodies=Bodies.rectangle(x,y,w,h,options)
    this.w=w
    this.h=h
    World.add(world,this.bodies)
    }
display(){
var pos=this.bodies.position
rectMode(CENTER)
rect(pos.x,pos.y,this.w,this.h)

}
}