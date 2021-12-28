class Player {
  constructor(x, y, ctx,map) {
    this.x = x;
    this.y = y;
    this.map = map;
    this.dir = 0;
    this.rot = 0;
    this.speed = 0;
    this.moveSpeed = 0.9;
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

    var canMove = this.collisonChecker(newX, newY);

    if (canMove === true) {
      this.x = newX;
      this.y = newY;
    } else return


  }
  draw() {
    this.move();
    var xLine = this.x + Math.cos(this.rot) * 20;
    var yLine = this.y + Math.sin(this.rot) * 20;

    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 4 + this.xOffset, this.y + 4 + this.yOffset);
    this.ctx.lineTo(xLine + 4 + this.xOffset, yLine + 4 + this.yOffset);
    this.ctx.strokeStyle = "red";
    this.ctx.stroke();

    this.ctx.fillStyle = "black";
    this.ctx.fillRect(
      this.x + this.xOffset,
      this.y + this.yOffset,
      this.miniMapScale,
      this.miniMapScale);
  }
  collisonChecker(x, y) {
    var angle = normalizeAngle(this.rot);

    var direction;
    var nextTile;

    angle >= 0 && angle < Math.PI ? direction = "down" : direction = "up";

    direction === "up" ? nextTile = this.map.bluePrint[Math.floor(y/8)][Math.floor(x/8)] : nextTile = this.map.bluePrint[Math.ceil(y/8)][Math.ceil(x/8)];;

    var canGo;
    nextTile != 0 ? canGo = false : canGo = true;
    return canGo
  }
}

function normalizeAngle(angle) {
  angle = angle % (2 * Math.PI);
  if (angle < 0) {
    angle = (2 * Math.PI) + angle;
  }
  return angle;
}

export {
  Player
}
