function checkResult(){

    let subject1 = Number(document.getElementById("subject1").value);
    let subject2 = Number(document.getElementById("subject2").value);
    let subject3 = Number(document.getElementById("subject3").value);
    let subject4 = Number(document.getElementById("subject4").value);
    let subject5 = Number(document.getElementById("subject5").value);
    let subject6 = Number(document.getElementById("subject6").value);
   


    let total = subject1 + subject2 + subject3 + subject4+ subject5+ subject6;
    let average = total / 6;

    // let remarks = "";


    let AllPass = subject1 >= 35 && subject2 >= 35 && subject3 >= 35 && subject4 >= 35 && subject5 >= 35 && subject6 >= 35;

    let Anyone = subject1 > 90 || subject2 > 90 || subject3 > 90 || subject4 > 90 || subject5 > 90 || subject6 > 90;

    let increasedSub1 = subject1;
    increasedSub1++;

    let decreasedSub2 = subject2;
    decreasedSub2--;

    let result =
    AllPass ? "Pass" : "Fail";

    let grade = "";

    if(average >= 90){
        grade = "A Grade";
    }
    else if(average >= 75){
        grade = "B Grade";
    }
    else if(average >= 60){
        grade = "C Grade";
    }
    else if(average >= 35){
        grade = "D Grade";
    }
    else{
        grade = "Fail";
    }

    document.getElementById("output").innerHTML =

    "<h3>Results</h3>" +

    "Telugu Marks : " + subject1 + "<br><br>" +

    "English Marks : " + subject2 + "<br><br>" +

    "Hindi Marks : " + subject3 + "<br><br>" +

    "Maths Marks : " + subject4 + "<br><br>" +

    "Science Marks : " + subject5 + "<br><br>" +

    "Social Marks : " + subject6 + "<br><br>" +

    "Total Marks : " + total + "<br><br>" +

    "Average Marks : " + average.toFixed(2) + "<br><br>" +

    "All Subjects Passed : " + AllPass + "<br><br>" +

    "Any Subject Above 90 : " + Anyone + "<br><br>" +

    "Telugu After ++ : " + increasedSub1 + "<br><br>" +

    "English After -- : " + decreasedSub2 + "<br><br>" +

    "Final Result : " + result + "<br><br>" +

    "Grade : " + grade;
}