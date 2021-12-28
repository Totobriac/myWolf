import {
  Map
} from "./map.js";
import {
  Player
} from "./player.js";
import {
  level
} from "./level.js";
import {
  setUpControls
} from "./controls.js";

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
canvas.height = 400;
canvas.width = 1200;

var map = new Map(level, ctx);
var player = new Player(16, 16, ctx);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  map.draw();
  setUpControls(player);
  player.draw();

  requestAnimationFrame(animate)
}

animate();
