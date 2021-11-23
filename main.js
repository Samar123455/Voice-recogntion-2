function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifire = ml5.soundClassifier("https://storage.googleapis.com/tm-model/oHD0UxpIe/model.json",modelready());
}

function modelready(){
    console.log("Model Loaded!!");
    classifier.classify(gotResults);
}

function gotResults(error,results){
if(error){
    close.error(error);

}else{
    console.log(results)
    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;

    document.getElementById("result").innerHTML = "-I can hear"+results[0].label;
    document.getElementById("result_accuracy").innerHTML = 'Acurracy - '+ (results[0].confidence*100).toFixed(2) + '%';
    document.getElementById("result").style.color = "rgb("+ random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

  
}
}