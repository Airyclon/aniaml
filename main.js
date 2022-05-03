function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qWYRin29w/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) +1;
        random_number_g = Math.floor(Math.random() * 255) +1;
        random_number_b = Math.floor(Math.random() * 255) +1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("results_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        if (results[0].label == "Cat"){
            img1.src = 'cat.webp';
        }
        else if (results[0].label == "Panda"){
            img1.src = 'panda.webp';
        }
        else{
            img1.src = 'bgsound.jpeg';
        }
    }
}
