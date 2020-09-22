class Hexagon {
  constructor(x,y){
    this.body = Bodies.rectangle(x,y,15,15);
      this.width = 15;
      this.height = 15;
      this.image = loadImage("hexagon.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER)
      image(this.image,0,0,this.width,this.heigth)
    }
  }
 
