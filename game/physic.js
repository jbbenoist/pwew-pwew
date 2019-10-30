function update()
{
    var delta = clock.getDelta(); // seconds.
    var moveDistance = 50 * delta; // 200 pixels per second
    var rotateAngle = Math.PI / 2 * delta * 2;   // pi/2 radians (90 degrees) per second

    if (keyboard.pressed("left"))
        player1.turnLeft(rotateAngle);
    if (keyboard.pressed("right"))
        player1.turnRight(rotateAngle);
    if (keyboard.pressed("up"))
        player1.accelerate(moveDistance);
    if (keyboard.pressed("down"))
        player1.decelerate(moveDistance);

    player1.move();
    for (var j = 0; j < ennemies.length; j++)
    {
      var i = Math.floor(Math.random() * 1000);
      if (i % 4 == 0)
      {
        ennemies[j].turnLeft(rotateAngle);
      }
      else if (i % 3 == 0)
      {
        ennemies[j].turnRight(rotateAngle);
      }
      else if (i % 2 == 0)
      {
        ennemies[j].accelerate(moveDistance);
      }
      else
      {
        ennemies[j].decelerate(moveDistance);
      }
      ennemies[j].move();
    }
    controls.update();
}
