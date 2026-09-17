function adding(){
    let age=Number(document.getElementById("age").value)
    let height=Number(document.getElementById("height").value)
    let weight=Number(document.getElementById("weight").value)
     let bmiResult = document.getElementById("bmiResult");
    let category = document.getElementById("category");
    let message = document.getElementById("message");
if(age<2||height<=0||weight<=0){
    bmiResult.textContent="Please Enter a Valid Details"
    category.textContent=""
    message.textContent=""
    return
}
   // Height cm → metre
    let heightInMetres = height / 100;

    // BMI calculation
    let bmi = weight / (heightInMetres * heightInMetres);

    bmiResult.textContent = bmi.toFixed(1) + " kg/m²";

    if(bmi<18.5){
        category.textContent="underweight"
        message.textContent="Consider maintaining a balanced diet."
    }
    else if(bmi<25){
         category.textContent="Normal"
        message.textContent="Keep maintaining your healthy habits."
    }
    else if(bmi<30){
         category.textContent="Overweight"
        message.textContent="Adopt healthy eating habits and increase physical activity."
    }
    else if(bmi<35){
         category.textContent="Obese"
        message.textContent="Consider consulting a healthcare professional for guidance."
    }
    else {
         category.textContent="Extremely Obese"
        message.textContent="Consider consulting a healthcare professional for guidance and maintain a strict diet."
    }
    moveneedle(bmi)
}
function moveneedle(bmi) {

    let needle = document.getElementById("needle");

    if (bmi < 18.5) {

        needle.style.transform = "rotate(-160deg)";

    }
    else if (bmi < 25) {

        needle.style.transform = "rotate(-120deg)";

    }
    else if (bmi < 30) {

        needle.style.transform = "rotate(-80deg)";

    }
    else if (bmi < 35) {

        needle.style.transform = "rotate(-45deg)";

    }
    else {

        needle.style.transform = "rotate(0deg)";

    }
}
function reset() {
    document.getElementById("age").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";

    document.getElementById("bmiResult").textContent = "";
    document.getElementById("category").textContent = "";
    document.getElementById("message").textContent = "";

    document.getElementById("needle").style.transform = "rotate(-90deg)";
}