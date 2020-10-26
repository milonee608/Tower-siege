class Plinko{
    constructor(x,y){
        //this.radius=radius;
        this.body= Bodies.circle(x,y,10);
      
        }
       display(){
           ellipseMode(RADIUS);
           ellipse(this.body.position.x,this.position.y,10,10);
       } 
}