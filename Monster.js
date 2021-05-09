class Monster {
  constructor(x,y,r)
	{
		var options = { 
      density: 5, 
      frictionAir: 0
    };
		this.x=x;
		this.y=y;
		this.r=r;
		var monster_choose=Math.round(random(1,3))
		switch(monster_choose){
			case 1:this.image=loadImage("monster1.png");
			break;
			case 2:this.image=loadImage("monster.png");
			break;
			case 3:this.image=loadImage("monster2.png");
			break;
			default:break;
		}
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var santaPos=this.body.position;		
			push()
			translate(santaPos.x, santaPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}
}
