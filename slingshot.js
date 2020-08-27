class Slingshot{
    constructor(body1,point2){
        var options= {
            bodyA:body1,
            pointB:point2,
            stiffness:0.04,
            length:10
            
        } 
        this.slingshot= Constraint.create(options); 
        this.point2=point2
        World.add(worldp,this.slingshot); 
    }
    display(){
        
        if(this.slingshot.bodyA!=null){
            push()
            strokeWeight(4); 
            stroke("#301608"); 
            var posA= this.slingshot.bodyA.position;
            var posB= this.point2
            line(posA.x,posA.y,posB.x, posB.y);
            pop()
        }
    }
    fly(){
        this.slingshot.bodyA=null;
    }
    attach(body1){
        this.slingshot.bodyA=body1; 
    }
}
