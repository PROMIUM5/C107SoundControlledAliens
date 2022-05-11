// https://teachablemachine.withgoogle.com/models/Re4Zt4xfW/

function ButtonStart(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassification("https://teachablemachine.withgoogle.com/models/Re4Zt4xfW/model.json".model_ready)
}

function model_ready(){
    classifier.classify(got_result)
}