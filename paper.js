class paper{
    constructor(x, y, r) {
        var options = {
             'friction':0.005,
            'density':1
           
        } 
        this.x=x
        this.y=y
        this.r = r;
        this.image =loadImage("Superhero-01.png")

       this.body = Bodies.circle(x,y,r,options)
       World.add(world,this.body)
      }
      display(){
        var paperpos=this.body.position
        push();
        translate(paperpos.x, paperpos.y);
        fill("red")
        imageMode(RADIUS)
        image(this.image,0,0,this.r,this.r)
        pop();
      }
}