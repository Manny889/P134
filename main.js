img="";
status = "";
object=[];

function preload(){
img = loadImage('baby.jpg');    
}
function modelLoaded() {
console.log("Model Loaded!");
status = true;
objectDetector.detect(video, gotResult);
}
function gotResult() {
if (error) {
console.log(error);    
} 
console.log(results);
object = results;   
}
function setup(){
canvas = createCanvas(380, 380);
canvas.center();
video = createCapture(VIDEO);
video.size(380, 380);
video.hide(); 
objectDetector = ml5.objectDectector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";   
}
function draw(){
image(video, 0, 0, 380, 380);

if(status != ""){
r = random(255);  
g = random(255);
b = random(255);      
objectDetector.detect(video, gotResult);    
for(i = 0; i < objects.length; i++ ){
document.getElementById("status").innerHTML="Status: Object Dectected";
document.getElementById("number_of_objects").innerHTML= "Number of objects detected are : "+objects.length;

fill(r,g,b);
fill("#90ee90");
percent = floor(objects[i].confidence * 100);
text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
noFill();
stroke(r,g,b);
stoke("#90ee90");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}    
}
fill("#FF0000");
text("Baby", 45, 75);
noFill();
stroke("#FF0000");
rect(30, 60, 450, 350);
}