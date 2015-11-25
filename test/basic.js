var a14sa = "\
\nvar rectangle = liquidis.createShape('Rectangle', {\
\n  width: 50,\
\n  height: 50,\
\n  x: 40,\
\n  y: 55\
\n});\
\n\
\nvar circle = liquidis.createShape('Circle', {\
\n  x: 140,\
\n  y: 80,\
\n  radius: 30,\
\n  fillStyle: '#fff'\
\n});\
\n\
\nvar triangle = liquidis.createShape('Triangle', {\
\n  width: 55,\
\n  height: 55,\
\n  x: 180,\
\n  y: 55,\
\n  fillStyle: '#fff',\
\n});\
\n\
\nvar hexagon = liquidis.createShape('Hexagon', {\
\n  width: 55,\
\n  height: 55,\
\n  x: 250,\
\n  y: 55,\
\n  fillStyle: '#fff',\
\n});\
\n\
\nvar rectangle2 = liquidis.createShape('Rectangle', {\
\n  width: 50,\
\n  height: 50,\
\n  x: 330,\
\n  y: 55,\
\n  fillStyle: '#000'\
\n});\
\n\
\nvar circle2 = liquidis.createShape('Circle', {\
\n  x: 430,\
\n  y: 80,\
\n  fillStyle: '#000',\
\n  radius: 30,\
\n});\
\n\
\nvar triangle2 = liquidis.createShape('Triangle', {\
\n  width: 55,\
\n  height: 55,\
\n  x: 470,\
\n  y: 55,\
\n  fillStyle: '#000',\
\n});\
\n\
\nvar hexagon2 = liquidis.createShape('Hexagon', {\
\n  width: 55,\
\n  height: 55,\
\n  x: 540,\
\n  y: 55,\
\n  fillStyle: '#000',\
\n});"

var a14sb = "\
\nvar draggable = liquidis.createGroup('Node', {\
\n  width: 100,\
\n  height: 50,\
\n  x: 90,\
\n  y: 145,\
\n  fillStyle: '#0EA8FF',\
\n  text: 'draggable',\
\n  draggable: true\
\n});\
\n\
\nvar magnet = liquidis.createShape('Circle', {\
\n  x: 270,\
\n  y: 155,\
\n  radius: 25,\
\n  fillStyle: '#0EA8FF',\
\n  draggable: true,\
\n  attract: true\
\n});\
\n\
\nvar magnetText = liquidis.createShape('Text', {\
\n  x: 247,\
\n  y: 200,\
\n  text: 'Magnet'\
\n});"

var a24sa = "\
\nvar soccerBall = liquidis.createShape('Sprite', {\
\n  path: 'img/soccer_ball.png',\
\n  x: 470,\
\n  y: 155,\
\n  ax: 0.5,\
\n  ay: 0.5,\
\n  vx: 0,\
\n  vy: 0.5,\
\n  speed: 0.1,\
\n  force: 10,\
\n  friction: 0.7,\
\n  width: 50,\
\n  height: 50,\
\n  radius: 25,\
\n  registrationPoint: 'center',\
\n  bounce: true,\
\n  onDrag: function() {\
\n    soccerBall.carry();\
\n  },\
\n  onDown: function() {\
\n    soccerBall.bouncing = false;\
\n  },\
\n  onUp: function(evt, x, y) {\
\n    soccerBall.bouncing = true;\
\n  }\
\n});"

var a24sb = "\
\nvar spring = liquidis.createShape('Circle', {\
\n  x: 367,\
\n  y: 155,\
\n  radius: 25,\
\n  fillStyle: '#f39c12',\
\n  draggable: true,\
\n  spring: {\
\n    drawCord: true,\
\n  }\
\n});\
\n\
\nvar springText = liquidis.createShape('Text', {\
\n  x: 347,\
\n  y: 200,\
\n  text: 'Spring'\
\n});\
\n\
\nvar springA = liquidis.createShape('Circle', {\
\n  x: 577,\
\n  y: 130,\
\n  radius: 25,\
\n  fillStyle: '#f39c12',\
\n  draggable: true,\
\n  spring: {\
\n    drawCord: true,\
\n  },\
\n  gravity: true\
\n});\
\n\
\nvar springB = liquidis.createShape('Circle', {\
\n  x: 550,\
\n  y: 175,\
\n  radius: 25,\
\n  fillStyle: '#f39c12',\
\n  draggable: true,\
\n  spring: {\
\n    drawCord: true,\
\n  },\
\n  gravity: true,\
\n  chainTo: springA\
\n});\
\n\
\nvar springC = liquidis.createShape('Circle', {\
\n  x: 550,\
\n  y: 175,\
\n  radius: 25,\
\n  fillStyle: '#f39c12',\
\n  draggable: true,\
\n  spring: {\
\n    drawCord: true,\
\n  },\
\n  gravity: true,\
\n  chainTo: springB\
\n});"

module.exports = {
  "a14sa": a14sa,
  "a14sb": a14sb,
  "a24sa": a24sa,
  "a24sb": a24sb
};
