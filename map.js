class Map {
  constructor(level, ctx) {
    this.bluePrint = level;
    this.mapWidth = this.bluePrint[0].length;
    this.mapHeight = this.bluePrint.length;
    this.miniMapScale = 8;
    this.ctx = ctx;
    this.yOffset = 200;
    this.xOffset = 8;
  }
  draw() {
    for (var y = 0; y < this.mapHeight; y++) {
      for (var x = 0; x < this.mapWidth; x++) {
        var wall = this.bluePrint[y][x];
        if (wall > 0) {
          this.ctx.fillStyle = 'rgb(200,200,200)';
          this.ctx.fillRect(
            x * this.miniMapScale + this.xOffset,
            y * this.miniMapScale + this.yOffset,
            this.miniMapScale, this.miniMapScale
          );
        }
      }
    }
  }
}

export {
  Map
}
