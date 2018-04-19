// JavaScript source code
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var Ohno = document.createElement("img");
Ohno.src = "Ohno.png";
var Rotation = 0;
var img = document.createElement("img");
img.src = "img.jpg";
var OhnoX = canvas.width / 2;
var OhnoY = canvas.height / 2;
function Update() {
    canvas.width = canvas.width;
    
}
function Boundary()
{
    if (OhnoX < 0) {
        OhnoX = canvas.width;
    }

    else if (OhnoX > canvas.width)
    {
        OhnoX = 0;
    }
    if (OhnoY < 0)
    {
        OhnoY = canvas.height;
    }
    if (OhnoY > canvas.height)
    {
        OhnoY = 0
    }
}
function Input() {
    if (keyboard.isKeyDown(keyboard.KEY_UP)) {
        OhnoY -= 10;
        Rotation += 0.15;
    }
    if (keyboard.isKeyDown(keyboard.KEY_DOWN)) {
        OhnoY += 10;
        Rotation += 0.15;
    }
    if (keyboard.isKeyDown(keyboard.KEY_LEFT)) {
        OhnoX -= 10;
        Rotation += 0.15;
    }
    if (keyboard.isKeyDown(keyboard.KEY_RIGHT)) {
        OhnoX += 10;
        Rotation += 0.15;
    }
    if (keyboard.isKeyDown(keyboard.KEY_SPACE)) {
        Rotation+= 100;
    }
}
function Draw() {
    //clear the screen
    context.drawImage(img, 0, 0, canvas.width, canvas.height)
    context.font = "100px Arial";
    context.fillText("WOW!!!", canvas.width / 2 - 150, canvas.height / 2 - 120);


    context.save();
    context.translate(OhnoX, OhnoY);
    context.rotate(Rotation);
    context.drawImage(Ohno, -Ohno.width / 2, -Ohno.height / 2);
    context.restore();
}

function GameLoop() {
    Update();
    Boundary();
    Draw();
    Input();
    requestAnimationFrame(GameLoop);
}
GameLoop();