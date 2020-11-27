canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="mars.jpg";
rover_image="rover.png";
rover_width=100;
rover_height=90;
rover_x=350;
rover_y=250;
function add(){
 background=new Image();
 background.onload=uploadBackground;
 background.src=background_image;

rover=new Image();
 rover.onload=uploadRover;
 rover.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown", my_Keydown);
function my_Keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
        {
            up();
            console.log("up");
        }

        if(keyPressed=='40')
        {
            down();
            console.log("down");
        }

        if(keyPressed=='37')
        {
            left();
            console.log("left");
        }

            if(keyPressed=='39')
        {
            right();
            console.log("right");
        }

}
if(keyPressed=='87'){
    new_image('wall.jpg');
    console.log("w");
}

if(keyPressed=='71'){
new_image('ground.png');
console.log("g");
}

if(keyPressed=='76'){
new_image('light_green.png');
console.log("l");
}

if(keyPressed=='84'){
new_image('trunk.jpg');
console.log("t");
}

if(keyPressed=='82'){
new_image('roof.jpg');
console.log("r");
}

if(keyPressed=='89'){
new_image('yellow_wall.png');
console.log("y");
}

if(keyPressed=='68'){
new_image('dark_green.png');
console.log("d");
}

if(keyPressed=='85'){
new_image('unique.png');
console.log("u");
}

if(keyPressed=='67'){
new_image('cloud.jpg');
console.log("c");
}
