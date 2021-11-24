status = "";
object = "";

function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(470, 560);
}

function preload(){
    video = createVideo("");
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 500);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Onjects";
    object = document.getElementById("input").value;
    console.log(object);
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}