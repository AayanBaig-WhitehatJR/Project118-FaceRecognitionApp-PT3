function preload(){

}
function setup(){
    canvas = createCanvas(300,300)
    canvas.center() 
    video = createCapture(VIDEO)
    video.hide()
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5AM54HpIs/model.json', modelLoaded)
    }
    function draw(){
    image(video, 0, 0, 300, 300)
    classifier.classify(video, gotResult)
    }
    function modelLoaded(){
        console.log("Models have been loaded!")
    }
    function gotResult(error, results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("familyMemberName").innerHTML = results[0].label;
        document.getElementById("accuracyValue").innerHTML = results[0].confidence.toFixed(3);
    }
    }