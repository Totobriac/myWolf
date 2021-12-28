function setUpControls(player) {
  document.addEventListener('keydown', function (event) {
    switch (event.key) {
      case "ArrowUp":
        player.speed = 1;
        break;
      case "ArrowDown":
        player.speed = -1;
        break;
      case "ArrowRight":
        player.dir = 1;
        break;
      case "ArrowLeft":
        player.dir = -1;
        break;
    }
  });
  document.addEventListener('keyup', function (event) {
    switch (event.key) {
      case "ArrowUp":
      case "ArrowDown":
        player.speed = 0;
        break;
      case "ArrowRight":
      case "ArrowLeft":
        player.dir = 0;
        break;
    }
  });
}

export { setUpControls }
