class Form {
    constructor() {

        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.getPlayerCount();


    }
    getPlayerCount() {
        var playercountref = database.ref('playercount')
        playercountref.on("value", function (data) {
            playercount = data.val()
        })
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();

    }
    display() {

        this.input.position(windowWidth / 2, 400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'forestgreen');
        this.button.position(windowWidth / 2, 450);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'cyan');


        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            var message = `Hello ${this.input.value()} Waiting for other players to join.`
            this.greeting.html(message)
            this.greeting.position(400, 250);
            this.greeting.style('color', 'black');
            this.greeting.style('font-size', '100px');
            playercount = playercount + 1;
            database.ref('/').update({ playercount: playercount })
        });











    }
}