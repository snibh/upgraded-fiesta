function preload() {



}

function setup() {

Canvas = createCanvas(300,300)
Canvas.center();
video = createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/F-PJbqnsN/model.json',modelLoaded);

}

function draw() {

image(video,0,0,300,300)
classifier.classify(video, gotResult);

}
function modelLoaded() {

console.log("model");

}


function gotResult(error, results) {

if(error)
{
    console.error(error);
}
else
{
    console.log(results);
    document.getElementById("object").innerHTML = results[0].label;
    document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3);

}
}