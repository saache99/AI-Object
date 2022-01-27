let objectname = "";
var video="";
let statusMe = "";
let objects = [];
function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
    video = createCapture();
    video.hide();
    objectDector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById('status').innerHTML="Object Detector is now live";
}

function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }
  
  
  function draw() {
    image(video, 0, 0, 480, 380);
    objectDetector.detect(video, gotResult);
        if(statusMe != "")
        {
          for (i = 0; i < objects.length; i++) {
            if(objects[i].label == objectname )
            {
                document.getElementById("status").innerHTML = "Status : Objects Detected";
                document.getElementById("me").innerHTML = "Object :" + " " + objectname;
                fill("#FF0000");
                percent = floor(objects[i].confidence * 100);
                text(objectname + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke("#FF0000");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
            
            else{
                document.getElementById("status").innerHTML = "Status : Objects Detected";
                document.getElementById("me").innerHTML = "Object :" + " " + objectname;
                fill("#FF0000");
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke("#FF0000");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
          }
        }
  }
  

function modelLoaded()
{
    console.log("Model Loaded");
    statusMe = true;
}

function savedata(){
    objectname = document.getElementById('object_name').value;
    console.log(objectname);
}