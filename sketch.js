var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2;

var track, car1_img, car2_img,bg1;
var count=1;

function preload(){
  track = loadImage("/images/track.jpg");
  car1_img = loadImage("https://github.com/EarthCodez/DisposeMe-/blob/main/images/car1.png?raw=true");
  car2_img = loadImage("https://github.com/EarthCodez/DisposeMe-/blob/main/images/car2.png?raw=true");
  bg1=loadImage("https://github.com/EarthCodez/DisposeMe-/blob/main/images/form_bg.jpg?raw=true")
  ground = loadImage("https://github.com/EarthCodez/DisposeMe-/blob/main/images/ground.png?raw=true");
}

function setup(){
  canvas = createCanvas(windowWidth-17.5, windowHeight-19);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  // background("red")
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
