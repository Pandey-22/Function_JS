function body(weight,height){
    let h=height/100;
    let bmi=weight/h**2;
    if (bmi<=30){
        return "Obese";
    }
    else if (bmi<=18.5){
        return "Underweight";
    }
    else if (bmi<=25.0){
        return "Normal";
    }
    else if (bmi>30.0){
        return "Overweight";
    }
}
const prompt=require('prompt-sync')();
let W=parseInt(prompt("please enter your weight:-"));
let H=parseInt(prompt("please enter your heigth:-"));
console.log(body(W,H));
