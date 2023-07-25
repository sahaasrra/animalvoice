function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio:true });
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nhrLMWnz7/model.json',modelReady);
}
function modelReady()
{
  Classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;
function gotResults(error,results)
{
    if (error) {
      console.error(error);
    }
    else{
      console.log(results)
    }
}