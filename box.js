class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.visibility=255;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height; 
    World.add(worldp, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    var boxSpeed= this.body.speed; 
    if(boxSpeed <3){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke(0);
      fill("blue");
      rect(0, 0, this.width, this.height)
      pop();
    }
    else{
      World.remove(worldp,this.body);
      push();
      this.visibility=this.visibility-5;
      pop();
    }
    }
    score(){
      if(this.visibility<0 && this.visibility>-501){
        score=score+1;
      }
  }
};