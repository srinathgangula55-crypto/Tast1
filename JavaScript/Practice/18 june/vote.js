function checkVote(){

    let age =
    Number(
        document.getElementById("age").value
    );

    if(age >= 18){

        document.getElementById("result")
        .innerText =
        "Eligible for Vote";

    }
    else{

        document.getElementById("result")
        .innerText =
        "Not Eligible for Vote";

    }

}