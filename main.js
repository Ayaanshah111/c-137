video="";
status="";
object=[];
function preload(){
video=createVideo('video.mp4');

}
function setup(){
canvas=createCanvas(480,380);
canvas.center();
video.hide();
}
function draw(){
image(video,0,0,480,380);
if(status!=""){
object_detector.detect(video,gotresult);
for(i=0;i<object.length;i++){
    document.getElementById("status").innerHTML="status:object detected";
    document.getElementById("no").innerHTML="no of object detected:"+object.length;
    fill("orange");
    noFill();
    percent=floor(object[i].confidence*100);
    text(object[i].label+"  "+percent+"%",object[i].x+15,object[i].y+15);
    stroke("white");
    rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}
}
function start(){
    object_detector=ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML="status:detecting-objects";
}
function modelloaded(){
    console.log("modelloaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotresult(error,results){
if(error){
console.log(error);
}
console.log(results);
object=results;
}
