var Player
var Player2

var empire1
var empire2


var village

var invisGround
var ground
var sky

var house
var workshop

var database
var playercount
var gamestate = 0;
var display1

function preload() {

}


function setup() {
    createCanvas(windowWidth, windowHeight)
    database = firebase.database();
    //ground = createSprite(windowWidth/2, 800, windowWidth, 40);
    //player = createSprite();
    this.getGamestate()
    console.log("1" + gamestate)
    if (gamestate == 0) {
        form = new Form()
        form.display();
        console.log("a");
    }
    display1 = new Display1()
    house = createSprite(200, 200, 20, 20)
}


function draw() {
    background("black");
    if (playercount == 2) {
        gamestate = 1;
        this.updateGamestate(gamestate)
    }

    if (gamestate == 1) {

        form.hide();
        this.play();
        house.width = 200
        house.y = World.mouseY
    }

    drawSprites()

}

function updateGamestate(gamestate) {
    database.ref('/').update({
        gamestate: gamestate
    })
}

function getGamestate() {
    var gamestateref = database.ref('gamestate')
    gamestateref.on("value", function (data) {
        gamestate = data.val()
    })
}

function play() {
    display1.fixedObjects()
    house.width = 100
    console.log("T")

}


function mousePressed() {
    if (gamestate == 1) {
        console.log("Q")


        console.log("S")
        drawSprites();
    }

}