function bmiCalculator (weight, height) {
    var bmi = Math.round(weight/((height)*height));
    var interpretation="";
    switch(true){
        case (bmi<18.5):
            interpretation = "Your BMI is " + bmi + ", so you are underweight";
            break;
        case (24.9>bmi>18.5):
            interpretation = "Your BMI is " + bmi + ", so you are normal weight";
            break;
        case (bmi>24.9):
            interpretation = "Your BMI is " + bmi + ", so you are overweight";
            break;
        default:
            interpretation = "xvzc";
    }
    return interpretation;
}

console.log(bmiCalculator(60,2));
