class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.5
      }
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      rotate(angle);
      rectMode(CENTER);
      fill("purple")
      rect(0, 0, this.width, this.height);
      pop();
    }
  };

