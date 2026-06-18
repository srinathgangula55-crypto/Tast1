function calculateTicket(){

    let age =
    Number(
        document.getElementById("age").value
    );

    let showtime =
    document.getElementById("showtime").value;

    let result =
    document.getElementById("result");

    // Guard Condition

    if(isNaN(age) || age < 0){

        result.innerText =
        "Please Enter Valid Age";
    }

    // Rule 1

    else if(age < 12){

        result.innerText =
        "Child Ticket Price = $5";
    }

    // Rule 2

    else if(age >= 65){

        result.innerText =
        "Senior Ticket Price = $7";
    }

    // Rule 3a

    else if(showtime === "matinee"){

        result.innerText =
        "Adult Ticket Price = $10";
    }

    // Rule 3b

    else{

        result.innerText =
        "Adult Evening Ticket Price = $15";
    }
}