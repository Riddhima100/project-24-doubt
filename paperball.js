class Paperball {
    constructor(x,y){

    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2,

    }
    
    this.body=Bodies.circle(x,y,10,options);
    this.width=10

  World.add(world,this.body);
};
    display() {
        
    
    ellipseMode(CENTER)
    ellipse(x,y,10);
    
};
};