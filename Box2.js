class Box2 {
    constructor(x, y, width, height){ 
        var options = {
            'restitution':0.1,
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
      }
    };