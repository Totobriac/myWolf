class  Player {
  constructor(x,y,ctx) {
    this.x = x;
    this.y = y;
	  this.dir = 0;
	  this.rot = 0;
	  this.speed = 0;
	  this.moveSpeed = 0.18;
	  this.rotSpeed = 6 * Math.PI / 180;
    this.ctx = ctx;
    this.miniMapScale = 8;
    this.yOffset = 200;
    this.xOffset = 8;
    this.angle = 0;
  }
  move() {
    var moveStep = this.speed * this.moveSpeed;
    this.rot += this.dir * this.rotSpeed;
    var newX = this.x + Math.cos(this.rot) * moveStep;
    var newY = this.y + Math.sin(this.rot) * moveStep;
    this.x = newX;
    this.y = newY;
  }
  draw() {

    this.move();

    var xLine = this.x + Math.cos(this.rot) * 20;
    var yLine = this.y + Math.sin(this.rot) * 20;


    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 4 + this.xOffset , this.y + 4 + this.yOffset );
    this.ctx.lineTo(xLine + 4 + this.xOffset , yLine + 4 + this.yOffset );
    this.ctx.strokeStyle = "red";
    this.ctx.stroke();


    this.ctx.fillStyle = "black";
    this.ctx.fillRect(
      this.x + this.xOffset ,
      this.y + this.yOffset,
      this.miniMapScale,
      this.miniMapScale);
  }
}

export {Player}
