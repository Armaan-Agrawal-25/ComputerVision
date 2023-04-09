//Define variables
//Video variable
let video;
//Label that changes based on classification
let label = "Waiting For Computer Part";
//Image classification ML model URL
let modelURL = "https://teachablemachine.withgoogle.com/models/W_Q-5jVLa/"
//Classifier that imports the image classification model using ml5
let classifier;
//Width, height, and size variable used to create canvas
let w;
let h;
let size = 20;

//Importing ML model
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}

//Setup function
function setup (){
  //Creates video canvas and adjusts its position
  var cnv = createCanvas(600, 500);
  cnv.position(-25, 200);
  //Create video
  video = createCapture(VIDEO);
  video.hide();
  //Calls the classify video function
  classifyVideo();
  //Calls the change image function
  changeImage();
  //Adjusts witdh and height
  w = floor(width / size);
  h = floor(height / size);
  frameRate(5);

}

//Gets image classification from video
function classifyVideo(){
  //Calls the got results function
  classifier.classify(video, gotResults);
}

//Gets classification based on the video it sees
//If it is unable to classify something, it will return an error
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return
  }
  //If it able to classify something, change the label to the name of the object it classifies
  label = results[0].label;
  //Repeatedly classifies video and changes image 
  classifyVideo();
  changeImage();
}

//Draw background, video, etc.
function draw () {
  //Background color
  background(0);
  //Draws video
  push();
  translate(width,0);
  scale(-1, 1);
  image(video,0,0);
  pop();
  //Calls change image function
  changeImage();
  //Draws label
  textSize(32);
  fill(255);
  text(label, 10, 50);
  scale(size);
}

//Changes image based on the text inside the label
function changeImage(){
//Background/no part shown
  if (label === 'No Part Being Shown') {
    document.getElementById("img_main").src = "images/background.jpg";
  }
  //GPU
  if(label === 'Graphics Processing Unit (GPU)') {
     document.getElementById("img_main").src = "images/gpu_img.jpg";
  }
  //CPU
  if(label === 'Computer Processing Unit (CPU)') {
    document.getElementById("img_main").src = "images/cpu_img.jpg";
  }
  //PSU
  if(label === 'Power Supply Unit (PSU)') {
    document.getElementById("img_main").src = "images/psu_img.jpg";
  }
  //Motherboard
  if(label === 'Motherboard') {
    document.getElementById("img_main").src = "images/motherboard_img.jpg";
  }
  //CPU Cooler
  if(label === 'CPU Cooler') {
    document.getElementById("img_main").src = "images/cpu_cooler_img.jpg";
  }
  //Cooling Fans
  if(label === 'Cooling Fans') {
    document.getElementById("img_main").src = "images/cooling_fan_img.jpg";
  }
  //RAM
  if(label === 'Random Access Memory (RAM) Stick') {
    document.getElementById("img_main").src = "images/ram_img.jpg";
  }
  //SSD/HDD
  if(label === 'Solid State Drive (SSD) / Hard Disk Drive (HDD)') {
    document.getElementById("img_main").src = "images/ssd_hdd_img.jpg";
  }
  //Case
  if(label === 'Case') {
    document.getElementById("img_main").src = "images/case_img.jpg";
  }
  //Input Device
  if(label === 'Input Device') {
    document.getElementById("img_main").src = "images/input_device_img.jpg";
  }
  //Monitor
  if(label === 'Monitor') {
    document.getElementById("img_main").src = "images/case_img.jpg";
  }
}
